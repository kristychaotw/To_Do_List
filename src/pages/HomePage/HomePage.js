import React from 'react'
import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { signup } from '../firebase'

export default function HomePage() {
  const emailRef = useRef();
  const passwordRef = useRef();

  async function handleSignup(){
    console.log(emailRef.current.value,passwordRef.current.value);
    await signup(emailRef.current.value,passwordRef.current.value);
  }
  return (
    <>
    <div><h2>React 練習專案</h2></div>
    <main>歡迎光臨我的頁面</main>
    <input ref={emailRef} type="email" placeholder='Email' />
    <input ref={passwordRef} type="password" placeholder='Password' />
    <button onClick={handleSignup}>Sign Up</button>
    <button><Link to='/list'>點此開始</Link></button>
    </>
  )
}
