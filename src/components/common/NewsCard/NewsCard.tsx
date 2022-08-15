import Image from 'next/image';
import Link from 'next/link';
import { Article, News } from 'models/news';
import { Date } from 'components/common/Date/Date';
import { Title } from 'components/design-system/Title/Title';
import { Category } from 'components/design-system/Category/Category';
import styles from './styles.module.scss';

type Props = {
    article: Article,
}

export const NewsCard: React.FunctionComponent<Props> = ({ article }) => {
    return (
        <Link href={{ pathname: `/${encodeURIComponent(article.title)}`, query: { title: article.title } }}>
            <a className={styles.link}>
                <article className={styles.card}>
                    <div className={styles.info}>
                        <div className={styles.wrapper}>
                            <Category>{article.section}</Category>
                            <Date home dateString={article.published_date} />
                        </div>
                        <Title home>{article.title}</Title>
                        <p className={styles.abstract}>{article.abstract}</p>
                    </div>
                    {article.multimedia ?
                        <Image className={styles.image} src={article.multimedia[0].url} alt='something' width={375} height={280} layout='responsive'></Image>
                        : null
                    }
                </article>
            </a>
        </Link>
    )
}