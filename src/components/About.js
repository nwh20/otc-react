import React from 'react';
import { ImgAbout } from '../img';
import styled from 'styled-components';

const StyledTyping = styled.h3`
    margin-bottom: 30px;
    width: 255px;
    font-size: 18px;
    color: rgb(95, 95, 95);
    white-space:nowrap;
    overflow:hidden;
    border-right: 5px solid rgb(95, 95, 95);
    animation: typing 3s .7s steps(30, end), blinking 1s step-end infinite;
    
    @keyframes typing {
        from { 
            width: 0; 
        }
        to { 
            width: 255px; 
        }
    }
    
    @keyframes blinking {
        from, to {
            border-color: transparent;
        }
        50% { 
            border-color: rgb(95, 95, 95);
        }
    }
`;

const About = () => {
    return (
        <div className="about">
            <div className="wrap-page">
                <h2>ABOUT OLDIE THE CAMERA</h2>
                <div className="about-txt-wrap">
                    <StyledTyping>진심을 담아 카메라를 수집합니다</StyledTyping>
                    <div className="about-txt-intro">
                        2010년부터 전세계를 여행하며 다양한 카메라를 수집하였습니다.
                        취미로 하던 수집을 바탕으로 2014년부터 Oldie The Camera라는 이름으로 이베이에서 빈티지 카메라와 주변용품들을 매입, 매수하고 있습니다. 
                        2020년 서울 성수동에서 빈티지 카메라 쇼룸을 오픈하여 판매, AS의 업무를 오프라인으로도 운영합니다.
                        카메라를 사랑하는 마음을 담아, 고객분들에게도 이 마음이 전해지기를 바라며 하루를 보냅니다.
                    </div>
                    <div className="about-txt-info">
                        모든 온라인 판매는 저희의 이베이 스토어에서 이베이결제로 판매되고 있습니다. 
                        오프라인으로는 저희 쇼룸에서 구매 가능합니다. 
                        오직 이베이 스토어 내의 제품만이 쇼룸에 전시되고 있습니다.
                        쇼룸은 오전 10시부터 오후 5시까지 월요일을 제외하고 매일 운영하고 있으며, 그 외 특수한 휴무일은 저희 인스타그램을 참고해주세요!
                        CS업무 또한 운영시간 내에서 운영됩니다. 
                        쇼룸 전화로 운영시간 내 전화주시거나 저희 이메일로 메세지를 남겨주시면 바로 연락을 드리겠습니다.
                    </div>
                    <div className="about-txt-eng">
                        Oldie The Camera is a vintage camera collection store based in Seoul, South Korea. 
                        All online purchase are through our Ebay store, and offline purchase are also available at our showroom in Seongsu-dong, Seoul.
                        Our showroom and customer servise center are open from 10:00 - 17:00 (Monday off), you can  also contact us by phone or email.
                    </div>
                    <span>OLDIETHECAMERA@GMAIL.COM</span>
                    <span>(+82)02-1001-1001</span>
                    <img src={ImgAbout} alt="about" />
                </div>
            </div>
        </div>
    );
}

export default About;