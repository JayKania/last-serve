import React from "react";
import styled from "styled-components";
import Sidebar from "../Sidebar/Sidebar";
import Posts from "../Posts/Posts";
import Filters from "../Filters/Filters";

const Landing = () => {
  return (
    <StyledLanding>
      <Sidebar activeRoute="home" />
      <Posts />
      <Filters />
    </StyledLanding>
  );
};

const StyledLanding = styled.div``;

export default Landing;
