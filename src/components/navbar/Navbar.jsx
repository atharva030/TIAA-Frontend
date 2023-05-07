import "./navbar.css"
import { Link, useNavigate } from "react-router-dom";
const Navbar = () => {

  let navigate = useNavigate();

  const handleLogout=()=>{
    localStorage.clear();
    navigate("/")
  }
  return (
    <div className="navbar">
      <div className="navContainer">
        <span className="logo">lamabooking</span>
        <div className="navItems">
          <button className="navButton"
          onClick={handleLogout}
          >Logout</button>
          
        </div>
      </div>
    </div>
  )
}

export default Navbar