import "./searchItem.css";
import Modal from "react-modal";
import React, { useState } from "react";
const SearchItem = (props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleBookSlot = (id) => {
    props.setslot(id);
    toggleModal();
  };
  const [age, setAge] = useState("");
  const handleAgeChange = (e) => {
    setAge(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = { age: age };
    console.log(data); // or send the data to the server using fetch or axios
  };

  return (

    <div className="searchItem">

      <div className="siDesc">
        <h1 className="siTitle">{props.organisationName}</h1>
        <span className="siDistance">{props.rationType}</span>
        <span className="siTaxiOp">Time: {props.rationSchedule}</span>
        <span className="siSubtitle">
          Ration Provider: {props.rationProvider}
        </span>
        <span className="siEvent">
          Location: {props.location}
        </span>
        {/* <span className="siCancelOp">Free cancellation </span> */}
        {/* <span className="siCancelOpSubtitle">
          You can cancel later, so lock in this great price today!
        </span> */}
      </div>
      <div className="siDetails">
        <div className="siRating">
          <span>Excellent</span>
          <button>{props.rating}</button>
        </div>
        <div className="siDetailTexts">
          {/* <span className="siPrice">$112</span> */}
          <span className="siTaxOp">{props.rationSlots} slots are available </span>
          <button className="siCheckButton" onClick={() => handleBookSlot(props.id)}>
            Book Slots
          </button>
          <Modal isOpen={isModalOpen} onRequestClose={toggleModal} className="custom-modal">
          <label htmlFor="age">Age:</label>
          <input
          type="number"
          id="age"
          name="age"
          value={age}
          onChange={handleAgeChange}
          className="modal-input"
          placeholder="Enter your age"
        />
          <button type="submit">Submit</button>
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default SearchItem;
