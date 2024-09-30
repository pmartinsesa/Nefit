"use client";

import { Cover } from "@/components/Cover";

import { BooksPainel } from "@/components/livros-e-obras/BooksPainel";
import { ChakraProvider } from "@chakra-ui/react";
import { Loading } from "@/components/Loading";
import { useEffect, useState } from "react";
import { getAllDocumentsByPath } from "@/firebase/services/getAllDocumentsByPath";
import { Work } from "@/types/work";

export default function worksAndBooks() {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [books, setBooks] = useState<Array<Work>>([]);

  useEffect(() => {
    getAllDocumentsByPath<Work>(
      process.env.NEXT_PUBLIC_WORKS_AND_BOOKS_PATH || ""
    )
      .then((b) => setBooks(b))
      .then(() => setIsLoading(false));
  }, []);

  return isLoading ? (
    <ChakraProvider>
      <Loading />
    </ChakraProvider>
  ) : (
    <>
      <Cover title="Livros e Obras" />
      <div className="grid grid-cols-12 mt-20 mb-32 min-[1950px]:justify-items-center">
        <div className="col-start-2 col-span-10">
          <div className="flex min-[1950px]:w-[77.5rem]">
            <BooksPainel books={books} />
          </div>
        </div>
      </div>
    </>
  );
}
