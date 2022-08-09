import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from './styles.module.scss';

export interface NavigationProps {
    isOpen: boolean
}

export const Navigation = ({ isOpen }: NavigationProps) => {

    const navLinks = [
        { title: 'home', path: '/' },
        { title: 'world', path: '/world' },
        { title: 'automobiles', path: '/automobiles' },
        { title: 'real\u00A0estate', path: '/real-estate' },
        { title: 'finance', path: '/finance' },

    ]
    const router = useRouter();

    return (
        <nav className={styles.nav}>
            <ul className={`${styles.navigation} ${isOpen && styles.open}`}>
                {navLinks.map(({ title, path }) => (
                    <li key={title}>
                        <Link href={path}><a className={`${styles.link} ${router.pathname === path && styles.active}`}>{title}</a></Link>
                    </li>
                ))}
            </ul>
        </nav>
    )
}