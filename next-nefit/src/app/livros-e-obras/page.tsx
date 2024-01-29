import Image from "next/image";
import Link from "next/link";

import { Cover } from "@/components/Cover";

import { PiBookBookmark } from "react-icons/pi";

export const BOOKS = [
  {
    name: "Book Name",
    link: "https://drive.google.com/file/d/1nJ399AIu2_vn6NUN_J011u-QCJZXIjwt/view",
    coverUrl:
      "https://firebasestorage.googleapis.com/v0/b/nefit-dev.appspot.com/o/Nefit%2Fcenario.jpeg?alt=media&token=e6848f97-06f4-4a95-b9c9-697578b8b2ff",
  },
  {
    name: "Book Name",
    link: "https://drive.google.com/file/d/1nJ399AIu2_vn6NUN_J011u-QCJZXIjwt/view",
    coverUrl:
      "https://firebasestorage.googleapis.com/v0/b/nefit-dev.appspot.com/o/Nefit%2Fcenario.jpeg?alt=media&token=e6848f97-06f4-4a95-b9c9-697578b8b2ff",
  },
  {
    name: "Book Name",
    link: "https://drive.google.com/file/d/1nJ399AIu2_vn6NUN_J011u-QCJZXIjwt/view",
    coverUrl:
      "https://firebasestorage.googleapis.com/v0/b/nefit-dev.appspot.com/o/Nefit%2Fcenario.jpeg?alt=media&token=e6848f97-06f4-4a95-b9c9-697578b8b2ff",
  },
  {
    name: "Book Name",
    link: "https://drive.google.com/file/d/1nJ399AIu2_vn6NUN_J011u-QCJZXIjwt/view",
    coverUrl:
      "https://firebasestorage.googleapis.com/v0/b/nefit-dev.appspot.com/o/Nefit%2Fcenario.jpeg?alt=media&token=e6848f97-06f4-4a95-b9c9-697578b8b2ff",
  },
  {
    name: "Book Name",
    link: "https://drive.google.com/file/d/1nJ399AIu2_vn6NUN_J011u-QCJZXIjwt/view",
    coverUrl:
      "https://firebasestorage.googleapis.com/v0/b/nefit-dev.appspot.com/o/Nefit%2Fcenario.jpeg?alt=media&token=e6848f97-06f4-4a95-b9c9-697578b8b2ff",
  },
  {
    name: "Book Name",
    link: "https://drive.google.com/file/d/1nJ399AIu2_vn6NUN_J011u-QCJZXIjwt/view",
    coverUrl:
      "https://firebasestorage.googleapis.com/v0/b/nefit-dev.appspot.com/o/Nefit%2Fcenario.jpeg?alt=media&token=e6848f97-06f4-4a95-b9c9-697578b8b2ff",
  },
  {
    name: "Book Name",
    link: "https://drive.google.com/file/d/1nJ399AIu2_vn6NUN_J011u-QCJZXIjwt/view",
    coverUrl:
      "https://firebasestorage.googleapis.com/v0/b/nefit-dev.appspot.com/o/Nefit%2Fcenario.jpeg?alt=media&token=e6848f97-06f4-4a95-b9c9-697578b8b2ff",
  },
  {
    name: "Book Name",
    link: "https://drive.google.com/file/d/1nJ399AIu2_vn6NUN_J011u-QCJZXIjwt/view",
    coverUrl:
      "https://firebasestorage.googleapis.com/v0/b/nefit-dev.appspot.com/o/Nefit%2Fcenario.jpeg?alt=media&token=e6848f97-06f4-4a95-b9c9-697578b8b2ff",
  },
  {
    name: "Book Name",
    link: "https://drive.google.com/file/d/1nJ399AIu2_vn6NUN_J011u-QCJZXIjwt/view",
    coverUrl:
      "https://firebasestorage.googleapis.com/v0/b/nefit-dev.appspot.com/o/Nefit%2Fcenario.jpeg?alt=media&token=e6848f97-06f4-4a95-b9c9-697578b8b2ff",
  },
  {
    name: "Book Name",
    link: "https://drive.google.com/file/d/1nJ399AIu2_vn6NUN_J011u-QCJZXIjwt/view",
    coverUrl:
      "https://firebasestorage.googleapis.com/v0/b/nefit-dev.appspot.com/o/Nefit%2Fcenario.jpeg?alt=media&token=e6848f97-06f4-4a95-b9c9-697578b8b2ff",
  },
  {
    name: "Book Name",
    link: "https://drive.google.com/file/d/1nJ399AIu2_vn6NUN_J011u-QCJZXIjwt/view",
    coverUrl:
      "https://firebasestorage.googleapis.com/v0/b/nefit-dev.appspot.com/o/Nefit%2Fcenario.jpeg?alt=media&token=e6848f97-06f4-4a95-b9c9-697578b8b2ff",
  },
  {
    name: "Book Name",
    link: "https://drive.google.com/file/d/1nJ399AIu2_vn6NUN_J011u-QCJZXIjwt/view",
    coverUrl:
      "https://firebasestorage.googleapis.com/v0/b/nefit-dev.appspot.com/o/Nefit%2Fcenario.jpeg?alt=media&token=e6848f97-06f4-4a95-b9c9-697578b8b2ff",
  },
];

export default function worksAndBooks() {
  return (
    <>
      <Cover title="Livros e Obras" />
      <div className="grid grid-cols-12 mt-20 mb-32 min-[1950px]:justify-items-center">
        <div className="col-start-2 col-span-10">
          <div className="flex justify-between min-[1950px]:w-[77.5rem]">
            <div className="mr-6">
              <div className="flex items-center text-gray-600">
                <PiBookBookmark className="h-6 w-7 fill-red-primary" />
                <span className="font-bold text-lg w-36">Classificar por:</span>
              </div>
              <ul className="my-6 cursor-pointer">
                <li className="font-bold ml-[0.30rem] text-red-primary">
                  Mais Recentes
                </li>
              </ul>
            </div>

            <div className="flex flex-wrap gap-7">
              {BOOKS.map((b, key) => {
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
                      <span>{b.name}</span>
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
BOOKS;
