import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import {Link} from 'react-router-dom';

import {PageWrapper} from '../../components/PageStyle';
import BackgroundImg from '../../assets/prbackground.png';
import {PageTitleWrpper, PageTitle, NavBlock, SelectNavBlock, NavBarWrapper, MainImgTitle } from '../../components/PageStyle';
import styled from '@emotion/styled';
import { post } from 'axios';

class CustomerAdd extends React.Component {

  constructor(props) {
  super(props);
  this.state = {
    idx: '',
  }
    this.handleFormSubmit = this.handleFormSubmit.bind(this)
    this.handleValueChange = this.handleValueChange.bind(this)
    this.addCustomer = this.addCustomer.bind(this)
  }

  handleFormSubmit(e) {
    e.preventDefault()
    this.addCustomer()
    .then((response) => {
    console.log(response.data);
    })
  }


  handleValueChange(e) {
    let nextState = {};
    nextState[e.target.name] = e.target.value;
    this.setState(nextState);
  }

  addCustomer(){

  const url = 'https://www.wooapi.co.kr/notice/noticedelete.do';
  const formData = new FormData();
  formData.append('idx', this.state.idx)


  const news_list = {
  headers: {
  'content-type': 'multipart/form-data'
  }
  }

  return post(url, formData, news_list)
  }

  render() {
    const Alert = () => {
        alert("페이지 이동 후 새로고침을 해주세요.");
        console.log(this.state.idx)
      }
    return (
      <PageWrapper>
            <Header/>
            <MainImg>
              <MainImgTitle>
                홍보센터
              </MainImgTitle>
            </MainImg>
            <NavBarWrapper>
                  <Link to="/add-notice" style={{textDecoration: 'none', color: "#000"}}>
                    <NavBlock>게시글 추가</NavBlock>
                  </Link>
                  <Link to="/update-notice" style={{textDecoration: 'none', color: "#000"}}>
                    <NavBlock>게시글 수정</NavBlock>
                  </Link>
                  <Link to="/delete-notice" style={{textDecoration: 'none', color: "#000"}}>
                    <SelectNavBlock>게시글 삭제</SelectNavBlock>
                  </Link>
                </NavBarWrapper>
            <PageTitleWrpper>
                <PageTitle>게시글 삭제</PageTitle>
            </PageTitleWrpper>
            <Blockwrapper>
              <form onSubmit={this.handleFormSubmit}>
                <InputWrapper>
                  <Label>아이디</Label>
                  <Input type="text" name="idx" value={this.state.idx} onChange={this.handleValueChange} />
                </InputWrapper>
                <Button type="submit" path={"?idx="+this.state.idx}>
                    <A href={`https://sgtapi.co.kr/news/newsdelete.do?idx=`+this.state.idx} style={{textDecoration: "none",  color: "#fff"}}>                    
                        삭제하기
                    </A>
                </Button>
              </form>
              </Blockwrapper>
            <Footer/>
        </PageWrapper>
      
    )
  }
}

const A = styled.a`
  width: 100%;
  height: 100%;
`;

const Blockwrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin: 5vh auto 5vh auto;
    justify-content: center;
    @media screen and (max-width: 1220px) {
        width: 90vw;
        justify-content: space-around;
  }
`;

const MainImg = styled.div`
    width: 100%;
    height: 30vh;
    background: #282D27;
    background-image: url(${BackgroundImg});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center; 
    display: flex;
    align-items: center;
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

const Input = styled.input`
    max-width: 490px;
    width: calc(44vw - 40px) ;
    height: 20px;
    padding: 10px 20px;
    border: 1px solid #C9C9C9;
    border-radius: 3px;
    font-size: 20px;
    @media screen and (max-width: 780px) {
    padding: 5px 10px;
    width: 90%;
    height: 20px;
    font-size: 16px;
  }
`;


const InputWrapper = styled.div`
    max-width: 530px;
    width: calc(44vw - 40px) ;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    @media screen and (max-width: 780px) {
      width: 90%;
  }
`;

const Label = styled.label`
    padding: 1vh 0;
    font-size: 20px;
    @media screen and (max-width: 780px) {
        font-size: 16px;
  }
`;


const Button = styled.button`
    margin: 0 auto;
    max-width: 530px;
    width: calc(44vw - 40px) ;
    height: 50px;
    padding: 10px 20px;
    border: 1px solid #0A109F;
    background: #0A109F;
    color: #fff;
    font-size: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 10vh;
    margin-top: 3vh;
    border-radius: 5px;
    cursor: pointer;
    &:active {
    transform: scale(0.97);
    }
    @media screen and (max-width: 780px) {
    padding: 5px 10px;
    width: 90%;
    height: 35px;
    font-size: 16px;
    }
`;

export default CustomerAdd;