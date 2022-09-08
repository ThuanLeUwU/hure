import '../styles/globals.css';
import Script from 'next/script';
import { Provider } from 'react-redux';
import { store } from '../src/core/store';
import { GetCurrentUserWrapper } from '../src/core/components/routerProtection';
import { ProgressBar } from '../src/core/components/loading';
import { Navbar } from '../src/core/components/navbar';
import { BurgerLink } from '../src/core/components/burger/burgerLink';
import { BurgerContextProvider } from '../src/core/contexts/burgerContext';

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Script async src="https://www.googletagmanager.com/gtag/js?id=G-FEMBDB700Z" />
            <Script type="text/javascript" src="/static/js/google.script.js" />
            <Provider store={store}>
                <GetCurrentUserWrapper>
                    <BurgerContextProvider>
                        <Navbar />
                        <Component {...pageProps} />
                        <BurgerLink />
                    </BurgerContextProvider>
                </GetCurrentUserWrapper>
            </Provider>
        </>
    );
}

export default MyApp;
