import React, {useState} from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import {Link} from 'react-router-dom';

import {PageWrapper} from '../../components/PageStyle';
import BackgroundImg from '../../assets/businessdomainbackground.png';
import {PageTitleWrpper, PageTitle, MainImgTitle, NavBarWrapper, MobileNavBarWrapper, NavBlock, SelectNavBlock, BlueSpan, GreenSpan, Arrow, MobileSelectNavBlock, MobileNavBlock } from '../../components/PageStyle';
import styled from '@emotion/styled';
import ProfileImg from '../../assets/automotiveparts.png';
import AutomotivePartsImg1 from '../../assets/automotivepartsimg1.png';
import AutomotivePartsImg2 from '../../assets/automotivepartsimg2.png';
import AutomotivePartsImg3 from '../../assets/automotivepartsimg3.png';
import AutomotivePartsImg4 from '../../assets/automotivepartsimg4.png';
import AutomotivePartsImg5 from '../../assets/automotivepartsimg5.png';
import AutomotivePartsImg6 from '../../assets/automotivepartsimg6.png';

const AutomotiveParts = () => {

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
                        <NavBlock>소방 공사/위험물 공사</NavBlock>
                    </Link>
                    <Link to="/automotive-parts" style={{textDecoration: 'none', color: "#000", borderRight: "1px solid #D9D9D9"}}>
                        <SelectNavBlock onClick={onToggle}>전기자동차<Arrow/></SelectNavBlock>
                    </Link>
                    <MobileNavBarWrapper open={open}>
                        <Link to="/inspection" style={{textDecoration: 'none', color: "#000"}}>
                            <MobileNavBlock onClick={onToggle}>소방시설안전관리/점검</MobileNavBlock>
                        </Link>
                        <Link to="/license" style={{textDecoration: 'none', color: "#000"}}>
                            <MobileNavBlock>위험물 관리대행</MobileNavBlock>
                        </Link>
                        <Link to="/corporation" style={{textDecoration: 'none', color: "#000"}}>
                            <MobileNavBlock>소방 공사/위험물 공사</MobileNavBlock>
                        </Link>
                        <Link to="/automotive-parts" style={{textDecoration: 'none', color: "#000"}}>
                            <MobileSelectNavBlock>전기자동차</MobileSelectNavBlock>
                        </Link>
                    </MobileNavBarWrapper>
                </NavBarWrapper>
            <PageTitleWrpper>
                <PageTitle>전기 자동차</PageTitle>
                <SubTitle>・Electric Vehicle(EV) 자동차의 이해</SubTitle>
            </PageTitleWrpper>
            <ImgWrapper>
                <Img1/>
                <ImgContent>
                    기존 석유를 이용한 내연기관을 탈피하여
                    친환경적 에너지인 전기에너지를 바탕으로
                    구동하는 자동차.
                </ImgContent>
            </ImgWrapper>
            <ImgWrapperReverse>
                <Img2/>
                <ImgContent>
                    전기자동차는 18세기에 제작되었으나, 기술의
                    한계로 상용화가 되지 못하다가 최근 배기가스와 
                    같은 공해문제로 인해 전 세계적으로 차세대 자동차 
                    영역으로 접근하여 개발중에 있습니다.
                </ImgContent>
            </ImgWrapperReverse>
            <ImgWrapper>
                <Img3/>
                <ImgContent>
                당사는 전기자동차에 사용되는 배터리의 필수요소인 전압 패드를 생산 및 납품하는 전문 업체로써 차세대 자동차 완성에 일조하고 있습니다.
                </ImgContent>
            </ImgWrapper>
            <PageTitleWrpper>
                <SubTitle>・BMA(Battery Module Assembly) 구성</SubTitle>
            </PageTitleWrpper>
            <Img4/>
            <ImgWrapperReverse>
                <Img5/>
                <ImgContent>
                배터리셀은 전기에너지를 사용하는 리튬이온 배터리의 기본단위로 사각형의 케이스에 넣어 만든 배터리 시스템의 초기 구성단계
                </ImgContent>
            </ImgWrapperReverse>
            <ImgWrapper>
                <Img6/>
                <ImgContent>
                    배터리모듈은 배터리셀의 파손 방지를 위해 
                    일정한 개수로 묶어 프레임에 넣은 중요조립체
                </ImgContent>
            </ImgWrapper>
            <Margin/>
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
    color: #0A109F;
    font-size: 30px;
    margin-top: 10vh;
    font-weight: 600;
    @media screen and (max-width: 780px) {
        width: 90vw;
        font-size: 18px;    
  }
`;


const ImgWrapper = styled.div`
    margin: 10vh auto;
    display: flex;
    flex-wrap: wrap;
    width: 90vw;
    max-width: 1088px;
    justify-content: space-between;
    flex-direction: row-reverse;
    @media screen and (max-width: 1155px) {
        justify-content: center;
  }
  @media screen and (max-width: 780px) {
        font-size: 16px;    
        margin: 5vh auto 5vh auto;
  }
`;

const ImgWrapperReverse = styled(ImgWrapper)`
    flex-direction: row;
`;

const ImgContent = styled.div`
    width: 295px;
    margin: auto 0;
    line-height: 35px;
    @media screen and (max-width: 1155px) {
        margin-top: 2vh;
        max-width: 640px;
        width: 90vw;
}
`;

const Img1 = styled.div`
    width: 674px;
    height: 360px;
    background-image: url(${AutomotivePartsImg1});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center; 
    display: flex;
    @media screen and (max-width: 840px) {
        max-width: 640px;
        width: 90vw;
        height: 60vw;
  }
`;

const Img2 = styled(Img1)`
    background-image: url(${AutomotivePartsImg2});
`;

const Img3 = styled(Img1)`
    background-image: url(${AutomotivePartsImg3});
`;


const Img4 = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 90vw;
    max-width: 1088px;
    height: 20vw;
    background-image: url(${AutomotivePartsImg4});
    margin: 15vh auto 0 auto;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center; 
    @media screen and (max-width: 1155px) {
        width: 90vw;
        max-width: 674px;
        height: 20vw;
        margin-top: 5vh;
  }
  @media screen and (max-width: 840px) {
    max-width: 640px;
        width: 90vw;
        height: 20vw; 
     }
`;

const Img5 = styled(Img1)`
    background-image: url(${AutomotivePartsImg5});
     border: 1px solid #D3D3D3;
`;

const Img6 = styled(Img1)`
    background-image: url(${AutomotivePartsImg6});
    border: 1px solid #D3D3D3;
`;

const Margin = styled.div`
    width: 100%;
     height: 20vh;
`;
export default AutomotiveParts;