import Image from "next/image";
import cover from "../Assets/images/cover.png";

export type CoverProps = {
  title?: string;
};

export const Cover = ({ title = "" }: CoverProps) => {
  return (
    <>
      <div className="text-white">
        <Image
          className="w-full h-[23.5rem] object-cover brightness-50 bg-no-repeat"
          src={cover}
          alt="not1"
        />
        <div className="absolute -mt-[6rem] grid grid-cols-12 min-[1950px]:justify-items-center w-full">
          <div className="col-start-2 col-span-10 min-[1950px]:w-[75rem]">
            <span className="h-auto text-[40px] font-bold">
              {title}
            </span>
          </div>
        </div>
      </div>
    </>
  );
};
