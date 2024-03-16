import Image from "next/image";
import logo from "../../../assets/images/logo.png";
import support from "../../../assets/images/support.png";
import { GrHomeRounded } from "react-icons/gr";
import { GrAppsRounded } from "react-icons/gr";
import { HiOutlineLightBulb } from "react-icons/hi2";
import { FaRegBookmark } from "react-icons/fa";
import { PiBatteryPlusVerticalBold } from "react-icons/pi";
import { PiChatsTeardrop } from "react-icons/pi";
import { TfiBook } from "react-icons/tfi";

const SideBar = () => {
  const iconBg =
    "w-10 h-10 bg-[#E8F0F5] rounded-full grid place-items-center text-ternary text-lg";

  return (
    <div
      className="bg-white rounded-t-[30px] lg:rounded-xl w-[100vw] lg:w-auto lg:min-h-[92vh]
     overflow-y-auto flex flex-row lg:flex-col justify-between items-center"
    >
      <Image src={logo} alt="duas" className="w-20 h-20 hidden lg:block" />
      <div className="flex flex-row lg:flex-col justify-between p-5 w-full items-center gap-4">
        <a href="#" className={iconBg}>
          <GrHomeRounded />
        </a>
        <a href="#" className={iconBg}>
          <GrAppsRounded className="text-xl" />
        </a>
        <a href="#" className={iconBg}>
          <HiOutlineLightBulb className="text-2xl" />
        </a>
        <a href="#" className={iconBg}>
          <FaRegBookmark />
        </a>
        <a href="#" className={iconBg}>
          <PiBatteryPlusVerticalBold className="text-xl" />
        </a>
        <a href="#" className={`${iconBg} hidden lg:grid`}>
          <PiChatsTeardrop className="text-xl" />
        </a>
        <a href="#" className={`${iconBg} hidden lg:grid`}>
          <TfiBook className="text-xl" />
        </a>
      </div>
      <Image
        src={support}
        alt="support"
        className="w-20 h-20 hidden lg:block"
      />
    </div>
  );
};

export default SideBar;
