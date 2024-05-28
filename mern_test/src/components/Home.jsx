import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import axios from "axios";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [totalpages, setTotalPages] = useState(1);

  const fetchData = async () => {
    const formData = {
      page,
      search
    }
    try {
      const response = await axios.post(
        `http://localhost:8080/api/products/get_products`, formData
      );
      const data = await response.data.products;
      const totalpageCounts = await response.data.totalPages
      setProducts(data);
      setTotalPages(parseInt(totalpageCounts))
    } catch (error) {
      console.log(error);

    }
  };

  useEffect(() => {
    fetchData();
  }, [page, search]);

  return (
    <>
      <div className="container max-w-7xl mx-auto my-4">
        <div className="flex justify-between items-center">
          <h1 className="text-red-500 font-edu_tas font-bold text-3xl">
            SHOPIFY
          </h1>
          <input
            className="px-4 py-1 rounded outline-none border border-gray-300"
            type="text"
            placeholder="Search..."
            onChange={(e) => {
              setSearch(e.target.value)
              setPage(parseInt(1))
            }}
          />
        </div>

        <div className="flex flex-wrap justify-center items-center gap-4 mt-10">
          {products.length > 0 &&
            products.map((product, index) => (
              <ProductCard key={index} product={product} />
            ))}
        </div>
      </div>

      {/* pagination */}
      <div className="flex justify-center items-center">
        <Stack spacing={2}>
          <Pagination page={page} count={totalpages} color="primary" onChange={(e, value) => {
            if(value !== null){
              setPage(value)
            }
          }}/>
        </Stack>
      </div>
    </>
  );
};

export default Home;
