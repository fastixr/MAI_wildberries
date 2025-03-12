import React from "react";
import Container from "../components/Container";

interface ProductListProps {
    products: Product[];
}

interface Product {
    id: number;
    name: string;
    description: string;
    price: string;
    oldPrice: string;
    image: string;
    author: string;
}

const ProductList: React.FC<ProductListProps> = ({ products }) => {
    return (
        <Container>
            <div className="ml-10 mr-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2">
                {products.map((product) => (
                    <div
                        key={product.id}
                        className="p-4 rounded-lg hover:shadow-lg transition-all"
                    >
                        <img
                            src="/pictures/product.svg"
                            alt={product.name}
                            className="w-full object-contain rounded-md mb-4"
                        />
                        <div className="flex items-center">
                            <p className="text-xl font-semibold text-red-500 truncate">{product.price}</p>
                            <p className="ml-2 text-sm text-gray-500 line-through truncate">{product.oldPrice}</p>
                        </div>
                        <p className="text-sm text-red-500 mb-1 truncate">с WB Кошельком</p>
                        <div className="flex items-center mb-2">
                            <p className="text-sm text-black truncate">{product.author}</p>
                            <p className="text-sm text-gray-500 ml-1 truncate">/ {product.description}</p>
                        </div>
                        <button className="p-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors">
                            Добавить в корзину
                        </button>
                    </div>
                ))}
            </div>
        </Container>
    );
};

export default ProductList;
