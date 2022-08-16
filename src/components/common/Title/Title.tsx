import { ReactNode } from 'react';
import classNames from 'classnames';
import styles from './styles.module.scss';

type Props = {
    isNewsListPage?: boolean,
    children: ReactNode
}

export const Title: React.FunctionComponent<Props> = ({ isNewsListPage, children }) => {
    return <h2 className={classNames(styles.title, { [styles.large]: !isNewsListPage })}>{children}</h2>
}