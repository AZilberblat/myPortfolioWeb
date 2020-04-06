import React from 'react';
import './index.css';

const Footer = () => {
  return (
    <div className='footer-wrapper'>
      <div className='container'>
        <div className='row'>
          <div className='col'></div>
          <div className='col-5'>
            <a href='#header'>
              <i className='fa fa-angle-double-up icon'></i>
            </a>
          </div>
          <div className='col'></div>
        </div>
        <div className='row'>
          <div className='col'></div>
          <div className='col-md-5 col-sm-12 footer-text'>
            <h3>Contact</h3>
            <p>
              <b>Phone: </b> +972-50-2421992
            </p>
            <p>
              <b>Email: </b>avizilberblat@gmail.com
            </p>
          </div>
          <div className='col'></div>
        </div>
        <div className='row social-links'>
          <div className='col'></div>
          <div className='col-2'>
            <a target='_blang' href='https://www.facebook.com/abraham.zilberblat'>
              <i className='fa fa-facebook icon'></i>
            </a>
          </div>
          <div className='col-2'>
            <a
              href='https://www.linkedin.com/in/abraham-zilberblat-2a2b78185/'
              target='_blang'
            >
              <i className='fa fa-linkedin icon'></i>
            </a>
          </div>
          <div className='col-2'>
            <a href='https://github.com/AZilberblat' target='_blang'>
              <i className='fa fa-github icon'></i>
            </a>
          </div>
          <div className='col'></div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
