import React from 'react';
import { Link, NavLink } from 'react-router';

const DesktopHeader = () => {
  return (
    <div className="text-[#fff] font-bold py-[50px] px-[100px]">
      <header className="flex flex-row justify-between items-center">
        <div>
            <Link to="/"><h1 className="logo">@KingsleyIbe</h1></Link>
        </div>
        <nav>
            <ul className="flex flex-row gap-10 text-[#ccc]">
                <li><NavLink to="/about-me" className={({ isActive }) => (isActive ? 'active-link' : 'nav-link')}>About</NavLink></li>
                <li><NavLink to="/portfolio" className={({ isActive }) => (isActive ? 'active-link' : 'nav-link')}>Portfolio</NavLink></li>
                <li><NavLink to="/blog" className={({ isActive }) => (isActive ? 'active-link' : 'nav-link')}>Blog</NavLink></li>
            </ul>
        </nav>
        <div>
            <ul className="flex flex-row gap-10">
              <li><button>Mode</button></li>
              <li><Link to="/about-me">Github</Link></li>
              <li><button to="/about-me">Let's Connect</button></li>
            </ul>
        </div>
      </header>
    </div>
  )
}

export default DesktopHeader;
