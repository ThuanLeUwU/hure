import React, { useEffect } from 'react';
import buttonStyles from './styles/button.module.scss';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    size?: 'M' | 'Primary';
    width?: 'full' | 'auto';
}

export const Button: React.FunctionComponent<ButtonProps> = ({ children, size, width, ...rest }) => {
    const [buttonSize, setButtonSize] = React.useState('');
    const [buttonWidth, setButtonWidth] = React.useState('');

    useEffect(() => {
        if (width && width === 'full') {
            setButtonWidth(buttonStyles.button_w_full);
        }

        if (size) {
            switch (size) {
                case 'M':
                    setButtonSize(buttonStyles.button_m);
                    break;
                case 'Primary':
                    setButtonSize(buttonStyles.button_primary);
                    break;
                default:
                    setButtonSize('');
                    break;
            }
        }
    }, []);

    return (
        <button className={`${buttonStyles.button} ${buttonSize} ${buttonWidth}`} {...rest}>
            <div className={`${buttonStyles.button__label}`}>{children}</div>
            <div className={`${buttonStyles.button__bg}`}></div>
        </button>
    );
};
