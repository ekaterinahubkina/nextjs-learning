import Image from 'next/image';
import { NewsCardType } from 'models/NewsCardType';
import { Date } from 'components/common/Date/Date';
import styles from './styles.module.scss';

type Props = {
    news: NewsCardType,
}

export const NewsCard: React.FunctionComponent<Props> = ({ news }) => {
    return (
        <article className={styles.card}>
            <div className={styles.info}>
                <div className={styles.wrapper}>
                    <div className={styles.section}>{news.section}</div>
                    <Date dateString={news.published_date} />
                </div>
                <h2 className={styles.title}>{news.title}</h2>
                <p className={styles.abstract}>{news.abstract}</p>
            </div>
            {news.multimedia ?
                <Image className={styles.image} src={news.multimedia[0].url} alt='something' width={375} height={280} layout='responsive'></Image>
                : null
            }
        </article>
    )
}