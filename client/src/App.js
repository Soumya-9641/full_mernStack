import Navbar from "./components/Navbar"
import Home from "./components/Home"
import Contact from "./components/Contact"
import About from "./components/About"
import Login from "./components/Login"
import Signup from "./components/Signup"
import Logout from "./components/Logout"
import Error from "./components/Error"
import './App.css';
import React,{createContext} from "react"
import {Route,Routes} from "react-router-dom"
function App() {
   const userContext =  createContext();
  return (
    <>
       <Routes>
        <Route exact path="/" element={<><Navbar/> <Home/></>}/>
        
           
        
        <Route path="/contact" element={<> <Navbar/> <Contact/></>} />
        <Route path="/about" element={<> <Navbar/> <About/></>} />
        <Route path="/login" element={<> <Navbar/>  <Login/></>} />
        <Route path="/signup" element={<> <Navbar/> <Signup/></>} />
        <Route path="/logout" element={<> <Logout/></>} />
        <Route  path="*" element={<> <Navbar/> <Error/></>} />
      
        </Routes>
      
    </>
    
  );
}

export default App;

