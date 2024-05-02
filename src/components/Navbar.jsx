import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaBell, FaCog } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import { MdDashboard, MdHomeRepairService, MdEmail } from "react-icons/md";
import { FaUserPlus,FaUser } from "react-icons/fa6";
import userImage from "../asset/images/icon/haider.jpg"
import { FaChevronDown,FaRegFileAlt } from "react-icons/fa";
import { AiOutlineLogout } from "react-icons/ai";
import { RiMoneyDollarBoxLine } from "react-icons/ri";
import { IoLocationSharp } from "react-icons/io5";
import { GrLanguage } from "react-icons/gr"
import { RiAccountBoxLine } from "react-icons/ri";
import { HiOutlineMailOpen } from "react-icons/hi";
import "../asset/css/navbar.css";


const Navbar = () => {
  const [isOpenPr, setIsOpenPr] = useState(false);
  const [isOpenUser, setIsOpenUser] = useState(false);
  const [isOpenNotification, setIsOpenNotification] = useState(false);
  const [isOpenSettings, setIsOpenSettings] = useState(false);
  const [isOpenNameUser, setIsOpenNameUser] = useState(false);

  // Example useEffect to log state changes
  useEffect(() => {
    console.log(`isOpenPr: ${isOpenPr}`);
    console.log(`isOpenUser: ${isOpenUser}`);
    console.log(`isOpenNotification: ${isOpenNotification}`);
    console.log(`isOpenSettings: ${isOpenSettings}`);
    console.log(`isOpenNameUser: ${isOpenNameUser}`);
  }, [
    isOpenPr,
    isOpenUser,
    isOpenNotification,
    isOpenSettings,
    isOpenNameUser,
  ]);

  const toggleDropdown = (type) => {
    switch (type) {
      case "db":
        setIsOpenPr(!isOpenPr);
        break;
      case "user":
        setIsOpenUser(!isOpenUser);
        break;
      case "notification":
        setIsOpenNotification(!isOpenNotification);
        break;
      case "settings":
        setIsOpenSettings(!isOpenSettings);
        break;
      case "nameUser":
        setIsOpenNameUser(!isOpenNameUser);
        break;
      default:
        break;
    }
  };

  return (
    <nav
      className={`navbar ${
        isOpenPr ||
        isOpenUser ||
        isOpenNotification ||
        isOpenSettings ||
        isOpenNameUser
          ? "open"
          : ""
      }`}
    >
     <div className="container-left-side">
     <div className="logo">
        <h1>Swirl Marketing</h1>
      </div>
     </div>
      <div className="container-center">
        <div className="dropdown-pr-main">
          {/* Dropdown button with FaCog icon */}
          <button
            className="dropdown-btn-db"
            onClick={() => toggleDropdown("db")}
          >
            <MdDashboard />
            Dashboard
          </button>
          <ul className={`dropdown-content-pr ${isOpenPr ? "show" : ""}`}>
            <li>
              <Link to="">Add New Service</Link>
            </li>
            <li>
              <Link to="/invoices">
                <img src="" alt="" />
                Service List
              </Link>
            </li>
          </ul>
        </div>
        <div className="sr-link">
          <MdHomeRepairService />
          <Link to="/service">Service</Link>
        </div>
        <div className="dropdown-user-main">
          {/* Dropdown button with FaUser icon */}
          <button
            className="dropdown-btn-user"
            onClick={() => toggleDropdown("user")}
          >
            <FaUserPlus />
            User
          </button>
          <ul className={`dropdown-content-user ${isOpenUser ? "show" : ""}`}>
            <li>
              <Link to="/login">
                Login
              </Link>
            </li>
            <li>
              <Link to="/register">
                Register
              </Link>
            </li>
            <li>
              <Link to="/forget_password">
                Forget Password
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="container-right-side">
        <div className="dropdown-notification-main">
          {/* Dropdown button with FaBell icon */}
          <button
            className="dropdown-btn-notification"
            onClick={() => toggleDropdown("notification")}
          ><FaBell className="icon-bell" />
          </button>
          <ul
            className={`dropdown-content-notification ${
              isOpenNotification ? "show" : ""
            }`}
          >
            <li>
              <span>You have 3 Notifications</span>
              <Link to="#">
                <  HiOutlineMailOpen className="notification-icon email-icon" />
                You got an email notification
                <span>April 12, 2018 06:50 PM</span>
              </Link>
            </li>
            <li>
              <Link to="#">
              <RiAccountBoxLine className="notification-icon acount-icon" />
                Your account has been blocked
                <span>April 12, 2018 06:50 PM</span>
              </Link>
            </li>
            <li>
              <Link to="#">
                <FaRegFileAlt className="notification-icon file-icon" />
                You got a new file
                <span>April 12, 2018 06:50 PM</span>
              </Link>
            </li>
            <li>
              <Link to="#">All Notifications</Link>
            </li>
          </ul>
        </div>
        <div className="dropdown-settings-main">
          {/* Dropdown button with FaCog icon */}
          <button
            className="dropdown-btn-settings"
            onClick={() => toggleDropdown("settings")}
          >
            <FaCog className="icon-settings"/>
          </button>
          <ul
            className={`dropdown-content-settings ${
              isOpenSettings ? "show" : ""
            }`}
          >
            <li>
              <Link to="#">
              <FaUser className="setting-icon" />
                Account
              </Link>
            </li>
            <li>
              <Link to="#">
              <IoMdSettings className="setting-icon" />
                Setting
              </Link>
            </li>
            <li>
              <Link to="#">
              <RiMoneyDollarBoxLine className="setting-icon" />
                Billing
              </Link>
            </li>
            <li>
              <Link to="#">
                <GrLanguage className="setting-icon"  />
                Language
              </Link>
            </li>
            <li>
              <Link to="#">
              <IoLocationSharp className="setting-icon"  />
                Location
              </Link>
            </li>
            <li>
              <Link to="#">
              <MdEmail className="setting-icon" />
                Email
              </Link>
            </li>
            <li>
              <Link to="#">
              <FaBell className="setting-icon" />
                Notification
              </Link>
            </li>
          </ul>
        </div>
        <div className="dropdown-name-user-main">
          {/* Dropdown button with FaUser icon */}
          <button className="dropdown-btn-name-user"onClick={() => toggleDropdown("nameUser")} >
            <img src={userImage} alt="" />
            Haider Ashraf
            <FaChevronDown />
          </button>
          <ul
            className={`dropdown-content-name-user ${
              isOpenNameUser ? "show" : ""
            }`}
          >
            <li>
              <Link to="#">
                <img src={userImage} alt="" />
                Haider Ashraf
                <span>haidersomroo@gmail.com</span>
              </Link>
            </li>
            <li>
              <Link to="#">
              <FaUser />
                Account
              </Link>
            </li>
            <li>
              <Link to="#">
              <IoMdSettings />
                Setting
              </Link>
            </li>
            <li>
              <Link to="#">
              <RiMoneyDollarBoxLine />
                Billing
              </Link>
            </li>
            <li>
              <Link to="#">
              <AiOutlineLogout />
                Logout
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
