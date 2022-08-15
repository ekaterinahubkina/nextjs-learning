import Image from 'next/image';
import { Article, News } from 'models/news';
import { Date } from 'components/common/Date/Date';
import styles from './styles.module.scss';

type Props = {
    article: Article,
}

export const NewsCard: React.FunctionComponent<Props> = ({ article }) => {
    return (
        <article className={styles.card}>
            <div className={styles.info}>
                <div className={styles.wrapper}>
                    <div className={styles.section}>{article.section}</div>
                    <Date dateString={article.published_date} />
                </div>
                <h2 className={styles.title}>{article.title}</h2>
                <p className={styles.abstract}>{article.abstract}</p>
            </div>
            {article.multimedia ?
                <Image className={styles.image} src={article.multimedia[0].url} alt='something' width={375} height={280} layout='responsive'></Image>
                : null
            }
        </article>
    )
}