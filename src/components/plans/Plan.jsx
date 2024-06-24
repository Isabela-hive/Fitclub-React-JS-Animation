import React from 'react';
import planData from '../../Data/planData';
import tick from '../../images/arrow.png';
import './plan.css';

const Plan = () => {
  return (
    <div className='plans-container' id='plans'>
      <div className='blur plans-blur-1'></div>
      <div className='blur plans-blur-2'></div>
      <div className='programs-header' style={{ gap: '2rem' }}>
        <span className='stroke-text'>Ready to start</span>
        <span> your Journey</span>
        <span className='stroke-text'>now with us</span>
      </div>
      {/* plans card */}
      <div className='plans'>
        {planData.map((plan, i) => (
          <div className='plan' key={i}>
            <img src={plan.icon} alt='' />
            <span>{plan.name}</span>
            <span>${plan.price}</span>
            <div className='features'>
              {plan.features.map((feature, i) => (
                <div className='feature'>
                  <img src={tick} alt='' />
                  <span key={i}>{feature}</span>
                </div>
              ))}
            </div>
            <div>
              <span>see more benefits - </span>
            </div>
            <button className='btn'>Join Now</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Plan;
