import React, {Component} from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import {Link} from 'react-router-dom';
import './Pagenation.css'
import {PageWrapper} from '../../components/PageStyle';
import BackgroundImg from '../../assets/aboutbackground.png';
import { Title, MainImgTitle } from '../../components/PageStyle';
import styled from '@emotion/styled';
import axios from 'axios';
import ReactPaginate from 'react-paginate';
import BusinessPerformanceNavbar from './BusinessPerformanceNavbar';
import TableNavbar from './TableNavbar/TableNavbar2';

export default class News extends Component {

    constructor(props) {
        super(props);
        this.state = {
            offset: 0,
            data: [],
            perPage: 20,
            currentPage: 0
        };
        this.handlePageClick = this
            .handlePageClick
            .bind(this);
    }
    
    receivedData() {
        axios
            .get(`https://www.wooapi.co.kr/business/businesslist.do?cate=위험물안전관리대행실적`)
            .then(res => {
                const data = res.data;
                const slice = data.slice(this.state.offset, this.state.offset + this.state.perPage)
                const postData = slice.map(businesslist => 
                    <div>
                        {businesslist.cate === '위험물안전관리대행실적' ?
                            <BoardContent key={businesslist.idx}>
                                <Buyer style={{border: 'none'}}>{businesslist.buyer}</Buyer>
                                <ConsName>{businesslist.cons_name}</ConsName>
                                <Regdate>{businesslist.regdate}</Regdate>
                            </BoardContent>
                        :
                            null
                        }
                    </div>
                )

                this.setState({
                    pageCount: Math.ceil((postData.length + 1) / this.state.perPage + 1),
                   
                    postData
                })
            });
    }
    handlePageClick = (e) => {
        const selectedPage = e.selected;
        const offset = selectedPage * this.state.perPage;
        this.setState({
            currentPage: selectedPage,
            offset: offset
        }, () => {
            this.receivedData()
        });

    };


    componentDidMount() {
        this.receivedData()
    }

    render() {

    return (
        <PageWrapper>
            <Header/>
            <MainImg>
                <MainImgTitle>
                    회사소개
                </MainImgTitle>
            </MainImg>
            <BusinessPerformanceNavbar/>
            <PageTitleWrpper>
                <PageTitle>사업실적</PageTitle>
                <TableNavbar/>
            </PageTitleWrpper>
            <NewsCardWrapper>
                <CardWrapper>
                <BoardHeader>
                        <BuyerTitle style={{border: 'none'}}>발주처</BuyerTitle>
                        <ConsNameTitle>위탁시설</ConsNameTitle>
                        <RegdateTitle>비고</RegdateTitle>
                </BoardHeader>
                    {this.state.postData}
                </CardWrapper>
            </NewsCardWrapper>
            <Paginate>
                    <ReactPaginate
                        previousLabel={"<"}
                        nextLabel={">"}
                        breakLabel={"..."}
                        breakClassName={"break-me"}
                        pageCount={this.state.pageCount}
                        marginPagesDisplayed={2}
                        pageRangeDisplayed={4}
                        onPageChange={this.handlePageClick}
                        containerClassName={"pagination"}
                        subContainerClassName={"pages pagination"}
                        activeClassName={"active"}
                    />
                </Paginate>
            <Footer/>
        </PageWrapper>
    );
}
}

const MainImg = styled.div`
    width: 100%;
    height: 30vh;
    background: #282D27;
    background-image: url(${BackgroundImg});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center; 
    display: flex;
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

const NewsCardWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-wrap: wrap;
    padding: 10vh 0 0 0;
    width: 100vw;
    overflow-y: scroll;
    @media screen and (max-width: 1207px) {
        width: 90vw;
        overflow-y: scroll;
        margin: 0 auto;
  }
    @media screen and (max-width: 880px) {
        justify-content: space-around;
        padding: 5vh 0 0vh 0;
  }
`;

const Paginate = styled.div`
    margin: 0vh auto 20vh auto;
`;

const CardWrapper = styled.div`
    display: flex;
    max-width: 1088px;
    margin: 0 auto;
    justify-content: space-around;
    flex-wrap: wrap;
    margin-bottom: 5vh;
    overflow-x: scroll;
    border: 1px solid #8AC53F;
    border-bottom: none;
    @media screen and (max-width: 880px) {
        justify-content: space-around;
  }
`;

const BoardContent = styled.div`
    width: 1088px;
    height: 52px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #000;
    border-bottom: 1px solid #8AC53F;
    @media screen and (max-width: 780px) {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 714px;
    height: 38px;
    font-size: 11px;
  }
`;

const Buyer = styled.div`
flex: 1.2;
text-align: center;
border-left: 1px solid #8AC53F;
height: 100%;
display: flex;
align-items: center;
justify-content: center;
`;

const ConsName = styled(Buyer)`
    flex: 1.5;
`;

const Fields = styled(Buyer)`
    flex: 1;
`;

const Regdate = styled(Buyer)`
    flex: 0.5;
`;

const BuyerTitle = styled.div`
flex: 1.2;
text-align: center;
border-left: 1px solid #fff;
font-weight: 700;
height: 100%;
display: flex;
align-items: center;
justify-content: center;
`;

const ConsNameTitle = styled(BuyerTitle)`
    flex: 1.5;
`;

const FieldsTitle = styled(BuyerTitle)`
    flex: 1;
`;

const RegdateTitle = styled(BuyerTitle)`
    flex: 0.5;
`;

const BoardHeader = styled.div`
    width: 1088px;
    height: 52px;
    background-color: #8AC53F;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #fff;
    @media screen and (max-width: 780px) {
        width: 714px;
        height: 38px;
        font-size: 11px;
    }
`;

const PageTitleWrpper = styled.div`
    display: flex;
    justify-content: space-between;
    width: 1088px;
    margin: 0 auto;
    margin-top: 5vh;
    @media screen and (max-width: 1207px) {
      width: 90vw;
      flex-direction: column;
      align-items: center;
      justify-content: center;
  }
  @media screen and (max-width: 780px) {
    margin-top: 8vh;
  }
`;

const PageTitle = styled(Title)`
    border-bottom: 2px solid #000;
    margin: 0;
    padding: 10px 0;
    margin: 20px 0;
    height: 45px;
    @media screen and (max-width: 1207px) {
    margin-bottom: 10vh;
  }
    @media screen and (max-width: 880px) {
    font-size: 20px;
    margin: 0 auto;
    margin-bottom: 10vh;
    height: 23px;
  }
`;