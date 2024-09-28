import { News } from "@/types/news";

export const getFirstFourNews = (news: News[]) => {
  return news
    .sort(
      (a, b) =>
        new Date(b.postedAt).getTime() - new Date(a.postedAt).getTime()
    )
    .slice(0, 4);
};