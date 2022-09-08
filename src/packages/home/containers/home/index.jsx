import * as React from 'react';
import { Navbar } from '../../../../core/components/navbar';
import { Banner } from '../../../../core/components/banner';
import { OurMissionVision } from '../../../../core/components/OurMissionVision';

export const Home = () => {
    return (
        <div>
            <Navbar />
            <Banner />
            <OurMissionVision />
        </div>
    );
};
