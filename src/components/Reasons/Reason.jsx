import React from 'react';
import './reason.css';
import image1 from '../../images/6.jpg';
import image2 from '../../images/7.jpg';
import image3 from '../../images/1.jpg';
import image4 from '../../images/8.jpg';
import tick from '../../images/feeling.png';
import nb from '../../images/profile-job.png';
import adidas from '../../images/add-friends.png';
import nike from '../../images/like.png';
const Reason = () => {
  return (
    <div className='Reasons' id='reasons'>
      <div className='left-r'>
        <img src={image1} alt='' />
        <img src={image2} alt='' />
        <img src={image3} alt='' />
        <img src={image4} alt='' />
      </div>
      <div className='right-r'>
        <span>some reasons</span>
        <div>
          <span className='stroke-text'>why</span>
          <span> choose us?</span>
        </div>

        <div className='details-r'>
          <div>
            <img src={tick} alt='' /> <span>Over 140 expert coaches</span>
          </div>
          <div>
            <img src={tick} alt='' />
            <span>train faster and smarter than before</span>
          </div>
          <div>
            <img src={tick} alt='' />
            <span>1 free program for new members</span>
          </div>
          <div>
            <img src={tick} alt='' />
            <span>reliable partner</span>
          </div>
        </div>
        <span
          styles={{
            color: 'var(--gray)',
            fontWeight: 'normal',
          }}
        >
          Our partners
        </span>
        <div className='partners'>
          <img src={nb} alt='' />
          <img src={adidas} alt='' />
          <img src={nike} alt='' />
        </div>
      </div>
    </div>
  );
};

export default Reason;
