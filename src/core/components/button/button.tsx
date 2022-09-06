import React from 'react';
import buttonStyles from './styles/Button.module.scss';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export const Button: React.FunctionComponent<ButtonProps> = ({ ...rest }) => {
    return (
        <button className={`${buttonStyles.button}`} {...rest}>
            {rest.children}
        </button>
    );
};
