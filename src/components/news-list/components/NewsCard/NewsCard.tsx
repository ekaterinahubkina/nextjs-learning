import Image from 'next/image';
import Link from 'next/link';
import { Article, News } from 'models/news';
import { Date } from 'components/common/Date/Date';
import { Title } from 'components/common/Title/Title';
import { Category } from 'components/common/Category/Category';
import styles from './styles.module.scss';
import { useEffect, useState } from 'react';

type Props = {
    article: Article,
}

export const NewsCard: React.FunctionComponent<Props> = ({ article }) => {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => setIsMounted(true), []);

    if (!isMounted) return null;

    return (
        <Link href={{ pathname: `/article/${encodeURIComponent(article.title)}`, query: { url: article.url } }}>
            <a className={styles.link}>
                <article className={styles.card}>
                    <div className={styles.info}>
                        <div className={styles.wrapper}>
                            <Category>{article.section}</Category>
                            <Date isPositionBottom dateString={article.published_date} />
                        </div>
                        <Title>{article.title}</Title>
                        <p className={styles.abstract}>{article.abstract}</p>
                    </div>
                    {article.multimedia ?
                        <Image className={styles.image} src={article.multimedia[0].url} alt='something' 
                        width={375} height={280} layout='responsive' priority></Image>
                        : null
                    }
                </article>
            </a>
        </Link>
    )
}