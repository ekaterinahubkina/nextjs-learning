import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import useSWR from "swr";
import { fetcher } from "services/fetcher";
import { Article, News } from "models/news";
import { Error } from "models/error";
import { Category } from "components/design-system/Category/Category";
import { Title } from "components/design-system/Title/Title";
import { Date } from "components/common/Date/Date";
import styles from './styles.module.scss';

export const NewsArticle: React.FunctionComponent = () => {
    const [article, setArticle] = useState<Article>({} as Article);
    const router = useRouter();
    const { data, error } = useSWR<News, Error>('home', fetcher);

    useEffect(() => {
        if (router.isReady) {
            const { title } = router.query;
            const article = data?.results.find((item) => item.title === title);
            setArticle(article as Article)
        }
    }, [router.isReady, router.query, data?.results])

    if (!data && !error) return <div>Loading..</div>
    if (error) return <div>{error.message}</div>

    return (
        <>
            {article &&
                <article className={styles.article}>
                    <div className={styles.wrapper}>
                        <Category>{article.section}</Category>
                        {article.published_date && <Date dateString={article.published_date} />}
                    </div>
                    {article.multimedia ?
                        <Image className={styles.image} src={article.multimedia[0].url}
                            priority alt='article image' width={375} height={280} layout='responsive'></Image>
                        : null
                    }
                    <div className={styles.info}>
                        <Title>{article.title}</Title>
                        <h5 className={styles.subtitle}>{article.abstract}</h5>
                        <p className={styles.text}>
                            Vestibulum in enim pretium, vehicula lacus ut, euismod velit.
                            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere
                            cubilia curae; In non sagittis diam. Morbi scelerisque lectus at enim aliquam
                            dignissim. Phasellus ac mauris at elit hendrerit ullamcorper a a arcu.
                            Nunc pellentesque eleifend posuere. Etiam bibendum sollicitudin nulla,
                            vel mollis eros feugiat a. Aenean vestibulum efficitur massa.
                        </p>
                    </div>
                </article>}
        </>
    )
}