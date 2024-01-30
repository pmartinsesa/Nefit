import { getDownloadURL, ref } from "firebase/storage";
import { storage } from "../index";
import { Work } from "@/types/work";

export const getAllWorksAndBooksAsync = async (): Promise<Array<Work>> => {
  try {
    const downloadUrl = await getUrlForDownloadAsync();
    return (await (
      await fetch(downloadUrl, { next: { revalidate: 3600 } })
    ).json()) as Work[];
 
  } catch (err) {
    return [];
  }
};
const getUrlForDownloadAsync = async () => {
  const worksUrl = ref(storage, process.env.NEXT_PUBLIC_WORKS_AND_BOOKS_PATH);
  return await getDownloadURL(worksUrl);
}
