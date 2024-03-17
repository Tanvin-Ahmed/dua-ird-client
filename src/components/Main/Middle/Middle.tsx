"use client";

import { cn } from "@/utils";
import { FC, Fragment, HTMLAttributes, useEffect, useState } from "react";
import SectionCard from "./SectionCard";
import DuaCard from "./DuaCard";
import DuaCategoryMenu from "./DuaCategoryMenu";
import { useSearchParams } from "next/navigation";
import { AllInfoType } from "@/types";
import { axiosInstance } from "@/axiosInstance/instance";

const Middle: FC<HTMLAttributes<HTMLDivElement>> = ({ className }) => {
  const params = useSearchParams();
  const [data, setData] = useState<AllInfoType | null>(null);

  useEffect(() => {
    if (!params) return;
    (async () => {
      const catId = params.get("cat");
      const { data }: { data: AllInfoType } = await axiosInstance(
        `/get-all-by-category/${catId}`
      );
      setData(data);
    })();
  }, [params]);

  return (
    <div className={cn(className)}>
      <DuaCategoryMenu />
      <div className="flex flex-col gap-y-4 max-h-[55vh] lg:max-h-[65vh] xl:max-h-[80vh] overflow-hidden overflow-y-auto">
        {data ? (
          <>
            {data.subcategories.map((subCat) => (
              <Fragment key={subCat.subcat_id}>
                <SectionCard sectionName={subCat.subcat_name_en} />
                {subCat.dua_list.map((dua) => (
                  <DuaCard key={dua.dua_id} dua={dua} />
                ))}
              </Fragment>
            ))}
          </>
        ) : null}
      </div>
    </div>
  );
};

export default Middle;
