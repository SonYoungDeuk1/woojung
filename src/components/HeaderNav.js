import React from 'react';
import styled from '@emotion/styled';
import {Link, withRouter} from 'react-router-dom';
import SgtNoneImg from '../assets/sgtnone.png'
import {css} from '@emotion/react';

export default withRouter(({location: {pathname}}) => (
    <>
        <HeaderBlock>
            <LogoWrapper>
                    <Logo />
            </LogoWrapper>
            <NavigatorWrapper>
                <Navigator>
                    <Link to="/greet" style={{textDecoration: 'none'}}>
                        <NavContent current={pathname === "/greet"}>회사소개</NavContent>
                    </Link>
                    <Link to="/organize-chart" style={{textDecoration: 'none'}}>
                        <NavContent current={pathname === "/organize-chart"}>조직도</NavContent>
                    </Link>
                    <Link to="/business-partner" style={{textDecoration: 'none'}}>
                        <NavContent current={pathname === "/business-partner"}>사업자등록증/면허증</NavContent>
                    </Link>
                    <Link to="/business-performance" style={{textDecoration: 'none'}}>
                        <NavContent current={pathname === "/way-to-come"}>사업 실적</NavContent>
                    </Link>
                    <Link to="/way-to-come" style={{textDecoration: 'none'}}>
                        <NavContent current={pathname === "/way-to-come"}>찾아오시는 길</NavContent>
                    </Link>
                </Navigator>
                <Navigator>
                    <Link to="/inspection" style={{textDecoration: 'none'}}>
                        <NavContent current={pathname === "/inspection"} >소방시설 안전관리/점검</NavContent>
                    </Link>
                    <Link to="/license" style={{textDecoration: 'none'}}>
                        <NavContent current={pathname === "/license"}>위험물 관리대행</NavContent>
                    </Link>
                    <Link to="/corporation" style={{textDecoration: 'none'}}>
                        <NavContent current={pathname === "/corporation"}>소방/위험물 공사</NavContent>
                    </Link>
                    <Link to="/automotive-parts" style={{textDecoration: 'none'}}>
                        <NavContent current={pathname === "/automotive-parts"}>전기자동차</NavContent>
                    </Link>
                </Navigator>
                <Navigator>
                    <Link to="/contact" style={{textDecoration: 'none'}}>
                        <NavContent current={pathname === "/contact"}>견적의뢰</NavContent>
                    </Link>
                </Navigator>
                <Navigator>
                    <Link to="/notice" style={{textDecoration: 'none'}}>
                        <NavContent current={pathname === "/notice"}>공지사항</NavContent>
                    </Link>
                </Navigator>
            </NavigatorWrapper>
        </HeaderBlock>

        </>
    )
)

const HeaderBlock = styled.div`
    width: 80vw;
    padding: 0 10vw;
    position: fixed;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #4a5568;
    background: #fff;
    z-index: 2;
    @media screen and (max-width: 1024px) {
    display: none;
  }
`;

const LogoWrapper = styled.div`
    display: flex;
    align-items: center;
`;

const Logo = styled.div`
    width: 15vw;
    max-width: 183px;
    min-width: 92px;
    height: 9vh;
    max-height: 82px;
    min-height: 41px;
    background-image: url(${SgtNoneImg});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center; 
`;

const Navigator = styled.div`
    padding: 20px 0;
    display: flex;
    flex-direction: column;
    text-align: center;
`;

const NavContent = styled.div`
    width: 15vw;
    max-width: 150px;
    min-width: 100px;
    cursor: pointer;
    color: #000;
    padding-top: 15px;
    font-size: 16px;
    &:hover {
        color: #0A109F;
    }
    ${props => props.current && css`
        color: #0A109F;
    `}
`;

const NavigatorWrapper = styled.div`
    display: flex;
`;

