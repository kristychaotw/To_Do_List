import React , { useState, useEffect } from "react";
import Edit from "./components/Edit";
import ItemList from "./components/ItemList";
import { Link } from 'react-router-dom'
import db from '../firebase'
import { collection, onSnapshot, query, where} from "firebase/firestore";
import { getAuth } from "firebase/auth";



const LOCAL_KEY = "todoApp.todos"

export default function ListPage() {
  const [ todos, setTodos]=useState([])
  const auth = getAuth();
  const user = auth.currentUser;

 

  useEffect(()=>{
   
    const collectionRef=collection(db,"todos")
    const q= query(collectionRef, where("uid","==",user.uid))
    const unsub = onSnapshot(q,(snapshot)=>{
      setTodos(snapshot.docs.map((doc)=>doc.data()))
    })
    return unsub
  },[])

  


  return (
      <>
      <div><h2>My To-Do List</h2></div>
      <Edit setTodos={setTodos}/>
      <ItemList todos={todos} />
      <hr></hr>
      <div className="txt"> {todos.filter(todo=>!todo.complete).length} Left to Do</div>
      <hr></hr>
      <button><Link to="/">返回首頁</Link></button>
    </>
    )
}
