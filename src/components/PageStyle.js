import styled from '@emotion/styled';
import {css} from '@emotion/react';
import { SMALL_SCREEN_THRESHOLD } from "../constant";
import ArrowImg from '../assets/arrow.png';

export const PageWrapper = styled.div`
  width: 100%;
  height: 100%;
`;

export const PageBlockWrapper = styled.div`
  /* width: 80vw; */
  width: 1088px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  margin-bottom: 15vh;
  margin-top: 5vh;
  @media screen and (max-width: 1208px) {
        width: 80vw;
  }
  @media screen and (max-width: ${({ threshold }) =>
      threshold || SMALL_SCREEN_THRESHOLD}px) {
    width: 90vw;
    padding: 0;
  }

`;

export const PageBlockWithTitleContentWrapper = styled.div`
  display: flex;
  @media screen and (max-width: ${({ threshold }) =>
      threshold || SMALL_SCREEN_THRESHOLD}px) {
    flex-direction: column;
  }
`

export const PageBlockWithTitle = styled(PageBlockWrapper)`
  flex-direction: column;
`

export const PageBlock = (props) => {
  if(!props.title)
    return <PageBlockWrapper {...props} />
  return <PageBlockWithTitle {...props}>
    <Title>{props.title}</Title>
    <PageBlockWithTitleContentWrapper {...props}>
      {props.children}
    </PageBlockWithTitleContentWrapper>
  </PageBlockWithTitle>
}

export const HomeBlock = styled.div`
  padding: 0 10vw;
  height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const LayoutRow = styled(PageBlockWithTitleContentWrapper)`
  flex: 1;
`

export const PageColumn = styled.div`
  flex: ${({ width = 10 }) => width / 10};
  display: flex;
  flex-direction: column;
`;

export const Divider = styled.div`
  padding: 12px;
  @media screen and (max-width: 765px) {
    padding: 0;
  }
`;

export const TitleRow = styled.div`
  margin-bottom: 24px;
`;

export const MainImgTitle = styled.div`
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

export const TitleWrpper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const PageTitleWrpper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 1088px;
    margin: 0 auto;
    margin-top: 5vh;
    @media screen and (max-width: 1207px) {
      width: 100vw;
      display: flex;
      align-items: center;
  }
    @media screen and (max-width: ${({ threshold }) =>
      threshold || SMALL_SCREEN_THRESHOLD}px) {
    margin-top: 8vh;
  }
`;

export const NavBarWrapper = styled.div`
    width: 100vw;
    height: 58px;
    display: flex;
    justify-content: center;
    margin: 0 auto;
    color: #000;
    font-size: 16px;
    font-weight: 400;
    border-bottom: 1px solid #D9D9D9;
    align-items: center;
    @media screen and (max-width: 1207px) {
        width: 100vw;
        height: 50px;
        flex-direction: column;
        border: none;
        ${props => props.open && css`
        height: 100%;
    `}
    }
`;

export const MobileNavBarWrapper = styled(NavBarWrapper)`
    display: none;
    flex-direction: column;
    ${props => props.open && css`
        display: flex;
    `}
`;

export const NavBlock = styled.div`
    width: 12vw;
    min-width: 200px;
    border-left: 1px solid #D9D9D9;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 300;
    @media screen and (max-width: 1207px) {
        display: none;
        border: none;
    }
`;

export const SelectNavBlock = styled(NavBlock)`
    font-weight: 700;
    color: #000;
    border-left: 1px solid #D9D9D9;
    @media screen and (max-width: 1207px) {
        font-size: 18px;
        width: 100vw;
        display: flex;
        min-height: 49px;
        border-bottom: 1px solid #D9D9D9;
        text-align: center;
    }
`;

export const MobileNavBlock = styled(NavBlock)`
        height: 49px;
        font-size: 18px;
    @media screen and (max-width: 1207px) {
        display: flex;
        font-size: 18px;
        width: 100vw;
        border-bottom: 1px solid #D9D9D9;
    }
`;

export const MobileSelectNavBlock = styled(SelectNavBlock)`
    display: none;
    @media screen and (max-width: 1207px) {
        display: none;
    }
`;

export const Remark = styled.div`
    color: #05CFFF;
    font-size: 20px;
    font-weight: 500;
    @media screen and (max-width: ${({ threshold }) =>
      threshold || SMALL_SCREEN_THRESHOLD}px) {
    font-size: 16px;
  }
`;

export const GreenRemark = styled(Remark)`
    color: #63EA00;
`;

export const Title = styled.div`
    font-size: 38px;
    font-weight: 600;
    margin: 20px 0 20px 0; 
    @media screen and (max-width: ${({ threshold }) =>
      threshold || SMALL_SCREEN_THRESHOLD}px) {
    font-size: 30px;
  }
