import React, {useState} from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import {Link} from 'react-router-dom';

import {PageWrapper} from '../../components/PageStyle';
import BackgroundImg from '../../assets/businessdomainbackground.png';
import {PageTitleWrpper, PageTitle, MainImgTitle, NavBarWrapper, MobileNavBarWrapper, NavBlock, SelectNavBlock, RedSpanBold, Arrow, MobileSelectNavBlock, MobileNavBlock } from '../../components/PageStyle';
import styled from '@emotion/styled';
import ProfileImg from '../../assets/fireextinguisher.png';

const Inspection = () => {

    const [open, setopen] = useState(false);
    const onToggle = () => {
        setopen(!open);
    }

    return (
        <PageWrapper>
            <Header/>
            <MainImg>
                <MainImgTitle>
                    사업분야
                </MainImgTitle>
            </MainImg>
            <NavBarWrapper open={open}>
                    <Link to="/inspection" style={{textDecoration: 'none', color: "#000"}}>
                        <SelectNavBlock onClick={onToggle}>소방시설안전관리/점검<Arrow/></SelectNavBlock>
                    </Link>
                    <Link to="/license" style={{textDecoration: 'none', color: "#000"}}>
                        <NavBlock style={{width: "17vw", maxWidth: "255px"}}>위험물 관리대행</NavBlock>
                    </Link>
                    <Link to="/corporation" style={{textDecoration: 'none', color: "#000"}}>
                        <NavBlock>소방 공사/위험물 공사</NavBlock>
                    </Link>
                    <Link to="/automotive-parts" style={{textDecoration: 'none', color: "#000", borderRight: "1px solid #D9D9D9"}}>
                        <NavBlock>전기자동차</NavBlock>
                    </Link>
                    <MobileNavBarWrapper open={open}>
                        <Link to="/inspection" style={{textDecoration: 'none', color: "#000"}}>
                            <MobileSelectNavBlock onClick={onToggle}>소방시설안전관리/점검<Arrow/></MobileSelectNavBlock>
                        </Link>
                        <Link to="/license" style={{textDecoration: 'none', color: "#000"}}>
                            <MobileNavBlock>위험물 관리대행</MobileNavBlock>
                        </Link>
                        <Link to="/corporation" style={{textDecoration: 'none', color: "#000"}}>
                            <MobileNavBlock>소방 공사/위험물 공사</MobileNavBlock>
                        </Link>
                        <Link to="/automotive-parts" style={{textDecoration: 'none', color: "#000"}}>
                            <MobileNavBlock>전기자동차</MobileNavBlock>
                        </Link>
                    </MobileNavBarWrapper>
                </NavBarWrapper>
            <PageTitleWrpper>
                <PageTitle>소방시설안전관리/점검</PageTitle>
            </PageTitleWrpper>
            <HelloWrapper>
                    <Profile/>
                    <Descrip>
                    우정에이치앤씨(주)는 특정소방대상물 및 공공기관 소방안전관리 위탁대행업체로서 대상처 대상으로 소방시설안전관리를 실시하여 소방시설의 
안전을 최우선으로 생각하며,  소방대상물의 작동유무 및 유지관리에 필요한 점검을 실시하여 소방시설 설치유지 및 안전관리에 관한 법률(제25조)과 화재안전기준에 적합하게 최상의 서비스를 제공합니다.
                    </Descrip>
                    <Descrip>
                        ▲ <RedSpanBold>소방시설 안전관리</RedSpanBold> <br/>
                        ▲ <RedSpanBold>작동기능 점검</RedSpanBold><br/>
                        &nbsp;&nbsp;· 모든 소방대상물에 해당하며 기능적인 작동여부 점검<br/>
                        &nbsp;&nbsp;· 1년에 1회 실시하며 관계인, 소방안전관리자, 관리업자가 실시. 2년 자체 보관<br/>
                        ▲ <RedSpanBold>종합정밀 점검</RedSpanBold><br/>
                        &nbsp;&nbsp;· 스프링클러, 물분무 등 소화설비가 설치된 5,000m2 이상 건축물, 16층 이상의 아파트가 해당되며 점검장비를 이용하여 정밀 점검<br/>
                        &nbsp;&nbsp;· 1년에 1회 실시하며 관리업자, 소방안전관리자(관리자, 기술사)가 실시<br/>
                        &nbsp;&nbsp;· 점검 후 30일 이내에 관할 소방서에 제출, 2년 보관<br/>
                        ▲ 자체점검 관련 규정<br/>
                        &nbsp;&nbsp;<RedSpanBold>1. 자체점검을 실시하지 않은 관계인</RedSpanBold><br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;· 1년 이하의 징역 또는 1천만원 이하의 벌금( 제25조 제1항)<br/>
                        &nbsp;&nbsp;<RedSpanBold>2. 200만원 이하의 과태료</RedSpanBold>( 제25조 제2항의 규정을 위반하여 소방시설 등의 점검결과를 보고하지 아니한 자 또는 거짓으로 보고한자)<br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;· 보고하지 아니한 자 : 과태료 100만원 - 거짓으로 보고한 자 : 과태료 200만원<br/>

                    </Descrip>
                </HelloWrapper>
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

const Descrip = styled.div`
    width: 90vw;
    max-width: 1100px;
    font-size: 18px;
    line-height: 32px;
    margin-top: 5vh;
    line-height: 40px;
    @media screen and (max-width: 1155px) {
        margin-top: 5vh;
  }
    @media screen and (max-width: 780px) {
        font-size: 16px;
        line-height: 35px;
  }
`;

const HelloWrapper = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    width: 90vw;
    max-width: 1100px;
    margin: 10vh auto 15vh auto;
    justify-content: space-between;
    @media screen and (max-width: 1155px) {
        justify-content: center;
  }
  @media screen and (max-width: 780px) {
        font-size: 16px;    
        margin: 5vh auto 15vh auto;
  }
`;

const Profile = styled.div`
    width: 90vw;
    max-width: 1100px;
    height: 270px;
    background: #282D27;
    background-image: url(${ProfileImg});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center; 
    display: flex;
    align-items: flex-end;
    justify-content: center;
    flex-direction: column;
    @media screen and (max-width: 840px) {
        max-width: 640px;
        width: 90vw;
        height: 60vw;
        margin: 0 auto;
        background-position: 80% 80%; 
  }
`;

export default Inspection;