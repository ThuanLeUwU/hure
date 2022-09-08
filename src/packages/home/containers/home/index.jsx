import * as React from 'react';
import HumanRealistic from '../../../../core/components/humanRealistic';
// import {HumanRealistic} from '../../../../core/components/humanRealistic';
import { Navbar } from '../../../../core/components/navbar';

export const Home = () => {
    return (
        <div>
            <Navbar />
            <HumanRealistic/>
        </div>
    );
};
