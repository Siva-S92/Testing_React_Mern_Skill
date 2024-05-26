import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import axios from "axios";

const Home = () => {
  const [products, setProducts] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `https://dummyjson.com/products?limit=500`
      );
      const data = await response.data.products;
      console.log(data);
      setProducts(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div className="container max-w-7xl mx-auto my-4">
        <h1 className="text-red-500 font-bold text-3xl text-center">
          PAGINATION
        </h1>

        <div className="flex flex-wrap justify-center items-center gap-4 mt-10">
          {products.length > 0 &&
            products.map((product, index) => (
              <ProductCard key={index} product={product} />
            ))}
        </div>
      </div>
    </>
  );
};

export default Home;
