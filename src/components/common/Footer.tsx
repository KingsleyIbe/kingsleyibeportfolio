import { faGithub, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons/faLinkedin';
import { faMedium } from '@fortawesome/free-brands-svg-icons/faMedium';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router';

const Footer = () => {
  return (
    <div className="px-5 md:px-[100px] flex flex-row justify-between items-center mb-[50px]">
      <div>
        <p>Copyright &copy; {new Date().getFullYear().toString()}</p>
      </div>
      <ul className="flex flex-row gap-2 opacity-[0.6]">
        <li className="hover:opacity-[0.2]"><Link to="https://github.com/KingsleyIbe" target="__blank"><FontAwesomeIcon icon={faGithub}/></Link></li>
        <li className="hover:opacity-[0.2]"><Link to="https://x.com/kingsleyibec" target="__blank"><FontAwesomeIcon icon={faTwitter}/></Link></li>
        <li className="hover:opacity-[0.2]"><Link to="https://www.linkedin.com/in/kingsley-ibe/" target="__blank"><FontAwesomeIcon icon={faLinkedin}/></Link></li>
        <li className="hover:opacity-[0.2]"><Link to="https://www.youtube.com/@kingsleyibe" target="__blank"><FontAwesomeIcon icon={faYoutube}/></Link></li>
        <li className="hover:opacity-[0.2]"><Link to="https://medium.com/@ibekingsley" target="__blank"><FontAwesomeIcon icon={faMedium}/></Link></li>
      </ul>
    </div>
  );
};

export default Footer;
