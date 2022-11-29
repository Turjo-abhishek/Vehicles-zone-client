import { useQuery } from "@tanstack/react-query";
import React from "react";
import Advertised from "../Advertised/Advertised";
import Awards from "../Awards/Awards";
import Banner from "../Banner/Banner";
import Brands from "../Brands/Brands";
import Categories from "../Categories/Categories";

const Home = () => {
  const { data: advertises = []} = useQuery({
    queryKey: ["advertises"],
    queryFn: async () => {
      try {
        const res = await fetch("http://localhost:5000/advertises");
        const data = res.json();
        return data;
      } catch (error) {}
    },
  });

  return (
    <div>
      <Banner></Banner>
      <Categories></Categories>
      <Awards></Awards>
      <Brands></Brands>
      {
        advertises?.length ? <Advertised></Advertised> : ""
      }
    </div>
  );
};

export default Home;
