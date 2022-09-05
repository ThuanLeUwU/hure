import * as React from 'react';
import { Navbar } from '../../../../core/components/navbar';

interface HomeProps {}

export const Home: React.FunctionComponent<HomeProps> = () => {
    return (
        <div>
            <Navbar />
        </div>
    );
};
