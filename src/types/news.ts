export type News = {
  title: string;
  route: string;
  carrouselImage: string;
  postImage: string;
  postedAt: string;
  content: string;
  hashtags: Array<string>;
  author: string;
  type?: "opinion" | "cryptic";
}