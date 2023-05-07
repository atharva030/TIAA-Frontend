import "./list.css";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { format } from "date-fns";
import { DateRange } from "react-date-range";
import SearchItem from "../../components/searchItem/SearchItem";
import Multiselect from "multiselect-react-dropdown";

const List = () => {
  const [status, setStatus] = useState([
    {
      "_id": "64540a0ea2ff2ed7f01352b5",
      "organisationName": "atharva",
      "rationType": [
        "Orange"
      ],
      "rationDetails": [
        "Type"
      ],
      "rationSchedule": "Type",
      "rationAllocate": "Type",
      "rationStock": "Type",
      "rationProvider": "Type",
      "rationMfg": "Type",
      "rationExp": "Type",
      "location": "Type",
      "eventDate": "21-02-22",
      "date": "2023-05-04T19:39:58.176Z",
      "__v": 0
    },
    {
      "_id": "64540a18a2ff2ed7f01352b7",
      "organisationName": "atharva",
      "rationType": [
        "Blue"
      ],
      "rationDetails": [
        "Type"
      ],
      "rationSchedule": "Type",
      "rationAllocate": "Type",
      "rationStock": "Type",
      "rationProvider": "Type",
      "rationMfg": "Type",
      "rationExp": "Type",
      "location": "Type",
      "eventDate": "25-02-22",
      "date": "2023-05-04T19:40:08.530Z",
      "__v": 0
    },
    {
      "_id": "64540a27a2ff2ed7f01352b9",
      "organisationName": "atharva",
      "rationType": [
        "Green"
      ],
      "rationDetails": [
        "Type"
      ],
      "rationSchedule": "Type",
      "rationAllocate": "Type",
      "rationStock": "Type",
      "rationProvider": "Type",
      "rationMfg": "Type",
      "rationExp": "Type",
      "location": "Type",
      "eventDate": "29-02-23",
      "date": "2023-05-04T19:40:23.913Z",
      "__v": 0
    },
    {
      "_id": "6454ccf87415081c8a30c1d3",
      "organisationName": "atharva",
      "rationType": [
        "Green"
      ],
      "rationDetails": [
        "Type",
        "TYPE@"
      ],
      "rationSchedule": "Type",
      "rationAllocate": "Type",
      "rationStock": "Type",
      "rationProvider": "Type",
      "rationMfg": "Type",
      "rationExp": "Type",
      "location": "Type",
      "eventDate": "29-02-23",
      "date": "2023-05-05T09:31:36.600Z",
      "__v": 0
    },
    {
      "_id": "6454cd88dcf326b803bd10b9",
      "organisationName": "atharva",
      "rationType": [
        "Green",
        "Yellow"
      ],
      "rationDetails": [
        "Type",
        "TYPE@"
      ],
      "rationSchedule": "Type",
      "rationAllocate": "Type",
      "rationStock": "Type",
      "rationProvider": "Type",
      "rationMfg": "Type",
      "rationExp": "Type",
      "location": "Type",
      "eventDate": "29-02-23",
      "date": "2023-05-05T09:34:00.955Z",
      "__v": 0
    },
    {
      "_id": "6454d09bd06d4bdb770b4e56",
      "user": "6453f987780a294a21c98a35",
      "organisationName": "atharva",
      "rationType": [
        "Green",
        "Yellow"
      ],
      "rationDetails": [
        "Type",
        "TYPE@"
      ],
      "rationSchedule": "Type",
      "rationAllocate": "Type",
      "rationStock": "Type",
      "rationProvider": "Type",
      "rationMfg": "Type",
      "rationExp": "Type",
      "location": "Type",
      "eventDate": "29-02-23",
      "date": "2023-05-05T09:47:07.099Z",
      "__v": 0
    },
    {
      "_id": "6454e32c0bd898bb01f9aeb7",
      "user": "6453f987780a294a21c98a35",
      "organisationName": "atharva",
      "rationType": [
        "Green",
        "Yellow"
      ],
      "rationDetails": [
        "Type",
        "TYPE@"
      ],
      "rationSchedule": "Type",
      "rationAllocate": "Type",
      "rationStock": "Type",
      "rationProvider": "Type",
      "rationMfg": "Type",
      "rationExp": "Type",
      "location": "Type",
      "eventDate": "29-02-23",
      "date": "2023-05-05T11:06:20.602Z",
      "__v": 0
    }
  ]);
  const [slot, setslot] = useState("")
  const [selectDate, setselectDate] = useState("");
  const [selectLocation, setselectLocation] = useState("");
  console.log("List Component", selectDate);

  const bookSlot=()=>{
    console.log(slot)
    // console.log("presses")
  }
  const getEvents = async () => {
    // setLoader(true);
    const response = await fetch(
      `http://localhost:5001/api/events/getevents?eventDate=${selectDate}&location=${selectLocation}`,
      {
        method: "GET", // *GET, POST, PUT, DELETE, etc.
        headers: {
          "Content-Type": "application/json",
          // "auth-token": localStorage.getItem("token"),
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
      }
    );
    const json = await response.json();
    setStatus(json);
    // setLoader(false);
  };
  useEffect(() => {
    // getEvents();
  }, []);

  return (
    <div>
      <Navbar />
      <Header
        setselectLocation={setselectLocation}
        setselectDate={setselectDate}
        getEvents={getEvents}
      />
      <div className="listContainer">
        <div className="listWrapper">
          <div className="listSearch">
            <h1 className="lsTitle">Search</h1>
            <div className="lsItem">
              <label>Destination</label>
            </div>

            <div className="lsItem">
              <div className="lsOptions">
                <div className="lsOptionItem">
                  <span className="lsOptionText">Ration Type</span>
                  {/* <input type="number" className="lsOptionInput" /> */}
                  <Multiselect
                    isObject={false}
                    onKeyPressFn={function noRefCheck() {}}
                    onRemove={function noRefCheck() {}}
                    onSearch={function noRefCheck() {}}
                    onSelect={function noRefCheck() {}}
                    options={["Yellow Card", "Orange Card"]}
                  />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">Ration Details</span>
                  <Multiselect
                    isObject={false}
                    onKeyPressFn={function noRefCheck() {}}
                    onRemove={function noRefCheck() {}}
                    onSearch={function noRefCheck() {}}
                    onSelect={function noRefCheck() {}}
                    options={["Wheat", "Rice", "Sugar", "Oil", "Tarmaric"]}
                  />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">Ration Schedule</span>
                  <input type="datetime-local" name="" id="" />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">Ration Allocated </span>
                  <Multiselect
                    isObject={false}
                    onKeyPressFn={function noRefCheck() {}}
                    onRemove={function noRefCheck() {}}
                    onSearch={function noRefCheck() {}}
                    onSelect={function noRefCheck() {}}
                    options={["2 Kg", "5 kg", "10 kg", "15 kg"]}
                  />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">Ration Stock</span>
                  <Multiselect
                    isObject={false}
                    onKeyPressFn={function noRefCheck() {}}
                    onRemove={function noRefCheck() {}}
                    onSearch={function noRefCheck() {}}
                    onSelect={function noRefCheck() {}}
                    options={["Less than 100 Kg", "200+ Kg", "500+ Kg"]}
                  />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">Ration Provider</span>
                  <Multiselect
                    isObject={false}
                    onKeyPressFn={function noRefCheck() {}}
                    onRemove={function noRefCheck() {}}
                    onSearch={function noRefCheck() {}}
                    onSelect={function noRefCheck() {}}
                    options={["Adwait Sharma", "Nagpur"]}
                  />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">Ration Mfg/Exp</span>
                  <input type="datetime-local" name="" id="" />
                </div>
              </div>
            </div>
            <button>Search</button>
          </div>
          <div className="listResult">
            {status.length === 0 ? (
              <div className="siFeatures">NO EVENTS FOUND</div>
            ) : (
              status.map((items) => (
                <SearchItem
                  organisationName={items.organisationName}
                  rationType={items.rationType}
                  rationSchedule={items.rationSchedule}
                  rationProvider={items.rationProvider}
                  eventDate={items.eventDate}
                  rationAllocate={items.rationAllocate}
                  rationSlots={items.rationSlots}
                  rationMfg={items.rationMfg}
                  rationExp={items.rationExp}
                  location={items.location}
                  date={items.date}
                  rating={items.rating}
                  id={items._id}
                  setslot={setslot}
                  bookSlot={bookSlot}
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
