import React from 'react';
import styled from '@emotion/styled';
import FooterLogoImg from '../assets/footerlogo.png'

const Footer = () => {
    return (
        <FooterBcakgroundBlock>
            <FooterBlock>
            <Logo/>
            <InfoWrapper>
                <Content>우정에이치엔씨(주) ㅣ 대표 : 장두희 ㅣ <Content>사업자등록번호 : 312-86-64352</Content></Content>
                <Content>주소 : (본사) 충청남도 천안시 서북구 백석3로 130-14, 4층(백석동)</Content>
                <Content><Address>(성거공장) 충남 천안시 서북구 천흥1길 17(성거읍)</Address></Content>
                <Content><Address>(충주공장) 충북 충주시 산척면 동충주산업단지 E4-2 BL</Address></Content>
                <Content>TEL : 041-565-7010~3 ㅣ 문의메일 : one119@one119.co.kr / one119@chol.com</Content>
                <Content><Copyright>Copyright 2021 Woojung. All Rights Reserved. </Copyright></Content>
            </InfoWrapper>
            </FooterBlock>
        </FooterBcakgroundBlock>
    );
}
const FooterBcakgroundBlock = styled.div`
    padding-top: 5vh;
    background: #000;  
    display: flex;
    padding-bottom: 10px;
    margin: 0 auto;
    @media screen and (max-width: 840px) {
        padding-bottom: 5vh;
        margin: 0 auto;
  }
`;

const FooterBlock = styled.div`

    display: flex;
    align-items: flex-start;
    flex-wrap: wrap;
    margin: 0 auto;
    @media screen and (max-width: 840px) {
        padding: 0 5vw;
        margin: 0 auto;
  }
`;

const Content = styled.div`
    color: #fff;
    font-size: 16px;
    padding: 5px 0;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    @media screen and (max-width: 840px) {
        font-size: 14px;
  }
  @media screen and (max-width: 453px) {
        font-size: 14px;
        padding: 0;
        padding-top: 10px;
  }
`;

const Logo = styled.div`
    width: 190px;
    height: 40px;
    margin: 5px 0 15px 0;
    margin-right: 5vw;
    background-image: url(${FooterLogoImg});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center; 
    display: flex;
    align-items: center;
    justify-content: center;
`;

const InfoWrapper = styled.div`

`;

const Address = styled.div`
    margin-left: 50px;
    @media screen and (max-width: 840px) {
        margin: 0;
  }
`;

const Copyright = styled.div`
        margin-top: 3vh;
    @media screen and (max-width: 840px) {
        margin-top: 0;
  }
`;

export default Footer;