import { getDownloadURL, ref } from "firebase/storage";
import { storage } from "../index";
import { Work } from "@/types/work";

export const getAllWorksAndBooks = async (): Promise<Array<Work>> => {
  try {
    const worksUrl = ref(storage, process.env.NEXT_PUBLIC_WORKS_AND_BOOKS_PATH);
    const downloadUrl = await getDownloadURL(worksUrl);
    return (await (await fetch(downloadUrl)).json()) as Work[];
  } catch (err) {
    return [];
  }
};
