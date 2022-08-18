import Link from 'next/link';
import { useRouter } from 'next/router';
import classNames from 'classnames';
import styles from './styles.module.scss';

const NAV_LINKS = [
    { title: 'home', path: '/' },
    { title: 'world', path: '/world' },
    { title: 'automobiles', path: '/automobiles' },
    { title: 'real estate', path: '/realestate' },
    { title: 'science', path: '/science' },
]

type Props = {
    isOpen: boolean,
    close: () => void
}

export const Navigation: React.FunctionComponent<Props> = ({ isOpen, close }) => {
    const router = useRouter();

    return (
        <nav className={styles.nav}>
            <ul className={classNames(styles.navigation, { [styles.open]: isOpen })}>
                {NAV_LINKS.map(({ title, path }) => (
                    <li key={title}>
                        <Link href={{ pathname: path, query: { section: title.split(' ').join('') } }} as={path}>
                            <a className={classNames(styles.link, { [styles.active]: path === router.asPath })}
                                onClick={close}>{title}</a>
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    )
}