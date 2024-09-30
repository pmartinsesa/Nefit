import React from "react";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export type AsideNewsCardProps = {
  title: string;
  route: string;
  imageSrc: string;
  order: number;
};

export const AsideNewsCard = ({title, route, imageSrc, order}: AsideNewsCardProps) => {
  const [isOver, setIsOver] = useState(false);

  return (
    <Link
      onMouseOver={() => setIsOver(true)}
      onMouseOut={() => setIsOver(false)}
      key={title}
      data-isover={isOver}
      className="data-[isover=true]:text-red-primary text-gray-800 flex items-center gap-3 mb-5"
      href={`/publicacoes/${route}`}
    >
      <Image
        data-isover={isOver}
        className="
              transition duration-300 ease-in-out 
              h-[7rem] w-[7rem] rounded-xl grayscale-[90%]
              data-[isover=true]:grayscale-0"
        src={imageSrc}
        alt={`noticia-${title}`}
        width={500}
        height={500}
      />
      <div className="transition duration-300 ease-in-out text-sm w-[13rem] max-h-[6rem] overflow-hidden self-start">
        Postagem {order}: {title}
      </div>
    </Link>
  );
};
