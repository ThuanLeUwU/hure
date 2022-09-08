import React from 'react';
import buttonStyles from './styles/button.module.scss';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export const Button: React.FunctionComponent<ButtonProps> = ({ children, ...rest }) => {
    return (
        <button className={`${buttonStyles.button}`} {...rest}>
            <div className={`${buttonStyles.button__label}`}>{children}</div>
            <div className={`${buttonStyles.button__bg}`}></div>
        </button>
    );
};
