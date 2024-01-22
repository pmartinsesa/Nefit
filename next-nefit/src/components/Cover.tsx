import Image from "next/image";
import testeNoticiaUm from "../Assets/images/testeNoticiaUm.png";

export type CoverProps = {
  title?: string;
}

export const Cover = ({title = ""}: CoverProps) => {
  return (
    <>
      <div className="text-white">
        <Image
          className="w-full h-[23.5rem] object-cover brightness-50 bg-no-repeat"
          src={testeNoticiaUm}
          alt="not1"
        />
        <div className="absolute -mt-[6rem] grid grid-cols-12 w-full">
          <div className="col-start-2 col-span-12 h-auto text-[40px] font-bold">
            {title}
          </div>
        </div>
      </div>
    </>
  );
};
