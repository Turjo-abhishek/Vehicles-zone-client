import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import CategoryCard from "./CategoryCard";
import axios from 'axios';

const Categories = () => {
  const [categories, setCategories] = useState([]); 

    // const {data : categories = []} = useQuery({
    //     queryKey: ['categories'],
    //     queryFn: async() => {
    //       const res = await fetch("http://localhost:5000/categories");
    //       const data = await res.json();
    //       return data;
    //     }
    
    //   })

      useEffect(() => {
        axios.get("http://localhost:5000/categories")
        .then(data => setCategories(data?.data))
      } ,[])

  return (
    <div>
      <div>
        <h2 className="text-2xl text-center font-semibold text-orange-500 mb-3">
          Categories
        </h2>
        <h2 className="text-4xl text-center font-bold">
          Find cars in terms of brands
        </h2>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mt-10">
        {
            categories?.map(category => <CategoryCard key={category?._id} category={category}></CategoryCard>)
        }
      </div>
    </div>
  );
};

export default Categories;
