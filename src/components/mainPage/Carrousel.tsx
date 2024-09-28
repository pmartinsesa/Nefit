import Image from "next/image";
import { useEffect, useState } from "react";
import { News } from "@/types/news";
import Link from "next/link";

export type CarrouselProps = {
  interval: number;
  news: News[];
};

export const Carrousel = ({ interval, news }: CarrouselProps) => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const autoPlayInterval = setInterval(nextSlide, interval);
    return () => {
      clearInterval(autoPlayInterval);
    };
  }, [interval, news]);

  const goToSlide = (index: number) => {
    setActiveIndex(index);
  };

  const nextSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === news.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <>
      <div className="text-white">
        <Image
          className="w-full h-[34.8rem] object-cover object-top brightness-50"
          src={news[activeIndex].carrouselImage}
          width={500}
          height={500}
          alt="not1"
        />
        <div className="absolute grid grid-cols-12 -mt-[16rem] min-[1950px]:justify-items-center w-full">
          <div className="col-start-2 col-span-10 min-[1950px]:w-[75rem]">
            <div className="text-3xl font-bold w-[27rem] h-auto">
              {news[activeIndex].title}
            </div>
            <Link href={`publicacoes/${news[activeIndex].route}`}>
              <button
                className="transition duration-300 ease-in-out hover:bg-black px-4 py-1 border rounded-xl h-[2.5rem] w-[8rem] mt-[0.88rem] "
                type="submit"
              >
                <span className="text-lg">
                  Ver mais
                </span>
              </button>
            </Link>
            <div className="flex gap-4 cursor-pointer mt-8">
              {news.map((c, i) => {
                return (
                  <div
                    key={c.title}
                    data-isactive={activeIndex === i}
                    className="bg-white hover:bg-gray-400 rounded-xl w-[1.625rem] h-[0.5rem] data-[isactive=true]:bg-red-secondary"
                    onClick={() => goToSlide(i)}
                  ></div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
