import React from 'react';
import './Hero.css';
import profile_img from '../../assets/imgg.jpg';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Hero = () => {
  return (
    <div id='home' className='hero'>
      <img src={profile_img} alt="Profile" />
      <h1><span>I'm Anchal Jaiswal,</span> a frontend developer with expertise in UI/UX.</h1>
      <p>I am a frontend developer, and I build dynamic websites with amazing UI/UX.</p>
      <div className="hero-action">
        <div className='hero-connect'>
          <AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with Me</AnchorLink>
        </div>
        <a
          href="https://drive.google.com/file/d/1oJGPKJgX_VM91Dwklyno-bNdWV9mmWji/view?usp=drive_link"
          className="hero-resume"
          target="_blank"
          rel="noopener noreferrer"
        >
          My Resume
        </a>
      </div>
    </div>
  );
}

export default Hero;

