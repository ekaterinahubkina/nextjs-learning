import Link from 'next/link';
import { useRouter } from 'next/router';
import classNames from 'classnames/bind';
import styles from './styles.module.scss';

const cn = classNames.bind(styles);

type Props = {
    isOpen: boolean
}

export const Navigation: React.FunctionComponent<Props> = ({ isOpen }) => {
    const navLinks = [
        { title: 'home', path: '/' },
        { title: 'world', path: '/world' },
        { title: 'automobiles', path: '/automobiles' },
        { title: 'real\u00A0estate', path: '/real-estate' },
        { title: 'finance', path: '/finance' },
    ]
    const router = useRouter();
    const navClassName = cn({
        navigation: true,
        open: isOpen,
    });
    const linkClassName = (p: String) => {
        return cn({
            link: true,
            active: router.pathname === p,
        })
    }

    return (
        <nav className={styles.nav}>
            <ul className={navClassName}>
                {navLinks.map(({ title, path }) => (
                    <li key={title}>
                        <Link href={path}><a className={linkClassName(path)}>{title}</a></Link>
                    </li>
                ))}
            </ul>
        </nav>
    )
}