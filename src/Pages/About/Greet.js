import React, { useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import {Link} from 'react-router-dom';

import {PageWrapper} from '../../components/PageStyle';
import BackgroundImg from '../../assets/aboutbackground.png';
import {PageTitleWrpper, PageTitle, PageBlockWrapper, BlueSpan, GreenSpan, Date, Space, NavBarWrapper, NavBlock, SelectNavBlock, MobileNavBarWrapper, MobileSelectNavBlock, MobileNavBlock, Arrow } from '../../components/PageStyle';
import styled from '@emotion/styled';
import ProfileImg from '../../assets/profile.png';
import ArrowImg from '../../assets/arrow.png';
import {css} from '@emotion/react';

const Greet = () => {

    const [open, setopen] = useState(false);
    const onToggle = () => {
        setopen(!open);
    }

    return (
        <PageWrapper>
            <Header/>
            <MainImg>
                <MainImgTitle>
                    회사소개
                </MainImgTitle>
            </MainImg>
            <NavBarWrapper open={open} >
                    <Link to="/greet" style={{textDecoration: 'none', color: "#000"}}>
                        <SelectNavBlock onClick={onToggle}>회사소개<Arrow/> </SelectNavBlock>
                    </Link>
                    <Link to="/organize-chart" style={{textDecoration: 'none', color: "#000"}}>
                        <NavBlock>조직도</NavBlock>
                    </Link>
                    <Link to="/business-partner" style={{textDecoration: 'none', color: "#000"}}>
                        <NavBlock>사업자등록증 및 면허증</NavBlock>
                    </Link>
                    <Link to="/business-performance" style={{textDecoration: 'none', color: "#000"}}>
                        <NavBlock>사업실적</NavBlock>
                    </Link>
                    <Link to="/way-to-come" style={{textDecoration: 'none', color: "#000", borderRight: "1px solid #D9D9D9"}}>
                        <NavBlock>찾아오시는 길</NavBlock>
                    </Link>
                    <MobileNavBarWrapper open={open}>
                        <Link to="/greet" style={{textDecoration: 'none', color: "#000"}}>
                            <MobileSelectNavBlock>회사소개</MobileSelectNavBlock>
                        </Link>
                        <Link to="/organize-chart" style={{textDecoration: 'none', color: "#000"}}>
                            <MobileNavBlock>조직도</MobileNavBlock>
                        </Link>
                        <Link to="/business-partner" style={{textDecoration: 'none', color: "#000"}}>
                            <MobileNavBlock>사업자등록증 및 면허증</MobileNavBlock>
                        </Link>
                        <Link to="/business-performance" style={{textDecoration: 'none', color: "#000"}}>
                            <MobileNavBlock>사업실적</MobileNavBlock>
                        </Link>
                        <Link to="/way-to-come" style={{textDecoration: 'none', color: "#000"}}>
                            <MobileNavBlock>찾아오시는 길</MobileNavBlock>
                        </Link>
                    </MobileNavBarWrapper>
            </NavBarWrapper>
            <PageTitleWrpper>
                <PageTitle>회사소개</PageTitle>
            </PageTitleWrpper>
            <PageBlockWrapper>
                <HelloWrapper>
                    <ProfileWrapper>
                        <Descrip>
                            21세기는 <BlueSpan>새로운 지식과 정보, 디지털 경영방식</BlueSpan>이 요구되는 시기입니다.
                            따라서 저희 우정에이치앤씨(주)의 모든 임직원은 <BlueSpan>철저한 Service Mind의 함양</BlueSpan>과,
                            고객 위주의새로운 신공법의 기술개발로 선진적인 현장 운영에 최선의 노력을 다하고자 합니다.<br/>
                            <br/>
                            당사는 <GreenSpan>최고 수준의 기술 인력</GreenSpan>을 바탕으로 <GreenSpan>고품질 서비스와 친절한 고객 상담</GreenSpan>으로
                            고객에게 만족을 드리고자 임직원 모두가 최선을 다할 것을 약속드립니다.
                            귀사의 위험물시설, 소방시설 운영을 정상화하고 귀사의 위험물, 소방안전의식을 함양하는데
                            일조하여 시설관계인께서 안전한 환경에서 근무하도록 노력하겠습니다.
                        </Descrip>
                        <Hello>
                            <Date>2003. 10.<Space/><DateDescrip>원엔지니어링 설립</DateDescrip></Date> 
                            <Date>2006. 12.<Space/><DateDescrip> 우정엔지니어링(주) 변경</DateDescrip></Date> 
                            <Date>2014. 04.<Space/><DateDescrip>우정에이치앤씨(주) 변경</DateDescrip></Date> 
                            <Date>2018. 11.<Space/><DateDescrip>제조업 등록 및 자본금 증자(3억 -{">"} 5억)</DateDescrip></Date>
                            <Date>2019. 05.<Space/><DateDescrip>친환경 자동차 사업부 설립(성거공장 구축 및 공장등록)</DateDescrip></Date>
                            <Date>2019. 07.<Space/><DateDescrip>HL그린파워 협력 업체 등록 및 부품 공금</DateDescrip></Date>
                            <Date>2019. 10.<Space/><DateDescrip>연구개발 전담부서 설립 및 인증</DateDescrip></Date>
                            <Date>2021. 01.<Space/><DateDescrip>경영혁신형 중소기업 인증(Main Biz)</DateDescrip></Date>
                            <Date>2021. 02.<Space/><DateDescrip>압전고무소자 관련 특허 등록(기술이전 - 호서대학교)</DateDescrip></Date>
                            <Date>2021. 03.<Space/><DateDescrip>사업재편계획 승인 기업 인증(산업통상자원부)</DateDescrip></Date>
                            <Date>2021. 06.<Space/><DateDescrip>벤처기업 인증(혁신성장유형)</DateDescrip></Date>
                        </Hello>
                    </ProfileWrapper>
                    <Profile/>

                </HelloWrapper>
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

const MainImgTitle = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 1088px;
    margin: 0 auto;
    @media screen and (max-width: 1207px) {
      width: 100vw;
      display: flex;

      align-items: center;
  }
`;

const HelloWrapper = styled.div`
    display: flex;
    flex-wrap: wrap-reverse;
    width: 1088px;
    margin: 5vh auto 5vh auto;
    justify-content: space-between;
    align-items: flex-end;
    @media screen and (max-width: 1208px) {
        width: 80vw;
        justify-content: center;
  }
    @media screen and (max-width: 780px) {
        width: 90vw;
  }
`;

const ProfileWrapper = styled.div`
    display: flex;
    flex-direction: column;

`;

const Hello = styled.div`
    margin-top: 5vh;
    font-size: 30px;
    @media screen and (max-width: 780px) {
        font-size: 19px;
        text-align: center;
  }
`;

const Profile = styled.div`
    width: 537px;
    height: 336px;
    background: #282D27;
    background-image: url(${ProfileImg});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center; 
    display: flex;
    align-items: flex-end;
    justify-content: center;
    flex-direction: column;
    margin-bottom: 3vh;
    @media screen and (max-width: 1024px) {
       min-width: 60vw;
       height: 40vw;
       margin: 3vh auto;
  }
  @media screen and (max-width: 780px) {
       min-width: 90vw;
       height: 55vw;
       margin: 3vh auto;
  }
`;

const Descrip = styled.div`
    width: 47vw;
    font-size: 18px;
    line-height: 35px;
    font-weight: 300;
    max-width: 478px;
  @media screen and (max-width: 1024px) {
        width: 70vw;
  }
  @media screen and (max-width: 780px) {
       width: 90vw;
       margin: 0 auto;
  }
`;

const DateDescrip = styled.span`
    font-size: 18px;
    line-height: 35px;
    font-weight: 300;
    @media screen and (max-width: 1480px) {
        font-size: 16px;
  }
  @media screen and (max-width: 780px) {
        width: 58vw;
        margin-left: 4vw;
        display: flex;
        justify-content: flex-start;
        text-align: left;
  }
`;

export default Greet;