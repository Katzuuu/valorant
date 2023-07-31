import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
// Framer
import { motion } from "framer-motion";
// Animations
import { container, fade, scaleFade, agentInfoReveal } from "../../animations";

const Detail = ({ data }) => {
  const [agent, setAgent] = useState(null);
  const [activeBtn, setActiveBtn] = useState(0);
  const agentPortrait = useRef(null);
  const agentBg = useRef(null);
  const location = useLocation().pathname.slice(8);

  useEffect(() => {
    const detail = data?.filter((agent) => agent.displayName === location);
    setAgent(detail);
  }, []);

  const live = (e) => {
    agentPortrait.current.style.transform = `translate(${e.pageX / 120}px,${
      e.pageY / 120
    }px)`;
    agentBg.current.style.transform = `translate(-${e.pageX / 120}px,-${
      e.pageY / 120
    }px)`;
  };

  let info = null;
  if (agent) {
    info = [
      {
        header: agent[0].role.displayName,
        text: agent[0].role.description,
      },
      {
        header: agent[0].abilities[0].displayName,
        text: agent[0].abilities[0].description,
      },
      {
        header: agent[0].abilities[1].displayName,
        text: agent[0].abilities[1].description,
      },
      {
        header: agent[0].abilities[2].displayName,
        text: agent[0].abilities[2].description,
      },
      {
        header: agent[0].abilities[3].displayName,
        text: agent[0].abilities[3].description,
      },
    ];
  }

  return (
    <>
      {agent && (
        <Container
          variants={container}
          initial="hidden"
          animate="show"
          exit="exit"
        >
          <Agent
            onMouseMove={live}
            style={{
              background: `linear-gradient(60deg, #${agent[0].backgroundGradientColors[0]}, #${agent[0].backgroundGradientColors[1]}, #${agent[0].backgroundGradientColors[2]}, #${agent[0].backgroundGradientColors[3]})`,
            }}
          >
            <Imgs>
              <motion.img
                variants={scaleFade}
                ref={agentBg}
                className="bg"
                src={agent[0].background}
                alt="agent background"
              />
              <motion.img
                variants={fade}
                ref={agentPortrait}
                className="ag"
                src={agent[0].fullPortrait}
                alt="agent portrait"
              />
            </Imgs>
            <Text variants={agentInfoReveal}>
              <h5>{agent[0].role.displayName}</h5>
              <h1>{agent[0].displayName}</h1>
              <Grid>
                <Box>
                  <div
                    className="up"
                    style={{
                      backgroundColor:
                        activeBtn === 0
                          ? "#FD4656"
                          : "rgba(255, 255, 255, 0.4)",
                    }}
                    onClick={() => setActiveBtn(0)}
                  >
                    INFO
                  </div>
                  <div className="down">
                    <img src={agent[0].role.displayIcon} alt="" />
                  </div>
                </Box>
                <Box>
                  <div
                    className="up"
                    style={{
                      backgroundColor:
                        activeBtn === 1
                          ? "#" + agent[0].backgroundGradientColors[0]
                          : "rgba(255, 255, 255, 0.4)",
                    }}
                    onClick={() => setActiveBtn(1)}
                  >
                    C
                  </div>
                  <div className="down">
                    <img src={agent[0].abilities[0].displayIcon} alt="" />
                  </div>
                </Box>
                <Box>
                  <div
                    className="up"
                    style={{
                      backgroundColor:
                        activeBtn === 2
                          ? "#" + agent[0].backgroundGradientColors[1]
                          : "rgba(255, 255, 255, 0.4)",
                    }}
                    onClick={() => setActiveBtn(2)}
                  >
                    Q
                  </div>
                  <div className="down">
                    <img src={agent[0].abilities[1].displayIcon} alt="" />
                  </div>
                </Box>
                <Box>
                  <div
                    className="up"
                    style={{
                      backgroundColor:
                        activeBtn === 3
                          ? "#" + agent[0].backgroundGradientColors[2]
                          : "rgba(255, 255, 255, 0.4)",
                    }}
                    onClick={() => setActiveBtn(3)}
                  >
                    E
                  </div>
                  <div className="down">
                    <img src={agent[0].abilities[2].displayIcon} alt="" />
                  </div>
                </Box>
                <Box>
                  <div
                    className="up"
                    style={{
                      backgroundColor:
                        activeBtn === 4
                          ? "#" + agent[0].backgroundGradientColors[3]
                          : "rgba(255, 255, 255, 0.4)",
                    }}
                    onClick={() => setActiveBtn(4)}
                  >
                    X
                  </div>
                  <div className="down">
                    <img src={agent[0].abilities[3].displayIcon} alt="" />
                  </div>
                </Box>
              </Grid>
              <p className="desc">{agent[0].description}</p>
              <BoxInfo>
                <motion.h4>{info[activeBtn].header}</motion.h4>
                <motion.p>{info[activeBtn].text}</motion.p>
              </BoxInfo>
            </Text>
          </Agent>
        </Container>
      )}
    </>
  );
};

