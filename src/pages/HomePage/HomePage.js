import React from 'react'
import { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { signup, useAuth, logout, login } from '../firebase'

export default function HomePage() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const [loading, setLoading] = useState(false)
  const currentUser = useAuth()

  async function handleSignup(){
    setLoading(true);
    try{
      await signup(emailRef.current.value,passwordRef.current.value);
    }catch{
      alert("Error!");
    }
    setLoading(false);
  }

  async function handleLogout(){
    setLoading(true);
    try{
      await logout();
    }catch{
      alert('Error!');
    }
    setLoading(false);
  }

  async function handleLogin(){
    setLoading(true);
    try{
      await login(emailRef.current.value,passwordRef.current.value);
    }catch{
      alert("Error!");
    }
    setLoading(false);
  }


  return (
    <>
    <div><h2>React 練習專案</h2></div>
    <main>歡迎光臨我的頁面</main>
    <div>Currently logged in as : {currentUser?.email }</div>
    <input ref={emailRef} type="email" placeholder='Email' />
    <input ref={passwordRef} type="password" placeholder='Password' />
    <button disabled={loading || currentUser } onClick={handleSignup}>Sign Up</button>
    <button disabled={loading || !currentUser }onClick={handleLogout}>Log out</button>
    <button disabled={loading || currentUser }onClick={handleLogin}>Log in</button>
    <button ><Link to='/list'>點此開始</Link></button>
    </>
  )
}
