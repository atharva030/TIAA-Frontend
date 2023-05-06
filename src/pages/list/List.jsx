import "./list.css";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { format } from "date-fns";
import { DateRange } from "react-date-range";
import SearchItem from "../../components/searchItem/SearchItem";

const List = () => {
  const [status, setStatus] = useState([])
  const [selectDate, setselectDate] = useState("")
  const [selectLocation, setselectLocation] = useState("")
 console.log("List Component",selectDate)
  const getEvents = async () => {
    // setLoader(true);
    const response = await fetch(`http://localhost:5001/api/events/getevents?eventDate=${selectDate}&location=${selectLocation}`, {
      method: "GET", // *GET, POST, PUT, DELETE, etc.
      headers: {
        "Content-Type": "application/json",
        // "auth-token": localStorage.getItem("token"),
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
    });
    const json = await response.json();
    setStatus(json);
    // setLoader(false);
  };
useEffect(() => {
  getEvents();  
}, [])

  return (
    <div>
      <Navbar />
      <Header  setselectLocation={setselectLocation} setselectDate={setselectDate} getEvents={getEvents}/>
      <div className="listContainer">
        <div className="listWrapper">
          <div className="listSearch">
            <h1 className="lsTitle">Search</h1>
            <div className="lsItem">
              <label>Destination</label>
            </div>
           
            <div className="lsItem">
              <label>Options</label>
              <div className="lsOptions">
                <div className="lsOptionItem">
                  <span className="lsOptionText">
                    Min price <small>per night</small>
                  </span>
                  <input type="number" className="lsOptionInput" />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">
                    Max price <small>per night</small>
                  </span>
                  <input type="number" className="lsOptionInput" />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">Adult</span>
                  <input
                    type="number"
                    min={1}
                    className="lsOptionInput"
                    // placeholder={options.adult}
                  />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">Children</span>
                  <input
                    type="number"
                    min={0}
                    className="lsOptionInput"
                    // placeholder={options.children}
                  />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">Room</span>
                  <input
                    type="number"
                    min={1}
                    className="lsOptionInput"
                    // placeholder={options.room}
                  />
                </div>
              </div>
            </div>
            <button>Search</button>
          </div>
          <div className="listResult">
            {status.length === 0 ? (
                        (

                           <div className="siFeatures">NO EVENTS FOUND</div>
                        )
                    ) : (
                        status.map((items) => (
                            <SearchItem
                            organisationName={items.organisationName} 
                            rationType={items.rationType} 
                            rationSchedule= {items.rationSchedule} 
                            rationProvider= {items.rationProvider}
                            eventDate= {items.eventDate}
                            rationAllocate={items.rationAllocate}
                            rationSlots= {items.rationSlots}
                            rationMfg={items.rationMfg}
                            rationExp={items.rationExp}
                            location= {items.location}
                            date={items.date}
                            rating={items.rating}
                            />
                        ))
                    )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default List;
