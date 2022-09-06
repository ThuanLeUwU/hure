import * as React from 'react';
import burgerBtnStyles from './styles/burgerBtn.module.scss';

interface BurgerBtnProps {}

export const BurgerBtn: React.FunctionComponent<BurgerBtnProps> = () => {
    const [isActive, setIsActive] = React.useState(false);

    return (
        <div className={`${burgerBtnStyles.menu_btn} ${isActive ? burgerBtnStyles.active : ''}`} onClick={() => setIsActive(!isActive)}>
            <div className={`${burgerBtnStyles.menu_btn__bg}`}></div>
            <div className={`${burgerBtnStyles.menu_btn__burger}`}></div>
        </div>
    );
};
