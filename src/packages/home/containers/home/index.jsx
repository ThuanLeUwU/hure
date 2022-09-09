import * as React from 'react';
import { Banner } from '../../components/banner';
import { HumanRealistic } from '../../components/humanRealistic';
import { OurMissionVision } from '../../components/ourMissionVision';
import { MainLayout } from '../../../../core/components/layout/mainLayout';

export const Home = () => {
    return (
        <MainLayout>
            <Banner />
            <HumanRealistic />
            <OurMissionVision />
        </MainLayout>
    );
};
