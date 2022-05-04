import React from "react";
import { useState, useRef } from "react";
import { useAuth, login } from "../firebase";
import { Link } from "react-router-dom";


export function LoginBtn({changeForm}) {
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

  function handleForm(){
    changeForm(false)
  }
 
  return (
    <>
      <h4>登入</h4>
      <input ref={emailRef} type="email" placeholder="Email" />
      <br />
      <input ref={passwordRef} type="password" placeholder="Password" />
      <br />
      <button  className="mb-20" disabled={loading || currentUser} onClick={handleLogin}>
        登入
      </button>
      <div>
        沒有帳號？ <span onClick={handleForm}>點此註冊</span>
      </div>
    </>
  );
}
