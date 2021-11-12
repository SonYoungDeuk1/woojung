import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import styled from '@emotion/styled';
import {css} from '@emotion/react';
import ArrowImg from '../../../assets/arrow.png';

const TableNavbar = () => {

    const [open, setopen] = useState(false);
    const onToggle = () => {
        setopen(!open);
    }

    return (
            <NavBarWrapper open={open} >
                    <Link to="/business-performance" style={{textDecoration: 'none', color: "#000"}}>
                        <NavBlock>소방공사실적</NavBlock>
                    </Link>
                    <Link to="/hazardousd-dsign" style={{textDecoration: 'none', color: "#000"}}>
                        <SelectNavBlock onClick={onToggle}>위험물설계인허가실적<Arrow/></SelectNavBlock>
                    </Link>
                    <Link to="/safety-management" style={{textDecoration: 'none', color: "#000"}}>
                        <NavBlock>위험물안전관리대행실적</NavBlock>
                    </Link>
                    <MobileNavBarWrapper open={open}>
                        <Link to="/business-performance" style={{textDecoration: 'none', color: "#000"}}>
                            <MobileNavBlock>소방공사실적</MobileNavBlock>
                        </Link>
                        <Link to="/hazardousd-dsign" style={{textDecoration: 'none', color: "#000"}}>
                            <MobileSelectNavBlock>위험물설계인허가실적</MobileSelectNavBlock>
                        </Link>
                        <Link to="/safety-management" style={{textDecoration: 'none', color: "#000"}}>
                            <MobileNavBlock>위험물안전관리대행실적</MobileNavBlock>
                        </Link>
                    </MobileNavBarWrapper>
            </NavBarWrapper>
    );
}


const NavBarWrapper = styled.div`
        width: 275px;
        height: 50px;
        flex-direction: column;
        border: none;
        ${props => props.open && css`
        height: 100%;
    `}
    @media screen and (max-width: 1207px) {
        width: 100vw;
        margin: 0 auto;
  }
`;

const MobileNavBarWrapper = styled(NavBarWrapper)`
    display: none;
    flex-direction: column;
    ${props => props.open && css`
        display: flex;
    `}
    @media screen and (max-width: 1207px) {
        margin: 0 auto;
  }
`;

const NavBlock = styled.div`
        display: none;
        border: none;
`;

export const SelectNavBlock = styled.div`
    width: 12vw;
    width: 235px;
    padding: 0 20px;
    border: 1px solid #D9D9D9;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-weight: 500;
    font-size: 18px;
    display: flex;
    min-height: 49px;
    text-align: center;
    margin-top: 35px;
    @media screen and (max-width: 1207px) {
        width: calc(90vw - 40px);
  }
`;

const MobileNavBlock = styled.div`
    width: 12vw;
    width: 235px;
    padding: 0 20px;
    border: 1px solid #D9D9D9;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    font-weight: 500;
    font-size: 18px;
    display: flex;
    min-height: 49px;
    text-align: center;
    border-top: none;
    @media screen and (max-width: 1207px) {
        width: calc(90vw - 40px);
  }
`;

const MobileSelectNavBlock = styled(SelectNavBlock)`
    display: none;
`;

const Arrow = styled.div`
  width: 17px;
  height: 9px;
  background-image: url(${ArrowImg});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center; 
`;

export default TableNavbar;