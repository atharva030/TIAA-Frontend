import "./list.css";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { format } from "date-fns";
import { DateRange } from "react-date-range";
import SearchItem from "../../components/searchItem/SearchItem";
import Multiselect from 'multiselect-react-dropdown';
import Select from 'react-select';

const List = () => {

  const Allocated = [
    { label: '2 Kg', value: '2 Kg' },
    { label: '5 Kg', value: '5 Kg' },
    { label: '10 Kg', value: '10 Kg' },
  ];

  const Stock = [
    { label: 'Less than 100 Kg', value: 'Less than 100 Kg' },
    { label: '200+ Kg', value: '200+ Kg' },
    { label: '500+ Kg', value: '500+ Kg' },
  ];
  const Provider = [
    { label: 'Akash', value: 'Akash' },
    { label: 'Prakash', value: 'Prakash' },
    { label: 'Rajesh', value: 'Rajesh' },
  ];
  
  const handleChange = selectedOption => {
    console.log(`Selected option: ${selectedOption.label}`);
  };

  const [date, setDate] = useState(format(new Date(), "dd MMM yyyy"));
  const [slot , setslot] =useState()

  const [status, setStatus] = useState([]);
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
                  <input
                  type="date"
                  className="headerSearchText"
                  value={date}
                  min={format(new Date(), "yyyy-MM-dd")}
                  onChange={(e) =>{ setDate(e.target.value)}}
                 />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">Ration Allocated </span>
                  <Select
      options={Allocated}
      onChange={handleChange}
      placeholder="Select"/>
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">Ration Stock</span>
                  <Select
      options={Stock}
      onChange={handleChange}
      placeholder="Select"/>
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">Ration Provider</span>
                  <Select
      options={Provider}
      onChange={handleChange}
      placeholder="Select"/>
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">Ration Mfg/Exp</span>
                  <input
                  type="date"
                  className="headerSearchText"
                  value={date}
                  min={format(new Date(), "yyyy-MM-dd")}
                  onChange={(e) =>{ setDate(e.target.value)}}
                 />
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
