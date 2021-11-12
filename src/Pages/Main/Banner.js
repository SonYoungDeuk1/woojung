import React from 'react';
import styled from '@emotion/styled';
import BackgroundImg from '../../assets/mainbanner.png';

const Banner = () => {
    return (
        <Background>
            <Content>
                충청지역 최고의 기술 및 노하우 보유 소방/위험물 종합컨설팅 회사
            </Content>
        </Background>
    );
}

const Background = styled.div`
    width: 100vw;
    height: 25vh;
    background: #fff;
    background-image: url(${BackgroundImg});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center; 
    display: flex;
    align-items: center;
    flex-direction: column;
    @media screen and (max-width: 840px) {
        height: 15vh;
  }
`;

const Content = styled.div`
    width: 80vw;
    padding: 0 10vw;
    position: absolute;
    height: 25vh;
    display: flex;
    flex-wrap: wrap;
    text-align: center;
    align-items: center;
    justify-content: center;
    color: #fff;
    font-size: 1.7vw;
    font-weight: 600;
    @media screen and (max-width: 840px) {
        height: 15vh;
        font-size: 16px;
  }
`;
export default Banner;