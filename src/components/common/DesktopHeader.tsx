import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useTheme } from './ThemeContext.tsx';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-regular-svg-icons';

const DesktopHeader = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="font-bold py-[50px] px-[100px]">
      <header className="flex flex-row justify-between items-center">
        <div>
          <Link to="/"><h1 className="logo hover:opacity-[0.6]">@KingsleyIbe</h1></Link>
        </div>
        <nav>
          <ul className="flex flex-row gap-10 opacity-[0.8]">
            <li><NavLink to="/about-me" className={({ isActive }) => (isActive ? 'active-link' : 'nav-link')}>About</NavLink></li>
            <li><NavLink to="/portfolio" className={({ isActive }) => (isActive ? 'active-link' : 'nav-link')}>Portfolio</NavLink></li>
            <li><NavLink to="/blog" className={({ isActive }) => (isActive ? 'active-link' : 'nav-link')}>Blog</NavLink></li>
          </ul>
        </nav>
        <div>
          <ul className="flex flex-row gap-5 items-center">
            <li>
              <button onClick={toggleTheme}>
                {theme === 'light' ? (<FontAwesomeIcon icon={faMoon}/>) : (<FontAwesomeIcon icon={faSun} className="hover:opacity-[0.6]" />)}
              </button>
            </li>
            <li className="hover:opacity-[0.6]"><Link to="https://github.com/KingsleyIbe" target="__blank"><FontAwesomeIcon icon={faGithub}/></Link></li>
            <li className="hover:opacity-[0.6] rounded-[8px] py-2 px-5 border-[#ccc] border-solid border-[1px]"><Link to="mailto:ibekingsley66@gmail.com">Let's Connect</Link></li>
          </ul>
        </div>
      </header>
    </div>
  );
};

export default DesktopHeader;
