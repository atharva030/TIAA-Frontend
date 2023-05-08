import "./list.css";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import { useState, useEffect } from "react";
import { format } from "date-fns";
import SearchItem from "../../components/searchItem/SearchItem";
import Multiselect from "multiselect-react-dropdown";
import Select from "react-select";
import { useNavigate } from "react-router-dom";
const List = () => {
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
  const [date, setDate] = useState(format(new Date(), "dd MMM yyyy"));
  const [status, setStatus] = useState([
    {
      "_id": "64540a0ea2ff2ed7f01352b5",
      "organisationName": "Visnupuri Ration Org",
      "rationType": [
        "Orange"
      ],
      "rationDetails": [
        "Type"
      ],
      "rationSchedule": "11:00-15:00",
      "rationSlots": "10",
      "rating":"8.5",
      "rationStock": "Type",
      "rationProvider": "Daily Use",
      "rationMfg": "3/22",
      "rationExp": "3/24",
      "location": "Visnupuri Temple",
      "eventDate": "21-02-22",
      "date": "2023-05-04T19:39:58.176Z",
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
      "rationSlots": "10",
      "rating":"8.5",
      "rationStock": "Type",
      "rationProvider": "Type",
      "rationMfg": "Type",
      "rationExp": "Type",
      "location": "Type",
      "eventDate": "25-02-22",
      "date": "2023-05-04T19:40:08.530Z",
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
      "rationSlots": "10",
      "rating":"8.5",
      "rationStock": "Type",
      "rationProvider": "Type",
      "rationMfg": "Type",
      "rationExp": "Type",
      "location": "Type",
      "eventDate": "29-02-23",
      "date": "2023-05-04T19:40:23.913Z",
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
      "rationSlots": "10",
      "rating":"8.5",
      "rationStock": "Type",
      "rationProvider": "Type",
      "rationMfg": "Type",
      "rationExp": "Type",
      "location": "Type",
      "eventDate": "29-02-23",
      "date": "2023-05-05T09:31:36.600Z",
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
      "rationSlots": "10",
      "rating":"8.5",
      "rationStock": "Type",
      "rationProvider": "Type",
      "rationMfg": "Type",
      "rationExp": "Type",
      "location": "Type",
      "eventDate": "29-02-23",
      "date": "2023-05-05T09:34:00.955Z",
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
      "rationSlots": "10",
      "rating":"8.5",
      "rationStock": "Type",
      "rationProvider": "Type",
      "rationMfg": "Type",
      "rationExp": "Type",
      "location": "Type",
      "eventDate": "29-02-23",
      "date": "2023-05-05T09:47:07.099Z",
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
      "rationSlots": "10",
      "rating":"8.5",
      "rationStock": "Type",
      "rationProvider": "Type",
      "rationMfg": "Type",
      "rationExp": "Type",
      "location": "Type",
      "eventDate": "29-02-23",
      "date": "2023-05-05T11:06:20.602Z",
    }
  ])
  const [selectDate, setselectDate] = useState("");
  const [slot, setslot] = useState("");
  const [selectLocation, setselectLocation] = useState("");
  let navigate = useNavigate();
  const [formData, setFormData] = useState({
    organisationName: "",
    rationType: [],
    rationDetails: [],
    rationSchedule: "",
    rationAllocate: "",
    rationStock: "",
    rationProvider: "",
    rationMfg: "",
    rationExp: "",
    location: "",
    eventDate: "",
    rationSlots:""
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    const response = await fetch(`http://localhost:5001/api/events/addevent`, {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify(formData), // body data type must match "Content-Type" header
    });
    const addedEvent = await response.json();
    console.log("Backend Message",addedEvent)
    // setNotes(notes.concat(note)); //concat returns an array whereas push updates an array
    // setLoader(false);
  };

  console.log("List Component", selectDate);

  const bookSlot = () => {
    console.log(slot);
    // console.log("presses")
  };
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
    if (localStorage.getItem("token")) {
      console.log("Senddd");
      getEvents();
    } else {
      console.log("You are not logged in");
      navigate("/");
    }
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
          {localStorage.getItem("role") === "ROLE_USER" ? (
            ""
          ) : (
            <form className="listSearch" onSubmit={handleSubmit}>
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
                      onRemove={(e) => {
                        setFormData({ ...formData, rationType: e });
                      }}
                      onSearch={function noRefCheck() {}}
                      onSelect={(e) => {
                        setFormData({ ...formData, rationType: e });
                      }}
                      required
                      options={["Yellow Card", "Orange Card"]}
                    />
                  </div>
                  <div className="lsOptionItem">
                    <span className="lsOptionText">Ration Details</span>
                    <Multiselect
                      isObject={false}
                      onKeyPressFn={function noRefCheck() {}}
                      onRemove={(e) => {
                        setFormData({ ...formData, rationDetails: e });
                      }}
                      onSearch={function noRefCheck() {}}
                      onSelect={(e) => {
                        setFormData({ ...formData, rationDetails: e });
                      }}
                      options={["Wheat", "Rice", "Sugar", "Oil", "Tarmaric"]}
                    />
                  </div>
                  <div className="lsOptionItem">
                    <span className="lsOptionText">Number of Slots</span>
                    <input
                      type="text"
                      id="organisationName"
                      onChange={(e) => {
                        setFormData({
                          ...formData,
                          rationSlots: e.target.value,
                        });
                      }}
                    />
                  </div>
                  <div className="lsOptionItem">
                    <span className="lsOptionText">Organisation name</span>
                    <input
                      type="text"
                      id="organisationName"
                      onChange={(e) => {
                        setFormData({
                          ...formData,
                          organisationName: e.target.value,
                        });
                      }}
                    />
                  </div>
                  <div className="lsOptionItem">
                    <span className="lsOptionText">Ration Schedule</span>
                    <input
                      type="date"
                      onChange={(e) => {
                        setFormData({
                          ...formData,
                          rationSchedule: e.target.value,
                        });
                      }}
                      name=""
                      id=""
                    />
                  </div>
                  <div className="lsOptionItem">
                    <span className="lsOptionText">Ration Allocated </span>
                    <Select
                      options={[
                        { value: "2 Kg", label: "2 Kg" },
                        { value: "5 kg", label: "5 kg" },
                        { value: "10 kg", label: "10 kg" },
                        { value: "15 kg", label: "15 kg" },
                      ]}
                      value={{
                        value: formData.rationAllocate,
                        label: formData.rationAllocate,
                      }}
                      onChange={(selectedOption) => {
                        setFormData({
                          ...formData,
                          rationAllocate: selectedOption.value,
                        });
                      }}
                    />
                  </div>
                  <div className="lsOptionItem">
                    <span className="lsOptionText">Ration Stock</span>
                    <select
                      value={formData.rationStock}
                      onChange={(e) => {
                        setFormData({
                          ...formData,
                          rationStock: e.target.value,
                        });
                      }}
                    >
                      <option value="">Select an option</option>
                      {["Less than 100 Kg", "200+ Kg", "500+ Kg"].map(
                        (option) => (
                          <option key={option} value={option}>
                            {option}
                          </option>
                        )
                      )}
                    </select>
                  </div>
                  <div className="lsOptionItem">
                    <span className="lsOptionText">Ration Location</span>
                    <select
                      value={formData.location}
                      onChange={(e) => {
                        setFormData({
                          ...formData,
                          location: e.target.value,
                        });
                      }}
                    >
                      <option value="">Select a city</option>
                      {cities.map((city) => (
                        <optgroup key={city.name} label={city.name}>
                          {city.towns.map((town) => (
                            <option key={town} value={`${town}, ${city.name}`}>
                              {town}
                            </option>
                          ))}
                        </optgroup>
                      ))}
                    </select>
                  </div>
                  <div className="lsOptionItem">
                    <span className="lsOptionText">Ration Provider</span>
                    <select
                      onChange={(e) => {
                        setFormData({
                          ...formData,
                          rationProvider: e.target.value,
                        });
                      }}
                    >
                      <option value="">Select an option</option>
                      <option value="Adwait Sharma">Adwait Sharma</option>
                      <option value="Nagpur">Nagpur</option>
                    </select>
                  </div>
                  <div className="lsOptionItem">
                    <span className="lsOptionText">Ration Mfg</span>
                    <input
                      type="date"
                      onChange={(e) => {
                        setFormData({ ...formData, rationMfg: e.target.value });
                      }}
                      name=""
                      id=""
                    />
                  </div>
                  <div className="lsOptionItem">
                    <span className="lsOptionText">Ration Exp</span>
                    <input
                      type="date"
                      onChange={(e) => {
                        setFormData({ ...formData, rationExp: e.target.value });
                      }}
                      name=""
                      id=""
                    />
                  </div>
                  <div className="lsOptionItem">
                    <span className="lsOptionText">Event Date</span>
                    <input
                      type="date"
                      onChange={(e) => {
                        setFormData({ ...formData, eventDate: e.target.value });
                      }}
                      name=""
                      id=""
                    />
                  </div>
                </div>
              </div>
              <button>Search</button>
            </form>
          )}
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
