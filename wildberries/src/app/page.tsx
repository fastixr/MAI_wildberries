"use client"

import { useState, useEffect } from "react";
import Container from "../components/Container";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ProductList from "../components/Main"; // Импортируем компонент с товарами
import './globals.css';


const products = [
  { id: 1, name: "Товар 1", description: "Описание 1", price: "100 ₽", oldPrice: "1000 ₽", author: "Продавец"},
  { id: 2, name: "Товар 2", description: "Описание 2", price: "200 ₽", oldPrice: "1000 ₽", author: "Продавец"},
  { id: 3, name: "Товар 3", description: "Описание 3", price: "300 ₽", oldPrice: "1000 ₽", author: "Продавец"},
  { id: 4, name: "Товар 4", description: "Описание 4", price: "400 ₽", oldPrice: "1000 ₽", author: "Продавец"},
  { id: 5, name: "Товар 5", description: "Описание 5", price: "500 ₽", oldPrice: "1000 ₽", author: "Продавец"},
  { id: 6, name: "Товар 6", description: "Описание 6", price: "600 ₽", oldPrice: "1000 ₽", author: "Продавец"},
  { id: 7, name: "Товар 7", description: "Описание 7", price: "700 ₽", oldPrice: "1000 ₽", author: "Продавец"},
  { id: 8, name: "Товар 8", description: "Описание 8", price: "800 ₽", oldPrice: "1000 ₽", author: "Продавец"},
];

export default function Home() {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    setProductList(products);
  }, []);

  return (
    <div className="flex flex-col mih-h-screen">
      <Header />
      <Container>
        <main className="flex-grow">
          <ProductList products={productList} />
        </main>
      </Container>
      <Footer />
    </div>
  );
}
