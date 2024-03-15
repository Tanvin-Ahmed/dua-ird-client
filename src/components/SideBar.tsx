import Image from "next/image";

const SideBar = () => {
  return (
    <div className="fixed bg-white rounded-xl px-1 py-4 w-fit h-[90vh] overflow-y-auto overflow-x-hidden">
      <div className="flex flex-col justify-between items-center">
        <Image src={"/logo.png"} width={73} height={73} alt="logo" />
        <div className="flex flex-col justify-center items-center gap-y-3 my-8">
          <div className="rounded-full w-[38px] h-[38px] bg-[#E8F0F5] flex justify-center items-center">
            <Image src={"/icons/home.png"} width={20} height={20} alt="home" />
          </div>
          <div className="rounded-full w-[38px] h-[38px] bg-[#E8F0F5] flex justify-center items-center">
            <Image src={"/icons/menu.png"} width={24} height={24} alt="menu" />
          </div>
          <div className="rounded-full w-[38px] h-[38px] bg-[#E8F0F5] flex justify-center items-center">
            <Image
              src={"/icons/memorize.png"}
              width={20}
              height={20}
              alt="memorize"
            />
          </div>
          <div className="rounded-full w-[38px] h-[38px] bg-[#E8F0F5] flex justify-center items-center">
            <Image
              src={"/icons/keep-minus.png"}
              width={24}
              height={24}
              alt="keep-minus"
            />
          </div>
          <div className="rounded-full w-[38px] h-[38px] bg-[#E8F0F5] flex justify-center items-center">
            <Image
              src={"/icons/ruqyah.png"}
              width={20}
              height={20}
              alt="ruqyah"
            />
          </div>
          <div className="rounded-full w-[38px] h-[38px] bg-[#E8F0F5] flex justify-center items-center">
            <Image
              src={"/icons/dua-info.png"}
              width={20}
              height={20}
              alt="dua-info"
            />
          </div>
          <div className="rounded-full w-[38px] h-[38px] bg-[#E8F0F5] flex justify-center items-center">
            <Image
              src={"/icons/books.png"}
              width={20}
              height={20}
              alt="books"
            />
          </div>
        </div>
        <Image
          src={"/icons/support.png"}
          width={67}
          height={66}
          alt="support"
        />
      </div>
    </div>
  );
};

export default SideBar;
