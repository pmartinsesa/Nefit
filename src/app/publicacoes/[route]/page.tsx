"use client";
import React from "react";
import { useEffect, useState } from "react";
import { getAllDocumentsByPath } from "@/firebase/services/getAllDocumentsByPath";

import { Cover } from "@/components/Cover";
import { News } from "@/types/news";
import { ChakraProvider } from "@chakra-ui/react";
import { Loading } from "@/components/Loading";
import { getMonth } from "@/app/utils/date";
import { AsideNews } from "@/components/publicacoes/AsideNews";
import { redirect } from "next/navigation";

export type NewsDetailsProps = {
  params: { route: string };
};

export default function NewsDetails({ params }: NewsDetailsProps) {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [news, setNews] = useState<News>({
    carrouselImage: "",
    title: "",
    route: "",
    content: "",
    hashtags: [],
    postedAt: "",
    postImage: "",
  });
  const [newsList, setNewsList] = useState<Array<News>>([
    {
      carrouselImage: "",
      title: "",
      route: "",
      content: "",
      hashtags: [],
      postedAt: "",
      postImage: "",
    },
  ]);
  useEffect(() => {
    getAllDocumentsByPath<News>(process.env.NEXT_PUBLIC_NEWS_PATH || "")
      .then((newsList) => {
        setNewsList(newsList);
        setNews(newsList.filter((n) => n.route === params.route)[0]);
      })
      .then(() => setIsLoading(false))
      .catch(() => {
        redirect("/not-found");
      });
  }, []);

  function linkfy(text: string) {
    var urlRegex = /(https?:\/\/[^\s]+)/g;
    return text.replace(
      urlRegex,
      '<a style="color: blue;" target="_blank" href="$1">$1</a>'
    );
  }

  const mapNewsContent = (content: string) => {
    const split = content.split("\n");

    return split.map((p) => {
      if (p.length <= 0) return <br />;
      const linkifiedParagraph = linkfy(p);

      return (
        <>
          <p
            key={p}
            className="w-full overflow-hidden"
            dangerouslySetInnerHTML={{ __html: linkifiedParagraph }}
          ></p>
          <br />
        </>
      );
    });
  };

  try {
    return isLoading ? (
      <ChakraProvider>
        <Loading />
      </ChakraProvider>
    ) : (
      <>
        <Cover />
        <div className=" flex justify-center">
          <div className="grid grid-cols-12 my-14 min-[1950px]:w-[1950px]">
            <div className="col-start-2 min-[1950px]:col-span-6 col-span-10 mt-8 min-[1950px]:justify-self-center">
              <div className=" text-red-primary text-4xl font-bold max-[1270px]:mt-10">
                {news.title}
              </div>
              <div className="text-gray-500 mt-4 text-lg font-light">
                {`Postado em ${new Date(news.postedAt)
                  .getDay()
                  .toString()
                  .padStart(2, "0")} de ${getMonth(
                  new Date(news.postedAt)
                )} de ${new Date(news.postedAt).getFullYear()}`}
              </div>
            </div>

            <div className="col-start-2 col-span-10 border-t-2 border-gray-300 mt-6 mb-16 w-full"></div>

            <div className="col-start-2 col-span-10 ">
              <div className="flex justify-between gap-12 flex-wrap max-[1550px]:justify-center">
                <div className="text-gray-700 tracking-wider leading-relaxed w-[65%] max-[1550px]:w-full">
                  {mapNewsContent(news.content)}
                </div>
                <div className="">
                  <AsideNews newsList={newsList} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  } catch (e) {
    redirect("/not-found");
  }
}
