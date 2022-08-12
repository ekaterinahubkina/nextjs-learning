import useSWR from "swr";
import { fetcher } from 'services';

export const useNews = (path: string, section?: string) => {
    const { data, error } = useSWR([path, section], fetcher)

    return {
        news: data,
        isLoading: !error && !data,
        error
    }
}