import React, {useState} from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import {Link} from 'react-router-dom';

import {PageWrapper} from '../../components/PageStyle';
import BackgroundImg from '../../assets/businessdomainbackground.png';
import {PageTitleWrpper, PageTitle, MainImgTitle, NavBarWrapper, MobileNavBarWrapper, NavBlock, SelectNavBlock, RedSpanBold, Arrow, MobileSelectNavBlock, MobileNavBlock } from '../../components/PageStyle';
import styled from '@emotion/styled';
import ProfileImg from '../../assets/helmet.png';
import Chart1Img from '../../assets/chart1.png';
import Chart2Img from '../../assets/chart2.png';

const Corporation = () => {

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
                        <NavBlock>소방시설안전관리/점검</NavBlock>
                    </Link>
                    <Link to="/license" style={{textDecoration: 'none', color: "#000"}}>
                        <NavBlock style={{width: "17vw", maxWidth: "255px"}}>위험물 관리대행</NavBlock>
                    </Link>
                    <Link to="/corporation" style={{textDecoration: 'none', color: "#000"}}>
                        <SelectNavBlock onClick={onToggle}>소방 공사/위험물 공사<Arrow/></SelectNavBlock>
                    </Link>
                    <Link to="/automotive-parts" style={{textDecoration: 'none', color: "#000", borderRight: "1px solid #D9D9D9"}}>
                        <NavBlock>전기자동차</NavBlock>
                    </Link>
                    <MobileNavBarWrapper open={open}>
                        <Link to="/inspection" style={{textDecoration: 'none', color: "#000"}}>
                            <MobileNavBlock onClick={onToggle}>소방시설안전관리/점검</MobileNavBlock>
                        </Link>
                        <Link to="/license" style={{textDecoration: 'none', color: "#000"}}>
                            <MobileNavBlock>위험물 관리대행</MobileNavBlock>
                        </Link>
                        <Link to="/corporation" style={{textDecoration: 'none', color: "#000"}}>
                            <MobileSelectNavBlock>소방 공사/위험물 공사</MobileSelectNavBlock>
                        </Link>
                        <Link to="/automotive-parts" style={{textDecoration: 'none', color: "#000"}}>
                            <MobileNavBlock>전기자동차</MobileNavBlock>
                        </Link>
                    </MobileNavBarWrapper>
                </NavBarWrapper>
            <PageTitleWrpper>
                <PageTitle>소방 공사/위험물 공사</PageTitle>
            </PageTitleWrpper>
            <HelloWrapper>
                    <Profile/>
                    <Descrip>
                        위험물의 저장 및 취급시설은 위험물안전관리법에서 정하는 기준에 적합하게 설치, 유지하여야 합니다. 위험물설비 및 공사는 관련 기준을 잘 숙지하고 설계도서에 의하되 실무경험이 많은 업체에 의뢰하는 것이 시행착오를 줄이고 경비를 절감하는 효과를 얻을 수 있습니다.
                        <br/>
                        <br/>
                        우정에이치앤씨(주)는 다양한 시공 경험을 바탕으로 사회적 요구에 부응하는 기업으로 나아가고 있습니다.
                        <br/>
                        <br/>
                        우정에이치앤씨(주)는 위험물 설계 전문업체로서 현장여건에 가장 적합한 설계도서를 작성하고, 설계도서를 토대로 책임시공을 약속합니다.
                        <br/>
                        <br/>
                        당사는 신규 설치 및 변경 공사 뿐만 아니라 제조소 등의 용도폐지 공사까지 위험물 전 반에 대한 공사업무를 수행하고 있습니다.
                    </Descrip>
                </HelloWrapper>
                <PageTitleWrpper>
                    <SubTitle>1. 소방기술자의 배치기준</SubTitle>
                </PageTitleWrpper>
                <ChartWrapper>
                    <Chart1/>
                </ChartWrapper>
                <PageTitleWrpper>
                    <SubTitle>소방시설공사업</SubTitle>
                </PageTitleWrpper>
                <ChartWrapper>
                    <Chart2/>
                </ChartWrapper>
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
    max-width: 536px;
    font-size: 18px;
    line-height: 35px;
    @media screen and (max-width: 1155px) {
        margin-top: 5vh;
  }
    @media screen and (max-width: 780px) {
        font-size: 16px;
  }
`;

const HelloWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 90vw;
    max-width: 1100px;
    margin: 10vh auto 0 auto;
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
    width: 508px;
    height: 536px;
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
  }
`;

const SubTitle = styled.div`
    font-size: 25px;
    margin: 10vh 0 5vh 0;
    font-weight: 600;
    @media screen and (max-width: 780px) {
        width: 90vw;
        font-size: 18px;    
  }
`;

const Chart1 = styled.div`
    width: 1088px;
    height: 906px;
    background-image: url(${Chart1Img});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center; 
    display: flex;
    align-items: flex-end;
    justify-content: center;
    flex-direction: column;
    margin: 0 auto;
    @media screen and (max-width: 840px) {
        width: 544px;
        height: 453px;
  }
`;

const Chart2 = styled(Chart1)`
    background-image: url(${Chart2Img});
    height: 772px;
    margin-bottom: 20vh;
    @media screen and (max-width: 840px) {
        height: 386px;
  }
`;

const ChartWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-wrap: wrap;
    width: 95vw;
    overflow-y: scroll;
    margin-left: 5vw;
`;

export default Corporation;