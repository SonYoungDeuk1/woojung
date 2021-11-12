import React, {useState} from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import {Link} from 'react-router-dom';
import {PageWrapper} from '../../components/PageStyle';
import BackgroundImg from '../../assets/aboutbackground.png';
import {PageTitleWrpper, PageTitle, NavBarWrapper, NavBlock, SelectNavBlock, MainImgTitle, MobileNavBarWrapper, MobileSelectNavBlock, MobileNavBlock, Arrow} from '../../components/PageStyle';
import styled from '@emotion/styled';
// import ProfileImg from '../../assets/profile.png';
import Chart from '../../assets/organizechart.png'

const OrganizeChart = () => {

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
                        <NavBlock>회사소개 </NavBlock>
                    </Link>
                    <Link to="/organize-chart" style={{textDecoration: 'none', color: "#000"}}>
                        <SelectNavBlock onClick={onToggle}>조직도<Arrow/></SelectNavBlock>
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
                            <MobileNavBlock>회사소개</MobileNavBlock>
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
                <PageTitle>조직도</PageTitle>
            </PageTitleWrpper>
            <ChartImg></ChartImg>
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

const ChartImg = styled.div`
    width: 60vw;
    max-width: 1021.67px;
    height: 70vw;
    max-height: 689px;
    margin: 5vh auto;
    background-image: url(${Chart});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center; 
    display: flex;
    align-items: flex-end;
    justify-content: center;
    flex-direction: column;
    margin-bottom: 20vh;
    @media screen and (max-width: 1220px) {
        width: 90vw;
        min-width: 317.5px;
        height: 70vw;
        min-height: 215px;
        margin: 3vh auto;
        margin-bottom: 10vh;

  }
`;

export default OrganizeChart;