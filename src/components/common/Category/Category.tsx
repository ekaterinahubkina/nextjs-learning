import styles from './styles.module.scss';

type Props = {
    children?: React.ReactNode
}

export const Category: React.FunctionComponent<Props> = ({ children }) => {
    return <div className={styles.category}>{children}</div>
}