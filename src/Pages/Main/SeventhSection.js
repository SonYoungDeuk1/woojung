import React from 'react';
import styled from '@emotion/styled';
import {TitleWrpper, GreenRemark, Title, PageBlockWrapper, CardWrapper} from '../../components/PageStyle';

import Card1Img from '../../assets/dangerinfo.png';
import Card2Img from '../../assets/firedepartment.png';
import Card3Img from '../../assets/fireinstitute.png';
import Card4Img from '../../assets/ministry.png';
import Card5Img from '../../assets/healthandsafe.png';
import Card6Img from '../../assets/firesafty.png';

const SeventhSection = () => {
    return (
        <Background>
            <TitleWrpper>
                <GreenRemark>PARTNERS</GreenRemark>
                <Title>사업파트너</Title>
            </TitleWrpper>
            <CardWrapper>
                <Card1></Card1>
                <Card2></Card2>
                <Card3></Card3>
                <Card4></Card4>
                <Card5></Card5>
                <Card6></Card6>
            </CardWrapper>
    </Background>
    );
}

const Background = styled.div`
    width: 100vw;
    padding: 10vh 0;
    background: #fff;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center; 
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
`;

const Card1 = styled.div`
    width: 12vw;
    height: 4.5vw;
    min-width: 168px;
    min-height: 65px;
    margin: 0 1vw;
    background-image: url(${Card1Img});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center; 
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    color: #fff;
    font-size: 30px;
    font-weight: 600;
    margin-top: 5vh;
    @media screen and (max-width: 840px) {
        margin: 0;
        margin-top: 5vh;
        width: 168px;
        height: 65px;
  }
`;

const Card2 = styled(Card1)`
    background-image: url(${Card2Img});

`;

const Card3 = styled(Card1)`
    background-image: url(${Card3Img});

`;


const Card4 = styled(Card1)`
    background-image: url(${Card4Img});

`;


const Card5 = styled(Card1)`
    background-image: url(${Card5Img});

`;


const Card6 = styled(Card1)`
    background-image: url(${Card6Img});

`;

export default SeventhSection;