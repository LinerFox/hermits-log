import "./Mobile.css";

import React from "react";

function Mobile({ Open, setOpen }) {
  return (
    <div className='mobile'>
      <div className='closeIcon' onClick={() => setOpen(!Open)}>
        <i className='fas fa-x'></i>
      </div>
      <div className='mobile-options'>
        <div className='mobile-option'>
          <a href='#projects' className=''>
            <i className='fas fa-keyboard'></i>Projects
          </a>
        </div>
        <div className='mobile-option'>
          <a href='#skills' className=''>
            <i className='fas fa-terminal optionIcon'></i> Skills
          </a>
        </div>
        <div className='mobile-option'>
          <a href='#work' className=''>
            <i className='fas fa-laptop-code optionIcon'></i> Work
          </a>
        </div>
        <div className='mobile-option'>
          <a href='#contact' className=''>
            <i className='fas fa-paper-plane optionIcon'></i>Contact
          </a>
        </div>
      </div>
    </div>
  );
}

export default Mobile;