`;

export const ExTitle = styled(Title)`
    font-size: 40px;
    @media screen and (max-width: ${({ threshold }) =>
      threshold || SMALL_SCREEN_THRESHOLD}px) {
    font-size: 20px;
  }
`;

export const SubTitle = styled.div`
    font-size: 22px;
    @media screen and (max-width: ${({ threshold }) =>
      threshold || SMALL_SCREEN_THRESHOLD}px) {
    width: 90vw;
    font-size: 18px;
    text-align: center;
  }
`;

export const ExSubTitle = styled(SubTitle)`
    width: 30vw;
    min-width: 500px;
    max-width: 500px;
    font-size: 22px;
    line-height: 32px;
    @media screen and (max-width: ${({ threshold }) =>
      threshold || SMALL_SCREEN_THRESHOLD}px) {
    width: 90vw;
    font-size: 16px;
    min-width: 0;
  }
`;

export const Arrow = styled.div`
  width: 17px;
  height: 9px;
  background-image: url(${ArrowImg});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center; 
  display: none;
  position: absolute;
  right: 5%;
  @media screen and (max-width: 1207px) {
      display: flex;
    }
`;

export const PageTitle = styled(Title)`
    border-bottom: 2px solid #000;
    padding: 10px 5px;
    @media screen and (max-width: ${({ threshold }) =>
      threshold || SMALL_SCREEN_THRESHOLD}px) {
    font-size: 20px;
    margin: 0 auto;
  }
`;

export const PageSubTitle = styled.div`
  font-size: 30px;
  text-align: center;
  padding: 5vh 0;
  @media screen and (max-width: ${({ threshold }) =>
      threshold || SMALL_SCREEN_THRESHOLD}px) {
        width: 90vw;
    font-size: 19px;
  }
`;

export const SubTitle2 = styled(Title)`
  font-size: 25px;
  font-weight: 300;
  text-align: center;
  @media screen and (max-width: 780px) {
    width: 80vw;
        font-size: 19px;
        text-align: center;
    }
`;

export const SubTitle3 = styled(Title)`
  font-size: 25px;
  font-weight: 300;
  width: 80vw;
  max-width: 1088px;
  margin: 10vh 0 5vh 0;
  @media screen and (max-width: 780px) {
    width: 90vw;
        font-size: 19px;
        text-align: center;
    }
`;


export const ButtonWrpper = styled.div`
    margin-top: 5vh;
    width: 380px;
    display: flex;
    justify-content: space-between;
    @media screen and (max-width: 780px) {
        max-width: 380px;
        width: 80vw;
    }
`;

export const Button = styled.div`
    width: 182px;
    height: 48px;
    color: #930E14;
    font-size: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    margin: 5vh 0;
    &:active {
    transform: scale(0.99);
    }
    @media screen and (max-width: 780px) {
    max-width: 180px;
    width: 39vw;
    height: 40px;
    font-size: 14px;
  }
`;


export const BlueButton = styled(Button)`
    border: 1px solid #05CFFF;
    color: #05CFFF;
`;


export const GreenButton = styled(Button)`
    border: 1px solid #63EA00;
    color: #63EA00;
`;


export const CardWrapper = styled.div`
    width: 90vw;
    display: flex;
    justify-content: space-around; 
    align-items: center;
    flex-wrap: wrap;
    @media screen and (max-width: 840px) {
        width: 90vw;
  }
`;
 

export const ExplaneWrapper = styled.div`
    display: flex;
    flex-direction: column;
    @media screen and (max-width: 780px) {
        align-items: center;
        width: 90vw;
        min-width: 0;
        min-height: 0;
  }
`;

export const Explane = styled.div`
    @media screen and (max-width: 780px) {
        text-align: center;
  }
`;

export const Devider = styled.div`
  width: 100%;
  height:10vh;
  @media screen and (max-width: 840px) {
    height:5vh;
  }
`;

export const BlueSpan = styled.span`
  color: #05CFFF;
  font-weight: 600;
`;

export const GreenSpan = styled.span`
  color: #63EA00;
  font-weight: 600;
`;

export const RedSpan = styled.span`
  color: #ED412E;
`;

export const RedSpanBold = styled.span`
  color: #ED412E;
  font-weight: 600;
`;
export const Date = styled.span`
  font-size: 25px;
  font-weight: 600;
  display: flex;
  padding: 1vh 0;
  @media screen and (max-width: 1480px) {
    font-size: 23px;
  }
`;

export const Space = styled.span`
  width: 1vw;
`;