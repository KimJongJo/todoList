import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Main from "./Component/Main";
import { Link } from "react-router-dom";
import Header from "./Component/Header";

import "./css/styles.css";
import Signup from "./Component/Signup";

function App() {
  const [user, setUser] = useState(null);
  const handleLogin = (userData) => {
    setUser(userData); // 로그인 시 user 정보를 업데이트
  };

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
