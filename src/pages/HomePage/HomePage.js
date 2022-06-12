import React from "react";
import { useRef, useState, useEffect } from "react";
import { Link, Route } from "react-router-dom";
import { LogoutBtn } from "../components/Logout";
import { SignupBtn } from "../components/Signup";
import { LoginBtn } from "../components/Login";
import { useAuth } from "../firebase";

export default function HomePage() {
  const currentUser = useAuth();
  console.log("c-user:", currentUser);


  let [signupForm, setSignupForm] = useState(true);

  function changeForm(e) {
    console.log("showForm");
    setSignupForm(e);
  }

  function showForm() {
    const form = document.querySelector(".form");
    if (currentUser === null) {
      form.classList.add("active");
    } else {
      form.classList.remove("active");
    }
  }
  useEffect(() => {
    showForm();
  }, currentUser);

  return (
    <>
      <div>
        <h2>React 練習專案</h2>
      </div>
        <hr />
      <main>
        <div className="mb-20">歡迎光臨我的頁面</div>
        <div className="mb-20 white-txt">
          {currentUser && currentUser.email} 您好
        </div>
        {currentUser ? (
          <>
            <button>
              <Link to="/list">點此開始</Link>
            </button>
            <LogoutBtn />
          </>
        ) : (
          <div className="white-txt">請先登入</div>
        )}
      </main>
      <div className="form">
        {signupForm ? (
          <LoginBtn changeForm={changeForm} />
        ) : (
          <SignupBtn changeForm={changeForm} />
        )}
      </div>
      <hr />
    </>
  );
}
