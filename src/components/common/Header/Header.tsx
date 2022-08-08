import Image from 'next/image';
import { useState } from 'react';
import logo from '../../../../public/images/logo.svg';
import { Navigation } from '../Navigation/Navigation';
import styles from './Header.module.scss';

export const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const openMobileMenu = () => {
        setIsOpen(!isOpen);
    }

    return (
        <header className={styles.header}>
            <Image className={styles.logo} src={logo} alt='logo' />
            <Navigation isOpen={isOpen}/>
            <button className={`${styles.burger} ${isOpen && styles.open}`} onClick={openMobileMenu}/>
        </header>

    )
}