import React,{useState} from 'react';
import {Link} from 'react-router-dom';
import styled from '@emotion/styled';
import {css, keyframes} from '@emotion/react';
import Cancle from '../assets/cancle.png';

const HamburgerButton = () => {

    const [open, setOpen] = useState(false);
    const onToggle = () => {
        setOpen(!open)
    }

    return (
        <>
        <HamburgerWrapper onClick={onToggle}>
            <Line></Line>
            <Line></Line>
            <Line></Line>
        </HamburgerWrapper>
        <Wrapper open={open}>
        <ModalWrapper>
            <CancleButton onClick={onToggle}/>
            <Menu2>
                <Link to="/greet" style={{textDecoration: 'none', color: "#000"}}>
                    <MenuContent>회사소개</MenuContent>
                </Link>  
                <Link to="/inspection" style={{textDecoration: 'none', color: "#000"}}>
                    <MenuContent>사업분야</MenuContent>
                </Link>  
                <Link to="/contact" style={{textDecoration: 'none', color: "#000"}}>
                    <MenuContent>견적의뢰</MenuContent>    
                </Link> 
                <Link to="/notice" style={{textDecoration: 'none', color: "#000"}}>
                    <MenuContent>커뮤니티</MenuContent>    
                </Link> 
            </Menu2>
        </ModalWrapper>
        <ModalOpacity onClick={onToggle}/>
    </Wrapper>
    </>
    );
};

const HamburgerWrapper = styled.div`
    width: 17px;
    height: 16px;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    display: none;
    @media screen and (max-width: 1024px) {
    display: flex;
  }
`;

const Line = styled.div`
    border: 1px solid #000;
    width: 17px;
`;


const Wrapper = styled.div`
    display: flex;
    right: 0;
    width: 100vw;
    display: none;
    justify-content: space-between;
    ${props => props.open && css`
        display:flex;
    `}
    position: fixed;
    z-index: 2;
    top: 0;
`;
 
const Fadein = keyframes`
  0% {
    right: -200px;
  }
  100% {
    right: 0;
  }
`;

const ModalWrapper = styled.div`
    width: 200px;
    height: 100vh;
    background: #fff;
    z-index: 3;
    position: absolute;
    top: 0;
    right: 0;
    display: flex;
    justify-content: center;
    animation: ${Fadein} 500ms ;
    ${props => props.open && css`
        display:flex;
    `}
`;

const ModalOpacity = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: #000;
    position: absolute;
    top: 0;
    opacity: 0.4;
    z-index: 2;
`;

const CancleButton = styled.div`
    width: 30px;
    height: 30px;
    background-image: url(${Cancle});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    position: absolute;
    left: 30px;
    top: 20px;
    &:hover{
        opacity: 0.4;
    }
`;

const Menu2 = styled.div`
    position: absolute;
    top: 70px;
    justify-content: center;
`;

const MenuContent = styled.div`
    margin-top: 20px;
    font-size: 15px;
    color: #444;
    &:hover{
        color: #666;
    }
    width: 130px;
`;

export default HamburgerButton;