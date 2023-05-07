import "./searchItem.css";

const SearchItem = (props) => {
  const handleSlot=(id)=>{
    props.setslot(id)
    props.bookSlot();
  }
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
          {localStorage.getItem("role")==="ROLE_ADMIN"?"":<button className="siCheckButton" onClick={()=>handleSlot(props.id)}>Book Slots</button>}
        </div>
      </div>
    </div>
  );
};

export default SearchItem;
