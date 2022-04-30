import React from 'react'
import { Link } from 'react-router-dom'

export default function HomePage() {

  return (
    <>
    <div><h2>React 練習專案</h2></div>
    <main>歡迎光臨我的頁面</main>
    <button><Link to='/list'>點此開始</Link></button>
    </>
  )
}
