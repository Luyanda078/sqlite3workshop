import axios from 'axios';
import './App.css'
import { useEffect } from 'react';
import { useState } from 'react';
import Nopage from './component/nopage';
import Navigation from './component/navigation';
import Card from './component/cards';
import Footer from './component/footer';

function App() {
  const [myData , setMyData] = useState("");
  // let myData
  useEffect(()=> {
    axios.get("http://localhost:5000/users").then((res)=>{
       setMyData(res.data)
    }).catch((error)=>{
      console.log(error)
    })
  },[])
console.log(myData)
  return (
    <>
     <div>
        <Navigation/>
        <Card/>
        <Footer/>
     </div>
     </>
  )
}
export default App
