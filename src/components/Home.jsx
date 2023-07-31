import React from "react";
import styled from "styled-components";
// Router
import { Link } from "react-router-dom";
// Framer
import { motion } from "framer-motion";
// Animations
import { Movefade, container, fade } from "../../animations";

const Home = () => {
  return (
    <Container
      variants={container}
      initial="hidden"
      animate="show"
      exit="exit"
      className="header"
    >
      <motion.div className="header">
        <motion.p variants={Movefade}>
          A 5v5 character-based tactical shooter
        </motion.p>
        <motion.svg
          variants={Movefade}
          fill="#f9f9f9"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 690 98.9"
        >
          <path d="M615.11 19.15h24.69l.08 75.59c0 .97.79 1.77 1.77 1.77l14.14-.01c.98 0 1.77-.79 1.77-1.77l-.08-75.58h30.96c.91 0 1.43-1.06.85-1.77l-10.6-13.26a4.68 4.68 0 0 0-3.65-1.76h-59.93c-.98 0-1.77.79-1.77 1.77v13.26c0 .96.79 1.76 1.77 1.76M19.25 94.75 91.67 4.13c.57-.71.06-1.77-.85-1.77H72.71c-1.42 0-2.77.65-3.65 1.76L17.68 68.4V4.12c0-.98-.79-1.77-1.77-1.77H1.77C.79 2.35 0 3.14 0 4.12v90.62c0 .98.79 1.77 1.77 1.77H15.6c1.42 0 2.76-.65 3.65-1.76m51.06 0 24.91-31.17 24.91 31.17a4.685 4.685 0 0 0 3.66 1.76h13.83c.98 0 1.77-.79 1.77-1.77V4.12c0-.97-.79-1.77-1.77-1.77h-11.6c-2.84 0-5.53 1.29-7.31 3.51L47.69 94.73c-.57.71-.06 1.77.85 1.77h18.11c1.43.01 2.77-.64 3.66-1.75m51.39-66.21v41.75l-16.68-20.87 16.68-20.88zm404.37 66.19L453.65 4.11A4.68 4.68 0 0 0 450 2.35h-13.84c-.98 0-1.77.79-1.77 1.77v90.62c0 .98.79 1.77 1.77 1.77h13.83c1.42 0 2.77-.65 3.65-1.76l24.91-31.17 24.91 31.17a4.68 4.68 0 0 0 3.65 1.76h18.11c.91 0 1.42-1.06.85-1.78m-57.33-45.31L452.05 70.3V28.54l16.69 20.88zM269.45 0c-27.3 0-49.43 22.13-49.43 49.43s22.13 49.43 49.43 49.43 49.43-22.13 49.43-49.43C318.89 22.13 296.75 0 269.45 0m0 82.06c-17.54 0-31.75-14.61-31.75-32.63 0-18.02 14.21-32.64 31.75-32.64S301.2 31.4 301.2 49.43c.01 18.02-14.21 32.63-31.75 32.63M583.38 4.12V68.4L532 4.11a4.68 4.68 0 0 0-3.65-1.76H514.5c-.97 0-1.77.79-1.77 1.77v43.67c0 1.06.36 2.09 1.03 2.92l14.71 18.41c.65.81 1.95.35 1.95-.68v-38l51.39 64.31a4.68 4.68 0 0 0 3.65 1.76h13.83c.98 0 1.77-.79 1.77-1.77V4.12c0-.97-.79-1.77-1.77-1.77h-14.14c-.98 0-1.77.8-1.77 1.77M410.62 23.76V4.12c0-.98-.79-1.77-1.77-1.77h-72.37c-.98 0-1.77.79-1.77 1.77v90.62c0 .98.79 1.77 1.77 1.77h14.14c.98 0 1.77-.79 1.77-1.77V19.16h40.55l-27.37 34.26c-.51.64-.51 1.56 0 2.21l31.27 39.13a4.68 4.68 0 0 0 3.65 1.76h18.11c.91 0 1.42-1.06.85-1.77l-32.14-40.21 22.28-27.84c.66-.85 1.03-1.88 1.03-2.94M162.39 96.51h41.96c1.42 0 2.77-.65 3.65-1.76l10.6-13.27c.57-.71.06-1.77-.85-1.77H178.3V4.12c0-.98-.79-1.77-1.77-1.77h-14.14c-.98 0-1.77.79-1.77 1.77v90.62c0 .97.8 1.77 1.77 1.77"></path>
        </motion.svg>
        <Link to="/agents">
          <motion.button variants={fade}>
            <span>EXPLORE NOW</span>
          </motion.button>
        </Link>
      </motion.div>
    </Container>
  );
};

const Container = styled(motion.div)`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center top;
  animation: animate 20s ease-in-out infinite;

  p {
    text-align: center;
  }

  svg {
    min-width: 300px;
  }

  @keyframes animate {
    0% {
      background-image: url("https://images3.alphacoders.com/108/thumb-1920-1081932.jpg");
    }
    25% {
      background-image: url("https://images5.alphacoders.com/108/thumb-1920-1081931.jpg");
    }
    50% {
      background-image: url("https://images8.alphacoders.com/114/thumb-1920-1149389.jpg");
    }
    75% {
      background-image: url("https://images3.alphacoders.com/108/thumb-1920-1081932.jpg");
    }
    100% {
      background-image: url("https://images3.alphacoders.com/114/1149777.jpg");
    }
  }

  .header {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 50%;
    gap: 25px;
    z-index: 2;
    color: #f9f9f9;
    button {
      background-color: #fe4655;
      border: none;
      padding: 1.4rem 3rem;
      color: #f9f9f9;
      font-weight: bold;
      font-size: 12px;
      letter-spacing: 0.2em;
      cursor: pointer;
      position: relative;
      transition: all 250ms ease-out;

      @media screen and (max-width: 1000px) {
        & {
          padding: 0.91rem 1.95rem;
          font-size: 10px;
        }
      }

      &:hover {
        background-color: #0f1923;
        span::after {
          background-color: #f9f9f9;
        }
        span::before {
          background-color: #f9f9f9;
        }
      }

      &::before {
        content: "";
        position: absolute;
        width: 104.5%;
        height: 50%;
        top: -9.5%;
        right: -2.5%;
        border: 1px solid rgba(249, 249, 249, 0.4);
        border-bottom: none;
      }

      &::after {
        content: "";
        position: absolute;
        width: 104.5%;
        height: 50%;
        bottom: -9.5%;
        right: -2.5%;
        border: 1px solid rgba(249, 249, 249, 0.4);
        border-top: none;
      }

      span {
        pointer-events: none;
        position: relative;

        @media screen and (max-width: 1000px) {
          &::before {
            display: none;
          }
          &::after {
            display: none;
          }
        }

        &::after {
          content: "";
          width: 6px;
          height: 6px;
          right: -44.5%;
          bottom: -160%;
          background-color: black;
          position: absolute;
        }

        &::before {
          content: "";
          width: 6px;
          height: 6px;
          left: -44.5%;
          top: -160%;
          background-color: black;
          position: absolute;
        }
      }
    }
  }
`;

export default Home;
