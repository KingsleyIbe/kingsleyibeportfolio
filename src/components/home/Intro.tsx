import React from 'react';
import { Link } from 'react-router';

const Intro = () => {
  return (
    <div className="px-[200px] mt-[50px] mb-[150px]">
      <h1 className="text-5xl md:text-8xl sm:text-7xl xl:text-9xl font-bold opacity-[0.8]">Kingsley Ibe</h1>
      <p className="text-[50px] opacity-[0.6]" >I build things for the web</p>
      <Link to="/about-me" className="text-[35px] line hover:opacity-[0.6]">Read more about me → </Link>
    </div>
  )
};

export default Intro;
