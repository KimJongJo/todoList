import React, { useState, useEffect } from "react";
import TodoList from "./TodoList"; // TodoList 컴포넌트 임포트
import Login from "./Login"; // Login 컴포넌트 임포트

function Main() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // 페이지가 로드될 때 sessionStorage에서 로그인 상태를 확인
  useEffect(() => {
    const user = sessionStorage.getItem("user");
    if (user) {
      setIsLoggedIn(true); // user가 존재하면 로그인 상태로 설정
    }
  }, []);

  const handleLogin = (userData) => {
    sessionStorage.setItem("user", JSON.stringify(userData)); // 로그인한 사용자 정보를 sessionStorage에 저장
    setIsLoggedIn(true); // 로그인 상태로 설정
    console.log(userData);
    console.log(userData.userId);
    console.log(userData.userName);
  };

  const handleLogout = () => {
    sessionStorage.removeItem("user"); // 로그아웃 시 sessionStorage에서 사용자 정보 제거
    setIsLoggedIn(false); // 로그인 상태 변경
  };

  return (
    <div>
      <div>
        <h4>기능</h4>
        <p>회원가입 성공 ✔</p>
        <p>로그인 성공 ✔</p>
        <p>할일 추가 성공 ✔</p>
        <p>할일 삭제 성공 ✔</p>
        <p>로그인 시 회원의 할일 목록 조회하기 (할일이 하나만 나옴) ❌</p>
        <p></p>
      </div>
      {isLoggedIn ? (
        <div>
          <TodoList />
          <button onClick={handleLogout}>로그아웃</button>
        </div>
      ) : (
        <Login onLogin={handleLogin} />
      )}
    </div>
  );
}

export default Main;
