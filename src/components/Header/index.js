import React from 'react';
import './index.css';

const Header = () => {
  return (
    <div id='header' className='header-section'>
      <div className='stars'></div>
      <div className='stars2'></div>
      <div className='stars3'></div>
      <div className='header-title'>
        <div className='header-text'>
          <h1 className='opening-text'>
            Hey, my name is{' '}
            <span className='name-text-color'> Abraham Zilberblat</span>
            <br />
            I'm a Software engineer and I'm looking for my next challenge
          </h1>
          <a className='headerBtn' href='#about'>
            See More
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
