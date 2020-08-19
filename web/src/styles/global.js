import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    margin:0;
    padding:0;
    outline:none;
    box-sizing: border-box;
  }

  html, body, #root{
    min-height:100%;
  }

  body{
    background:#eee;
    -webkit-font-smoothing: antialiazed !important;
  }

  body, input, button {
    color:#222;
    font-size:14px;
    font-family:Arial, Helvetica, sans-serif;
  }

  button{
    cursor:pointer;
  }
`;

export default GlobalStyles;
