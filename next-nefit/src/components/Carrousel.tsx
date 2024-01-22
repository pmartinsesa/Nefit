import Image from "next/image";
import testeNoticiaUm from "../Assets/images/testeNoticiaUm.png";

export const Carrousel = () => {
  return (
    <>
      <div className="text-white">
        <Image
          className="w-full h-[34.8rem] object-cover brightness-50 bg-no-repeat"
          src={testeNoticiaUm}
          alt="not1"
        />
        <div className="absolute grid grid-cols-12 -mt-[19.5rem]">
          <div className="col-start-2 w-[27rem]">
            <div className="text-4xl font-bold h-[9.25rem]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </div>
            <button
              className="transition duration-300 ease-in-out hover:bg-black px-4 py-1 border rounded-xl h-[2.5rem] w-[8rem] mt-[0.88rem] "
              type="submit"
            >
              <a className="text-lg" href="">
                Ver mais
              </a>
            </button>
            <div className="flex gap-4 cursor-pointer mt-8">
              <div className="bg-red-secondary hover:bg-gray-400 rounded-xl w-[1.625rem] h-[0.5rem]"></div>
              <div className="bg-white hover:bg-gray-400 rounded-xl w-[1.625rem] h-[0.5rem]"></div>
              <div className="bg-white hover:bg-gray-400 rounded-xl w-[1.625rem] h-[0.5rem]"></div>
              <div className="bg-white hover:bg-gray-400 rounded-xl w-[1.625rem] h-[0.5rem]"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
