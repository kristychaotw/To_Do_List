import React from 'react'
import { useState, useRef } from 'react'
import { useAuth, signup } from '../firebase';


export function SignupBtn({changeForm}) {
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


  function handleForm(){
    changeForm(true)
  }

  return (
    <>
    <div className="container">
        <h4>註冊</h4>
        <input ref={emailRef} type="email" placeholder="Email" /><br/>
        <input ref={passwordRef} type="password" placeholder="Password" /><br/>
        <button  className="mb-20" disabled={loading || currentUser} onClick={handleSignup}>
          註冊
        </button>
        <div>已有帳號？ <span onClick={handleForm}>點此登入</span></div>
      </div>
      </>
  )
}
