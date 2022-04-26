import React from 'react';
import './navBar.css'; 

 const Navbar = () => {
  return (
    <div className="navbar">
      <div className="leftBar">
        <ul className="leftBarList">
          <li><img src="/assets/instagram.png" alt=""/></li>
          <li><img src="/assets/twitter.png" alt=""/></li>
          <li><img src="/assets/instagram.png" alt=""/></li>
        </ul> 
      </div>
      <div className="centerBar">
        <ul className="centerBarList">
          <li>HOME</li>
          <li>ABOUT</li>
          <li>CONTACT</li>
          <li>WRITE</li>
          <li>LOGOUT</li>
        </ul>
        
      </div>
      <div className="rightBar">
        <ul className="rightBarList">
          <li><img src="/assets/photo.jpeg" alt=""/></li>
        </ul>
      </div>
    </div>
  )
}
export default Navbar
