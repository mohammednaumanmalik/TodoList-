import "./App.css";
import Test from "./test";
import About from "./About";
import { Route, Routes } from "react-router-dom";

import React, { useState, useRef } from "react";
// import Add from "./Add";
import "./Media.css";
import { Button } from "react-bootstrap";
import Home from "./Home";

function App() {
  return (
    <>
      <Test />
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/about" element={<About />}></Route>
      </Routes>
    </>
  );
}

export default App;
