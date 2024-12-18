import React, { useState, useEffect } from "react";
import TodoList from "./TodoList"; // TodoList 컴포넌트 임포트
import Login from "./Login"; // Login 컴포넌트 임포트

function Main() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null); // user 초기값을 null로 설정

  // 페이지가 로드될 때 sessionStorage에서 로그인 상태를 확인
  useEffect(() => {
    const storedUser = sessionStorage.getItem("user");
    if (storedUser) {
      setIsLoggedIn(true); // user가 존재하면 로그인 상태로 설정
      setUser(JSON.parse(storedUser)); // user 정보를 객체로 파싱하여 설정
    }
  }, []);

  const handleLogin = (userData) => {
    sessionStorage.setItem("user", JSON.stringify(userData)); // 로그인한 사용자 정보를 sessionStorage에 저장
    setIsLoggedIn(true); // 로그인 상태로 설정
    setUser({ id: userData.userId, name: userData.userName });
    console.log(userData);
  };

  const handleLogout = () => {
    sessionStorage.removeItem("user"); // 로그아웃 시 sessionStorage에서 사용자 정보 제거
    setIsLoggedIn(false); // 로그인 상태 변경
    setUser(null); // user 상태 초기화
  };

  return (
    <div>
      {isLoggedIn ? (
        <div>
          <TodoList user={user} /> {/* user 정보를 props로 전달 */}
          <button onClick={handleLogout}>로그아웃</button>
        </div>
      ) : (
        <Login onLogin={handleLogin} />
      )}

      <div>
        <h4>구현한 기능</h4>
        <p>회원가입 성공 ✔</p>
        <p>로그인 성공 ✔</p>
        <p>할일 추가 성공 ✔</p>
        <p>할일 삭제 성공 ✔</p> <br />
        <h4>구현해야하는 기능</h4>
        <p>로그인 시 회원의 할일 목록 조회하기 (할일이 하나만 나옴) ❌</p>
        <p>수정 버튼 만들어서 할일 수정하기(수정한 시간 표시) ❌</p>
        <p>로그인한 회원 정보를 저장 - 로그인한 회원의 할일 표시 ❌</p>
      </div>
    </div>
  );
}

export default Main;
