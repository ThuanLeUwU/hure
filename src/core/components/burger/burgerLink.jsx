import React from 'react';
import burgerLinkStyles from './styles/burgerLink.module.scss';

import { useBurgerContext } from '../../contexts/burgerContext';
import { HureLogo } from '../../resources/logo';
import { Button } from '../button/button';

export function BurgerLink() {
    const { isActive, handleSetIsActive } = useBurgerContext();
    const [tabLinks, setTabLinks] = React.useState([
        { name: 'Hure Platform', link: '/' },
        { name: 'Solutions', link: '/' },
        { name: 'Ecosystem', link: '/' },
        { name: 'How it work', link: '/' },
        { name: 'Tokenomics', link: '/' },
    ]);

    return (
        <div className={`${burgerLinkStyles.absolute}`}>
            <div className={`${burgerLinkStyles.tab} flex lg:hidden ${isActive ? burgerLinkStyles.tab_active : burgerLinkStyles.tab_inactive}`}>
                <div className={`${burgerLinkStyles.tab__close}`}>
                    <button className={`${burgerLinkStyles.tab__close__button}`} onClick={() => handleSetIsActive()}>
                        <span className={`${burgerLinkStyles.tab__close__button_line}`}></span>
                    </button>
                </div>
                <div className={`${burgerLinkStyles.tab__item}`}>
                    <HureLogo />
                </div>
                <div className={`${burgerLinkStyles.tab__item}`}>
                    <ul className={`${burgerLinkStyles.tab__links}`}>
                        {tabLinks.map((link, index) => (
                            <li
                                key={`tab-link-${index}-${link.name}`}
                                className={`${burgerLinkStyles.tab__links__item}`}
                                onClick={() => handleSetIsActive()}
                            >
                                {link.name}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className={`${burgerLinkStyles.tab__item}`}>
                    <Button size="Primary" width="full">
                        Connect Wallet
                    </Button>
                </div>
            </div>
        </div>
    );
}
