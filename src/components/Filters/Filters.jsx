import React from "react";
import styled from "styled-components";
import { BsSliders } from "react-icons/bs";

const Filters = () => {
  return (
    <StyledFilters>
      <div className="filter-header">
        <BsSliders />
        <h4>Filters</h4>
      </div>
      <div className="filter-options">
        <div className="filter-food-preference">
          <div className="input-wrapper">
            <input type="checkbox" name="veg" id="veg" />
            <label htmlFor="veg">Veg</label>
          </div>
          <div className="input-wrapper">
            <input type="checkbox" name="non-veg" id="non-veg" />
            <label htmlFor="non-veg">Non-Veg</label>
          </div>
          <div className="input-wrapper">
            <input type="checkbox" name="vegan" id="vegan" />
            <label htmlFor="vegan">Vegan</label>
          </div>
        </div>
        <div className="filter-subscription-preference">
          <div className="input-wrapper">
            <input type="checkbox" name="subscribed" id="subscribed" />
            <label htmlFor="subscribed">Subscribed</label>
          </div>
          <div className="input-wrapper">
            <input type="checkbox" name="unsubscribed" id="unsubscribed" />
            <label htmlFor="unsubscribed">Unsubscribed</label>
          </div>
        </div>
      </div>
    </StyledFilters>
  );
};

const StyledFilters = styled.div`
  margin-left: 70%;
  width: 100%;
  position: fixed;
  top: 0;
  padding: 5rem 7rem;
  font-size: 2rem;
  .filter-header {
    display: flex;
    gap: 2rem;
  }
  .filter-options {
    .filter-food-preference,
    .filter-subscription-preference {
      margin-top: 5rem;
      display: flex;
      flex-direction: column;
      gap: 1.6rem;
      font-weight: 300;
      .input-wrapper {
        display: flex;
        gap: 1rem;
        align-items: center;
      }
    }
  }
`;

export default Filters;
