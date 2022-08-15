import { ReactNode } from 'react';
import classNames from 'classnames';
import styles from './styles.module.scss';

type Props = {
    home?: boolean,
    children: ReactNode
}

export const Title: React.FunctionComponent<Props> = ({ home, children }) => {
    return <h2 className={classNames(styles.title, { [styles.large]: !home })}>{children}</h2>
}