import React from 'react';
import logoStyles from './logo.module.scss';

interface HureLogoProps {}

export const HureLogo: React.FunctionComponent<HureLogoProps> = () => {
    return (
        <div className={`${logoStyles.logo}`}>
            <div className={`${logoStyles.logo__image}`}>
                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36">
                    <path
                        d="M 1 1 L 34.5 1 L 18 34.5 Z"
                        fill="transparent"
                        strokeWidth="1.5"
                        stroke="rgb(23, 221, 208)"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    ></path>
                </svg>
            </div>
            <div className={`${logoStyles.logo__text}`}>
                <span className="text-white">HU</span>
                <span className="text-cyan">RE</span>
            </div>
        </div>
    );
};
