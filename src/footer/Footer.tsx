import React from 'react';
import style from './Footer.module.css'
import styleContainer from './../common/styles/Container.module.css'

const Footer = () => {
    return (
        <div className={style.footer}>
            <div className={`${styleContainer.container} ${style.container}`}>
                <h3 className={style.fullName}>Igor Olkhov</h3>
                <div className={style.socialRefs}>
                    <div className={style.socialRef}></div>
                    <div className={style.socialRef}></div>
                    <div className={style.socialRef}></div>
                    <div className={style.socialRef}></div>
                </div>
                <div className={style.trademark}>
                    © 2023 All Rights Reserved
                </div>
            </div>
        </div>
    );
};

export default Footer;