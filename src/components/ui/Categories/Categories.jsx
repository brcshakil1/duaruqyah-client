"use client";

import Search from "@/components/shared/Search/Search";
import { getAllCategories } from "@/utils/getAllCategories";
import Category from "./Category/Category";
import { IoMenuSharp } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import { useEffect, useState } from "react";
import axios from "axios";

const Categories = () => {
  // const data = getAllCategories();
  const [categories, setCategories] = useState([]);
  const [isCategoriesTrue, setIsCategoriesTrue] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:5000/category")
      .then((res) => setCategories(res?.data));
  }, []);

  return (
    <div className="lg:min-w-[330px] relative">
      <div
        onClick={() => setIsCategoriesTrue(true)}
        className="cursor-pointer bg-white p-4 rounded-lg lg:hidden block"
      >
        <button className="text-secondary flex items-center gap-3 font-semibold">
          <IoMenuSharp className="text-secondary text-xl" />{" "}
          <span className="pb-0.5">Dua{`'`}s information</span>
        </button>
      </div>
      <div
        className={`lg:static absolute top-0 transition-all duration-300 bg-white rounded-0
         w-full lg:rounded-lg h-screen lg:max-h-[80vh] overflow-y-auto ${
           isCategoriesTrue ? "left-0 " : "-left-full"
         }`}
      >
        <div className=" ">
          <h2 className=" bg-primary p-4 text-white font-semibold flex justify-between items-center text-lg cursor-pointer ">
            Categories{" "}
            <IoMdClose
              onClick={() => setIsCategoriesTrue(false)}
              className="text-2xl block lg:hidden "
            />
          </h2>
          <div className="p-4">
            <Search searchName="Categories" reverse="reverse" wFull="w-full" />
          </div>
        </div>
        {/* category */}
        {categories ? (
          categories?.map((category) => (
            <Category key={category?.id} category={category} />
          ))
        ) : (
          <div>Loading...</div>
        )}
      </div>
    </div>
  );
};

export default Categories;
