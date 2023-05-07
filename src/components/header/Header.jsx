import {
  faBed,
  faCalendarDays,
  faCar,
  faPerson,
  faPlane,
  faTaxi,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./header.css";
import { useState } from "react";
import { format } from "date-fns";
import { useNavigate } from "react-router-dom";

const Header = (props) => {
  const cities = [  
    
    {
      "name": "Ahmednagar",
      "towns": ["Ahmednagar", "Sangamner", "Rahuri", "Shrirampur"]
      },
      {
      "name": "Akola",
      "towns": ["Akola", "Murtizapur", "Patur", "Balapur"]
      },
      {
      "name": "Amravati",
      "towns": ["Amravati", "Achalpur", "Morshi", "Warud"]
      },
      {
      "name": "Aurangabad",
      "towns": ["Aurangabad", "Paithan", "Gangapur", "Khuldabad"]
      },
      {
      "name": "Beed",
      "towns": ["Beed", "Georai", "Ashti", "Kaij"]
      },
      {
      "name": "Bhandara",
      "towns": ["Bhandara", "Tumsar", "Sakoli", "Pauni"]
      },
      {
      "name": "Buldhana",
      "towns": ["Buldhana", "Malkapur", "Shegaon", "Khamgaon"]
      },
      {
      "name": "Chandrapur",
      "towns": ["Chandrapur", "Ballarpur", "Rajura", "Warora"]
      },
      {
      "name": "Dhule",
      "towns": ["Dhule", "Shirpur", "Sindkheda", "Sakri"]
      },
      {
      "name": "Gadchiroli",
      "towns": ["Gadchiroli", "Armori", "Aheri", "Mulchera"]
      },
      {
      "name": "Gondia",
      "towns": ["Gondia", "Tirora", "Amgaon", "Deori"]
      },
      {
      "name": "Hingoli",
      "towns": ["Hingoli", "Kalamnuri", "Sengaon", "Basmath"]
      },
      {
      "name": "Jalgaon",
      "towns": ["Jalgaon", "Bhusawal", "Yawal", "Raver"]
      },
      {
      "name": "Jalna",
      "towns": ["Jalna", "Ambad", "Bhokardan", "Badnapur"]
      },
      {
      "name": "Kolhapur",
      "towns": ["Kolhapur", "Karvir", "Gadhinglaj", "Panhala"]
      },
      {
      "name": "Latur",
      "towns": ["Latur", "Ahmadpur", "Udgir", "Nilanga"]
      },
      {
      "name": "Mumbai",
      "towns": ["Mumbai", "Navi Mumbai", "Thane", "Mira-Bhayandar"]
      },
      {
      "name": "Nagpur",
      "towns": ["Nagpur", "Kamthi", "Ramtek", "Umred"]
      },
      {
      "name": "Nanded",
      "towns": ["Nanded", "Mudkhed", "Bhokar", "Mukhed"]
      }
];

const {type, setselectLocation ,setselectDate,getEvents}=props
  const [location, setLocation] = useState("");
  const [date, setDate] = useState(format(new Date(), "dd MMM yyyy"));

  const handleSearch = () => {
    console.log("Location: ", location);
    setselectLocation(location)
    setselectDate(date)
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
          <div className="headerListItem active">
            <FontAwesomeIcon icon={faBed} />
            <span>Stays</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faPlane} />
            <span>Flights</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faCar} />
            <span>Car rentals</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faBed} />
            <span>Attractions</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faTaxi} />
            <span>Airport taxis</span>
          </div>
        </div>
        {type !== "list" && (
          <>
            <h1 className="headerTitle">
            "Get Your Essentials Delivered with Ease: Introducing the New Ration Distribution App"
            </h1>
            <p className="headerDesc">
              Get rewarded for your travels – unlock instant savings of 10% or
              more with a free Lamabooking account
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
  {cities.map(city => (
    <optgroup label={city.name} key={city.name}>
      {city.towns.map(town => (
        <option value={`${town}, ${city.name}`} key={`${town}, ${city.name}`}>
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
                  value={date}
                  min={format(new Date(), "yyyy-MM-dd")}
                  onChange={(e) =>{ setDate(e.target.value)}}
                 />



              </div>
              <div className="headerSearchItem">
                <button className="headerBtn" onClick={handleSearch}>
                  Search
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
