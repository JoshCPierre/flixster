import React from 'react'
import "./Sidebar.css";
import homeIcon from "../../assets/home.png";
import heartIcon from "../../assets/heart-white.svg";
import watchedIcon from "../../assets/watched.png";


const Sidebar = () => {
  return (
    <nav className='sidebar-nav-container'>
        <img src={homeIcon}/>
        <img src={heartIcon}/>
        <img src={watchedIcon}/>
    </nav>
  )
}

export default Sidebar