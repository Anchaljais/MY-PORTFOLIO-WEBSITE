import React, { useState, useRef } from 'react';
import './Navbar.css'
import logo from '../assets/logo.svg'
import theme_pattern from '../assets/theme_pattern.svg'
import underline from '../assets/nav_underline.svg'
import { Anchor } from 'lucide-react'
import AnchorLink from 'react-anchor-link-smooth-scroll';
import menu_open from '../assets/menu_open.svg'
import menu_close from '../assets/menu_close.svg'
const Navbar = () => {

  const [menu, setMenu] = useState("home");
  const menuRef = useRef();

  const openMenu = () => {
    menuRef.current.style.right = "0";
  }

  const closeMenu = () => {
   menuRef.current.style.right = "-350px";
  }

  return (
    <div className='navbar'>
      <div className="logo-text">
        <h1>My Portfolio</h1>
        {/* <img src={theme_pattern} alt="" /> */}
      </div>
      
      <img src={menu_open} onClick={openMenu} alt="" className='nav-mob-open' />
      <ul ref={menuRef} className="nav-menu">
        <img src={menu_close} onClick={closeMenu} alt="" className="nav-mob-close" />
        <li><AnchorLink className='anchor-link' offset={50} href='#home'><p onClick={() => setMenu("home")}>Home</p>{menu == 'home' ? <img src={underline} alt='' /> : <></>}</AnchorLink></li>
        <li><AnchorLink className='anchor-link' offset={50} href='#about'><p onClick={() => setMenu("about")}>About Me</p>{menu == 'about' ? <img src={underline} alt='' /> : <></>}</AnchorLink></li>
        <li><AnchorLink className='anchor-link' offset={50} href='#services'><p onClick={() => setMenu("Skills & Specializations")}>Skills & Specializations</p>{menu == 'Skills & Specializations' ? <img src={underline} alt='' /> : <></>}</AnchorLink></li>
        <li><AnchorLink className='anchor-link' offset={50} href='#work'><p onClick={() => setMenu("Projects")}>Project</p>{menu == 'Projects' ? <img src={underline} alt='' /> : <></>}</AnchorLink></li>
        <li><AnchorLink className='anchor-link' offset={50} href='#contact'><p onClick={() => setMenu("Contact")}>Contact</p>{menu == 'Contact' ? <img src={underline} alt='' /> : <></>}</AnchorLink></li>
      </ul>
      <div className='nav-connect'><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with Me</AnchorLink></div>
    </div>
  )
}

export default Navbar
