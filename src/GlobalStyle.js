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
`;

export default GlobalStyle;
