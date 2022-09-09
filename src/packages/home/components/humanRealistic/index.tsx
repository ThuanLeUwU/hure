import React from 'react';
import HumanRealisticStyles from './styles/HumanRealistic.module.scss';
// import { Video } from 'next-seo/lib/types';
import background from '../../../../public/asset/images/background.jpg';
interface HumanRealisticProps {}

export const HumanRealistic: React.FunctionComponent<HumanRealisticProps> = () => {
    return (
        <section className={`${HumanRealisticStyles.section}`}>
            <div className={`${HumanRealisticStyles.container}`}>
                <div className={`${HumanRealisticStyles.wrapper}`}>
                    <h3 className={`${HumanRealisticStyles.human_realistic_platform}`}>Human Realistic Platform</h3>
                    <p className={`${HumanRealisticStyles.human_realistic_platform_content}`}>
                        HuRe platform will provide a destination for human model system tech to live, interact and flourish
                    </p>
                </div>
                <div className={`${HumanRealisticStyles.row}`}>
                    <div>
                        <video
                            className={`${HumanRealisticStyles.video}`}
                            src="../asset/videos/MmohB3jdeCoJt2WDgx0K1JAirvA.mp4"
                            controls
                            autoPlay
                        ></video>
                    </div>
                    <div className={`${HumanRealisticStyles.frame}`}>
                        <div className={`${HumanRealisticStyles.image}`}>
                            <div className={`${HumanRealisticStyles.frame_content}`}></div>
                        </div>
                        {/* <div className={`${HumanRealisticStyles.frame_content}`}>
                            <div className={`${HumanRealisticStyles.image}`}></div>
                        </div> */}
                    </div>
                </div>
            </div>
        </section>
    );
};
