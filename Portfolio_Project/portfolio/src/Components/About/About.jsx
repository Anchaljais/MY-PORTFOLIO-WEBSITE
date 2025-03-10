import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/imgg.jpg'
const About = () => {
  return (
    <div id='about' className='about'>
          <div className="about-title">\
              <h1>About me</h1>
              <img src={theme_pattern} alt="" />
          </div>
          <div className="about-sections">
              <div className="about-left">
                  <img src={profile_img} alt="" />
              </div>
              <div className='about-right'>
                  <div className="about-para">
                      <p>I am a Frontend Developer with strong expertise in React.js, dedicated to building dynamic, high-performance web applications. My focus is on creating intuitive, scalable, and visually engaging digital experiences that enhance user interaction.

                          With experience in developing interactive platforms and data-driven applications, I ensure clean, efficient, and maintainable code. I thrive on solving complex challenges, optimizing performance, and collaborating with teams to deliver seamless user experiences.

                          Passionate about continuous learning, I stay updated with industry trends to refine my skills and contribute to innovative, impactful web solutions.







</p>
                  </div>
                  <div className="about-skills">
                      <div className="about-skill"><p>HTML & CSS</p> <hr style={{ width: "50 %" }} /></div>
                      <div className="about-skill"><p>React JS</p> <hr style={{ width: "70%" }} /></div>
                      <div className="about-skill"><p>JavaScript</p> <hr style={{ width: "65%" }} /></div>
                      <div className="about-skill"><p>UI/UX</p> <hr style={{ width: "50%" }} /></div>
                  </div>
              </div>
          </div>
          <div className="about-achievements">
              <div className="about-achievement">
                  <h1>10+</h1>
                  <p>OPEN SOURCE CONTRIBUTION</p>
                  <hr />
              </div>
              <div className="about-achievement">
                  <h1>15+</h1>
                  <p>PROJECT COMPLETED</p>
                  <hr />
              </div>
              <div className="about-achievement">
                  <h1>50+</h1>
                  <p>LEETCODE PROBLEMS SOLVED</p>
                  <hr />
              </div>
          </div>
    </div>
  )
}

export default About;
