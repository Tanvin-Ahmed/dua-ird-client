"use client";

import { appContext } from "@/components/context/appContext";
import { useContext } from "react";
import { IoMenuOutline } from "react-icons/io5";

const DuaCategoryMenu = () => {
  const { setCategoryOpen } = useContext(appContext);

  const toggle = () => {
    setCategoryOpen(true);
  };

  return (
    <div
      className="lg:hidden p-5 bg-white rounded-lg cursor-pointer mb-3"
      onClick={toggle}
    >
      <div className="flex items-center gap-x-3">
        <IoMenuOutline size={30} />
        <p className="font-semibold">Dua&apos;s importance</p>
      </div>
    </div>
  );
};

export default DuaCategoryMenu;
