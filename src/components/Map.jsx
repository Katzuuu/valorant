import React from "react";
import styled from "styled-components";

const Map = ({ img, coordinates, name }) => {
  return (
    <Container>
      <div className="img">
        <img src={img} alt="map" />
      </div>
      <div className="text">
        <p>{coordinates}</p>
        <h1>{name}</h1>
        <div className="line"></div>
      </div>
    </Container>
  );
};

const Container = styled.div`
  padding: 2rem 5rem;
  width: 100%;
  border-radius: 8px;
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 100px;
  margin-bottom: 100px;
  @media screen and (max-width: 950px) {
    text-align: center;
    flex-direction: column;
    gap: 20px;
  }
  @media screen and (max-width: 550px) {
    padding: 0rem 1rem;
    margin-bottom: 0px;
  }
  &:nth-child(2n) {
    flex-direction: row-reverse;
    text-align: right;
    .line {
      left: 15%;
    }
    @media screen and (max-width: 950px) {
      flex-direction: column;
      text-align: center;
      gap: 20px;
    }
  }
  img {
    z-index: 2;
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 6px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  }
  .img {
    flex: 1;
  }
  .text {
    color: #f9f9f9;
    padding: 3rem 0rem;
    flex-basis: 40%;
    position: relative;
    p {
      color: #fd4656;
      font-size: 20px;
      font-weight: bold;
      margin-bottom: -10px;
      text-shadow: 1px 1px 0px black;
    }
    h1 {
      font-weight: bold;
      font-size: 50px;
      font-family: "Konkhmer Sleokchher", cursive;
      letter-spacing: 0.1em;
    }
    .line {
      width: 10px;
      height: 110%;
      background-color: #fd4656;
      z-index: 2;
      position: absolute;
      top: -5%;
      right: 15%;
      @media screen and (max-width: 950px) {
        width: 100%;
        height: 10px;
        top: 0;
        left: 0;
      }
    }
  }
`;

export default Map;
