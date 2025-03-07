import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import "../app/globals.css";
import { Plus } from "lucide-react";
import { motion } from "framer-motion";

export default function AdminProductsPage() {
  const [showAddForm, setShowAddForm] = useState(false);
  const [showProducts, setShowProducts] = useState(false);
  const [searchId, setSearchId] = useState("");

  const products = [
    { id: 1, name: "Товар 1", description: "Описание 1", price: "100 ₽" },
    { id: 2, name: "Товар 2", description: "Описание 2", price: "200 ₽" },
    { id: 3, name: "Товар 3", description: "Описание 3", price: "300 ₽" },
  ];

  const filteredProducts = searchId
    ? products.filter((product) => product.id.toString() === searchId)
    : products;

  return (
    <div className="p-6">
      <div className="flex justify-center">
        <h1 className="text-5xl font-extrabold">Админ-панель</h1>
      </div>
      <div className="flex items-center mb-4">
        <h1 className="text-2xl font-bold">Добавление товара</h1>
        <Button
          className="bg-white hover:text-[#5D1286] hover:bg-white text-black ml-10"
          onClick={() => setShowAddForm(!showAddForm)}
        >
          <Plus className="w-6 h-6" />
        </Button>
      </div>
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: showAddForm ? 1 : 0, height: showAddForm ? "auto" : 0 }}
        className="overflow-hidden"
      >
        <form className="mb-6 space-y-4 p-1">
          <Input placeholder="Название" required />
          <Input type="number" placeholder="Стоимость" required />
          <Input placeholder="Описание" required />
          <Input type="file" required />
          <Button
            type="submit"
            className="bg-[#A232E8] hover:bg-[#5D1286] text-white"
          >
            Добавить товар
          </Button>
        </form>
      </motion.div>

      <div className="flex items-center mb-4">
        <h2 className="text-2xl font-bold">Список товаров на платформе</h2>
        <Button
          className="bg-white hover:text-[#5D1286] hover:bg-white text-black ml-10"
          onClick={() => setShowProducts(!showProducts)}
        >
          <Plus className="w-6 h-6" />
        </Button>
      </div>
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: showProducts ? 1 : 0, height: showProducts ? "auto" : 0 }}
        className="overflow-hidden p-1"
      >
        <Input
          className="mb-4"
          placeholder="Поиск товара по ID"
          value={searchId}
          onChange={(e) => setSearchId(e.target.value)}
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {filteredProducts.map((product) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
            >
              <Card>
                <CardContent>
                  <div className="w-full h-40 bg-gray-200 mb-2"></div>
                  <h2 className="text-lg font-semibold">{product.name}</h2>
                  <p>{product.description}</p>
                  <p className="font-bold">{product.price}</p>
                  <div className="mt-2 flex space-x-2">
                    <Button className="bg-[#A232E8] hover:bg-[#5D1286] text-white">
                      Редактировать
                    </Button>
                    <Button
                      className="bg-black hover:bg-red-600 text-white"
                    >
                      Удалить
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}