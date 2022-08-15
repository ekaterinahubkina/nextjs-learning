import { parseISO, format } from 'date-fns';
import classNames from 'classnames';
import styles from './styles.module.scss';

type Props = {
    dateString: string,
    home?: boolean
}

export const Date: React.FunctionComponent<Props> = ({ dateString, home }) => {
    const date = parseISO(dateString);
    console.log(dateString)
    console.log(date);

    return (
        <time className={classNames(styles.date, { [styles.home]: home })} dateTime={dateString}>{format(date, 'LLLL d, yyyy, HH:mm')}</time>
    )
}