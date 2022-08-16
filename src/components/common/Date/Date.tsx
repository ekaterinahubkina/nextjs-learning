import { parseISO, format } from 'date-fns';
import classNames from 'classnames';
import styles from './styles.module.scss';

type Props = {
    dateString: string,
    isPositionBottom?: boolean
}

export const Date: React.FunctionComponent<Props> = ({ dateString, isPositionBottom }) => {
    const date = parseISO(dateString);

    return (
        <time className={classNames(styles.date, { [styles.bottom]: isPositionBottom })} dateTime={dateString}>{format(date, 'LLLL d, yyyy, HH:mm')}</time>
    )
}