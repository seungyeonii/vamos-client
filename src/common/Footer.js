import React from 'react';
import icon from "../img/icon.png";
import './Footer.css';

const Footer = () => {
    return (
        <div className="main">
            <div className="main_content">
                <img src={icon} width='200' height='45'></img>
                <div className="content2">
                    안정성을 기반한 중고거래 사이트

                    <div className="content1" >
                        무엇이든 물어보세요!
                    </div>
                </div>

                <div className="footer_maincontent">
                    <div className="content3">
                        이용약관
                        <div className="content4">
                           개인정보 약관
                        </div>
                        <div className="content5">
                            위치정보 약관
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;