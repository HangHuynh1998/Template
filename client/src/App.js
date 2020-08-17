import React from "react";
import { BrowserRouter } from "react-router-dom";
import Logo from "./components/Logo/Logo";
import Boxes from "./components/Boxes/Boxes";

const App = (_) => {
  return (
    <BrowserRouter>
      <Logo />
      <Boxes />
    </BrowserRouter>
  );
};

export default App;
