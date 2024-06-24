import React from 'react';
import './program.css';
import Arrow from '../images/arrow.png';

import data from '../Data/data';
const Program = () => {
  return (
    <div>
      <div className='Programs' id='program'>
        {/* header */}
        <div className='programs-header'>
          <span>Explore our</span>
          <span>Programs</span>
          <span className='stroke-text'>to shape you</span>
        </div>
        <div className='program-categories'>
          {data.map((program) => (
            <div className='category'>
              <img src={program.image} alt='' />
              <span>{program.heading}</span>
              <span>{program.details}</span>
              <div className='join-now'>
                <span>Join Now</span> <img src={Arrow} alt='' />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Program;
