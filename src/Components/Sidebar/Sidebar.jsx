import React from 'react'
import "./Sidebar.css";
import homeIcon from "../../assets/home.png";
import heartIcon from "../../assets/heart-white.svg";
import watchedIcon from "../../assets/watched.png";


const Sidebar = ({handleSidebarFavorites, handleSidebarWatched, handleSidebarHome}) => {
  return (
    <nav className='sidebar-nav-container'>
        <img src={homeIcon} onClick={handleSidebarHome}/>
        <img src={heartIcon} onClick={handleSidebarFavorites}/>
        <img src={watchedIcon} onClick={handleSidebarWatched}/>
    </nav>
  )
}

export default Sidebar