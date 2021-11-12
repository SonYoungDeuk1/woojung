import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import {Link} from 'react-router-dom';

import {PageWrapper} from '../../components/PageStyle';
import BackgroundImg from '../../assets/aboutbackground.png';
import {PageTitleWrpper, PageBlockWrapper, PageTitle, NavBarWrapper, NavBlock, SelectNavBlock, PageSubTitle, MainImgTitle } from '../../components/PageStyle';
import styled from '@emotion/styled';
import VisionImg from '../../assets/vision.png';

const Vision = () => {
    return (
        <PageWrapper>
            <Header/>
            <MainImg>
                <MainImgTitle>
                    회사소개
                </MainImgTitle>
            </MainImg>
            <NavBarWrapper>
                <Link to="/greet" style={{textDecoration: 'none', color: "#000"}}>
                    <NavBlock>ceo인사말</NavBlock>
                    </Link>
                    <Link to="/vision" style={{textDecoration: 'none', color: "#000"}}>
                        <SelectNavBlock>비전</SelectNavBlock>
                    </Link>
                    <Link to="/history" style={{textDecoration: 'none', color: "#000"}}>
                        <NavBlock>연혁</NavBlock>
                    </Link>
                    <Link to="/business-partner" style={{textDecoration: 'none', color: "#000"}}>
                        <NavBlock>사업파트너</NavBlock>
                    </Link>
                    <Link to="/way-to-come" style={{textDecoration: 'none', color: "#000"}}>
                        <NavBlock>오시는 길</NavBlock>
                    </Link>
                        <Link to="/organize-chart" style={{textDecoration: 'none', color: "#000"}}>
                    <NavBlock>조직도</NavBlock>
                    </Link>
                </NavBarWrapper>
            <PageTitleWrpper>
                <PageTitle>비전</PageTitle>
            </PageTitleWrpper>
            <PageBlockWrapper>
                <VisionCard/>
                <PageSubTitle>더 나은 세상을 만들어가는 일,<br/>글로벌 바이오제약 기업 메디톡스가 먼저 시작합니다.</PageSubTitle>
                <Descrip>2006년 보툴리눔 톡신 A형 제제 메디톡신주®(수출명: Neuronox®, Siax®, Botulift®, Cunox®, and Meditoxin®)의 출시 이후 메디톡스는 폭발적인 성장세를 보여왔습니다. 한국 시장에서는 2009년 이후 40%에 가까운 높은 시장 점유율을 기록했으며, 다양한 적응증이 추가됨에 따라 시장 점유율은 더욱 높아질 것으로 기대됩니다. 전 세계 보툴리눔 톡신 시장은 꾸준한 성장을 지속하고 있으며, 의료 미용 분야뿐만 아니라 치료 분야까지 그 규모가 크게 확대될 것입니다.<br/><br/>
메디톡스는 특히, 미국과 유럽 진출을 목표로 현재 개발 중인 신제형 보툴리눔 톡신 제품들의 출시와 함께 글로벌 시장에서
10% 이상의 점유율을 달성할 계획입니다.<br/><br/>
앞으로 메디톡스는 글로벌 시장을 향한 도전 정신과 열정으로 바이오제약 분야의 선도자로서 성장해 갈 것입니다.</Descrip>
            </PageBlockWrapper>
            <Footer/>
        </PageWrapper>
    );
}

const MainImg = styled.div`
    width: 100%;
    height: 30vh;
    background: #282D27;
    background-image: url(${BackgroundImg});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center; 
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    color: #fff;
    font-size: 45px;
    font-weight: 600;
    @media screen and (max-width: 1024px) {
        height: 17vh;
        font-size: 26px;
  }
`;

const VisionCard = styled.div`
    width: 700px;
    height: 450px;
    margin: 5vh auto;
    background-image: url(${VisionImg});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center; 
    display: flex;
    align-items: flex-end;
    justify-content: center;
    flex-direction: column;
    @media screen and (max-width: 840px) {
    width: 90vw;
    height: 52vw;
    }
`;

const Descrip = styled.div`
    width: 60vw;
    margin: 0 auto;
    text-align: center;
    font-size: 20px;
    line-height: 32px;
    margin-bottom: 30vh;
    font-weight: 300;
    @media screen and (max-width: 840px) {
    width: 90vw;
    text-align: left;
        font-size: 16px;
    }
`;

export default Vision;