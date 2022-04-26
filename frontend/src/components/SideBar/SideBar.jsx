import './sideBar.css'

export default function SideBar() {
  return (
    <div className="side-bar">
      <div className="side-bar-components">
        <div className="about">
          <span className ="side-bar-title">ABOUT ME</span>
          <img src="/assets/photo2.jpg" alt="" />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde asperiores dignissimos totam quaerat recusandae, rerum aperiam consectetur, quasi tempore </p>
        </div>
        <div className="categories">
          <span className ="side-bar-title">CATEGORIES</span>
          <ul className="categoies-item">
            <li><a href="#">Life</a></li>
            <li><a href="#">Music</a></li>
            <li><a href="#">Fashion</a></li>
            <li><a href="#">Style</a></li>
            <li><a href="#">tech</a></li>
            <li><a href="#">Cinema</a></li>
          </ul>
        </div>
        <div className="follow">
          <span className ="side-bar-title">FOLLOW US</span>
          <ul className="socials">
            <li><a href="#"><i className ="fab fa-facebook"></i></a></li>
            <li><a href="#"><i className ="fab fa-twitter"></i></a></li>
            <li><a href="#"><i className ="fab fa-instagram"></i></a></li>
            <li><a href="#"><i className ="fab fa-linkedin"></i></a></li>
          </ul>
        </div>
      </div>
    </div>
  )
}
