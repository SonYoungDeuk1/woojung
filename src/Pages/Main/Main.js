import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import {PageWrapper} from '../../components/PageStyle';

import FirstSection from './FirstSection';
import SecondSection from './SecondSection';
import SeventhSection from './SeventhSection';
import Banner from './Banner';

const Main = () => {
    return (
        <PageWrapper>
            <Header/>
                <FirstSection/>
                <SecondSection/>
                <SeventhSection/>
                <Banner/>
            <Footer/>
        </PageWrapper>
    );
}


export default Main;