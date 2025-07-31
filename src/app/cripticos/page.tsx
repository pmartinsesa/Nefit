"use client";

import { Cover } from "@/components/Cover";
import { Loading } from "@/components/Loading";
import { NewsList } from "@/components/publicacoes/NewsList";
import { getAllDocumentsByPath } from "@/firebase/services/getAllDocumentsByPath";
import { News } from "@/types/news";
import { ChakraProvider } from "@chakra-ui/react";
import { useEffect, useState } from "react";

export default function Cryptics() { 
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
        author: "",
    },
    ]);

    useEffect(() => {
        getAllDocumentsByPath<News>(process.env.NEXT_PUBLIC_NEWS_PATH || "")
        .then((n) => setNews(n.filter((news) => news.type === "cryptic")))
        .then(() => setIsLoading(false));
    }, []);
    
    return isLoading ? (
    <ChakraProvider>
      <Loading />
    </ChakraProvider>
  ) : (
    <>
        <Cover title="Crípticos" />
        <NewsList news={news}/>
    </>
  );
}