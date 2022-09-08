import * as React from 'react';
import OurMissionVisionstyle from './styles/ourMissionVision.module.scss';

interface OurMissionVisionProps {}
export const OurMissionVision: React.FunctionComponent<OurMissionVisionProps> = () => {
    return (<nav className={`${OurMissionVisionstyle.ourMissionVision}`}>
        <div className='container'>
            <div className={`${OurMissionVisionstyle.OurMissionVisionWrapper}`}>
                <h2 className={`${OurMissionVisionstyle.tittle_missionvision}`}>
                    <span>Our Mission & Vision</span>   
                </h2>
                <p className={`${OurMissionVisionstyle.tittle_content_missionvision}`}>HuRe platform will provide a destination for human model system tech to live, interact and flourish.</p>
            </div>
            <div>
                <div className={`${OurMissionVisionstyle.frame_hure}`}>
                    <div>
                        <div>
                            <img src='https://framerusercontent.com/modules/bpm3xOeqqHQ3FyegZt02/1itw2djUH4ANqTTONonp/assets/ZUPkDMJpDKaJlChSJkHDGpdk6o.jpg'/>
                        </div>
                    </div>
                    <div>
                        <div>
                            <h3 className={`${OurMissionVisionstyle.tittle_hure}`}>
                            Hure's Vision
                            </h3>
                        </div>
                        <div>
                            <p className={`${OurMissionVisionstyle.content_hure}`}>
                            Hure will provide an opportunity for everyone who's interested in a very real-to-life version of the metaverse. Hure will be the most hyper-realistic verse across the entire landscape of the metaverse. People, brands, and organizations that are looking to showcase themselves, their brands, or their products in the highest quality will make Hure the place where they can truly demonstrate their desired experience.
                            </p>
                        </div>
                    </div>
                </div>
                <div className='frame2'>
                    <div>
                        <div>
                            <img src='https://framerusercontent.com/modules/bpm3xOeqqHQ3FyegZt02/1itw2djUH4ANqTTONonp/assets/43FzARX0u61JRcLg7P8t35pPrk.jpg'/>
                        </div>
                    </div>
                    <div>
                        <div className=''>
                            <h3 className={`${OurMissionVisionstyle.tittle_content_missionvision}`}>
                            Hure's mission
                            </h3>
                        </div>
                        <div>
                            <p className={`${OurMissionVisionstyle.tittle_content_missionvision}`}>
                            Through our revolutionary technological capacity Hure aims to create the most hyper-realistic verse that will Bring brands and people together with the intent of building the highest quality web3 experience.                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>        
    </nav>
    
    );
};