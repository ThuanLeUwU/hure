import * as React from 'react';
import { HureLogo } from '../../resources/logo';
import { BurgerBtn } from '../burger/burgerBtn';
import { Button } from '../button/button';
import NavBarStyles from './styles/Navbar.module.scss';

interface NavbarProps {}

interface NavbarLinkProps {
    name: string;
    link: string;
}

export const Navbar: React.FunctionComponent<NavbarProps> = () => {
    const [navbarLinks, setNavbarLinks] = React.useState<NavbarLinkProps[]>([
        { name: 'Hure Platform', link: '/' },
        { name: 'Market', link: '/' },
        { name: 'Solutions', link: '/' },
        { name: 'Roadmap', link: '/' },
        { name: 'Ecosystem', link: '/' },
        { name: 'Key to success', link: '/' },
        { name: 'How it work', link: '/' },
        { name: 'Tokenomics', link: '/' },
    ]);
    return (
        <nav className={`${NavBarStyles.navbar}`}>
            <HureLogo />
            <div className={`${NavBarStyles.navbar__menu}`}>
                <div className={`${NavBarStyles.navbar__menu__item}`}>
                    <ul className={`${NavBarStyles.links}`}>
                        {navbarLinks.map((link, index) => (
                            <li key={`link-${index}-${link.name}`} className={`${NavBarStyles.links__item}`}>
                                {link.name}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className={`${NavBarStyles.navbar__menu__item} hidden sm:block`}>
                    <Button>Connect Wallet</Button>
                </div>
                <div className={`${NavBarStyles.navbar__menu__item} block lg:hidden`}>
                    <BurgerBtn />
                </div>
            </div>
        </nav>
    );
};
