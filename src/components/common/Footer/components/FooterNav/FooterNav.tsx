import styles from './styles.module.scss';

export const FooterNav: React.FunctionComponent = () => {
    const links = ['about us', 'help', 'advertise', 'privacy policy', 'terms of service'];
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