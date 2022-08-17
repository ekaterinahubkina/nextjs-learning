import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import useSWR from "swr";
import { articleFetcher } from "services/fetchers";
import { ArticleFull, NewsFull } from "models/news";
import { Category } from "components/common/Category/Category";
import { Title } from "components/common/Title/Title";
import { Date } from "components/common/Date/Date";
import styles from './styles.module.scss';

export const NewsArticle: React.FunctionComponent = () => {
    const [article, setArticle] = useState<ArticleFull | undefined>();
    const router = useRouter();
    const { url } = router.query;
    const { data, error } = useSWR<NewsFull>(url, articleFetcher);

    useEffect(() => {
        if (data) {
            setArticle(data.response.docs[0])
        }
    }, [data])

    if (!data && !error) return <div>Loading..</div>
    if (!article) return <div>Article not found</div>
    if (error) return <div>{error.message}</div>

    return (
        <article className={styles.article}>
            <div className={styles.wrapper}>
                <Category>{article.section_name}</Category>
                {article.pub_date && <Date dateString={article.pub_date} />}
            </div>
            {article.multimedia.length ?
                <Image className={styles.image} src={`https://static01.nyt.com/${article.multimedia[0].url}`}
                    priority alt='article image' width={375} height={280} layout='responsive'></Image>
                : null
            }
            <div className={styles.info}>
                <Title isLarge>{article.headline.main}</Title>
                <h5 className={styles.subtitle}>{article.abstract}</h5>
                <p className={styles.text}>{article.lead_paragraph}</p>
            </div>
        </article>
    )
}