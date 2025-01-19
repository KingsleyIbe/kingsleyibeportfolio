import React, { useState } from 'react';
import { useTheme } from './ThemeContext.tsx';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-regular-svg-icons';
import { Link, NavLink } from 'react-router';

const MobileHeader = () => {
    const { theme, toggleTheme } = useTheme();
    const [openMenu, setOpenMenu] = useState(false);

    const toggleMenu = () => {
        setOpenMenu(!openMenu);
    };

    return (
        <div className="z-10 mobile-header block fixed w-[100%] md:hidden p-5">
            <header>
                <div className="flex flex-row items-center justify-between">
                    <Link to="/"><h1 className="logo hover:opacity-[0.6]">@KingsleyIbe</h1></Link>
                    <div className="flex flex-row gap-5 items-center">
                        <ul className="flex flex-row gap-5">
                            <li>
                                <button onClick={toggleTheme}>
                                    {theme === 'light' ? (<FontAwesomeIcon icon={faMoon} className="hover:opacity-[0.6] text-[25px]"/>) : (<FontAwesomeIcon icon={faSun} className="hover:opacity-[0.6] text-[25px]" />)}
                                </button>
                            </li>
                            <li className="hover:opacity-[0.6]"><Link to="https://github.com/KingsleyIbe" target="__blank"><FontAwesomeIcon icon={faGithub} className="text-[25px]" /></Link></li>
                        </ul>
                        <button onClick={toggleMenu} type="button" className="menu-icon" id="menu-icon">
                            <div className="menu-line"></div>
                            <div className="menu-line"></div>
                            <div className="menu-line"></div>
                        </button>
                    </div>

                </div>
                {openMenu && (
                    <nav className=" flex flex-col justify-between gap-10 border-t-[1px] border-t-[#ccc] border-t-solid mt-5 pt-5">
                        <ul className="flex flex-col gap-4 opacity-[0.8]">
                            <li><NavLink to="/about-me" className={({ isActive }) => (isActive ? 'active-link' : 'nav-link')}>About</NavLink></li>
                            <li><NavLink to="/portfolio" className={({ isActive }) => (isActive ? 'active-link' : 'nav-link')}>Portfolio</NavLink></li>
                            <li><NavLink to="/blog" className={({ isActive }) => (isActive ? 'active-link' : 'nav-link')}>Blog</NavLink></li>
                        </ul>
                        <div className="w-[50%]">
                            <li className="rounded-[8px] py-2 px-5 text-center text-[#181842] bg-[#ccc] list-none"><Link to="mailto:ibekingsley66@gmail.com">Let's Connect</Link></li>
                        </div>
                    </nav>
                )}
            </header>

        </div>
    );
};

export default MobileHeader;
