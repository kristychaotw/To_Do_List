import React, { useState } from 'react'
import HomePage from './HomePage/HomePage'
import ListPage from './ListPage/ListPage'



function App(){
    function handlePage(){
        
    }

    return(
        <>
         <HomePage handlePage={handlePage}/>
         <ListPage />
        </>
    )
}

export default App

