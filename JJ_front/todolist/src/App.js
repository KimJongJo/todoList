import React, { useState } from "react";
import TodoList from "./Component/TodoList";
import Login from "./Component/Login";
import "./css/styles.css";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true); // 로그인 성공 시 상태 변경
  };

  return (
    <div className="app">
      <h1>JJ DoList</h1>
      {isLoggedIn ? <TodoList /> : <Login onLogin={handleLogin} />}
    </div>
  );
}

export default App;
