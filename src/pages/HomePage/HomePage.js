import React from 'react'

export default function HomePage() {
  function handleStartClick(){
    handelPage()
  }

  return (
    <>
    <div>React練習專案</div>
    <main>歡迎光臨我的頁面</main>
    <button onClick={handleStartClick}>點此開始</button>
    </>
  )
}
