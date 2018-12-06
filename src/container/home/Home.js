import React, { Component } from 'react';
import NavBar from '../../component/navBar/NavBar';
import HomeSection from './homeSection/HomeSection';
import ServiceSection from './serviceSection/ServiceSection';
import AboutSection from './aboutSection/AboutSection';
import WorkSection from './workSection/WorkSection';
import ProductSection from './productSection/ProductSection';
import CultureSection from './cultureSection/CultureSection';
import TimeLine from './timeLine/TimeLine';
import FootBar from '../../component/footBar/FootBar';

import './home.scss';

class Home extends Component {
  render() {
    return (
      <div className="page-container">
        <NavBar></NavBar>
        <HomeSection />
        <ServiceSection />
        <AboutSection />
        <WorkSection />
        <ProductSection />
        <CultureSection />
        <TimeLine />
        <FootBar />
      </div>
    );
  }
}

export default Home;
