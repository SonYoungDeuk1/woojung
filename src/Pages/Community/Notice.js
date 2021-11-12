import React, {Component} from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import {Link} from 'react-router-dom';
import './Pagenation.css'
import {PageWrapper} from '../../components/PageStyle';
import BackgroundImg from '../../assets/prbackground.png';
import {PageTitleWrpper, PageTitle, MainImgTitle, Arrow} from '../../components/PageStyle';
import styled from '@emotion/styled';
import axios from 'axios';
import ReactPaginate from 'react-paginate';

export default class News extends Component {

    constructor(props) {
        super(props);
        this.state = {
            offset: 0,
            data: [],
            perPage: 4,
            currentPage: 0
        };
        this.handlePageClick = this
            .handlePageClick
            .bind(this);
    }
    
    receivedData() {
        axios
            .get(`https://www.wooapi.co.kr/notice/noticelist.do`)
            .then(res => {
                const data = res.data;
                const slice = data.slice(this.state.offset, this.state.offset + this.state.perPage)
                const postData = slice.map(newscards => 
                    <Link to={{pathname: `/notice-info/${newscards.idx}`, props: {id: newscards.idx}}} style={{textDecoration: "none", color: "#000"}}>
                        <BoardContent key={newscards.idx}>
                        <Wrapper>
                            <Num>{newscards.idx}</Num>
                        </Wrapper>
                        <BordTitle>{newscards.subject}</BordTitle>
                    </BoardContent>
                    </Link> 
                )

                this.setState({
                    pageCount: Math.ceil(data.length / this.state.perPage),
                   
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
                커뮤니티
                </MainImgTitle>
            </MainImg>
            <NavBarWrapper>
                <Link to="/notice" style={{textDecoration: 'none', color: "#000"}}>
                    <SelectNavBlock>공지사항<Arrow/></SelectNavBlock>
                </Link>
            </NavBarWrapper>
            <PageTitleWrpper>
                <PageTitle>공지사항</PageTitle>
            </PageTitleWrpper>
            <NewsCardWrapper>
                <CardWrapper>
                <BoardHeader>
                    <Wrapper>
                        <Num>번호</Num>
                    </Wrapper>
                    <BordHeaderTitle>제목</BordHeaderTitle>
                </BoardHeader>
                    {this.state.postData}
                </CardWrapper>
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
            </NewsCardWrapper>
                
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
    padding: 10vh 0;
    @media screen and (max-width: 880px) {
        justify-content: space-around;
        padding: 3vh 0 20vh 0;
  }
`;

const Paginate = styled.div`
    padding: 3vh auto 5vh auto;
    cursor: pointer;
`;

const CardWrapper = styled.div`
    display: flex;
    width: 90vw;
    max-width: 1088px;
    margin: 0 auto;
    justify-content: space-around;
    flex-wrap: wrap;
    margin-bottom: 5vh;
    @media screen and (max-width: 880px) {
        justify-content: space-around;
  }
`;

const BoardContent = styled.div`
    width: 90vw;
    max-width: 1088px;
    height: 52px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #000;
    border-bottom: 1px solid #DBDBDB;
    @media screen and (max-width: 780px) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    height: 54px;
  }
`;

const Num = styled.div`
    margin: 0 20px;
    min-width: 20px;
    @media screen and (max-width: 780px) {
        display: none;
  }
`;

const BordTitle = styled.div`
    flex:1;
    padding: 0 50px;
    cursor: pointer;
    @media screen and (max-width: 780px) {
        font-size: 14px;
        padding: 0 10px;
        flex: 0;
        font-weight: 600;
  }
`;

const RegisDate = styled.div`
    @media screen and (max-width: 780px) {
        font-size: 12px;
        padding: 0;
  }
`;

const Look = styled.div`
    min-width: 20px;
    margin: 0 20px;
    @media screen and (max-width: 780px) {
        font-size: 12px;
        padding: 0;
  }
`;

 const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
`;

const BoardHeader = styled.div`
    width: 90vw;
    max-width: 1088px;
    height: 52px;
    background-color: #0A109F;
    display: flex;
    align-items: center;
    color: #fff;
    @media screen and (max-width: 780px) {
        background: none;
        border-bottom: 2px solid #0A109F;
  }
`;

const BordHeaderTitle = styled.div`
    padding: 0 50px;
`;

const BoardHeaderRegisDate = styled(Num)`
`;

const SelectNavBlock = styled.div`
    width: 15vw;
    min-width: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 700;
    color: #000;
    @media screen and (max-width: 1207px) {
        font-size: 18px;
        width: 100vw;
        display: flex;
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
    }
`;