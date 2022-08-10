import InstaIcon from 'components/common/icons/socials/insta-icon.svg';
import FacebookIcon from 'components/common/icons/socials/fb-icon.svg';
import TwitterIcon from 'components/common/icons/socials/twitter-icon.svg';
import styles from './styles.module.scss';

export const SocialLinks: React.FunctionComponent = () => {
    return (
        <div className={styles.container}>
            <a className={styles.link} href='https://www.facebook.com/' target='_blank' rel='noreferrer'><FacebookIcon className={styles.icon} /></a>
            <a className={styles.link} href='https://www.facebook.com/' target='_blank' rel='noreferrer'><InstaIcon className={styles.icon} /></a>
            <a className={styles.link} href='https://www.facebook.com/' target='_blank' rel='noreferrer'><TwitterIcon className={styles.icon} /></a>
        </div>
    )
}