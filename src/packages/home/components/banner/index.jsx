import * as React from 'react';
import bannerStyle from './styles/banner.module.scss';

export const Banner = () => {
    return (
        <section className={`${bannerStyle.section}`}>
            <div className={`${bannerStyle.image2}`}></div>
            <div className={`${bannerStyle.frame}`}></div>
            <div className={`${bannerStyle.image}`}></div>
            <div className={`${bannerStyle.container}`}>
                <div className={`${bannerStyle.wrapper}`}>
                    <div className={`${bannerStyle.humanplatform}`}>Human Realistic Platform</div>
                    <div className={`${bannerStyle.humanplatform__digital}`}>
                        the digital <span className={`${bannerStyle.texthighlight}`}>human&apos;s</span> first Hyper{' '}
                        <span className={`${bannerStyle.texthighlight}`}>Realistic</span> metaverse
                    </div>
                    <div className={`${bannerStyle.humanplatform__hure}`}>
                        HuRe platform will provide a destination for human model system tech to live, interact and flourish.
                    </div>
                </div>
            </div>
            <div className={`${bannerStyle.scrollmore}`}>scroll more</div>
        </section>
    );
};
