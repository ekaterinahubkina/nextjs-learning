import { FooterNav } from './components/FooterNav/FooterNav';
import { SocialLinks } from './components/SocialLinks/SocialLinks';
import styles from './styles.module.scss';


export const Footer = () => {
    return (
        <footer className={styles.footer}>
            <span className={styles.copyright}>&copy; 2022 Best News</span>
            <FooterNav />
            <SocialLinks />
            {/* <ul className={styles.social}>social icons here</ul> */}
        </footer>
    )
}