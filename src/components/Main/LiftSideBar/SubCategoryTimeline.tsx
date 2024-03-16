import { Dispatch, FC, HTMLAttributes, SetStateAction } from "react";

interface SubCategoryTimelineProps extends HTMLAttributes<HTMLDivElement> {
  setSubCatId: Dispatch<SetStateAction<string>>;
}

const SubCategoryTimeline: FC<SubCategoryTimelineProps> = ({
  setSubCatId,
  ...props
}) => {
  return (
    <section className="bg-white mt-2">
      <div className="ml-4 w-full">
        <div className="relative col-span-12 px-4 space-y-6">
          <div className="relative px-4 col-span-8 space-y-4 before:absolute before:top-0 before:bottom-0 before:w-0.5 before:-left-3 before:border-l-2 before:border-dotted before:border-green-500">
            <div
              {...props}
              className="flex flex-col relative before:absolute before:top-2 before:w-2 before:h-2 before:rounded-full before:left-[-31px] before:z-[1] before:bg-green-600"
            >
              <p
                className="text-sm tracking-wide cursor-pointer"
                onClick={() => setSubCatId("1")}
              >
                Donec porta enim vel
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SubCategoryTimeline;
