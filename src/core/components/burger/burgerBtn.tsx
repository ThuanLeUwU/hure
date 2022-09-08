import * as React from 'react';
import { useBurgerContext } from '../../contexts/burgerContext';
import burgerBtnStyles from './styles/burgerBtn.module.scss';

interface BurgerBtnProps {}

export const BurgerContext = React.createContext({});

export const BurgerBtn: React.FunctionComponent<BurgerBtnProps> = () => {
    const { handleSetIsActive, isActive } = useBurgerContext();

    return (
        <div className={`${burgerBtnStyles.menu_btn} ${isActive ? burgerBtnStyles.active : ''}`} onClick={() => handleSetIsActive()}>
            <div className={`${burgerBtnStyles.menu_btn__bg}`}></div>
            <div className={`${burgerBtnStyles.menu_btn__burger}`}></div>
        </div>
    );
};
