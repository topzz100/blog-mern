import './home.css';
import Header from '../../components/Header/Header';
import Posts from '../../components/Posts/Posts';
import SideBar from '../../components/SideBar/SideBar';


export default function Home() {
  return (
    <div className="homePage">
      <Header/>
      <div className="content">
        <Posts/>
        <SideBar/>
      </div>
      
    </div>
  )
}
