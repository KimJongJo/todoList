import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <header>
        <h1>
          <Link to="/main">로그인</Link>
        </h1>
        <ul>
          <li>
            <Link to="/signup">회원가입</Link>
          </li>
        </ul>
      </header>
    </>
  );
}

export default Header;
