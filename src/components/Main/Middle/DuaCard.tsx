import Image from "next/image";
import { IoCopyOutline } from "react-icons/io5";
import { CiBookmark } from "react-icons/ci";
import { HiOutlineLightBulb } from "react-icons/hi2";
import { GoShareAndroid } from "react-icons/go";
import { MdOutlineReport } from "react-icons/md";

const DuaCard = () => {
  return (
    <div className="p-5 bg-white rounded-lg">
      {/* Header */}
      <div className="flex items-center space-x-4">
        <Image src={"/icons/allah.png"} height={35} width={35} alt="" />
        <h3 className="text-green-600 text-lg font-semibold">
          1. The servant is dependent on his Lord #1
        </h3>
      </div>
      {/* body */}
      <div className="my-4 mb-6">
        <p className="mb-4">
          All human beings depend on Allah for their welfare and prevention of
          evil in various matters of their religion and world. Allah says
          (interpretation of the meaning): O mankind, you are those in need of
          Allah, while Allah is the Free of need, the Praiseworthy.
        </p>
        <div className="flex flex-col justify-center">
          <p className="text-green-600">Reference:</p>
          <p>Surah Al-Fatir 35:15</p>
        </div>
      </div>
      {/* footer */}
      <div className="flex justify-end items-center gap-x-3">
        <div
          title="Copy"
          className="p-1 rounded cursor-pointer hover:bg-gray-100 transition-colors"
        >
          <IoCopyOutline size={20} className="text-gray-500" />
        </div>
        <div
          title="Bookmark"
          className="p-1 rounded cursor-pointer hover:bg-gray-100 transition-colors"
        >
          <CiBookmark size={20} className="text-gray-500" />
        </div>
        <div
          title="Memorize"
          className="p-1 rounded cursor-pointer hover:bg-gray-100 transition-colors"
        >
          <HiOutlineLightBulb size={20} className="text-gray-500" />
        </div>
        <div
          title="Share"
          className="p-1 rounded cursor-pointer hover:bg-gray-100 transition-colors"
        >
          <GoShareAndroid size={20} className="text-gray-500" />
        </div>
        <div
          title="Report"
          className="p-1 rounded cursor-pointer hover:bg-gray-100 transition-colors"
        >
          <MdOutlineReport size={20} className="text-gray-500" />
        </div>
      </div>
    </div>
  );
};

export default DuaCard;
