import styles from './styles.module.scss';

type Props = {
    children?: React.ReactNode
};

export const Content: React.FunctionComponent<Props> = ({ children }) => {
    return (
        <main className={styles.content}>
            {children}
        </main>
    )
}