import React from 'react';
import DesktopHeader from '../common/DesktopHeader.tsx';
import Carousel from './Carousel.tsx';
import Footer from '../common/Footer.tsx';

const index = () => {
  return (
    <div className="relative">
        <DesktopHeader />
        <Carousel />
        <Footer />
    </div>
  )
}

export default index;