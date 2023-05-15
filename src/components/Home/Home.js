import "./Home.css";

import Avatar from "../../assets/pexels-chevanon-photography-325045.jpg";
import React from "react";

const Home = () => {
  return (
    <section id='home'>
      <div className='home-text'>
        <strong>Hello, it&apos;s me</strong>
        <h1>Cmder. Hermit</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit
          eligendi, quo inventore odit omnis ab asperiores. Ab unde quam porro.
        </p>
        <a href='#summary' className='btn-link'>
          Scroll for Me
        </a>
      </div>
      <div className='home-img'>
        <div className='img-box'>
          <img src={Avatar} alt='Avatar' />
          <h2>
            Joseph
            <br /> <span>Blender Artist | Programmer</span>
          </h2>
          <div className='social'>
            <a href='#!'>
              <i className='fa-brands fa-facebook'></i>
            </a>
            <a href='#!'>
              <i className='fa-brands fa-facebook'></i>
            </a>
            <a href='#!'>
              <i className='fa-brands fa-facebook'></i>
            </a>
          </div>
          <a href='#!' className='hire-me'>
            Hire Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;
