import "./list.css";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { format } from "date-fns";
import { DateRange } from "react-date-range";
import SearchItem from "../../components/searchItem/SearchItem";

const List = () => {
  const [status, setStatus] = useState([
    // {
    //   "_id": "64540a0ea2ff2ed7f01352b5",
    //   "organisationName": "Visnupuri Ration Org",
    //   "rationType": [
    //     "Orange"
    //   ],
    //   "rationDetails": [
    //     "Type"
    //   ],
    //   "rationSchedule": "11:00-15:00",
    //   "rationSlots": "10",
    //   "rating":"8.5",
    //   "rationStock": "Type",
    //   "rationProvider": "Daily Use",
    //   "rationMfg": "3/22",
    //   "rationExp": "3/24",
    //   "location": "Visnupuri Temple",
    //   "eventDate": "21-02-22",
    //   "date": "2023-05-04T19:39:58.176Z",
    // },
    // {
    //   "_id": "64540a18a2ff2ed7f01352b7",
    //   "organisationName": "atharva",
    //   "rationType": [
    //     "Blue"
    //   ],
    //   "rationDetails": [
    //     "Type"
    //   ],
    //   "rationSchedule": "Type",
    //   "rationSlots": "10",
    //   "rating":"8.5",
    //   "rationStock": "Type",
    //   "rationProvider": "Type",
    //   "rationMfg": "Type",
    //   "rationExp": "Type",
    //   "location": "Type",
    //   "eventDate": "25-02-22",
    //   "date": "2023-05-04T19:40:08.530Z",
    // },
    // {
    //   "_id": "64540a27a2ff2ed7f01352b9",
    //   "organisationName": "atharva",
    //   "rationType": [
    //     "Green"
    //   ],
    //   "rationDetails": [
    //     "Type"
    //   ],
    //   "rationSchedule": "Type",
    //   "rationSlots": "10",
    //   "rating":"8.5",
    //   "rationStock": "Type",
    //   "rationProvider": "Type",
    //   "rationMfg": "Type",
    //   "rationExp": "Type",
    //   "location": "Type",
    //   "eventDate": "29-02-23",
    //   "date": "2023-05-04T19:40:23.913Z",
    // },
    // {
    //   "_id": "6454ccf87415081c8a30c1d3",
    //   "organisationName": "atharva",
    //   "rationType": [
    //     "Green"
    //   ],
    //   "rationDetails": [
    //     "Type",
    //     "TYPE@"
    //   ],
    //   "rationSchedule": "Type",
    //   "rationSlots": "10",
    //   "rating":"8.5",
    //   "rationStock": "Type",
    //   "rationProvider": "Type",
    //   "rationMfg": "Type",
    //   "rationExp": "Type",
    //   "location": "Type",
    //   "eventDate": "29-02-23",
    //   "date": "2023-05-05T09:31:36.600Z",
    // },
    // {
    //   "_id": "6454cd88dcf326b803bd10b9",
    //   "organisationName": "atharva",
    //   "rationType": [
    //     "Green",
    //     "Yellow"
    //   ],
    //   "rationDetails": [
    //     "Type",
    //     "TYPE@"
    //   ],
    //   "rationSchedule": "Type",
    //   "rationSlots": "10",
    //   "rating":"8.5",
    //   "rationStock": "Type",
    //   "rationProvider": "Type",
    //   "rationMfg": "Type",
    //   "rationExp": "Type",
    //   "location": "Type",
    //   "eventDate": "29-02-23",
    //   "date": "2023-05-05T09:34:00.955Z",
    // },
    // {
    //   "_id": "6454d09bd06d4bdb770b4e56",
    //   "user": "6453f987780a294a21c98a35",
    //   "organisationName": "atharva",
    //   "rationType": [
    //     "Green",
    //     "Yellow"
    //   ],
    //   "rationDetails": [
    //     "Type",
    //     "TYPE@"
    //   ],
    //   "rationSchedule": "Type",
    //   "rationSlots": "10",
    //   "rating":"8.5",
    //   "rationStock": "Type",
    //   "rationProvider": "Type",
    //   "rationMfg": "Type",
    //   "rationExp": "Type",
    //   "location": "Type",
    //   "eventDate": "29-02-23",
    //   "date": "2023-05-05T09:47:07.099Z",
    // },
    // {
    //   "_id": "6454e32c0bd898bb01f9aeb7",
    //   "user": "6453f987780a294a21c98a35",
    //   "organisationName": "atharva",
    //   "rationType": [
    //     "Green",
    //     "Yellow"
    //   ],
    //   "rationDetails": [
    //     "Type",
    //     "TYPE@"
    //   ],
    //   "rationSchedule": "Type",
    //   "rationSlots": "10",
    //   "rating":"8.5",
    //   "rationStock": "Type",
    //   "rationProvider": "Type",
    //   "rationMfg": "Type",
    //   "rationExp": "Type",
    //   "location": "Type",
    //   "eventDate": "29-02-23",
    //   "date": "2023-05-05T11:06:20.602Z",
    // }
  ])
  const location = useLocation();
  // const [destination, setDestination] = useState(location.state.destination);
  // const [date, setDate] = useState(location.state.date);
  // const [openDate, setOpenDate] = useState(false);
  // const [options, setOptions] = useState(location.state.options);
useEffect(() => {
  console.log(status)

  
}, [])

  return (
    <div>
      <Navbar />
      <Header  />
      <div className="listContainer">
        <div className="listWrapper">
          <div className="listSearch">
            <h1 className="lsTitle">Search</h1>
            <div className="lsItem">
              <label>Destination</label>
              {/* <input placeholder={destination} type="text" /> */}
            </div>
            {/* <div className="lsItem">
              <label>Check-in Date</label>
              <span onClick={() => setOpenDate(!openDate)}>{`${format(
                date[0].startDate,
                "MM/dd/yyyy"
              )} to ${format(date[0].endDate, "MM/dd/yyyy")}`}</span>
              {openDate && (
                <DateRange
                  onChange={(item) => setDate([item.selection])}
                  minDate={new Date()}
                  ranges={date}
                />
              )}
            </div> */}
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
            {/* <SearchItem 
            organisationName="Visnupuri Ration Org" 
            rationType="Yellow" 
            rationSchedule= "11:00-15:00" 
            rationProvider= "Nanded Daily Use Store"
            eventDate= "6-05-2023"
            rationAllocate=""
            rationSlots= "10"
            rationMfg="Type"
            rationExp="Type"
            location= "Type"
            date="2023-05-04T19:39:58.176Z"
            /> */}
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
            {/* <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default List;
