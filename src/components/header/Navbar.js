import React from "react";
import "./header.css";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faContactCard,
  faDashboard,
  faFile,
  faHandHolding,
  faHome,
  faSuperscript,
} from "@fortawesome/free-solid-svg-icons";
import Navbar1 from "../horizontalNav/Navbar"

const Navbar = () => {
  return (
    <>
      {/* <header
        style={{
          //   marginLeft: "2rem",

          backgroundColor: "lightblue",
          width: "100%",
          height: "4rem",
          padding: "1rem",
          marginTop: ".6rem",
        }}
      >
        <h3
          style={{
            color: "blue",
            fontWeight: "700",
            marginLeft: "11rem",
            fontSize: "2rem",
            marginTop: "0rem",
            display: "grid",
            alignItems: "center",
          }}
        >
          Data lineage
        </h3>
      </header> */}
      <Navbar1/> 
      <nav
        style={{
          display: "grid",
        }}
      >
        <div
          style={{
            marginLeft: "2rem",
            borderLeft: "2rem solid gray",
            borderRight: "none",
          }}
        ></div>
        <ul>
          <li>
            <NavLink
              className="hover_Effect"
              to="/app-master"
              title="AppMaster"
            >
              <i className="icon">
                <FontAwesomeIcon className="large_icon" icon={faHome} />
              </i>
              App Master
            </NavLink>
            <NavLink className="hover_Effect" to="/integrations">
              <i className="icon">
                <FontAwesomeIcon className="large_icon" icon={faSuperscript} />
              </i>
              Integrations
            </NavLink>
            <NavLink className="hover_Effect" to="/data-flow">
              <i className="icon">
                <FontAwesomeIcon className="large_icon" icon={faDashboard} />
              </i>
              Data Flow
            </NavLink>
            <NavLink className="hover_Effect" to="/reports">
              <i className="icon">
                <FontAwesomeIcon className="large_icon" icon={faFile} />
              </i>
              Reports
            </NavLink>
            <NavLink className="hover_Effect" to="/contacts">
              <i className="icon">
                <FontAwesomeIcon className="large_icon" icon={faContactCard} />
              </i>
              Contacts
            </NavLink>
            <NavLink className="hover_Effect" to="/help">
              <i className="icon">
                <FontAwesomeIcon className="large_icon" icon={faHandHolding} />
              </i>
              Help
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
