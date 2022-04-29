import React, { useState } from "react";
import HomePage from "./HomePage/HomePage";
import ListPage from "./ListPage/ListPage";
import NotFoundPage from "./NotFoundPage/NotFoundPage"
import { BrowserRouter as Router, Route, Routes, useNavigate } from "react-router-dom";

function App() {
  function handlePage(page) {
      const goPage = page === "homePage" ?  "/" :"/list" 
      console.log('goPage ',goPage);
      location.href=goPage
  }


  return (
      <>
    <Router>
        <Routes>
          <Route path='*' element={<NotFoundPage />} />
          {/* <Route path='/' element={<HomePage handlePage={handlePage} />} /> */}
          <Route path='/' element={<ListPage handlePage={handlePage} />} />
        </Routes>
    </Router>
    </>
  );
  
}

export default App;
