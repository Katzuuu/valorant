import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
// Framer
import { motion } from "framer-motion";

const Agent = ({ name, icon }) => {
  return (
    <Link to={`/agents/${name}`}>
      <Container>
        <div className="img-container">
          <div className="new-color"></div>
          <img src={icon} alt="agent" />
          <h1>{name}</h1>
        </div>
      </Container>
    </Link>
  );
};

const Container = styled(motion.div)`
  overflow: hidden;
  width: 180px;
  height: 180px;
  background-color: transparent;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  border-radius: 8px;
  cursor: pointer;
  transition: all 250ms ease;
  position: relative;

  @media screen and (max-width: 669px) {
    & {
      width: 150px;
      height: 150px;
    }
  }

  &:hover {
    transform: scale(1.1);
    .new-color {
      transform: translateY(0%);
    }
    h1 {
      opacity: 1;
    }
  }

  .img-container {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  h1 {
    font-weight: bold;
    color: #f9f9f9;
    font-weight: 500;
    font-size: 18px;
    letter-spacing: 0.1em;
    line-height: 120%;
    text-transform: uppercase;
    text-align: center;
    position: absolute;
    top: 50%;
    left: 50%;
    opacity: 0;
    transform: translate(-50%, -60%) rotateZ(-45deg);
    transition: all 250ms ease-out;
    font-family: "Sigmar", cursive;
    font-size: 30px;
  }

  .new-color {
    background-color: rgba(254, 70, 85, 0.6);
    position: absolute;
    height: 100%;
    width: 100%;
    bottom: 0;
    left: 0;
    transform: translateY(100%);
    z-index: 0;
    transition: all 250ms ease-out;
  }
`;

export default Agent;
