import React from "react";

import Link from "next/link";

import { Carrousel } from "./Carrousel";
import { NewsCards } from "./NewsCards";

import { News } from "@/types/news";
import { getFirstFourNews } from "@/app/utils/newsUtils";

export type NewsInfoProps = {
  news: News[];
};

export const NewsInfo = ({ news }: NewsInfoProps) => {
  return (
    <>
      <Carrousel interval={3000} news={getFirstFourNews(news)} />
      <div className="grid grid-cols-12 mt-14">
        <h1 className="justify-self-center col-span-12 text-red-primary text-4xl font-bold">
          Últimas publicações
        </h1>
        <div className="col-start-2 col-span-10 mt-8 min-[1950px]:justify-self-center">
          <div className="flex justify-center gap-5 min-[1270px]:justify-between flex-wrap">
            {getFirstFourNews(news).map((n) => {
              return (
                <NewsCards
                  key={n.title}
                  image={n.postImage}
                  title={n.title}
                  publishTime={n.postedAt}
                  hashtags={n.hashtags}
                  route={n.route}
                />
              );
            })}
          </div>
        </div>
        <button
          className="justify-self-center col-span-12 transition duration-300 ease-in-out hover:text-white hover:bg-red-primary px-4 py-1 border text-red-primary border-red-primary rounded-xl h-10 w-32 mt-12"
          type="submit"
        >
          <Link className="text-lg" href="/publicacoes">
            Ver mais
          </Link>
        </button>
      </div>
    </>
  );
};
