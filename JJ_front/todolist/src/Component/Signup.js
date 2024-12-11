import React, { useState } from "react";
import axios from "axios";

const Signup = () => {
  // 입력값을 상태로 관리
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState(""); // 오류 메시지 상태

  // 입력값 변경 시 상태 업데이트
  const handleNameChange = (e) => setName(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);
  const handleConfirmPasswordChange = (e) => setConfirmPassword(e.target.value);

  // 폼 제출 시 유효성 검사
  const handleSubmit = (e) => {
    e.preventDefault(); // 폼 제출 기본 동작 방지

    // 유효성 검사
    if (!name || !email || !password || !confirmPassword) {
      setError("모든 필드를 입력하세요.");
      return;
    }
    if (password !== confirmPassword) {
      setError("비밀번호가 일치하지 않습니다.");
      return;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      setError("유효한 이메일 주소를 입력하세요.");
      return;
    }

    setError(""); // 오류 메시지 초기화
    alert("회원가입 성공!"); // 성공 메시지 (여기서는 간단하게 alert로 처리)

    // 여기서 실제 API 호출을 하여 서버에 데이터를 제출할 수 있습니다.
    // 예: axios.post('/api/register', { name, email, password });
    axios
      .post("http://localhost:8080/signup/newUser", {
        name: name,
        email: email,
        password: password,
      })
      .then((response) => {
        console.log(response.data);
      });
  };

  return (
    <div
      style={{
        maxWidth: "400px",
        margin: "0 auto",
        padding: "20px",
        border: "1px solid #ccc",
      }}
    >
      <h2>회원가입</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "15px" }}>
          <label htmlFor="name">이름</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={handleNameChange}
            placeholder="이름을 입력하세요"
            style={{ width: "100%", padding: "8px" }}
          />
        </div>

        <div style={{ marginBottom: "15px" }}>
          <label htmlFor="email">이메일</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
            placeholder="이메일을 입력하세요"
            style={{ width: "100%", padding: "8px" }}
          />
        </div>

        <div style={{ marginBottom: "15px" }}>
          <label htmlFor="password">비밀번호</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
            placeholder="비밀번호를 입력하세요"
            style={{ width: "100%", padding: "8px" }}
          />
        </div>

        <div style={{ marginBottom: "15px" }}>
          <label htmlFor="confirmPassword">비밀번호 확인</label>
          <input
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
            placeholder="비밀번호를 확인하세요"
            style={{ width: "100%", padding: "8px" }}
          />
        </div>

        {error && (
          <div style={{ color: "red", marginBottom: "15px" }}>
            <strong>{error}</strong>
          </div>
        )}

        <button
          type="submit"
          style={{
            width: "100%",
            padding: "10px",
            backgroundColor: "#4CAF50",
            color: "white",
            border: "none",
            cursor: "pointer",
          }}
        >
          회원가입
        </button>
      </form>
    </div>
  );
};

export default Signup;
