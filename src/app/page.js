import React from "react";
import Navbar from "./../components/shared/Navbar/Navbar";
import SideBar from "@/components/shared/SideBar/SideBar";
import Categories from "./../components/ui/Categories/Categories";
import Duas from "./../components/ui/Duas/Duas";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-[#EBEEF2] ">
      <div className="flex items-center gap-5 relative">
        <div className="fixed bottom-0 lg:bottom-1/2 lg:translate-y-1/2 lg:left-5">
          <SideBar />
        </div>
        <div className="w-full ml-0 lg:ml-36 p-5">
          <Navbar />
          {/* content */}
          <div className="border border-red-400 mt-5 flex  gap-8">
            <Categories />
            <Duas />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
