import { News } from "@/types/news";
import { AsideNewsCard } from "./AsideNewsCard";
import { getFirstFourNews } from "@/app/utils/newsUtils";
import { BsArrowRight } from "react-icons/bs";
import Link from "next/link";

export type AsideNewsProps = {
  newsList: News[];
};

export const AsideNews = ({ newsList }: AsideNewsProps) => {
  return (
    <>
      <div className="bg-gray-100 rounded-xl w-[25rem] p-5 max-[1550px]:flex  max-[1550px]:justify-between max-[1550px]:w-full max-[1550px]:flex-wrap">
        <h1 className="font-bold text-lg text-gray-700 mb-5 max-[1550px]:w-full">
          Últimas publicações
        </h1>
        {getFirstFourNews(newsList).map((n, i) => {
          return (
            <AsideNewsCard
              key={n.title}
              title={n.title}
              route={n.route}
              imageSrc={n.postImage}
              order={i + 1}
            />
          );
        })}
        <Link
          href="/publicacoes"
          className="flex justify-between items-center w-[13rem] transition duration-300 ease-in-out hover:text-red-active max-[1550px]:w-full"
        >
          <p className="font-light">Ver mais publicações</p>
          <BsArrowRight className="" />
        </Link>
      </div>
    </>
  );
};
