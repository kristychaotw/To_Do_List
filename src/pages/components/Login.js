import React from "react";
import { useState, useRef } from "react";
import { useAuth, login } from "../firebase";

export function LoginBtn() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const [loading, setLoading] = useState(false);
  const currentUser = useAuth();

  async function handleLogin() {
    setLoading(true);
    try {
      await login(emailRef.current.value, passwordRef.current.value);
    } catch {
      alert("Error!");
    }
    setLoading(false);
  }
  return (
    <>
      <div>登入狀態 : {currentUser?.email}</div>
      <h4>登入</h4>
      <input ref={emailRef} type="email" placeholder="Email" />
      <br />
      <input ref={passwordRef} type="password" placeholder="Password" />
      <br />
      <button disabled={loading || currentUser} onClick={handleLogin}>
        登入
      </button>
      <div>
        沒有帳號？<span>點此註冊</span>
      </div>
    </>
  );
}
