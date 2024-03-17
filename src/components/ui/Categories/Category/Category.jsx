"use client";

import Image from "next/image";
import duaIcon from "../../../../assets/images/dua-icon.png";
import { useEffect, useState } from "react";
import axios from "axios";

const Category = ({ category }) => {
  const [subcategory, setSubcategory] = useState([]);
  const [duas, setDuas] = useState([]);
  const [categoryId, setCategoryId] = useState(1);

  useEffect(() => {
    axios.get("http://localhost:5000/sub_category").then((res) => {
      const data = res?.data;
      const sub_category = data?.filter(
        (subCat) => subCat?.cat_id === category?.cat_id
      );
      setSubcategory(sub_category);
    });
  }, [category?.cat_id]);

  useEffect(() => {
    axios.get("http://localhost:5000/dua").then((res) => {
      const data = res?.data;
      const dua = data?.filter((dua) => dua?.cat_id === category?.cat_id);
      setDuas(dua);
    });
  }, [category?.cat_id]);

  console.log(categoryId);

  return (
    <div>
      <div
        className={`flex justify-between items-center mb-4 hover:bg-[#E8F0F5] mx-4 rounded-md p-3
         cursor-pointer ${
           categoryId === category?.cat_id ? "bg-[#E8F0F5]" : "bg-[#00000000]"
         }`}
        onClick={() => setCategoryId(category?.cat_id)}
      >
        <div className="flex items-center gap-3 ">
          <Image src={duaIcon} alt="Dua" className="w-12 h-12" />
          <div>
            <h2 className="text-secondary font-semibold">
              {category?.cat_name_en}
            </h2>
            <p className="text-ternary text-sm">
              Subcategory:{subcategory?.length}
            </p>
          </div>
        </div>
        <div className="text-center border-l border-ternary pl-3">
          <h2 className="text-secondary font-semibold">{duas?.length}</h2>
          <p className="text-ternary text-sm">Duas</p>
        </div>
      </div>
    </div>
  );
};

export default Category;
