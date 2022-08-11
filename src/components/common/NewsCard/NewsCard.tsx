import Image from 'next/image';
import styles from './styles.module.scss';

// type Props = {
//      news?: {}
// }

export const NewsCard: React.FunctionComponent<Props> = ({ news }) => {
    return (
        <article className={styles.card}>
            <div className={styles.info}>
                <div className={styles.wrapper}>
                    <div className={styles.section}>{news.section}</div>
                    <h2 className={styles.title}>{news.title}</h2>
                    <p className={styles.text}>{news.abstract}</p>
                </div>
                <span className={styles.date}>{news.published_date}</span>
            </div>
            {news.multimedia ?
                <Image src={news.multimedia[0].url} alt='something' width={100} height={100}></Image>
                : null
            }
        </article>
    )
}