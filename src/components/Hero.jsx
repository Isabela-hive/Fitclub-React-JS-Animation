import React from 'react';
import './hero.css';
import Header from './Header';
import Bird from '../images/like-blue.png';
import hero_image from '../images/6.jpg';
import hero_image_back from '../images/c.png';
import Calories from '../images/like.png';

import { motion } from 'framer-motion';
import NumberCounter from 'number-counter';

const Hero = () => {
  const transition = { type: 'spring', duration: 3 };
  const mobile = window.innerWidth <= 768 ? true : false;
  return (
    <div className='hero' id='header'>
      <div className='blur hero-blur'> </div>
      <div className='left-hero'>
        <Header />
        {/* best_ad */}
        <div className='best-ad'>
          <motion.div
            initial={{ left: mobile ? '165px' : '238px' }}
            whileInView={{ left: '8px ' }}
            transition={{ ...transition, type: 'tween' }}
          ></motion.div>

          <span>The best fitness club in the town</span>
        </div>
        {/* Hero heading */}
        <div className='hero-text'>
          <div>
            <span className='stroke-text'>Shape </span>
            <span>Your</span>
          </div>
          <div>
            <span>Ideal Body</span>
          </div>
          <div>
            <span>
              {' '}
              In here we will help you to shape and buid your ideal body and
              live up your life to fullest
            </span>
          </div>
        </div>
        {/* figures */}
        <div className='figures'>
          <div>
            <span>
              <NumberCounter end={140} start={100} delay='4' preFix='+' />
            </span>
            <span>expert coaches</span>
          </div>
          <div>
            <span>
              {' '}
              <NumberCounter end={978} start={800} delay='4' preFix='+' />
            </span>
            <span>members joined</span>
          </div>
          <div>
            <span>
              {' '}
              <NumberCounter end={50} start={0} delay='4' preFix='+' />
            </span>
            <span>fitness program</span>
          </div>
        </div>
        {/* heor-buttons */}

        <div className='hero-buttons'>
          <buttons className='btn'>Get Started</buttons>
          <buttons className='btn'>Learn More</buttons>
        </div>
      </div>

      <div className='right-hero'>
        <button className='btn'>Join Now</button>

        <motion.div
          initial={{ right: '1rem' }}
          whileInView={{ right: '4rem' }}
          transition={transition}
          className='heart-rate'
        >
          <img src={Bird} alt='' />
          <span>Heart Rate</span>
          <span> 116 bpms</span>
        </motion.div>
        {/* hero images */}

        <img src={hero_image} alt='' className='hero_image' />

        <motion.img
          initial={{ right: '11rem' }}
          whileInView={{ right: '20rem' }}
          transition={transition}
          src={hero_image_back}
          alt=''
          className='hero_image_back'
        />
        <motion.div
          initial={{ right: '37rem' }}
          whileInView={{ right: '26rem' }}
          transition={transition}
          className='calories'
        >
          <img src={Calories} alt='' />
          <div>
            <span>Calories Burned</span>
            <span>320 kcal</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
