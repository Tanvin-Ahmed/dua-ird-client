import { cn } from "@/utils";
import { FC, HTMLAttributes } from "react";
import SearchBox from "./SearchBox";
import List from "./List";

const LeftSideBar: FC<HTMLAttributes<HTMLDivElement>> = ({
  className,
  ...rest
}) => {
  return (
    <div
      {...rest}
      className={cn("rounded-lg bg-white overflow-hidden", className)}
    >
      <div className="rounded-t-lg bg-green-600 py-3 text-center">
        <h1 className="text-white font-semibold">Categories</h1>
      </div>
      <div className="p-2">
        <SearchBox />
      </div>

      <div className="p-2 overflow-y-auto space-y-4 w-full max-h-[76vh] lg:max-h-[45vh] xl:max-h-[62vh]">
        <List />
        <List />
        <List />
        <List />
        <List />
        <List />
        <List />
        <List />
        <List />
        <List />
      </div>
    </div>
  );
};

export default LeftSideBar;
