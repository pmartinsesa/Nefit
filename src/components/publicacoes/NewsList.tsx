import React from "react";
import { News } from "@/types/news";
import { PublishCard } from "./PublishCard";

export type NewsListProps = {
  news: News[];
};

export const NewsList = ({ news }: NewsListProps) => {
  return (
    <>
      <div className="grid grid-cols-12 my-14">
        <div className="col-start-2 col-span-10 mt-8 min-[1950px]:justify-self-center">
          <div className="grid grid-cols-1 justify-items-center gap-y-24 min-[1270px]:grid-cols-2 min-[1270px]:justify-items-start">
            {news.map((n) => {
              return (
                <PublishCard
                  key={n.title}
                  image={n.postImage}
                  title={n.title}
                  publishTime={n.postedAt}
                  hashtags={n.hashtags}
                  route={n.route}
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};
