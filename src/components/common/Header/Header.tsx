import { useState } from 'react';
import { Navigation } from 'components/common/Header/components/Navigation/Navigation';
import Logo from 'components/common/icons/logo.svg';
import BurgerIcon from 'components/common/icons/burger/burger-icon.svg';
import CloseIcon from 'components/common/icons/burger/close-icon.svg';
import styles from './styles.module.scss';

export const Header: React.FunctionComponent = () => {
    const [isOpen, setIsOpen] = useState(false);

    const openMobileMenu = () => {
        setIsOpen(!isOpen);
    }

    return (
        <header className={styles.header}>
            <Logo />
            <Navigation isOpen={isOpen} />
            <button className={styles.burger} onClick={openMobileMenu}>{isOpen ? <CloseIcon /> : <BurgerIcon />}</button>
        </header>
    )
}