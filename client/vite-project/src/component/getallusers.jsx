import axios from 'axios';
import './App.css'
import { useEffect } from 'react';
import { useState } from 'react';
function App() {
  const [myData , setMyData] = useState("");
  // let myData
  useEffect(()=> {
    axios.get("http://localhost:5000").then((res)=>{
       setMyData(res.data)
    }).catch((error)=>{
      console.log(error)
    })
  },[])
console.log(myData)
  return (
    <>
    <h1>Hello there</h1>
     </>
  )
}
export default App