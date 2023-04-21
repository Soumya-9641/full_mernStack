import Navbar from "./components/Navbar"

import Hero from "./components/Hero"
import Help1 from "./components/Help1"
import Help2 from "./components/Help2"

import Help from "./components/Help"
import Why from "./components/Why";
import Ngo from "./components/Ngo"
import Footer from "./components/Footer"
import Stats from "./components/Stats"

import Business from "./components/Business"

import Donate from "./components/Donate"
import './App.css';
import styles from "./style"
import React,{createContext} from "react"
import {Route,Routes} from "react-router-dom"
function App() {
   const userContext =  createContext();
  return (
    <>
      
    <div className="bg-primary w-full overflow-hidden">
          <div className={`${styles.paddingX} ${styles.flexCenter}`}>
            <div className={`${styles.boxWidth}`}>
              <Navbar/>
            </div>
          </div>
          <div className={`${styles.paddingX} ${styles.flexCenter}`}>
            <div className={`${styles.boxWidth}`}>
              <Hero/>
            </div>
          </div>

          <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
              <div className={`${styles.boxWidth}`}>
              <Stats/>
              <Business/>
              <Donate/>
              <Help/>
              <Help1/>
              <Help2/>
              <Why/>
              <Ngo/>
              <Footer/>
             
              </div>
          </div>
    </div>
     
       {/* <Routes>
        <Route exact path="/" element={<><Navbar/> <Home/></>}/>
        
           
        
        <Route path="/contact" element={<> <Navbar/> <Contact/></>} />
        <Route path="/about" element={<> <Navbar/> <About/></>} />
        <Route path="/login" element={<> <Navbar/>  <Login/></>} />
        <Route path="/signup" element={<> <Navbar/> <Signup/></>} />
        <Route path="/logout" element={<> <Logout/></>} />
        <Route  path="*" element={<> <Navbar/> <Error/></>} />
      
        </Routes>
         */}
    </>
    
  );
}

export default App;

