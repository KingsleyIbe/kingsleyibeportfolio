import React from 'react';
import DesktopHeader from '../common/DesktopHeader.tsx';
import Carousel from './Carousel.tsx';
import Footer from '../common/Footer.tsx';
import MobileHeader from '../common/MobileHeader.tsx';

const index = () => {
  return (
    <div className="relative">
        <DesktopHeader />
        <MobileHeader />
        <Carousel />
        <Footer />
    </div>
  )
}

export default index;