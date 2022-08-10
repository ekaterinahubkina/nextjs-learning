import { FooterNav } from 'components/common/Footer/components/FooterNav/FooterNav';
import { SocialLinks } from 'components/common/Footer/components/SocialLinks/SocialLinks';
import styles from './styles.module.scss';

export const Footer: React.FunctionComponent = () => {
    return (
        <footer className={styles.footer}>
            <span className={styles.copyright}>&copy; 2022 Best News</span>
            <FooterNav />
            <SocialLinks />
        </footer>
    )
}