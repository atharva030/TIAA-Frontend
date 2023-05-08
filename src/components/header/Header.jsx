import {
  faBed,
  faCalendarDays,
  faCar,
  faPerson,
  faPlane,
  faTaxi,
  faHome,
  faInfo,
  faHistory,
  faList,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./header.css";
import { useState } from "react";
import { format } from "date-fns";
import { Link } from "react-router-dom";

const Header = (props) => {
  const cities = [
    {
      name: "Ahmednagar",
      towns: ["Ahmednagar", "Sangamner", "Rahuri", "Shrirampur"],
    },
    {
      name: "Akola",
      towns: ["Akola", "Murtizapur", "Patur", "Balapur"],
    },
    {
      name: "Amravati",
      towns: ["Amravati", "Achalpur", "Morshi", "Warud"],
    },
    {
      name: "Aurangabad",
      towns: ["Aurangabad", "Paithan", "Gangapur", "Khuldabad"],
    },
    {
      name: "Beed",
      towns: ["Beed", "Georai", "Ashti", "Kaij"],
    },
    {
      name: "Bhandara",
      towns: ["Bhandara", "Tumsar", "Sakoli", "Pauni"],
    },
    {
      name: "Buldhana",
      towns: ["Buldhana", "Malkapur", "Shegaon", "Khamgaon"],
    },
    {
      name: "Chandrapur",
      towns: ["Chandrapur", "Ballarpur", "Rajura", "Warora"],
    },
    {
      name: "Dhule",
      towns: ["Dhule", "Shirpur", "Sindkheda", "Sakri"],
    },
    {
      name: "Gadchiroli",
      towns: ["Gadchiroli", "Armori", "Aheri", "Mulchera"],
    },
    {
      name: "Gondia",
      towns: ["Gondia", "Tirora", "Amgaon", "Deori"],
    },
    {
      name: "Hingoli",
      towns: ["Hingoli", "Kalamnuri", "Sengaon", "Basmath"],
    },
    {
      name: "Jalgaon",
      towns: ["Jalgaon", "Bhusawal", "Yawal", "Raver"],
    },
    {
      name: "Jalna",
      towns: ["Jalna", "Ambad", "Bhokardan", "Badnapur"],
    },
    {
      name: "Kolhapur",
      towns: ["Kolhapur", "Karvir", "Gadhinglaj", "Panhala"],
    },
    {
      name: "Latur",
      towns: ["Latur", "Ahmadpur", "Udgir", "Nilanga"],
    },
    {
      name: "Mumbai",
      towns: ["Mumbai", "Navi Mumbai", "Thane", "Mira-Bhayandar"],
    },
    {
      name: "Nagpur",
      towns: ["Nagpur", "Kamthi", "Ramtek", "Umred"],
    },
    {
      name: "Nanded",
      towns: ["Nanded", "Mudkhed", "Bhokar", "Mukhed"],
    },
  ];

  const { type, setselectLocation, setselectDate, getEvents } = props;
  const [location, setLocation] = useState("");
  const [date, setDate] = useState(format(new Date(), "dd MMM yyyy"));

  const handleSearch = () => {
    console.log("Location: ", location);
    setselectLocation(location);
    setselectDate(date);

    console.log("Date", date);
    // console.log("",location)
    getEvents();
  };

  return (
    <div className="header">
      <div
        className={
          type === "list" ? "headerContainer listMode" : "headerContainer"
        }
      >
        <div className="headerList">
          <Link to="/home">
            <div className="headerListItem active">
              <FontAwesomeIcon icon={faHome} />
              <span>Home</span>
            </div>
          </Link>

          <Link to="/slots">
            <div className="headerListItem">
              <FontAwesomeIcon icon={faList} />
              <span>Slots</span>
            </div>
          </Link>
          <Link to="/history">
            <div className="headerListItem">
              <FontAwesomeIcon icon={faHistory} />
              <span>History</span>
            </div>
          </Link>

          <div className="headerListItem">
            <FontAwesomeIcon icon={faInfo} />
            <span>About</span>
          </div>
        </div>
        {type !== "list" && (
          <>
            <h1 className="headerTitle">
            Get Your Essentials Delivered with Ease: Introducing the New Ration Distribution App
            </h1>
            <p className="headerDesc">
            Revolutionizing Access to Basic Necessities with the Latest Ration Distribution App
            </p>
            {/* <button className="headerBtn">Sign in / Register</button> */}
            <div className="headerSearch">
              <div className="headerSearchItem">
                <FontAwesomeIcon icon={faBed} className="headerIcon" />
                <select
                  name="location"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                >
                  <option value="">Choose a location</option>
                  {cities.map((city) => (
                    <optgroup label={city.name} key={city.name}>
                      {city.towns.map((town) => (
                        <option
                          value={`${town}, ${city.name}`}
                          key={`${town}, ${city.name}`}
                        >
                          {town}, {city.name}
                        </option>
                      ))}
                    </optgroup>
                  ))}
                </select>
              </div>
              <div className="headerSearchItem">
                <FontAwesomeIcon icon={faCalendarDays} className="headerIcon" />
                <input
                  type="date"
                  className="headerSearchText"
                  value={date || ''}
                  min={format(new Date(), "yyyy-MM-dd")}
                  onChange={(e) => {
                    setDate(e.target.value);
                  }}
                />
              </div>
              <div className="headerSearchItem">
                <button className="headerBtn" onClick={handleSearch}>
                  Search
                </button>
                <button className="headerBtn" onClick={getEvents}>
                  Reset
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
