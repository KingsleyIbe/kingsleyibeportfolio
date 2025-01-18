import React from 'react';
import DesktopHeader from '../common/DesktopHeader.tsx';
import Footer from '../common/Footer.tsx';
import Projects from './Projects.tsx';
import MobileHeader from '../common/MobileHeader.tsx';

const index = () => {
  return (
    <div className="relative">
      <DesktopHeader />
      <MobileHeader />
      <Projects />
      <Footer />
    </div>
  )
}

export default index;
