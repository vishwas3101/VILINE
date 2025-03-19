import React ,{useState} from "react";
import Card from "./Card";
import axios from "axios";
import {Route,Routes} from "react-router-dom";
import Home from "./Pages/Home";
// import Contact from "./Pages/Contact";+

const App = () => {

    const getdata = async() =>{
        const response = await axios.get("https://picsum.photos/v2/list?page=2&limit=10")
        console.log(response)

    }
    
    
   
   
       
    return(
        <div>
            <div className = 'p-5'>
                <Card/>
                <Routes>
                    <Route path = '/' element = {<Home/>}/>
                    <Route path = '/Home' element = {<Home/>}/>                    
                    <Route path = '/Contact' element = {<Contact/>}/>
                </Routes>
                <Card/>
                <div className='bg-violet-600 p-5 px-4 py-5 text-2xl'>hello</div>
                <button on onClick ={getdata}className= 'bg-cyan-900 text-2xl active:scale-75 py-1 px-1 text-blue-600 dark:text-sky-400'>API call </button>

            </div>
            
           
        </div>
    )
}



export default App;


