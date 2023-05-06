import "./list.css";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { format } from "date-fns";
import { DateRange } from "react-date-range";
import SearchItem from "../../components/searchItem/SearchItem";
import Multiselect from "multiselect-react-dropdown";

const List = () => {
  const location = useLocation();
  const [formData, setFormData] = useState({
    "rationType":[],
    "rationDetails":[],
    "rationShedule":"",
    "rationAlloted":[],
    "rationStock":[],
    "rationProvider":[],
    "rationExp":"",
  })


 const handleSubmit = async(e)=>{
  e.preventDefault()
  console.log(formData)
 }

  // const [destination, setDestination] = useState(location.state.destination);
  // const [date, setDate] = useState(location.state.date);
  // const [openDate, setOpenDate] = useState(false);
  // const [options, setOptions] = useState(location.state.options);

  return (
    <div>
      <Navbar />
      <Header />
      <div className="listContainer">
        <div className="listWrapper">
          <form className="listSearch" onSubmit={handleSubmit}>
            <h3 className="lsTitle">Create Your Organization</h3>
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
              <div className="lsOptions">
                <div className="lsOptionItem">
                  <span className="lsOptionText">Ration Type</span>
                  {/* <input type="number" className="lsOptionInput" /> */}
                  <Multiselect
                  
                    isObject={false}
                    onKeyPressFn={function noRefCheck() {}}
                    onRemove={(e)=>{setFormData({...formData, rationType:e})}}
                    onSearch={function noRefCheck() {}}
                    onSelect={(e)=>{setFormData({...formData, rationType:e})}}
                    required
                    options={["Yellow Card", "Orange Card"]}
                    
                  />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">Ration Details</span>
                  <Multiselect
                    isObject={false}
                    onKeyPressFn={function noRefCheck() {}}
                    onRemove={(e)=>{setFormData({...formData, rationDetails:e})}}
                    onSearch={function noRefCheck() {}}
                    onSelect={(e)=>{setFormData({...formData, rationDetails:e})}}
                    options={["Wheat", "Rice", "Sugar", "Oil", "Tarmaric"]}
                  />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">Ration Schedule</span>
                  <input type="datetime-local" onChange={(e)=>{setFormData({...formData, rationShedule:e.target.value})}} name="" id="" />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">Ration Allocated </span>
                  <Multiselect
                    isObject={false}
                    onKeyPressFn={function noRefCheck() {}}
                    onRemove={(e)=>{setFormData({...formData, rationAllotted:e})}}
                    onSearch={function noRefCheck() {}}
                    onSelect={(e)=>{setFormData({...formData, rationAlloted:e})}}
                    options={["2 Kg", "5 kg", "10 kg", "15 kg"]}
                  />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">Ration Stock</span>
                  <Multiselect
                    isObject={false}
                    onKeyPressFn={function noRefCheck() {}}
                    onRemove={(e)=>{setFormData({...formData, rationStock:e})}}
                    onSearch={function noRefCheck() {}}
                    onSelect={(e)=>{setFormData({...formData, rationStock:e})}}
                    options={["Less than 100 Kg", "200+ Kg", "500+ Kg"]}
                  />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">Ration Provider</span>
                  <Multiselect
                    isObject={false}
                    // onKeyPressFn={(e)=>{console.log(e)}}
                    onRemove={(e)=>{setFormData({...formData, rationProvider:e})}}
                    onSearch={function noRefCheck() {}}
                    // onSelect={function noRefCheck() {}}
                    options={["Adwait Sharma", "Nagpur"]}
                    onSelect={(e)=>{setFormData({...formData, rationProvider:e})}}
                  />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">Ration Mfg/Exp</span>
                  <input type="datetime-local" onChange={(e)=>{setFormData({...formData, rationExp:e.target.value})}} name="" id="" />
                </div>
              </div>
            </div>
            <button type="submit">Search</button>
          </form>
          <div className="listResult">
            <SearchItem organisationName="organisationName" />
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
