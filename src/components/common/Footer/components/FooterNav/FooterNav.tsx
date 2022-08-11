import styles from './styles.module.scss';

const links = ['about us', 'help', 'advertise', 'privacy policy', 'terms of service'];

export const FooterNav: React.FunctionComponent = () => {
    return (
        <nav>
            <ul className={styles.navigation}>
                {links.map((link) => (
                    <li key={link}>
                        <a href='#' className={styles.link}>{link}</a>
                    </li>
                ))}
            </ul>
        </nav>
    )
}