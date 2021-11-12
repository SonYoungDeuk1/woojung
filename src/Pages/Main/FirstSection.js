import React from 'react';
import styled from '@emotion/styled';

import BackgroundImg from '../../assets/mainbackgroundimg.png';
import { Title, SubTitle } from '../../components/PageStyle';
import BackgroundVideo from '../../assets/main.mp4'

const FirstSection = () => {
    return (
        <>
        <Background>
        <ContentWrapper>
                <FirstTitle>신뢰를 바탕으로 <br/>고객님의 안전을 책임지겠습니다.</FirstTitle>
                <FirstSubTitle>최고 수준의 기술 인력으로 위험물 설계, 시공, 준공, 전반적인 종합컨설팅을 하고있습니다.</FirstSubTitle>
            </ContentWrapper>
            <Video autoPlay loop controls={false} playsinline muted >
                <source src={BackgroundVideo}/>
            </Video>
        </Background>
        </>
    );
}

const Video = styled.video`
    height: 93vh;
    width: 100%;
    object-fit: cover;
    position: absolute;
    filter: brightness(80%);
    @media screen and (max-width: 840px) {
        display: none;
    }
`;

const Background = styled.div`
    width: 100%;
    height: 93vh;
    background-image: url(${BackgroundImg});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center; 
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-position: 40% 40%; 
`;

const ContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    z-index: 1;
`;


const FirstTitle = styled(Title)`
    color: #fff;
    font-size: 62px;
    line-height: 88px;
    margin: 0;
    @media screen and (max-width: 760px) {
    line-height: 10vw;
    font-size: 24px;
    margin-top: 5vh;
  }
`;

const FirstSubTitle = styled(SubTitle)`
    font-size: 30px;
    font-weight: 600;
    color: #FFF041;
    margin-top: 35px;
    @media screen and (max-width: 760px) {
        width: 70vw;
        font-size: 14px;
        line-height: 5vw;
  }
`;

export default FirstSection;