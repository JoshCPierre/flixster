import React from "react";
import "./TopHeader.css";

const TopHeader = () => {
  const handleNavLinkClick = (event) => {
    event.preventDefault();
    // gets the target with this element
    const targetId = event.target.getAttribute("href").substring(1);
    const targetElement = document.getElementById(targetId);
    
    // scroll to the element
    if (targetElement) {
      setTimeout(() => {
        targetElement.scrollIntoView({
          behavior: "smooth",
          block: "start", // 'start' aligns the top of the element with the top of the viewport
        });
      }, 50);
    }
  };

  return (
    <div className="top-header-container">
      <h1 className="website-title">Flixster</h1>
      <nav>
        <ul className="nav-list">
          <li>
            <a
              href="#now-playing"
              className="nav-link"
              onClick={handleNavLinkClick}
            >
              Now Playing
            </a>
          </li>
          <li>
            <a
              href="#popular"
              className="nav-link"
              onClick={handleNavLinkClick}
            >
              Popular
            </a>
          </li>
          <li>
            <a
              href="#top-rated"
              className="nav-link"
              onClick={handleNavLinkClick}
            >
              Top Rated
            </a>
          </li>
          <li>
            <a
              href="#upcoming"
              className="nav-link"
              onClick={handleNavLinkClick}
            >
              Upcoming
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default TopHeader;
