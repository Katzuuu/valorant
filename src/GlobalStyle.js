import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: "Roboto", sans-serif;
    }
    body {
        height: calc(100vh - 75px);
    }
    a {
        text-decoration: none;
        color: black;
    }
    .active {
        opacity: 0.6;
    }
    @keyframes arrow {
        0% {
            transform: translate(-50%, -10%);

        }
        50% {
            transform: translate(-50%, 0%);
        }
        100% {
            transform: translate(-50%, -10%);

        }
    }
    .animate {
        animation: arrow 2s ease-in-out 0s infinite  ;
    }
`;

export default GlobalStyle;
