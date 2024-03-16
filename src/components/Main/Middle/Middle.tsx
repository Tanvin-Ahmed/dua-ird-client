import { cn } from "@/utils";
import { FC, HTMLAttributes } from "react";
import SectionCard from "./SectionCard";
import DuaCard from "./DuaCard";
import DuaCategoryMenu from "./DuaCategoryMenu";

const Middle: FC<HTMLAttributes<HTMLDivElement>> = ({ className }) => {
  return (
    <div className={cn(className)}>
      <DuaCategoryMenu />
      <div className="flex flex-col gap-y-4 max-h-[55vh] lg:max-h-[65vh] xl:max-h-[80vh] overflow-hidden overflow-y-auto">
        <SectionCard />
        <DuaCard />
        <DuaCard />
        <DuaCard />
      </div>
    </div>
  );
};

export default Middle;
