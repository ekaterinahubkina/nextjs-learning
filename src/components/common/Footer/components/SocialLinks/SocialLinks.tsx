import Link from 'next/link';
import styles from './styles.module.scss';

export const SocialLinks = () => {
    return (
        <div className={styles.container}>
            <Link href='https://www.facebook.com/'><a className={`${styles.link} ${styles.fb}`} target='_blank'></a></Link>
            <Link href='https://www.facebook.com/'><a className={`${styles.link} ${styles.insta}`} target='_blank'></a></Link>
            <Link href='https://www.facebook.com/'><a className={`${styles.link} ${styles.twitter}`} target='_blank'></a></Link>
        </div>
    )
}