import React from 'react';
import { Link } from 'react-router';

const DesktopHeader = () => {
  return (
    <div className="text-[#fff]">
      <header className="flex flex-row justify-between">
        <div>
            <h1><Link to="/">Kingsley Ibe</Link></h1>
        </div>
        <nav>
            <ul className="flex flex-row gap-10">
                <li><Link to="/about-me">About</Link></li>
                <li><Link to="/portfolio">Portfolio</Link></li>
                <li><Link to="/blog">Blog</Link></li>
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
