import * as React from 'react';
import { HureLogo } from '../../resources/logo';
import { BurgerBtn } from '../burger/burgerBtn';
import NavBarStyles from './styles/Navbar.module.scss';

interface NavbarProps {}

export const Navbar: React.FunctionComponent<NavbarProps> = () => {
    return (
        <nav className={`${NavBarStyles.navbar}`}>
            <HureLogo />
            <BurgerBtn />
        </nav>
    );
};
