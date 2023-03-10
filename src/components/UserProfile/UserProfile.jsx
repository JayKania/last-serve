import React, { useState } from 'react'
import {
  AiOutlineUser,
  AiOutlineEdit,
  AiOutlineCalendar,
  AiOutlineHome
} from "react-icons/ai";
import styled from "styled-components";
import app_logo from "../../assets/app_logo.jpg";
import { Link } from "react-router-dom";
import UserDetails from '../UserDetails/UserDetails';
import EditUserDetails from '../EditUserDetails/EditUserDetails';

function UserProfile() {

  const [activeComponent, setactiveComponent] = useState('profile');
  const [activeLink, setActiveLink] = useState('profile');

  let component = null;
  if ('profile' === activeComponent) {
    component = <UserDetails />
  } else if ('edit' === activeComponent) {
    component = <EditUserDetails />
  } else if ('order' === activeComponent) {

  }

  return (
    <>
      <StyledSideabar>
        <div className="logo-wrapper">
          <img src={app_logo} alt="app_logo" />
        </div>
        <div className="nav-links">
          <div className='link-wrapper'>
            <AiOutlineHome />
            <Link to="/home">Home</Link>
          </div>
          <div className={activeLink === 'profile' ? 'link-wrapper active' : 'link-wrapper'}>
            <AiOutlineUser />
            <Link to="/profile" onClick={() => { setactiveComponent("profile"); setActiveLink('profile') }}>Profile Details</Link>
          </div>
          <div className={activeLink === 'edit' ? 'link-wrapper active' : 'link-wrapper'}>
            <AiOutlineEdit />
            <Link to="/profile" onClick={() => { setactiveComponent("edit"); setActiveLink('edit') }}>Edit Profile</Link>
          </div>
          <div className={activeLink === 'order' ? 'link-wrapper active' : 'link-wrapper'}>
            <AiOutlineCalendar />
            <Link to="/profile" onClick={() => { setactiveComponent("order"); setActiveLink('order') }}>Orders</Link>
          </div>
        </div>
      </StyledSideabar >
      {component}
    </>
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
    }
  }
`;

export default UserProfile;