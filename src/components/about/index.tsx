import React from 'react';
import DesktopHeader from '../common/DesktopHeader.tsx';
import Footer from '../common/Footer.tsx';
import Intro from './Intro.tsx';
import Tool from './Tool.tsx';
import Experience from './Experience.tsx';
import Education from './Education.tsx';

const index = () => {
  return (
    <div className="relative">
      <DesktopHeader />
      <Intro />
      <Tool />
      <Experience />
      <Education />
      <Footer />
    </div>
  )
}

export default index;
