"use client";

import { Schedulers } from "@/components/mainPage/Schedulers";
import { NewsInfo } from "@/components/mainPage/NewsInfo";
import { useEffect, useState } from "react";
import { News } from "@/types/news";
import { getAllDocumentsByPath } from "@/firebase/services/getAllDocumentsByPath";
import { ChakraProvider } from "@chakra-ui/react";
import { Loading } from "@/components/Loading";

export default function Begin() {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [news, setNews] = useState<Array<News>>([
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
      .then((n) => setNews(n))
      .then(() => setIsLoading(false));
  }, []);

  return isLoading ? (
    <ChakraProvider>
      <Loading />
    </ChakraProvider>
  ) : (
    <>
      <NewsInfo news={news} />
      <div className="grid grid-cols-12 bg-[#69130E] mt-14 text-white">
        <Schedulers />
      </div>
    </>
  );
}
