import "./searchItem.css";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useState } from "react";
import { Form } from "react-router-dom";

const SearchItem = (props) => {

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const success = () => setOpen(true);

  const style = {
    position: 'absolute',
    // display: 'flex',
    // // align-items: 'center',
    // // justify-content: 'center',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
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

          <Button className="siCheckButton" onClick={handleOpen}>Book Slot</Button>
          <Modal
            open={open}
            onClose={handleClose}

            aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <div className="modal-modal-description" sx={{ mt: 2 }}>
                <div className="tick-image">
                </div>
                <div className="sucess">Slot Booked Sucessfully</div>
              </div>
            </Box>
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default SearchItem;
