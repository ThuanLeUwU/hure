import React from 'react';
import burgerLinkStyles from './styles/burgerLink.module.scss';
import { useContext } from 'react';

import { useBurgerContext } from '../../contexts/burgerContext';

export function BurgerLink() {
    const { isActive } = useBurgerContext();

    return isActive ? <div className={`${burgerLinkStyles.dark_screen}`}>hello</div> : <></>;
}
