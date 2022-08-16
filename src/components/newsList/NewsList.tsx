import useSWR from "swr";
import { fetcher } from "services/fetcher";
import { NewsCard } from "components/common/NewsCard/NewsCard";
import { News } from "models/news";
import { Error } from "models/error";

type Props = {
    section: string,
    data: News
}

export const NewsList: React.FunctionComponent<Props> = ({ section, data }) => {
    // const { data, error } = useSWR<News, Error>(section, fetcher)

    // if (!data && !error) return <div>Loading..</div>
    // if (error) return <div>{error.message}</div>

    return (
        <>
            {data?.results.map((item) => (
                <NewsCard key={item.title} article={item} />
            ))}
        </>
    )
}