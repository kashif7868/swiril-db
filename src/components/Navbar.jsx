import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MdDashboard, MdHomeRepairService, MdEmail } from "react-icons/md";
import {
  FaBell,
  FaCog,
  FaUser,
  FaRegFileAlt,
  FaChevronDown,
  FaUserPlus,
} from "react-icons/fa";
import { HiOutlineMailOpen } from "react-icons/hi";
import { RiAccountBoxLine, RiMoneyDollarBoxLine } from "react-icons/ri";
import { IoLocationSharp } from "react-icons/io5";
import { GrLanguage } from "react-icons/gr";
import { AiOutlineLogout } from "react-icons/ai";
import userImage from "../asset/images/icon/haider.jpg";
import "../asset/css/navbar.css";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isOpenPr, setIsOpenPr] = useState(false);
  const [isOpenUser, setIsOpenUser] = useState(false);
  const [isOpenNotification, setIsOpenNotification] = useState(false);
  const [isOpenSettings, setIsOpenSettings] = useState(false);
  const [isOpenNameUser, setIsOpenNameUser] = useState(false);

  const toggleDropdown = (type) => {
    setIsOpenPr(type === "db" ? !isOpenPr : false);
    setIsOpenUser(type === "user" ? !isOpenUser : false);
    setIsOpenNotification(
      type === "notification" ? !isOpenNotification : false
    );
    setIsOpenSettings(type === "settings" ? !isOpenSettings : false);
    setIsOpenNameUser(type === "nameUser" ? !isOpenNameUser : false);
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
          <motion.button
            className="dropdown-btn-db"
            onMouseEnter={() => setIsOpenPr(true)}
            onMouseLeave={() => setIsOpenPr(false)}
            whileHover={{ scale: 1.1, borderColor: "#007bff" }}
            whileTap={{ scale: 0.9 }}
          >
            <MdDashboard />
            <span>
              <Link to="/" className="text-white list-none">
                Dashboard
              </Link>
            </span>
          </motion.button>
          <ul className={`dropdown-content-pr ${isOpenPr ? "show" : ""}`}>
            <li>
              <Link to="/add_new_service">Add New Service</Link>
            </li>
            <li>
              <Link to="/service_list">
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
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/register">Register</Link>
            </li>
            <li>
              <Link to="/forget_password">Forget Password</Link>
            </li>
          </ul>
        </div>
      </div>

      {/* ************************ */}
      {/* ************************ */}
      {/* ************************ */}
      <div className="container-right-side">
        <div className="dropdown-notification-main">
          {/* Dropdown button with FaBell icon */}
          <button
            className="dropdown-btn-notification"
            onClick={() => toggleDropdown("notification")}
          >
            <FaBell className="icon-bell" />
          </button>
          <ul
            className={`dropdown-content-notification ${
              isOpenNotification ? "show" : ""
            }`}
          >
            <li>
              <span>You have 3 Notifications</span>
              <Link to="#">
                <HiOutlineMailOpen className="notification-icon email-icon" />
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
            <FaCog className="icon-settings" />
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
                <FaCog className="setting-icon" />
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
                <GrLanguage className="setting-icon" />
                Language
              </Link>
            </li>
            <li>
              <Link to="#">
                <IoLocationSharp className="setting-icon" />
                Location
              </Link>
            </li>
            <li>
              <Link to="#">
                <MdEmail className="setting-icon" />
                email
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
          <button
            className="dropdown-btn-name-user"
            onClick={() => toggleDropdown("nameUser")}
          >
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
                <FaCog />
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
