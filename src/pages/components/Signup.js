import React from 'react'
import { useState, useRef } from 'react'
import { useAuth, signup } from '../firebase';


export function SignupBtn() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const [loading, setLoading] = useState(false);
  const currentUser = useAuth();
   
  async function handleSignup() {
    setLoading(true);
    try {
      await signup(emailRef.current.value, passwordRef.current.value);
    } catch {
      alert("Error!");
    }
    setLoading(false);
  }

  return (
    <>
    <div className="container">
        <div>登入狀態 : {currentUser?.email}</div>
        <h4>註冊</h4>
        <input ref={emailRef} type="email" placeholder="Email" /><br/>
        <input ref={passwordRef} type="password" placeholder="Password" /><br/>
        <button disabled={loading || currentUser} onClick={handleSignup}>
          註冊
        </button>
        <div>已有帳號？<span>點此登入</span></div>
      </div>
      </>
  )
}
