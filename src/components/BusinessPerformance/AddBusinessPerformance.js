import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import {Link} from 'react-router-dom';

import {PageWrapper} from '../PageStyle';
import BackgroundImg from '../../assets/prbackground.png';
import {PageTitleWrpper, PageTitle, NavBarWrapper, SelectNavBlock, NavBlock, MainImgTitle } from '../PageStyle';
import styled from '@emotion/styled';
import { post } from 'axios';

class CustomerAdd extends React.Component {

  constructor(props) {
  super(props);
  this.state = {
    cate: '',
    regdate: '',
    cons_name: '',
    fields: '',
    buyer: ''
  }
    this.handleFormSubmit = this.handleFormSubmit.bind(this)
    this.handleFileChange = this.handleFileChange.bind(this)
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

  handleFileChange(e) {
    this.setState({
    main: e.target.files[0],
    fileName: e.target.value
    });
  }

  handleValueChange(e) {
    let nextState = {};
    nextState[e.target.name] = e.target.value;
    this.setState(nextState);
  }

  addCustomer(){

  const url = 'https://www.wooapi.co.kr/business/businessinsert.do';
  const formData = new FormData();
  formData.append('cate', this.state.cate)
  formData.append('buyer', this.state.buyer)
  formData.append('cons_name', this.state.cons_name)
  formData.append('fields', this.state.fields)
  formData.append('regdate', this.state.regdate
  )

  const config = {
  headers: {
  'content-type': 'multipart/form-data'
    }
  }

  return post(url, formData, config)
  }
  
  render() {
    const Alert = () => {
      alert("추가되었습니다.")
    }
    return (
      <PageWrapper>
            <Header/>
            <MainImg>
              <MainImgTitle>
              사업실적 관리
              </MainImgTitle>
            </MainImg>                
            <NavBarWrapper>
                    <Link to="/add-business-performance" style={{textDecoration: 'none', color: "#000"}}>
                        <SelectNavBlock>사업실적 추가</SelectNavBlock>
                    </Link>
                    <Link to="/update-business-performance" style={{textDecoration: 'none', color: "#000"}}>
                        <NavBlock>사업실적 수정</NavBlock>
                    </Link>
                    <Link to="/del-business-performance" style={{textDecoration: 'none', color: "#000"}}>
                        <NavBlock>사업실적 삭제</NavBlock>
                    </Link>
                </NavBarWrapper>
            <PageTitleWrpper>
                <PageTitle>사업실적 추가</PageTitle>
            </PageTitleWrpper>
            <Blockwrapper>
              <form onSubmit={this.handleFormSubmit} encType="multipart/form-data" >
                <InputWrapper>
                  <Label>카테고리</Label>
                  <Input type="text" name="cate" value={this.state.cate} onChange={this.handleValueChange} />
                </InputWrapper>
                <InputWrapper>
                  <Label>발주처</Label>
                  <Input type="text" name="buyer" value={this.state.buyer} onChange={this.handleValueChange} />
                </InputWrapper>
                <InputWrapper>
                  <Label>공사명</Label>
                  <Input type="text" name="cons_name" value={this.state.cons_name} onChange={this.handleValueChange} />
                </InputWrapper>
                <InputWrapper>
                  <Label>분야</Label>
                  <Input type="text" name="fields" value={this.state.fields} onChange={this.handleValueChange} />
                </InputWrapper>
                <InputWrapper>
                  <Label>비고</Label>
                  <Input type="text" name="regdate" value={this.state.regdate} onChange={this.handleValueChange} />
                </InputWrapper>
                <Button type="submit">
                    <A href={`https://www.wooapi.co.kr/business/businessinsert.do?cate=`+this.state.cate+
                    `&buyer=`+this.state.buyer+
                    `&cons_name=`+this.state.cons_name+
                    `&fields=`+this.state.fields+
                    `&regdate=`+this.state.regdate} style={{textDecoration: "none",  color: "#fff"}}>                    
                    추가하기
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
    width: 90%;
    height: 35px;
    font-size: 16px;
    }
`;


export default CustomerAdd;