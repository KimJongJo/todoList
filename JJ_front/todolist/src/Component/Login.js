import React, { useState } from "react";
import axios from "axios";

function Login({ onLogin }) {
  const [userEmail, setUserEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:8080/login", {
        email: userEmail,
        password: password,
      })
      .then((response) => {
        if (response.status === 200) {
          onLogin(response.data);
        }
      })
      .catch((error) => {
        if (error.response) {
          // 서버에서 보낸 에러 메시지 출력
          console.error("Error Message:", error.response.data);
          if (error.response.status === 401) {
            alert(error.response.data); // 서버의 에러 메시지 표시
          }
        } else {
          console.error("Unknown Error:", error);
          alert("문제가 발생했습니다. 다시 시도해주세요.");
        }
      });
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
