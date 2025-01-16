import React from 'react';
import DesktopHeader from '../common/DesktopHeader.tsx';
import Footer from '../common/Footer.tsx';
import Projects from './Projects.tsx';

const index = () => {
  return (
    <div className="relative">
      <DesktopHeader />
      <Projects />
      <Footer />
    </div>
  )
}

export default index;
