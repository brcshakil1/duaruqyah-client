import React from "react";
import Navbar from "./../components/shared/Navbar/Navbar";
import SideBar from "@/components/shared/SideBar/SideBar";
import Categories from "./../components/ui/Categories/Categories";
import Duas from "./../components/ui/Duas/Duas";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-[#EBEEF2] relative">
      <div className="flex items-center gap-5 relative">
        <div className="fixed bottom-0 lg:bottom-1/2 lg:translate-y-1/2 lg:left-5">
          <SideBar />
        </div>
        <div className="w-full ml-0 lg:ml-36 relative">
          <div className="mt-0 lg:mt-4">
            {" "}
            <Navbar />
          </div>
          {/* content */}
          <div className="mt-5 block lg:flex  gap-8 p-5">
            <Categories />
            <Duas />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
