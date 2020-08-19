import React from "react";
import Routes from "./routes";
import { BrowserRouter } from "react-router-dom";
import Menu from "./components/Menu";

function App() {
  return (
    <BrowserRouter>
      <Menu />
      <Routes />
    </BrowserRouter>
  );
}

export default App;
