import React from "react";

import { getMonth } from "@/app/utils/date";
import Image from "next/image";
import Link from "next/link";

export type PublishProps = {
  image: string;
  title: string;
  publishTime: string;
  hashtags: string[];
  route: string;
};

export const PublishCard = ({
  image,
  title,
  publishTime,
  hashtags,
  route,
}: PublishProps) => {
  return (
    <>
      <Link href={`/publicacoes/${route}`} className="text-gray-700 hover:text-red-primary transition duration-300 ease-in-out">
        <div className="flex gap-8 max-[1170px]:flex-col min-[1950px]:w-[35rem] w-full">
          <Image
            className="h-[15rem] w-[15rem] rounded-xl object-cover"
            src={image}
            alt={`image-${title}`}
            width={500}
            height={500}
          />
          <div className="flex flex-col min-[1950px]:w-[17rem] w-full">
            <h2 className="text-lg max-h-[6rem] mt-4 font-bold">
              {title}
            </h2>
            <div className="text-base mt-2 text-gray-700">
              {`Publicado em ${new Date(publishTime).getDate()} de ${getMonth(
                new Date(publishTime)
              )} / ${new Date(publishTime).getFullYear()}`}
            </div>
            <div className="text-base text-gray-700">
              {hashtags.reduce(
                (parsedHashtag, currentHashtag) =>
                  `${parsedHashtag} #${currentHashtag} `,
                ""
              )}
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};
