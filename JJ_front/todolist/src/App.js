import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Main from "./Component/Main";
import { Link } from "react-router-dom";
import Header from "./Component/Header";

import "./css/styles.css";
import Signup from "./Component/Signup";

function App() {
  return (
    <div className="app">
      <h1>JJ DoList</h1>
      <Header />
      <Routes>
        <Route path="/main" element={<Main />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;
