import React from 'react'

export default function HomePage({handlePage}) {
  function handleStartClick(){
    handlePage("listPage")
  }

  return (
    <>
    <div><h2>React練習專案</h2></div>
    <main>歡迎光臨我的頁面</main>
    <button onClick={handleStartClick}>點此開始</button>
    </>
  )
}
