import "./navbar.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Spinner from "../Spinner";
const Navbar = () => {
  let navigate = useNavigate();
  const [loader, setloader] = useState(false);
  const handleLogout = () => {
    setloader(true);
    localStorage.clear();
    navigate("/");
    setloader(false);
  };
  return (
    <div className="navbar">
      {loader ? (
        <Spinner />
      ) : (
        <div className="navContainer">
          <span className="logo">myRationApp</span>
          <div className="navItems">
            <button className="navButton" onClick={handleLogout}>
              Logout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
