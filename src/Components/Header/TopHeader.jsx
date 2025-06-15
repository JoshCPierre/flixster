import React from 'react'
import "./TopHeader.css";


const TopHeader = () => {
  return (
    <div className='top-header-container'>
     <h1 className="website-title">Flixster</h1>
        <nav>
          <ul className="nav-list">
            <li>
              <a href="#featured" className="nav-link">
                Now Playing
              </a>
            </li>
            <li>
              <a href="#trending" className="nav-link">
                Popular
              </a>
            </li>
            <li>
              <a href="#top-rated" className="nav-link">
                Top Rated
              </a>
            </li>
            <li>
              <a href="#upcoming" className="nav-link">
                Upcoming
              </a>
            </li>
          </ul>
        </nav>
    </div>
  )
}

export default TopHeader