import React from 'react'
import './history.css'
import Navbar from '../../components/navbar/Navbar'
import Header from '../../components/header/Header'
import {
    faBed,
    faCalendarDays,
    faCar,
    faPerson,
    faPlane,
    faTaxi,
    faHome,
    faInfo,
    faHistory,
    faList,
    
  } from "@fortawesome/free-solid-svg-icons";
  import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
  import { Link, useNavigate } from "react-router-dom";





  export default function History(props) {

    const {type, setselectLocation ,setselectDate,getEvents}=props

  return (
    <>
    <div className="Slots">
        <Navbar/>
        <div className="header">
      <div
        className={
          type === "list" ? "headerContainer listMode" : "headerContainer"
        }
      >
        <div className="headerList">
          <Link to="/home">
          <div className="headerListItem active">
            <FontAwesomeIcon icon={faHome} />
            <span>Home</span>
          </div>
          </Link>

          <Link to='/slots'>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faList} />
            <span>Slots</span>
          </div>
          </Link>
          <Link to='/history'>
            <div className="headerListItem">
            <FontAwesomeIcon icon={faHistory} />
            <span>History</span>
          </div>
          </Link>

          <div className="headerListItem">
            <FontAwesomeIcon icon={faInfo} />
            <span>About</span>
          </div>
        </div>
 
      </div>
    </div>
    </div>
    </>
  )
}
