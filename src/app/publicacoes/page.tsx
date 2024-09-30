"use client";

import React from "react";
import { useEffect, useState } from "react";

import { ChakraProvider } from "@chakra-ui/react";

import { News } from "@/types/news";
import { Cover } from "@/components/Cover";
import { Loading } from "@/components/Loading";
import { NewsList } from "@/components/publicacoes/NewsList";
import { getAllDocumentsByPath } from "@/firebase/services/getAllDocumentsByPath";

export default function Publishings() {
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
      <Cover title="Publicações" />
      <NewsList news={news}/>
    </>
  );
}
