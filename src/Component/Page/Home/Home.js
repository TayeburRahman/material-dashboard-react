import Sponsors from 'Component/HomeFastSection/Sponser';
import React from 'react';
import HomeBanner from '../../Banner/HomeBanner';
import DashboardHome from '../../DashbordHome/DashboardHome';
import HomeFastSection from '../../HomeFastSection/HomeFastSection';
import HomeProduct from '../../HomeProduct/HomeProduct';
import ImageCardMain from '../../ImageCardHome/ImageCartMain';
import CustomHeader from '../../Sheard/Costomheader';
import Footer from '../../Sheard/Footer';
import TestiMonials from '../../TestMonial/TestiMonials/TestiMonials';
 
const Home = () => {
     return (
        <div>
             <CustomHeader></CustomHeader>
             <HomeBanner></HomeBanner>
             <ImageCardMain></ImageCardMain>
             <HomeFastSection></HomeFastSection>
             <HomeProduct></HomeProduct> 
             <DashboardHome></DashboardHome>
             <Sponsors></Sponsors>
             <TestiMonials></TestiMonials>
             <Footer></Footer>
        </div>
    );
};

export default Home;