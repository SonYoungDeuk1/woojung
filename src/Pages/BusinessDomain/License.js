import React, {useState} from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import {Link} from 'react-router-dom';

import {PageWrapper} from '../../components/PageStyle';
import BackgroundImg from '../../assets/businessdomainbackground.png';
import {PageTitleWrpper, PageTitle, MainImgTitle, NavBarWrapper, MobileNavBarWrapper, NavBlock, BlueSpan, GreenSpan, Arrow, MobileSelectNavBlock, MobileNavBlock } from '../../components/PageStyle';
import styled from '@emotion/styled';
import ProfileImg from '../../assets/dangerousgoodslicense.png';
import ProcessArrowImg from '../../assets/processarrow.png';
import ProcessArrowImg2 from '../../assets/processarrow2.png';

const License = () => {

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
                        <SelectNavBlock onClick={onToggle}>위험물 관리대행<Arrow/></SelectNavBlock>
                    </Link>
                    <Link to="/corporation" style={{textDecoration: 'none', color: "#000"}}>
                        <NavBlock>소방 공사/위험물 공사</NavBlock>
                    </Link>
                    <Link to="/automotive-parts" style={{textDecoration: 'none', color: "#000", borderRight: "1px solid #D9D9D9"}}>
                        <NavBlock>전기자동차</NavBlock>
                    </Link>
                    <MobileNavBarWrapper open={open}>
                        <Link to="/inspection" style={{textDecoration: 'none', color: "#000"}}>
                            <MobileNavBlock onClick={onToggle}>소방시설안전관리/점검</MobileNavBlock>
                        </Link>
                        <Link to="/license" style={{textDecoration: 'none', color: "#000"}}>
                            <MobileSelectNavBlock>위험물 관리대행</MobileSelectNavBlock>
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
                <PageTitle>위험물 관리대행</PageTitle>
            </PageTitleWrpper>
            <HelloWrapper>
                    <Profile/>
                    <Descrip>
                        우정에이치앤씨(주)는 풍부한 경험을 겸비한 회사로써, 위험물안전관리법에 의거한 제조소등의 위치/구조 또는 설비에 적합하도록 <BlueSpan>설치허가 및 변경허가의 대행 업무</BlueSpan>를 해드리고 있습니다.
                        <br/>
                        <br/>
                        설치허가 및 변경허가 접수 후, 완공검사 필증 교부까지 마무리 지어드립니다. 또한 고객의 작업장에 알맞도록 지정배수를 계산하여 품목변경도 해드리고 있으며 제조소 등의 <GreenSpan>용도폐지, 지위승계 신고 대행</GreenSpan>도 해드리고 있습니다.
                        <br/>
                        <br/>
                        위험물의 인허가에 관한 신뢰할 수 있는 인허가를 약속드리며, 위험물 시설의 인허가 절차 등에 관한 많은 어려움을 가지고 있었을 것이라 여깁니다.
                        <br/>
                        <br/>
                        당사는 <BlueSpan>위험물 설계, 시공, 완공까지 전반적인 종합컨설팅회사</BlueSpan>로써 항상 신뢰할 수 있는 서비스로 귀사의 부가가치 창출에 기여하겠습니다.
                    </Descrip>
            </HelloWrapper>
            <ProcessArrow/>
            <ProcessArrow2/>
            <HelloWrapper>
                <Descrip2 style={{marginTop: 0}}>
                    위험물 설계 : 소방시설공사업법 제 11조 제 4항에 의거, 위치, 구조, 설비, 피난, 경보, 소화설비 전문 설계
                    <br/>
                    인허가(설치허가) : 서류업무 처리 및 허가대행
                    <br/>
                    위험물 공사 : 전문소방시설공사업 / 자체 위험물 공사팀 운영
                    <br/>
                    인허가(완공검사) : 서류업무 처리 및 허가대행
                    <br/>
                    위험물안전관리대행 : 안전관리자 선임대행
                </Descrip2>
            </HelloWrapper>
            <HelloWrapper>
                <Descrip2 style={{marginTop: 0}}>
                <Descrip2Title>1. 대행업무 절차 및 필요성</Descrip2Title>
                <br/>
                ▲   위험물 안전관리자의 빈번한 선, 해임 접수 등 소방서 민원업무를 대행<br/>
                ▲ 지위승계, 품명이나 등록사항의 변경 신고 등 신고 기간 내에 맞춰 접수함으로써 직·간접 인건비 등 경비, 시간의 절약<br/>
                ▲ 기업 활동 규제 완화에 관한 특별조치법에 의하여 법적 선임대상인 안전관리자를 채용하지 않고 대행기관에 업무 위탁을 가능하게 함으로써<br/>
                    기업의 국가기술자격자 채용의 어려움 및 인건비 부담 해소<br/>
                ▲ 소방서의 급작스런 단속이나 검사가 생길 시 신속한 대처 가능<br/>
                ▲ 위험물안전관리법에 의거한 위험물 제조소등의 시설기준(위치, 구조, 설비)에 적합하도록 점검 및 유지관리, 개선방안 제시<br/>
                ▲ 법 제18조제1항의 규정에 의하여 보존해야 하는 정기점검을 실시하여 결과를 보존하여 드립니다. (해당사업장) - 위험물 저장 또는 취급에 관한<br/>
                    기술기준과 예방규정에 적합하도록 작업자 (안전관리원)에게 안전교육 제공<br/>
                ▲ 예방규정 작성<br/>
                ▲ 위험물 안전관리 관련 법령정보 및 기술 자료 제공<br/>
                ▲ 소방방재청 지정 위험물안전관리대행기관의 축적된 기술과 경험을 활용 체계적인 위험물 안전관리 활동이 가능<br/>
                <br/>
                <br/>
                <Descrip2Title>2. 법정 정기점검 대상</Descrip2Title>
                <br/>
                <Bold>1. 제조소 기준</Bold><br/>
                - 지정수량 10배 이상의 위험물을 취급하는 제조소<br/>
                <br/>
                <Bold>2. 저장소 기준</Bold><br/>
                - 지정수량 100배 이상의 위험물을 저장하는 옥외저장소<br/>
                - 지정수량 150배 이상의 위험물을 저장하는 옥내저장소<br/>
                - 지정수량 200배 이상의 위험물을 저장하는 옥외탱크저장소<br/>
                - 암반탱크저장소, 지하탱크저장소, 이동탱크저장소<br/>
                <br/>
                <Bold>3. 취급소 기준</Bold><br/>
                - 이송취급소<br/>
                - 지정수량 10배 이상의 위험물을 취급하는 일반취급소(일부제외)<br/>
                <br/>
                <Bold>4. 기타</Bold><br/>
                위험물을 취급하는 탱크로서 지하에 매설된 탱크가 있는 제조소 , 주유취급소, 일반취급소<br/>
                <br/>
                <br/>
                <Descrip2Title>3. 수수료 산정</Descrip2Title>
                <br/>
                제조소등의 수(허가증:완공검사필증 수)<br/>
                제조소등의 종류(제조소, 취급소, 저장소 등)<br/>
                허가 위험물의 종류 및 허가량<br/>
                소재지(거리) 등<br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                </Descrip2>
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

const Descrip2 = styled.div`
    max-width: 1088;
    font-size: 18px;
    line-height: 40px;
    @media screen and (max-width: 780px) {
        font-size: 16px;
  }
`;

const HelloWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 90vw;
    max-width: 1100px;
    margin: 10vh auto 5vh auto;
    justify-content: space-between;
    @media screen and (max-width: 1155px) {
        justify-content: center;
  }
  @media screen and (max-width: 780px) {
        font-size: 16px;    
        margin: 5vh auto 5vh auto;
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

const SelectNavBlock = styled(NavBlock)`
    font-weight: 700;
    color: #000;
    border-left: 1px solid #D9D9D9;
    width: 17vw;
    max-width: 255px;
    @media screen and (max-width: 1207px) {
        font-size: 18px;
        width: 100vw;
        max-width: 1000000px;
        display: flex;
        min-height: 49px;
        border-bottom: 1px solid #D9D9D9;
        text-align: center;
    }
`;

const ProcessArrow = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 90vw;
    max-width: 1100px;
    height: 10vw;
    background-image: url(${ProcessArrowImg});
    margin: 15vh auto 0 auto;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center; 
    @media screen and (max-width: 1155px) {
        margin: 0 auto;
        width: 90vw;
        max-width: 550px;
  }
  @media screen and (max-width: 840px) {
    display: none;
  }
`;

const ProcessArrow2 = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 90vw;
    max-width: 1100px;
    height: 40vw;
    background-image: url(${ProcessArrowImg2});
    margin: 5vh auto 0 auto;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center; 
    display: none;
    @media screen and (max-width: 1155px) {
        width: 90vw;
        max-width: 550px;
  }
  @media screen and (max-width: 840px) {
    display: flex;
  }
`;

const Descrip2Title = styled.div`
    font-size: 25px;
    color: #0A109F;
    font-weight: 600;
`;

const Bold = styled.span`
    font-weight: 600;
`;

export default License;