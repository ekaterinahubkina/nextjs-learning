import { parseISO, format } from 'date-fns';
import classNames from 'classnames';
import styles from './styles.module.scss';

type Props = {
    dateString: string,
    isNewsListPage?: boolean
}

export const Date: React.FunctionComponent<Props> = ({ dateString, isNewsListPage }) => {
    const date = parseISO(dateString);

    return (
        <time className={classNames(styles.date, { [styles.home]: isNewsListPage })} dateTime={dateString}>{format(date, 'LLLL d, yyyy, HH:mm')}</time>
    )
}