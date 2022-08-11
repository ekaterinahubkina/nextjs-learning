import useSWR from "swr";
import { fetcher } from 'services';

export const useNews = (url: String, key: String) => {
    const { data, error } = useSWR(`${url}${key}`, fetcher)

    return {
        news: data,
        isLoading: !error && !data,
        isError: error
    }
}