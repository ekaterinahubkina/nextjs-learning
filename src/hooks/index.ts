import useSWR from "swr";
import { fetcher } from 'services/fetcher';

export const useNews = (path: string | undefined, section?: string) => {
    const { data, error } = useSWR([path, section], fetcher)

    return {
        news: data,
        isLoading: !error && !data,
        error
    }
}