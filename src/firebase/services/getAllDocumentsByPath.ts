import { getDownloadURL, ref } from "firebase/storage";
import { storage } from "../index";

export const getAllDocumentsByPath = async <Type>(path: string): Promise<Array<Type>> => {
  try {
    const downloadUrl = await getUrlForDownloadAsync(path);
    return (await (
      await fetch(downloadUrl, { next: { revalidate: 3600 } })
    ).json()) as Type[];
 
  } catch (err) {
    return [];
  }
};

const getUrlForDownloadAsync = async (path: string): Promise<string> => {
  const worksUrl = ref(storage, path);
  return await getDownloadURL(worksUrl);
}
