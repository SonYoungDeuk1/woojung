import React from 'react';
import styled from '@emotion/styled';
import {Link} from 'react-router-dom';

import Card1Img from '../../assets/card1img.png';
import Card2Img from '../../assets/card2img.png';
import Card3Img from '../../assets/card3img.png';
import Card4Img from '../../assets/card4img.png';
import Card5Img from '../../assets/card5img.png';

const SecondSection = () => {
    return (
        <Background>
            <CardWrapper>
                <Card1>
                    <Card1Background>
                        <CardTitleWrapper>
                            <CardTitle>위험물 인허가/설계</CardTitle>
                            <CardSubtitle>
                                편리하고 안전한 위험물 설치허가 <br/>
                                및 변경허가 대행업무를 바탕으로<br/>
                                위험물 설계, 시공, 완공까지 전반<br/>
                                적인 종합컨설팅 서비스 제공<br/>
                            </CardSubtitle>
                            <Link to="/license" style={{textDecoration: "none"}}>
                                <Button>더보기</Button>
                            </Link>
                        </CardTitleWrapper>
                    </Card1Background>
                </Card1>
                <Card1>
                    <Card2Background>
                        <CardTitleWrapper>
                            <CardTitle>위험물 안전관리대행</CardTitle>
                            <CardSubtitle>
                                고객을 위한, 고객이 신뢰할 수 있는<br/>
                                위험물안전관리 서비스 제공
                            </CardSubtitle>
                            <Link to="/license" style={{textDecoration: "none"}}>
                                <Button>더보기</Button>
                            </Link>
                        </CardTitleWrapper>
                    </Card2Background>
                </Card1>
                <Card1>
                    <Card3Background>
                        <CardTitleWrapper>
                            <CardTitle>소방 시설관리</CardTitle>
                            <CardSubtitle>
                                전문인력과 첨단장비를 활용한 정밀한 <br/>
                                소방시설 점검 및 보완 서비스 제공
                            </CardSubtitle>
                            <Link to="/inspection" style={{textDecoration: "none"}}>
                                <Button>더보기</Button>
                            </Link>
                        </CardTitleWrapper>
                    </Card3Background>
                </Card1>
                <Card1>
                    <Card4Background>
                        <CardTitleWrapper>
                            <CardTitle>소방 공사/위험물 공사</CardTitle>
                            <CardSubtitle>
                                설치 및 변경, 용도폐지 등 위험물 <br/>
                                전반에 대한 공사업무 서비스 제공
                            </CardSubtitle>
                            <Link to="/corporation" style={{textDecoration: "none"}}>
                                <Button>더보기</Button>
                            </Link>
                        </CardTitleWrapper>
                    </Card4Background>
                </Card1>
                <Card1>
                    <Card5Background>
                        <CardTitleWrapper>
                            <CardTitle>전기자동차</CardTitle>
                            <CardSubtitle>
                                친환경 자동차 BMA 공급을 통한<br/>
                                자동차 부품 전문 제조
                            </CardSubtitle>
                            <Link to="/automotive-parts" style={{textDecoration: "none"}}>
                                <Button>더보기</Button>
                            </Link>
                        </CardTitleWrapper>
                    </Card5Background>
                </Card1>
            </CardWrapper>
        </Background>
    );
}

const Background = styled.div`
    width: 100vw;
    background: #fff;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center; 
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
`;

const CardWrapper =  styled.div`
    display: flex;
    flex-wrap: wrap;
`;

const CardTitle = styled.div`
    font-size: 1.7vw;
    color: #fff;
    margin-bottom: 2.5vw;
    font-weight: 600;
    @media screen and (max-width: 840px) {
        font-size: 8vw;
        margin-bottom: 8vw;
    }
`;

const Card1 = styled.div`
    width: 20vw;
    height: 20vw;
    overflow: hidden;
    @media screen and (max-width: 840px) {
        width: 100vw;
        height: 100vw;
  }
`;

const Card1Background = styled.div`
    width: 20vw;
    height: 20vw;
    background-image: url(${Card1Img});
    background-size: 101%;
    background-repeat: no-repeat;
    background-position: center; 
    display: flex;
    flex-direction: column;
    transform: scale(1);
    transition: all 0.3s ease-in-out;  
    &:hover{
        background-size: 105%;
    }
    @media screen and (max-width: 840px) {
        width: 100vw;
        height: 100vw;
  }
`;

const Card2Background = styled(Card1Background)`
    background-image: url(${Card2Img});
`;

const Card3Background = styled(Card1Background)`
    background-image: url(${Card3Img});
`;

const Card4Background = styled(Card1Background)`
    background-image: url(${Card4Img});
`;

const Card5Background = styled(Card1Background)`
    background-image: url(${Card5Img});
`;

const CardTitleWrapper = styled.div`
    margin: auto;
    width: 17vw;
    height: 17vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: space-between;
    text-align: center;
    @media screen and (max-width: 840px) {
        width: 90vw;
        height: 90vw;
  }
`;

const CardSubtitle = styled.div`
    font-size: 1vw;
    color: #fff;
    width: 17vw;
    height: 7vw;
    @media screen and (max-width: 840px) {
        width: 100%;
        height: 35vw;
        font-size: 5vw;
  }
`;

const Button = styled.div`
    width: 8vw;
    height: 2vw;
    font-size: 0.9vw;
    background-color: rgba(0, 0, 0, 0.7);;
    margin: 0 auto;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    @media screen and (max-width: 840px) {
        width: 40vw;
        height: 10vw;
        font-size: 3vw;
  }
`;


export default SecondSection;