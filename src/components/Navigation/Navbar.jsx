import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Navbar = () => {
  return (
    <StyledNavbar>
      <div className="nav-logo-wrapper">
        <NavLink className="nav-link nav-link-left">Logo</NavLink>
        <NavLink className="nav-link nav-link-left" to="/signupVolunteer">Volunteer</NavLink>
        <NavLink className="nav-link nav-link-left">About Us</NavLink>
      </div>
      <div className="nav-links">
        <NavLink className="nav-link login" to="/login">
          Login
        </NavLink>
        <NavLink className="nav-link sign-up" to="/signup">
          Sign Up
        </NavLink>
      </div>
    </StyledNavbar>
  );
};

const StyledNavbar = styled.nav`
  display: flex;
  align-items: center;
  padding: 2rem 2rem 2rem 5rem;
  justify-content: space-between;
  font-size: 1.8rem;
  border-bottom: 1px solid rgb(219, 216, 216);
  .nav-logo-wrapper {
    .nav-link-left{
      text-decoration: none;
      color: black;
    }
    display: flex;
    gap: 1rem;
    .nav-link {
      :hover {
        cursor: pointer;
      }
    }
  }
  .nav-links {
    display: flex;
    align-items: center;
    gap: 2rem;
    .nav-link {
      color: black;
      :hover {
        cursor: pointer;
      }
    }
    .sign-up {
      background-color: rgb(2, 127, 254);
      color: white;
      padding: 1rem;
      border-radius: 5px;
      text-decoration: none;
    }

    .login {
      text-decoration: none;
    }
  }
  @media only screen and (min-width: 280px) and (max-width: 432px) {
    padding: 1rem;
    font-size: 1.2rem;
  }
`;

export default Navbar;
