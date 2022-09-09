import * as React from 'react';
import { Banner } from '../../components/banner';
import { HumanRealistic } from '../../components/humanRealistic';
import { OurMissionVision } from '../../components/ourMissionVision';

export const Home = () => {
    return (
        <div>
            <Banner />
            <HumanRealistic />
            <OurMissionVision />
        </div>
    );
};
