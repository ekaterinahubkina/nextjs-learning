import styles from './Footer.module.scss';

export const Footer = () => {
    return (
        <footer className={styles.footer}>
            <span className={styles.copyright}>&copy; 2022 Best News</span>
            <nav>Navigation here</nav>
            <ul className={styles.social}>social icons here</ul>
        </footer>
    )
}