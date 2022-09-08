import React from 'react';
import HumanRealisticStyles from "./styles/HumanRealistic.module.scss"
import background from "../../../../public/asset/images/background.jpg";
interface HumanRealisticProps {}

const HumanRealistic: React.FunctionComponent<HumanRealisticProps> = () => {
    return (
        <section className={`${HumanRealisticStyles.section}`}>
            <div className={`${HumanRealisticStyles.container}`}>
                <div className={`${HumanRealisticStyles.wrapper}`}>
                    <h3 className={`${HumanRealisticStyles.human_realistic_platform}`}>Human Realistic Platform</h3>
                    <p className={`${HumanRealisticStyles.human_realistic_platform_content}`}>HuRe platform will provide a destination for human model system tech to live, interact and flourish</p>
                </div>
                <div className={`${HumanRealisticStyles.row}`}>
                    <div>
                               <p>ssssssssssssss</p>
                    </div>

                    <div    className={`${HumanRealisticStyles.frame}`}>
                                    <div className={`${HumanRealisticStyles.frame_content}`}>
                                            {/* <img src={`${background}`} alt=''></img> */}
                                    </div>
                                    
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HumanRealistic;
