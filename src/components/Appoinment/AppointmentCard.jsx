import React from "react";
import { GoLocation } from "react-icons/go";
import styled from "styled-components";
import res_img from "../../assets/res_img1.jpg";
import AppointmentForm from "./AppointmentForm";

const AppointmentCard = () => {
  return (
    <StyledAppointmentCard>
      <StyledResPostWrapper className="res-post-wrapper">
        <div className="res-img">
          <img src={res_img} alt="res_img" />
        </div>
        <div className="post-content">
          <h4 className="res-name">Res name</h4>
          <p className="res-post-details">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam,
            qui? Quo magnam aliquid alias ea, magni commodi vero temporibus
            soluta ipsa. Aperiam accusantium cum impedit? Necessitatibus impedit
            quam earum nemo!
          </p>
          <p className="res-location">
            <GoLocation />
            <span>6969 Bayers Rd, NS</span>
          </p>
        </div>
      </StyledResPostWrapper>
      <AppointmentForm />
    </StyledAppointmentCard>
  );
};

const StyledAppointmentCard = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 3rem 3rem;
  gap: 2rem;
  border: 1px solid #ccc;
  border-radius: 20px;
  font-size: 1.8rem;
  align-items: center;
`;

const StyledResPostWrapper = styled.div`
  display: flex;
  gap: 2rem;
  .res-img {
    align-self: flex-start;
    border: 1px solid #ccc;
    border-radius: 50%;
    width: 200px;
    /* overflow: hidden; */
    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }
  .post-content {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    justify-content: center;
    .res-name {
      font-size: 1.5rem;
    }
    .res-post-details {
      font-weight: 300;
      text-align: justify;
    }
    .res-location {
      display: flex;
      align-items: center;
      gap: 1rem;
      span {
        font-size: 1.5rem;
      }
    }
    .res-appointment {
      width: fit-content;
      padding: 1rem;
      align-self: flex-end;
      background: none;
      border: 1px solid rgb(28, 155, 239);
      border-radius: 20px;
      color: rgb(28, 155, 239);
      :hover {
        cursor: pointer;
      }
    }
  }
`;

export default AppointmentCard;
