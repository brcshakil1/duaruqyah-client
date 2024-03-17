import Image from "next/image";
import logo from "../../../assets/images/logo.png";
import Search from "../Search/Search";
import Profile from "./Profile/Profile";
import { SlArrowLeft } from "react-icons/sl";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center bg-white lg:bg-[#00000000] px-4 sticky">
      {/* logo */}
      <Image
        src={logo}
        alt="Dua logo"
        className="hidden md:block lg:hidden w-[80px] h-[80px]"
      />
      <div className="flex items-center gap-5">
        <SlArrowLeft className="text-secondary text-lg block md:hidden cursor-pointer" />
        <h2 className="text-secondary  md:text-2xl text-xl font-normal md:font-semibold font-poppins">
          Duas Page
        </h2>
      </div>

      {/* search */}
      <Search searchName="By Dua Name" />

      {/* profile */}
      <Profile />
    </div>
  );
};

export default Navbar;
