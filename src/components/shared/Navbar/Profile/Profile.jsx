import Image from "next/image";
import profile from "../../../../assets/images/profile.png";
import { FaCaretDown } from "react-icons/fa";
import { IoIosSettings } from "react-icons/io";

const Profile = () => {
  return (
    <div className="flex items-center gap-4 flex-row-reverse lg:flex-row">
      <div className="md:flex items-center gap-2 cursor-pointer hidden ">
        <Image src={profile} alt="user profile" />
        <FaCaretDown className="text-ternary" />
      </div>
      <IoIosSettings className="text-primary text-2xl lg:mr-0 lg:block  xl:hidden cursor-pointer" />
    </div>
  );
};

export default Profile;
