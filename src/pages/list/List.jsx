import "./list.css";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import { useState, useEffect } from "react";
import { format } from "date-fns";
import SearchItem from "../../components/searchItem/SearchItem";
import Multiselect from "multiselect-react-dropdown";
import Select from "react-select";
import { useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode";

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
  const [status, setStatus] = useState([]);
  const [selectDate, setselectDate] = useState("");
  const [slot, setslot] = useState("");
  const [selectLocation, setselectLocation] = useState("");
  let navigate = useNavigate();
  const [formData, setFormData] = useState({
    organisationName: "",
    rationType: [],
    rationDetails: [],
    rationSchedule: "",
    rationAllocate: 0,
    rationStock: 0,
    rationProvider: "",
    rationMfg: "",
    rationExp: "",
    location: "",
    eventDate: "",
    // rationSlots:""
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    try {
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
      console.log("Backend Message", addedEvent);
    } catch (error) {
      console.error(error);
    }
    
  };

  console.log("List Component", selectDate);

  const bookSlot = async () => {
    // console.log(slot);
    // console.log("presses")
    console.log(slot)
    const idUser = localStorage.getItem("userId");
    const response = await fetch(`http://localhost:5001/api/events/${idUser}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
      body: JSON.stringify({ eventId: slot }),
    });

    const data = await response.json();

    if (response.ok) {
      console.log("Event updated successfully", data);
    } else {
      console.error("Event update failed", data);
    }
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
                  {/* <div className="lsOptionItem">
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
                  </div> */}
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
                    <input
                      type="input"
                      onChange={(e) => {
                        setFormData({
                          ...formData,
                          rationStock: e.target.value,
                        });
                      }}
                      name=""
                      id=""
                    />
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
                  elderSlots={items.elderSlots}
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
