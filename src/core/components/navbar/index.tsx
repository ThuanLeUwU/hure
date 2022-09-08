import * as React from 'react';
import NavBarStyles from './styles/Navbar.module.scss';

interface NavbarProps {}

export const Navbar: React.FunctionComponent<NavbarProps> = () => {
    return (
        <nav className={`${NavBarStyles.navbar}`}>
            <p className={`${NavBarStyles.navbar_logo} `}>
                <span className="text-white">HU</span>
                <span className="text-cyan">RE</span>
            </p>
            <div className={`${NavBarStyles.navbar_burger}`}>
                <div className={`${NavBarStyles.navbar_burger_lines}`}>
                    <span className={`${NavBarStyles.navbar_burger_line}`}></span>
                    <span className={`${NavBarStyles.navbar_burger_line}`}></span>
                    <span className={`${NavBarStyles.navbar_burger_line}`}></span>
                </div>
            </div>
        </nav>
    );
};
