import "./navbar.css"
import { Link, useNavigate } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navContainer">
        <span className="logo">lamabooking</span>
        <div className="navItems">
          <button className="navButton" >Home</button>
          <button className="navButton">About</button>
          <button className="navButton">Book Slot</button>
          <button className="navButton">History</button>
          <button className="navButton">Logout</button>
        </div>
      </div>
    </div>
  )
}

export default Navbar