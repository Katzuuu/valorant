import React from "react";
import styled from "styled-components";
// Components
import Agent from "./Agent";
// Framer
import { motion } from "framer-motion";
// Animations
import {
  container,
  sliderContainer,
  slider,
  agentsReveal,
} from "../../animations";
// Background
import agentsBg from "../assets/agentsbg.jpg";
// Parrallax
import { Parallax } from "react-parallax";

const Agents = ({ data }) => {
  return (
    <Container variants={container} initial="hidden" animate="show" exit="exit">
      <Parallax
        bgImageStyle={{
          height: "100%",
          width: "100vw",
          objectFit: "cover",
          objectPosition: "left",
        }}
        strength={600}
        bgImage={agentsBg}
      >
        <FramerContainer variants={sliderContainer}>
          <Framer1 variants={slider}></Framer1>
          <Framer2 variants={slider}></Framer2>
          <Framer3 variants={slider}></Framer3>
        </FramerContainer>
        <Grid variants={agentsReveal}>
          {data?.map((agent) => (
            <Agent
              data={data}
              key={agent.uuid}
              id={agent.uuid}
              name={agent.displayName}
              icon={agent.displayIcon}
            />
          ))}
        </Grid>
      </Parallax>
    </Container>
  );
};

const Container = styled(motion.div)`
  padding-top: 80px;
`;

const Grid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  grid-gap: 40px;
  padding: 5rem 8rem;

  @media screen and (max-width: 1159px) {
    & {
      grid-template-columns: repeat(4, minmax(0, 1fr));
    }
  }
  @media screen and (max-width: 984px) {
    & {
      grid-template-columns: repeat(3, minmax(0, 1fr));
      padding: 3rem 4rem;
    }
  }
  @media screen and (max-width: 789px) {
    & {
      grid-template-columns: repeat(2, minmax(0, 1fr));
      padding: 2rem 1.2rem;
    }
  }
`;

const FramerContainer = styled(motion.div)``;

const Framer1 = styled(motion.div)`
  position: fixed;
  top: 80px;
  left: 0;
  width: 100vw;
  height: calc(100vh - 80px);
  background-color: #000000;
  z-index: 5;
`;

const Framer2 = styled(Framer1)`
  background-color: #bd3944;
`;
const Framer3 = styled(Framer1)`
  background-color: #fd4556;
`;

export default Agents;
