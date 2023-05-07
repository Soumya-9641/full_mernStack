import Navbar from "./components/Navbar"

import Hero from "./components/Hero"
import Help1 from "./components/Help1"
import Help2 from "./components/Help2"
import Login from "./components/Login"
import Help from "./components/Help"
import Why from "./components/Why";
import Booking from "./components/Booking"
import Ngo from "./components/Ngo"
import Footer from "./components/Footer"
import Card1 from "./blogsdata/Card1"
import Card2 from "./blogsdata/Card2"
import Card3 from "./blogsdata/Card3"
import Card4 from "./blogsdata/Card4"
import Card5 from "./blogsdata/Card5"
import About from "./components/About"
import Signup from "./components/Signup"
import Logout from "./components/Logout"
import Error from "./components/Error"
import Stats from "./components/Stats"
import Business from "./components/Business"
import Contact from "./components/Contact"
import Donate from "./components/Donate"
import Hero1 from "./components/Hero1"
import Campaign from "./components/Campaign"
import Involved from "./components/Involved"
import Reward from "./components/Reward"
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
          {/* <div className={`${styles.paddingX} ${styles.flexCenter}`}>
            <div className={`${styles.boxWidth}`}>
              <Hero/>
            </div>
          </div> */}

          <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
              <div className={`${styles.boxWidth}`}>

              <Routes>
        <Route exact path="/" element={<><Hero1/><Stats/>
              <Business/>
              <Donate/>
              <Help/>
              <Help1/>
              <Help2/>
              <Why/>
              <Ngo/>
              <Footer/></>}/>
        
           
        
        <Route path="/contact" element={<>  <Contact/></>} />
        <Route path="/about" element={<>  <About/></>} />
        <Route path="/login" element={<>   <Login/></>} />
        <Route path="/signup" element={<> <Signup/></>} />
        <Route path="/logout" element={<> <Logout/></>} />
        <Route path="/booking" element={<> <Booking/></>} />
        <Route path="/blogsdata/Card1" element={<> <Card1/></>} />
        <Route path="/blogsdata/Card2" element={<> <Card2/></>} />
        <Route path="/blogsdata/Card3" element={<> <Card3/></>} />
        <Route path="/blogsdata/Card4" element={<> <Card4/></>} />
        <Route path="/blogsdata/Card5" element={<> <Card5/></>} />
        <Route path="/campaign" element={<> <Campaign/><Footer/></>} />
        <Route path="/involved" element={<> <Involved/></>} />
        <Route path="/reward" element={<> <Reward/></>} />
        <Route  path="*" element={<>  <Error/></>} />
      
        </Routes>
             
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

