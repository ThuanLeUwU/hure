import * as React from 'react';
import { HureLogo } from '../../resources/logo';
import { BurgerBtn } from '../burger/burgerBtn';
import { Button } from '../button/button';
import NavBarStyles from './styles/Navbar.module.scss';

interface NavbarProps {}

export const Navbar: React.FunctionComponent<NavbarProps> = () => {
    return (
        <nav className={`${NavBarStyles.navbar} sm:w-full`}>
            <HureLogo />
            <div className={`${NavBarStyles.navbar__menu}`}>
                <div className={`${NavBarStyles.navbar__menu__item}`}>
                    <Button>Connect Wallet</Button>
                </div>
                <div className={`${NavBarStyles.navbar__menu__item}`}>
                    <BurgerBtn />
                </div>
            </div>
        </nav>
    );
};
