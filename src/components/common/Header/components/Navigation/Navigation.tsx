import Link from 'next/link';
import { useRouter } from 'next/router';
import classNames from 'classnames';
import styles from './styles.module.scss';

const navLinks = [
    { title: 'home', path: '/' },
    { title: 'world', path: '/world' },
    { title: 'automobiles', path: '/automobiles' },
    { title: 'real\u00A0estate', path: '/real-estate' },
    { title: 'finance', path: '/finance' },
]

type Props = {
    isOpen: boolean
}

export const Navigation: React.FunctionComponent<Props> = ({ isOpen }) => {
    const router = useRouter();

    return (
        <nav className={styles.nav}>
            <ul className={classNames(styles.navigation, { [styles.open]: isOpen })}>
                {navLinks.map(({ title, path }) => (
                    <li key={title}>
                        <Link href={path}>
                            <a className={classNames(styles.link, { [styles.active]: path === router.pathname })}>{title}</a>
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    )
}