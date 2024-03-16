import Image from "next/image";

const DuaTimeline = () => {
  return (
    <div className="flex justify-start items-center gap-x-3 ml-11 my-2">
      <Image src={"/icons/duaarrow.svg"} height={12} width={12} alt="dua" />
      <p className="text-[12px] cursor-pointer">Hello world</p>
    </div>
  );
};

export default DuaTimeline;
