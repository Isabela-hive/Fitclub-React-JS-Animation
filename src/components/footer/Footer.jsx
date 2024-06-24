import React from 'react';
import './footer.css';
import Github from '../../images/logout.png';
import Instagram from '../../images/profile-job.png';
import LinkedIn from '../../images/like-blue.png';
import Logo from '../../images/d.webp';
const Footer = () => {
  return (
    <div className='footer-container'>
      <hr />
      <div className='footer'>
        <div className='social-links'>
          <img src={Github} alt='' />
          <img src={Instagram} alt='' />
          <img src={LinkedIn} alt='' />
        </div>
        <div className='logo'>
          <img src={Logo} alt='' />
        </div>
      </div>
      <div className='blur blur-f-1'></div>
      <div className='blur blur-f-2'></div>
    </div>
  );
};

export default Footer;
