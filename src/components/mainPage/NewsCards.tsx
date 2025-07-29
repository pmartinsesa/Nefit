import React from "react";

import { getMonth } from "@/app/utils/date";
import Image from "next/image";
import Link from "next/link";

import { useState } from "react";

export type NewsProps = {
  image: string;
  title: string;
  publishTime: string;
  hashtags: string[];
  route: string;
  clasname?: string;
};

export const NewsCards = ({
  image,
  title,
  publishTime,
  hashtags,
  route,
  clasname,
}: NewsProps) => {
  const [isOver, setIsOver] = useState(false);

  return (
    <>
      <div
        onMouseOver={() => setIsOver(true)}
        onMouseOut={() => setIsOver(false)}
        className="flex flex-col w-[17rem]"
      >
        <Link
          data-isover={isOver}
          className="data-[isover=true]:text-red-primary text-gray-800"
          href={`/publicacoes/${route}`}
        >
          <Image
            data-isover={isOver}
            className="
              transition duration-300 ease-in-out 
              h-[17rem] w-[17rem] rounded-xl grayscale-[80%]
              data-[isover=true]:grayscale-0"
            src={image}
            alt={`noticia-${title}`}
            width={300}
            height={300}
          />
          <h2 className="transition duration-300 ease-in-out text-lg w-[17rem] max-h-[6rem] mt-4 font-bold overflow-hidden">
            {title}
          </h2>
        </Link>
        <span className="w-[17rem] text-base mt-1">{`Publicado em ${new Date(
          publishTime
        ).getDate()} de ${getMonth(new Date(publishTime))} / ${new Date(
          publishTime
        ).getFullYear()}`}</span>
        <span className="w-[17rem] text-base mt-1">
          {hashtags.reduce(
            (parsedHashtag, currentHashtag) =>
              `${parsedHashtag} #${currentHashtag} `,
            ""
          )}
        </span>
      </div>
    </>
  );
};
