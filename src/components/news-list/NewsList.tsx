import useSWR from "swr";
import { newsFetcher } from "services/fetchers";
import { NewsCard } from "components/news-list/components/NewsCard/NewsCard";
import { News } from "models/news";

type Props = {
    section: string,
}

export const NewsList: React.FunctionComponent<Props> = ({ section }) => {
    const { data, error } = useSWR<News>(section, newsFetcher)

    if (!data && !error) return <div>Loading..</div>
    if (error) return <div>{error.message}</div>

    return (
        <>
            {data?.results.map((item) => (
                <NewsCard key={item.title} article={item} />
            ))}
        </>
    )
}