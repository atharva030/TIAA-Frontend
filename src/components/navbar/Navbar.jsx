import "./navbar.css"
import { Link, useNavigate } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navContainer">
        <span className="logo">lamabooking</span>
        <div className="navItems">
          <button className="navButton"
          onClick={()=>{localStorage.clear()}}
          >Logout</button>
          
        </div>
      </div>
    </div>
  )
}

export default Navbar