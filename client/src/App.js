import Navbar from "./components/Navbar"
import Home from "./components/Home"
import Contact from "./components/Contact"
import About from "./components/About"
import Login from "./components/Login"
import Signup from "./components/Signup"
import Logout from "./components/Logout"
import Error from "./components/Error"
import Hero from "./components/Hero"
import CTA from "./components/CTA"
import GetStarted from "./components/GetStarted"
import Campaign from "./components/Campaign"
import Involved from "./components/Involved"
import Footer from "./components/Footer"
import Reward from "./components/Reward"
import Stats from "./components/Stats"
import About1 from "./components/About1"
import Contact1 from "./components/Contact1"
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
                <Campaign/>
               <Involved/>
               <Reward/>
               <About1/>
               <Contact1/>
               <CTA/>
               <Stats/>
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

