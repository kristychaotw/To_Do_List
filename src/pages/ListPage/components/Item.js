import { collection ,deleteDoc, doc, query, where, getDocs } from "firebase/firestore";
import React from "react";
import { Link } from "react-router-dom";
import db from '../../firebase'
import { useState } from "react";




export default function Item({ todo }) {
  // function handleDeleteClick() {
  //   deleteTodo(todo.id);
  // }
  const [loading, setLoading] = useState(false);


  async function handleDelete(todoName){
    const collectionRef= collection (db, "todos")
    const q = query(collectionRef, where("name", "==", todoName))
    const q2 = query(collectionRef)
    const snapshot = await getDocs(q)
    const result = snapshot.docs.map((doc) => ({...doc.data(), docID:doc.id}))
    console.log('todoName:',todoName,'snapshot:',snapshot,'result', result,'id:',result.id);
    
    result.forEach(async (result)=>{
      console.log('docID:',result.docID);
      const docRef = doc (db, "todos", result.docID)
      try{
      setLoading(true)
      await deleteDoc(docRef)
    }catch{
      alert("Sorry something wrong")
    }
    setLoading(false)
    })
  }

  return (
    <>
    <div className="todos">
      <label>{todo.name}</label>
      <button onClick={() => handleDelete(todo.name)}>
        <Link to="">刪除</Link>
      </button>
    </div>
    </>
  );
}
