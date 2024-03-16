import { cn } from "@/utils";
import Image from "next/image";
import { FC, HTMLAttributes } from "react";

const Card: FC<HTMLAttributes<HTMLDivElement>> = ({ className, ...rest }) => {
  return (
    <div
      {...rest}
      className={cn(
        "w-full cursor-pointer rounded-lg p-2 bg-[#E8F0F5] flex items-center justify-between",
        className
      )}
    >
      <div className="flex justify-center items-center gap-3">
        <div className="bg-[#CFE0E5] rounded-lg p-2">
          <Image
            src={"/icons/fever.png"}
            height={40}
            width={40}
            alt="category"
          />
        </div>
        <div>
          <h3 className="text-green-600 font-semibold">Category Name</h3>
          <p className="text-gray-500">Subcategory: 11</p>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center">
        <p className="font-semibold">15</p>
        <p className="text-gray-500">Duas</p>
      </div>
    </div>
  );
};

export default Card;
