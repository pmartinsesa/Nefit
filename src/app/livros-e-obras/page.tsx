import { Cover } from "@/components/Cover";

import { PiBookBookmark } from "react-icons/pi";
import { BooksPainel } from "@/components/BooksPainel";

export default function worksAndBooks() {
  return (
    <>
      <Cover title="Livros e Obras" />
      <div className="grid grid-cols-12 mt-20 mb-32 min-[1950px]:justify-items-center">
        <div className="col-start-2 col-span-10">
          <div className="flex  min-[1950px]:w-[77.5rem]">
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
            <BooksPainel />
          </div>
        </div>
      </div>
    </>
  );
}
