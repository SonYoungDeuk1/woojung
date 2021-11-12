import React, {useState} from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import {Link} from 'react-router-dom';

import {PageWrapper} from '../../components/PageStyle';
import BackgroundImg from '../../assets/businessdomainbackground.png';
import {PageTitleWrpper, PageTitle, MainImgTitle, NavBarWrapper, MobileNavBarWrapper, NavBlock, SelectNavBlock, RedSpanBold, Arrow, MobileSelectNavBlock, MobileNavBlock } from '../../components/PageStyle';
import styled from '@emotion/styled';
import ProfileImg from '../../assets/managementagency.png';

const ManagementAgency = () => {

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
                    <Link to="/license" style={{textDecoration: 'none', color: "#000"}}>
                        <NavBlock>위험물 인허가/설계</NavBlock>
                    </Link>
                    <Link to="/management-agency" style={{textDecoration: 'none', color: "#000"}}>
                        <SelectNavBlock onClick={onToggle}>위험물 안전관리대행<Arrow/></SelectNavBlock>
                    </Link>
                    <Link to="/inspection" style={{textDecoration: 'none', color: "#000"}}>
                        <NavBlock>소방시설안전관리/점검</NavBlock>
                    </Link>
                    <Link to="/corporation" style={{textDecoration: 'none', color: "#000"}}>
                        <NavBlock>소방 공사/위험물 공사</NavBlock>
                    </Link>
                    <Link to="/automotive-parts" style={{textDecoration: 'none', color: "#000"}}>
                        <NavBlock>친환경 자동차 부품</NavBlock>
                    </Link>
                    <Link to="/integration" style={{textDecoration: 'none', color: "#000"}}>
                        <NavBlock>내역(적산)</NavBlock>
                    </Link>
                    <MobileNavBarWrapper open={open}>
                        <Link to="/license" style={{textDecoration: 'none', color: "#000"}}>
                            <MobileNavBlock>위험물 인허가/설계</MobileNavBlock>
                        </Link>
                        <Link to="/management-agency" style={{textDecoration: 'none', color: "#000"}}>
                            <MobileSelectNavBlock>위험물 안전관리대행</MobileSelectNavBlock>
                        </Link>
                        <Link to="/inspection" style={{textDecoration: 'none', color: "#000"}}>
                            <MobileNavBlock>소방시설안전관리/점검</MobileNavBlock>
                        </Link>
                        <Link to="/corporation" style={{textDecoration: 'none', color: "#000"}}>
                            <MobileNavBlock>소방 공사/위험물 공사</MobileNavBlock>
                        </Link>
                        <Link to="/automotive-parts" style={{textDecoration: 'none', color: "#000"}}>
                            <MobileNavBlock>친환경 자동차 부품</MobileNavBlock>
                        </Link>
                        <Link to="/integration" style={{textDecoration: 'none', color: "#000"}}>
                            <MobileNavBlock>내역(적산)</MobileNavBlock>
                        </Link>
                    </MobileNavBarWrapper>
                </NavBarWrapper>
            <PageTitleWrpper>
                <PageTitle>위험물 안전관리대행</PageTitle>
            </PageTitleWrpper>
            <HelloWrapper>
                    <Profile/>
                    <Descrip>
                    우정에이치앤씨(주)는 위험물안전관리법 시행규칙 제57조 및 소방방재청의 지정을 받아 위험물안전관리자의 업무를 위탁 받아 수행할 수 있는 위험물안전관리대행기관입니다. 기업 활동 규제 완화에 관한 특별조치법 제40조 제1항 제3호의 규정에 의하여, 위험물안전관리자의 업무를 위탁하실 수 있습니다. 고객의 안전을 최우선으로 하며, 고객이 신뢰할 수 있는 위험물안전관리 서비스를 제공하겠습니다.
                    </Descrip>
                    <Descrip>
                    ▲ 위험물 안전관리자의 빈번한 <RedSpanBold>선, 해임 접수</RedSpanBold> 등 소방서 민원업무를 대행 <br/>
▲ <RedSpanBold>지위승계, 품명이나 등록사항의 변경 신고</RedSpanBold> 등 신고 기간 내에 맞춰 접수함으로써 직·간접 인건비 등 경비, 시간의 절약<br/>
▲ 기업 활동 규제 완화에 관한 특별조치법에 의하여 법적 선임대상인 안전관리자를 채용하지 않고 대행기관에 업무 위탁을 가능하게 함으로써<br/>
     기업의 국가기술자격자 채용의 어려움 및 인건비 부담 해소<br/>
▲ 소방서의 급작스런 단속이나 검사가 생길 시 <RedSpanBold>신속한 대처 가능</RedSpanBold><br/>
▲ 위험물안전관리법에 의거한 위험물 제조소등의 시설기준(위치, 구조, 설비)에 적합하도록 점검 및 <RedSpanBold>유지관리, 개선방안 제시</RedSpanBold><br/>
▲ 법 제18조제1항의 규정에 의하여 보존해야 하는 <RedSpanBold>정기점검을 실시하여 결과를 보존</RedSpanBold>하여 드립니다. (해당사업장) - 위험물 저장 또는 취급에 관한<br/>
     기술기준과 예방규정에 적합하도록 작업자 (안전관리원)에게 <RedSpanBold>안전교육 제공</RedSpanBold><br/>
▲ <RedSpanBold>예방규정 작성</RedSpanBold><br/>
▲ 위험물 안전관리 관련 법령정보 및 기술 <RedSpanBold>자료 제공</RedSpanBold><br/>
▲ 소방방재청 지정 위험물안전관리대행기관의 축적된 기술과 경험을 활용 체계적인 위험물 안전관리 활동이 가능<br/>
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
  }
`;


export default ManagementAgency;