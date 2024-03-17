import { CategoryType } from "@/types";
import { cn } from "@/utils";
import Image from "next/image";
import { FC, HTMLAttributes } from "react";

interface CardPropType extends HTMLAttributes<HTMLDivElement> {
  data: CategoryType;
  clicked: boolean;
}

const Card: FC<CardPropType> = ({ data, clicked, className, ...rest }) => {
  return (
    <a href={`#${data.cat_name_en}`} className="no-underline">
      <div
        {...rest}
        className={cn(
          "w-full cursor-pointer rounded-lg p-2 flex items-center justify-between",
          className,
          {
            "bg-[#E8F0F5]": clicked,
            "bg-white": !clicked,
          }
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
            <h3 className="text-green-600 font-semibold">{data.cat_name_en}</h3>
            <p className="text-gray-500">Subcategory: {data.no_of_subcat}</p>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center">
          <p className="font-semibold">{data.no_of_dua}</p>
          <p className="text-gray-500">Duas</p>
        </div>
      </div>
    </a>
  );
};

export default Card;
