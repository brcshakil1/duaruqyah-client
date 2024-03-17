"use client";
import { IoIosSearch } from "react-icons/io";

const Search = ({ searchName, reverse, wFull }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("clicked on search");
  };
  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className={`relative ${
          wFull ? wFull : "max-w-[330px]"
        }  hidden md:flex justify-between ${
          reverse ? "flex-row-reverse" : "flex-row"
        }`}
      >
        <input
          type="text"
          placeholder={`Search ${searchName ? searchName : ""}`}
          className={` text-ternary rounded-md  px-4 py-3 outline-none border focus:border-primary ${
            wFull ? wFull : "w-[330px]"
          }`}
        />
        <button className=" h-full absolute px-4 right-0">
          <IoIosSearch className="text-[22px] text-ternary" />
        </button>
      </form>
    </div>
  );
};

export default Search;
