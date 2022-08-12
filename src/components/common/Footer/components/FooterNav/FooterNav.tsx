import styles from './styles.module.scss';

const LINKS = ['about us', 'help', 'advertise', 'privacy policy', 'terms of service'];

export const FooterNav: React.FunctionComponent = () => {
    return (
        <nav>
            <ul className={styles.navigation}>
                {LINKS.map((link) => (
                    <li key={link}>
                        <a href='#' className={styles.link}>{link}</a>
                    </li>
                ))}
            </ul>
        </nav>
    )
}