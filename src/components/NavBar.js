import React from 'react';
import styled from '@emotion/styled';
import {Link, withRouter} from 'react-router-dom';
import HeaderNav from './HeaderNav';
import {css} from '@emotion/react';

export default withRouter(({location: {pathname}}) => (
    <Navigator>
            <Link to="/greet" style={{textDecoration: 'none'}}>
                <NavContent
                 current={
                    pathname === "/greet" 
                    || pathname === "/business-partner" 
                    || pathname === "/organize-chart" 
                    || pathname === "/way-to-come"}>
                회사소개</NavContent>
            </Link>
            <Link to="/inspection" style={{textDecoration: 'none'}}>
            <NavContent
                 current={
                    pathname === "/inspection" 
                    || pathname === "/license" 
                    || pathname === "/corporation" 
                    || pathname === "/automotive-parts"
                }>
            사업분야</NavContent>
            </Link>
            <Link to="/contact" style={{textDecoration: 'none'}}>
                <NavContent         
                    current={
                        pathname === "/contact"}
                >
                견적의뢰</NavContent>
            </Link>
            <Link to="/notice" style={{textDecoration: 'none'}}>
            <NavContent         
                    current={
                        pathname === "/notice"}
                >커뮤니티</NavContent>
            </Link>
            <HeaderDropBlock>
                <HeaderNav/>
            </HeaderDropBlock> 
            </Navigator>
        )
    );


const Navigator = styled.div`
display: flex;
justify-content: space-around;
@media screen and (max-width: 1024px) {
display: none;
}
&:hover {
    color: #5d6b83;
    >div {
      display: block;
  }
}
`;

const NavContent = styled.div`
 width: 15vw;
    padding: 26px 0;
    max-width: 150px;
    min-width: 100px;
    text-align: center;
    cursor: pointer;
    color: #000;
    font-size: 18px;
    &:hover {
        color: #0A109F;
    }
${props => props.current && css`
    color: #0A109F;
    font-weight: 600;
`}
`;

const HeaderDropBlock = styled.div`
    border-top: 1px solid #D8D8D8;
    position: absolute;
    top: 71px;
    left: 0;
    width: 100%;
    height: 250px;
    position: fixed;
    background: #fff;
    display: none;
    box-shadow:  0px 3px 6px rgba(0, 0, 0, 0.1);
`;
