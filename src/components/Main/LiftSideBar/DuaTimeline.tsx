"use client";

import { axiosInstance } from "@/axiosInstance/instance";
import { DuaNameType } from "@/types";
import Image from "next/image";
import { FC, useEffect, useState } from "react";

interface DuaTimelineProp {
  subCatId: number;
  catId: number;
}

const DuaTimeline: FC<DuaTimelineProp> = ({ catId, subCatId }) => {
  const [data, setData] = useState<DuaNameType[] | []>([]);

  useEffect(() => {
    (async () => {
      const { data }: { data: DuaNameType[] } = await axiosInstance(
        `/get-dua-name/${catId}/${subCatId}`
      );
      setData(data.filter((d) => d.dua_name_en));
    })();
  }, [catId, subCatId]);

  return data.length
    ? data.map((dua) => (
        <a
          key={dua.dua_id}
          href={`#${dua.dua_name_en}`}
          className="no-underline"
        >
          <div className="flex justify-start items-center gap-x-3 ml-11 my-2">
            <Image
              src={"/icons/duaarrow.svg"}
              height={12}
              width={12}
              alt="dua"
            />
            <p className="text-[12px] cursor-pointer">{dua.dua_name_en}</p>
          </div>
        </a>
      ))
    : null;
};

export default DuaTimeline;
