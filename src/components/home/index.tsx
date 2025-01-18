import React from 'react';
import DesktopHeader from '../common/DesktopHeader.tsx'
import Footer from '../common/Footer.tsx';
import Intro from './Intro.tsx';
import MobileHeader from '../common/MobileHeader.tsx';

const index = () => {
  return (
    <div className="relative overflow-hidden">
      <DesktopHeader />
      <MobileHeader />
      <Intro />
      <Footer />
    </div>
  );
};

export default index;
