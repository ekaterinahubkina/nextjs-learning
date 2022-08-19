import { API_TOKEN, BASE_PATH } from "constants/api";

export const newsFetcher = async (section: string = "home") => {
  const res = await fetch(
    `${BASE_PATH}/svc/topstories/v2/${section}.json?api-key=${API_TOKEN}`
  );
  if (!res.ok) {
    throw new Error("An error occurred while fetching the data.");
  }
  return res.json();
};


export const articleFetcher = async (url: string) => {
  const res = await fetch(
    `${BASE_PATH}/svc/search/v2/articlesearch.json?q=${url}&api-key=${API_TOKEN}`
  );
  if (!res.ok) {
    throw new Error("An error occurred while fetching the data.");
  }
  return res.json();
}