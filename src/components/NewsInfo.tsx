"use client";

import { useEffect, useState } from "react";

import { Carrousel } from "./Carrousel";
import { NewsCards } from "./NewsCards";

import { News } from "@/types/news";
import { getAllDocumentsByPath } from "@/firebase/services/getAllDocumentsByPath";

export const NewsInfo = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [news, setNews] = useState<Array<News>>([
    {
      carrouselImage: "",
      title: "",
      content: "",
      hashtags: [],
      postedAt: "",
      postImage: "",
    },
  ]);

  useEffect(() => {
    getAllDocumentsByPath<News>(process.env.NEXT_PUBLIC_NEWS_PATH || "")
      .then((n) => setNews(n))
      .then(() => setIsLoading(false));
  }, []);

  const getFirstFourNews = (news: News[]) => {
    return news
      .sort(
        (a, b) =>
          new Date(b.postedAt).getTime() - new Date(a.postedAt).getTime()
      )
      .slice(0, 4);
  };

  return isLoading ? (
    <></>
  ) : (
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
                  route=""
                />
              );
            })}
          </div>
        </div>
        <button
          className="justify-self-center col-span-12 transition duration-300 ease-in-out hover:text-white hover:bg-red-primary px-4 py-1 border text-red-primary border-red-primary rounded-xl h-10 w-32 mt-12"
          type="submit"
        >
          <a className="text-lg" href="">
            Ver mais
          </a>
        </button>
      </div>
    </>
  );
};
