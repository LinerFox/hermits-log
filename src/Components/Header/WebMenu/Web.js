import "./Web.css";

import React from "react";

function Web() {
  return (
    <div className='web'>
      <div className='web-option'>
        <a href='#projects' className=''>
          <i className='fas fa-keyboard'></i>Projects
        </a>
      </div>
      <div className='web-option'>
        <a href='#skills' className=''>
          <i className='fas fa-terminal optionIcon'></i> Skills
        </a>
      </div>
      <div className='web-option'>
        <a href='#work' className=''>
          <i className='fas fa-laptop-code optionIcon'></i> Work
        </a>
      </div>
      <div className='web-option'>
        <a href='#contact' className=''>
          <i className='fas fa-paper-plane optionIcon'></i>Contact
        </a>
      </div>
    </div>
  );
}

export default Web;
