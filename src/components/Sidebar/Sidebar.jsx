import React from "react";
import {
  AiOutlineCalendar,
  AiOutlineHome,
  AiOutlineSearch,
} from "react-icons/ai";
import { BiUser } from "react-icons/bi";
import { IoNotificationsOutline } from "react-icons/io5";
import styled from "styled-components";
import app_logo from "../../assets/app_logo.jpg";
import { Link } from "react-router-dom";

const Sidebar = ({ activeRoute }) => {
  return (
    <StyledSideabar>
      <div className="logo-wrapper">
        <img src={app_logo} alt="app_logo" />
      </div>
      <div className="nav-links">
        <div
          className={`link-wrapper ${activeRoute === "home" ? "active" : ""}`}
        >
          <AiOutlineHome />
          <Link to="/home">Home</Link>
        </div>
        <div
          className={`link-wrapper ${
            activeRoute === "explore" ? "active" : ""
          }`}
        >
          <AiOutlineSearch />
          <Link to="/restaurants">Explore</Link>
        </div>
        <div
          className={`link-wrapper ${
            activeRoute === "notifications" ? "active" : ""
          }`}
        >
          <IoNotificationsOutline />
          <Link to="/notifications">Notifications</Link>
        </div>
        <div
          className={`link-wrapper ${
            activeRoute === "appointments" ? "active" : ""
          }`}
        >
          <AiOutlineCalendar />
          <Link to="/appointments">Appointments</Link>
        </div>
        <div className={`link-wrapper profile-wrapper`}>
          <BiUser />
          <Link to="/profile">Profile</Link>
        </div>
      </div>
    </StyledSideabar>
  );
};

const StyledSideabar = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 3rem;
  position: fixed;
  width: 20%;
  /* flex-basis: 20%; */
  margin-left: 10%;
  height: 100vh;
  border-right: 1px solid #ccc;
  font-size: 1.8rem;
  .logo-wrapper {
    width: 100px;
    img {
      width: 100%;
      object-fit: cover;
    }
    :hover {
      cursor: pointer;
    }
  }
  .nav-links {
    flex-basis: 100%;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    margin-top: 4rem;
    .link-wrapper {
      display: flex;
      gap: 1rem;
      align-items: center;
      a {
        text-decoration: none;
        color: black;
      }
      svg {
        width: 25px;
        height: 25px;
      }
      :hover {
        cursor: pointer;
      }
      &.active {
        font-weight: 700;
        color: rgb(28, 155, 239);
        a {
          color: rgb(28, 155, 239);
        }
      }
    }
    .profile-wrapper {
      margin-top: auto;
      border-radius: 50px;
      width: fit-content;
      padding: 1.5rem 2rem;
      background-color: rgb(28, 155, 239);
      color: white;
      box-shadow: 0px 0px 10px 1px rgb(207, 207, 207);
      a {
        color: white;
      }
    }
  }
`;

export default Sidebar;
