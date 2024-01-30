"use client";

import Image from "next/image";
import Link from "next/link";

import { useEffect, useState } from "react";
import { Work } from "@/types/work";

import { getAllDocumentsByPath } from "@/firebase/services/getAllDocumentsByPath";

export const BooksPainel = () => {
  const [books, setBooks] = useState<Array<Work>>([]);

  useEffect(() => {
    getAllDocumentsByPath<Work>(
      process.env.NEXT_PUBLIC_WORKS_AND_BOOKS_PATH || ""
    ).then((b) => setBooks(b));
  }, []);

  return (
    <>
      <div className="flex flex-wrap gap-7">
        {books.map((b, key) => {
          return (
            <div key={key} className="w-[15rem] h-[21.5rem]">
              <Link href={b.link} target="_blank">
                <Image
                  src={b.coverUrl}
                  alt={key.toString()}
                  width={100}
                  height={100}
                  style={{ width: "15rem", height: "20rem" }}
                />
                <span className="font-bold text-gray-500 text-lg">
                  {b.name}
                </span>
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
};
