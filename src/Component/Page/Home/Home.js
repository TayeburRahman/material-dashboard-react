import React from 'react';
import HomeBanner from '../../Banner/HomeBanner';
import DashboardHome from '../../DashbordHome/DashboardHome';
import HomeFastSection from '../../HomeFastSection/HomeFastSection';
import HomeProduct from '../../HomeProduct/HomeProduct';
import ImagecardMain from '../../ImageCardHome/ImageCartMain';
import Slideshow from '../../ImgSlider/Slideshow';
import Costomheader from '../../Sheard/Costomheader';
import Footer from '../../Sheard/Footer';
import TestiMonials from '../../TestMonial/TestiMonials/TestiMonials';
 
const Home = () => {
     return (
        <div>
            <Costomheader></Costomheader>
              <HomeBanner></HomeBanner>
               <ImagecardMain></ImagecardMain>
             <HomeFastSection></HomeFastSection>
             <HomeProduct></HomeProduct>
              <Slideshow></Slideshow>
             <DashboardHome></DashboardHome>
             <TestiMonials></TestiMonials>
              <Footer></Footer>
        </div>
    );
};

export default Home;