const Container = styled(motion.div)`
  padding-top: 80px;
`;

const Agent = styled.div`
  padding-top: 80px;
  overflow: hidden;
  height: calc(100vh - 80px);
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 50px;
  padding: 5rem 8rem;
  .desc {
    margin-top: 30px;
    text-align: justify;
    line-height: 120%;
  }
`;

const Text = styled(motion.div)`
  height: calc(90vh - 80px);
  color: white;
  flex: 1;
  background-color: rgba(255, 255, 255, 0.4);
  backdrop-filter: blur(15px);
  padding: 3rem 3rem;
  border-radius: 15px;
  border: 2px solid white;
  h5 {
    letter-spacing: 0.3em;
    text-transform: uppercase;
    font-size: 15px;
    font-weight: lighter;
  }
  h1 {
    text-transform: uppercase;
    font-family: "Vina Sans", cursive;
    font-size: 8rem;
    margin-top: -10px;
  }
`;
const Imgs = styled.div`
  height: calc(100vh - 80px);
  flex: 1;
  position: relative;
  img {
    object-fit: cover;
  }
  .bg {
    margin-top: 10%;
    margin-left: 10%;
    height: 80%;
    width: 80%;
    position: relative;
  }
  .ag {
    position: absolute;
    height: 100%;
    width: 100%;
    bottom: 0%;
    left: 0%;
  }
`;

const Grid = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  width: 75%;
  height: 12%;
  margin-top: 30px;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    height: 50%;
    width: 30%;
    top: -20%;
    left: -1.3%;
    border-radius: 5px 0px 0px 0px;
    border-top: 1px solid white;
    border-left: 1px solid white;
    pointer-events: none;
  }

  &::after {
    content: "";
    position: absolute;
    height: 40%;
    width: 90%;
    bottom: -20%;
    right: -1.3%;
    border-radius: 0px 0px 5px 0px;
    border-bottom: 1px solid white;
    border-right: 1px solid white;
    pointer-events: none;
  }

  @media (min-height: 1000px) {
    &::before {
      left: -2%;
    }

    &::after {
      right: -2%;
    }
  }
`;

const Box = styled.div`
  flex: 1;
  cursor: pointer;
  .up {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 3vh;
    font-size: 16px;
    font-weight: bold;
    padding: 3px 0px;
    border-radius: 5px;
    transition: all 250ms ease;
    &:hover {
      opacity: 0.8;
    }
    &:active {
      opacity: 0.6;
    }
  }
  .down {
    border-radius: 5px;
    margin-top: 3px;
    height: 6.8vh;
    max-width: 143.6px;
    text-align: center;
    background-color: rgba(0, 0, 0, 0.4);
    img {
      margin-top: 6.5%;
      height: 80%;
    }
  }
`;

const BoxInfo = styled.div`
  margin-top: 20px;
  h4 {
    text-transform: uppercase;
    font-size: 20px;
  }
  p {
    margin-top: 6px;
    text-align: justify;
    line-height: 120%;
  }
`;

export default Detail;
