import TodoList from "./TodoList";
import Login from "./Login";
import React, { useState } from "react";

function Main() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true); // 로그인 성공 시 상태 변경
  };

  return (
    <div>
      <div>
        <p>로그인은 성공 - 회원 정보를 저장해야함</p>
        <p>로그인 성공 했을 때 로그인한 회원의 할일 목록을 불러오기</p>
      </div>
      {isLoggedIn ? <TodoList /> : <Login onLogin={handleLogin} />}
    </div>
  );
}

export default Main;
