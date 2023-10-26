import { useState } from "react";

export type NewsProps = {
  image: string;
  title: string;
  publishTime: string;
  hashtags: string;
  route: string;
  clasname?: string;
};

export const News = ({
  image,
  title,
  publishTime,
  hashtags,
  route,
  clasname
}: NewsProps) => {
  const [isOver, setIsOver] = useState(false);

  return (
    <>
      <div
        onMouseOver={() => setIsOver(true)}
        onMouseOut={() => setIsOver(false)}
        className="flex flex-col  w-[27rem]"
      >
        <a 
          data-isover={isOver}
          className="data-[isover=true]:text-red-primary text-gray-800" 
          href="">
          <img
            data-isover={isOver}
            className="
              transition duration-300 ease-in-out 
              h-[27rem] w-[27rem] rounded-xl grayscale-[80%] object-cover 
              data-[isover=true]:grayscale-0"
            src={image}
            alt="testemini1"
          />
          <h2 className="transition duration-300 ease-in-out text-[20px] w-[27rem] max-h-16 mt-4 font-bold overflow-hidden">
            {title}
          </h2>
        </a>
        <span className="w-[27rem] mt-1">{`Publicado em ${publishTime}`}</span>
        <span className="w-[27rem] mt-1">{hashtags}</span>
      </div>
    </>
  );
};
