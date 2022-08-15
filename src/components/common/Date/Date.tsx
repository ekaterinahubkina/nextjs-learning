import { parseISO, format } from 'date-fns';
import styles from './styles.module.scss';

type Props = {
    dateString: string,
}

export const Date: React.FunctionComponent<Props> = ({ dateString }) => {
    const date = parseISO(dateString);

    return (
        <time className={styles.date} dateTime={dateString}>{format(date, 'LLLL d, yyyy, HH:mm')}</time>
    )
}