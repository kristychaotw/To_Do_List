import React , { useRef, useState} from "react";
import { Link } from "react-router-dom";
import {v4 as uuidv4} from "uuid"
import db from '../../firebase'
import { addDoc, collection, setDoc, doc } from 'firebase/firestore'
import { getAuth } from "firebase/auth";


export default function Edit({setTodos}) {
    const todoNameRef=useRef()
    const [loading, setLoading] = useState(false);
    const auth = getAuth();
    const user = auth.currentUser;
    
    async function handleNew(){
      const name = todoNameRef.current.value
      const collectionRef = collection(db,"todos")
      const payload = {id:uuidv4(), name:name, complete:false, uid:user.uid}
      setLoading(true)
      try{
      await addDoc (collectionRef,payload);
      todoNameRef.current.value = null
      // handleAddTodo()
    }catch{
      alert("Sorry something wrong!")
    }
    setLoading(false)
  }

  
    return (
    <>
      <input ref={todoNameRef} type="text"></input>
      <button onClick={handleNew}><Link to="">新增紀錄</Link></button>
      <hr></hr>
    </>
  );
}
