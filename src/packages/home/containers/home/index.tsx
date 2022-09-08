import * as React from 'react';
import HumanRealistic from '../../../../core/components/humanRealistic';
import { Navbar } from '../../../../core/components/navbar';

interface HomeProps {}

export const Home: React.FunctionComponent<HomeProps> = () => {
    return (
        <div>
            <Navbar />
            <HumanRealistic/>
        </div>
    );
};
