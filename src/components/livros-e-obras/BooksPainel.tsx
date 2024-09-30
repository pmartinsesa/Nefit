import Image from "next/image";
import Link from "next/link";

import { Work } from "@/types/work";

export type booksProps = {
  books: Work[];
}

export const BooksPainel = ({books}:booksProps) => {
  return (
    <>
      <div className="flex flex-wrap gap-7">
        {books.map((b, key) => {
          return (
            <div key={key} className="w-[15rem] h-[21.5rem] text-gray-500 hover:text-red-active transition duration-300 ease-in-out">
              <Link href={b.link} target="_blank">
                <Image
                  src={b.coverUrl}
                  alt={key.toString()}
                  width={500}
                  height={500}
                  style={{ width: "15rem", height: "20rem" }}
                />
                <div className=" font-medium">
                  {b.name}
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
};
