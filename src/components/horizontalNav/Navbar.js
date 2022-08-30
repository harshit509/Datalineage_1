import React from 'react'
import "./style.css";
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faContactCard,
  faDashboard,
  faFile,
  faHandHolding,
  faHome,
  faArrowLeft,
  faSuperscript,
} from "@fortawesome/free-solid-svg-icons";




const Navbar = () => {
  return (
    <> 
   
    <div className='container'>
        <ul className='ul'>
            <li className='li'>
                <NavLink className="commonNavbar" to="/">
                <i className="icon">
                <FontAwesomeIcon className="align_icon" icon={faArrowLeft} />
              </i>
                </NavLink>
            </li>
            <li className='li'>
                <NavLink className="commonNavbar" to="/app-master">
                <i className="icon">
                <FontAwesomeIcon className="align_icon" icon={faHome} />
              </i>
                </NavLink>
            </li>
            <li className='li'>
            <NavLink className="commonNavbar" to="/integrations">
            <i className="icon">
                <FontAwesomeIcon className="align_icon" icon={faSuperscript} />
              </i>
            </NavLink>

                </li>
            <li className='li'>
            <NavLink className="commonNavbar" to="/data-flow"><i className="icon">
                <FontAwesomeIcon className="align_icon" icon={faDashboard} />
              </i></NavLink>

                </li>
            <li className='li'>
            <NavLink className="commonNavbar" to="/reports"> <i className="icon">
                <FontAwesomeIcon className="align_icon" icon={faFile} />
              </i></NavLink>

                </li>
            <li className='li'>
            <NavLink className="commonNavbar" to="/contacts"> <i className="icon">
                <FontAwesomeIcon className="align_icon" icon={faContactCard} />
              </i></NavLink>

                </li>
            <li className='li'>
            <NavLink className="commonNavbar" to="/help"><i className="icon">
                <FontAwesomeIcon className="align_icon" icon={faHandHolding} />
              </i></NavLink>

                </li>
        </ul>
    </div>
    </>
  )
}

export default Navbar;