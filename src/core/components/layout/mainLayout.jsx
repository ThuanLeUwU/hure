import React from 'react';
import mainLayoutStyles from './styles/mainLayout.module.scss';

export function MainLayout({ children }) {
    return <div className={`${mainLayoutStyles.main_layout}`}>{children}</div>;
}
