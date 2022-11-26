import { useQuery } from "@tanstack/react-query";
import React from "react";
import CategoryCard from "./CategoryCard";

const Categories = () => {

    const {data : categories = []} = useQuery({
        queryKey: ['categories'],
        queryFn: async() => {
          const res = await fetch(`categories.json`);
          const data = await res.json();
          return data;
        }
    
      })

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
            categories.map(category => <CategoryCard key={category._id} category={category}></CategoryCard>)
        }
      </div>
    </div>
  );
};

export default Categories;
