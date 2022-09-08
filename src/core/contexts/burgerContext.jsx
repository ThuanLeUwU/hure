import React from 'react';

export const BurgerContext = React.createContext({
    isActive: false,
    handleSetIsActive: () => {},
});

export function BurgerContextProvider({ children }) {
    const [isActive, setIsActive] = React.useState(false);

    const _handleSetIsActive = () => {
        setIsActive(!isActive);
    };

    return <BurgerContext.Provider value={{ isActive, handleSetIsActive: _handleSetIsActive }}>{children}</BurgerContext.Provider>;
}

export function useBurgerContext() {
    const methods = React.useContext(BurgerContext);
    return { ...methods };
}
