import React from 'react';
import MyImg from '../../assets/myImg.jpg';
import './index.css';

const About = () => {
  return (
    <div id='about' className='about-wrapper'>
      <div className='container'>
        <h2 className='about-title'>About Me</h2>
        <div className='row'>
          <div className='col-12 col-lg-7 about-text'>
            <p>
              My name is Abraham zilberblat and I'm a self taught full-stack developer
              who specialises in  React, Machine learning, Web development and Mobile. I am a recent graduate with a BSc
              in Software Engineering. Love to tackle challenges and unknown
              areas and learn new technologies every day. I believe that together with my multitasking
              capabilities, fast learning skills and creative mind, those will
              set me up for both company and individual success from day one.
            </p>
          </div>
          <div className='col-12 col-lg-4'>
            <img
              className='my-img '
              src={MyImg}
              alt='My profile img'
              width='300'
            />
          </div>
          <a
            target='_blang'
            className='resumeBtn'
            href='https://drive.google.com/file/d/1Sy7obPJoOkAR5fQ0tgnlhItbvUweav6A/view?usp=sharing'
          >
            View Resume
          </a>
        </div>
      </div>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 100 100'
        preserveAspectRatio='none'
      >
        <polygon fill='#E0F6FD' points='100 ,100 0,100 0,0' />
      </svg>
    </div>
  );
};

export default About;
