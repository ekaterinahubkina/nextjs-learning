import { ReactNode } from 'react';
import classNames from 'classnames';
import styles from './styles.module.scss';

type Props = {
    isLarge?: boolean,
    children: ReactNode
}

export const Title: React.FunctionComponent<Props> = ({ isLarge, children }) => {
    return <h2 className={classNames(styles.title, { [styles.large]: isLarge })}>{children}</h2>
}