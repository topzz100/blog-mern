import './Post.css'

export default function Post() {
  return (
    <div className="post">
      <img src="/assets/photo3.jpg" alt="" />
      <div className="post-title">
        <div className="post-title-category">
          <span>Music</span><span>Life</span>
        </div>
        <p>Lorem ipsum dolor sit amet </p>
        <span>1 hour ago</span>
      </div>
      <div className="post-description">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam et tempore atque hic, sint fugit deserunt aut nostrum vel odit quisquam harum dicta excepturi expedita obcaecati perspiciatis cum deleniti alias!
    
        </p>
      </div>
      
    </div>
  )
}
