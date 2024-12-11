import TodoList from "./TodoList";
import Login from "./Login";
import React, { useState } from "react";

function Main() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true); // 로그인 성공 시 상태 변경
  };

  return (
    <div>{isLoggedIn ? <TodoList /> : <Login onLogin={handleLogin} />}</div>
  );
}

export default Main;
