import React, { useState } from "react";

function Login({ onLogin }) {
  const [userEmail, setUserEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // 로그인 처리 로직 (예: username과 password가 맞으면 로그인 성공)
    if (userEmail === "test@test" && password === "password") {
      onLogin(); // 로그인 성공 시 onLogin 호출
    } else {
      alert("Invalid credentials!");
    }
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit}>
        <div>
          <label>이메일</label>
          <input
            className="email-input"
            type="email"
            value={userEmail}
            onChange={(e) => setUserEmail(e.target.value)}
            placeholder="이메일 입력"
            required
          />
        </div>
        <div>
          <label>비밀번호</label>
          <input
            className="password-input"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="비밀번호 입력"
            required
          />
        </div>
        <div className="login-button-div">
          <button className="login-button" type="submit">
            로그인
          </button>
        </div>
      </form>
    </div>
  );
}

export default Login;
