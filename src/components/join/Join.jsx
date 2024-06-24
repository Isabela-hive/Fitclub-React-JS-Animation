import React, { useRef } from 'react';
import './join.css';
import emailjs from '@emailjs/browser';
const Join = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.prevenDefault();
    emailjs
      .sendForm('service_0ujes3d', 'template_ayojx8k', form.current, {
        publicKey: '4KGMxjKk1OZXDP7Sy',
      })
      .then(
        () => {
          console.log('success');
        },
        (error) => {
          console.log('Failed...', error.text);
        }
      );
  };
  return (
    <div className='join' id='join-us'>
      <div className='left-j'>
        <hr />
        <div>
          <span className='stroke-text'>Ready to</span>
          <span>level up</span>
        </div>
        <div>
          <span>Your body</span>
          <span className='stroke-text'>with us</span>
        </div>
      </div>
      <div className='right-j'>
        <form ref={form} className='email-container' onSubmit={sendEmail}>
          <input
            type='email'
            name='user-email'
            placeholder='Enter your email'
          />
          <button className='btn btn-j'>Join Now</button>
        </form>
      </div>
    </div>
  );
};

export default Join;
