import React from "react";
import Allah from "../../../../assets/images/Allah.png";
import Image from "next/image";
import { IoCopyOutline } from "react-icons/io5";
import { CiBookmark } from "react-icons/ci";
import { HiOutlineLightBulb } from "react-icons/hi2";
import { GrShareOption } from "react-icons/gr";
import { BsExclamationOctagon } from "react-icons/bs";

const Dua = () => {
  const iconsStyle = "text-xl text-ternary";
  return (
    <div className="">
      {/* section */}
      <h2 className="text-sm text-secondary bg-white rounded-lg p-4 ">
        <span className="text-primary ">Section:</span> Lorem ipsum dolor sit,
        amet consectetur adipisicing elit. Dicta, magnam?
      </h2>

      {/* dua */}
      <div className="bg-white rounded-lg p-5 mt-5">
        <div className="flex items-center gap-2 mb-5">
          <Image src={Allah} alt="Allah" />
          <h3 className="text-primary">
            1. The servant is dependent on his Lord #1
          </h3>
        </div>
        <p className="text-secondary mb-5">
          All human beings depend on Allah for their welfare and prevention of
          evil in various matters of their religion and world. Allah says
          (interpretation of the meaning): O mankind, you are those in need of
          Allah, while Allah is the Free of need, the Praiseworthy.
        </p>
        <div>
          <h3 className="text-primary">Reference:</h3>
          <p className="text-secondary font-medium">Surah Al-Fatir 35:15</p>
        </div>

        {/* icons */}
        <div className="flex items-center justify-end gap-4 mt-8">
          <a href="#" title="Copy">
            <IoCopyOutline className={iconsStyle} />
          </a>
          <a href="#" title="Bookmarks">
            <CiBookmark className={iconsStyle} />
          </a>
          <a href="#" title="Memorize">
            <HiOutlineLightBulb className={iconsStyle} />
          </a>
          <a href="#" title="Share">
            <GrShareOption className={iconsStyle} />
          </a>
          <a href="#" title="Report">
            <BsExclamationOctagon className={iconsStyle} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Dua;
