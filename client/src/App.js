import Navbar from "./components/Navbar"
import Home from "./components/Home"
import Contact from "./components/Contact"
import About from "./components/About"
import Login from "./components/Login"
import Signup from "./components/Signup"
import './App.css';
import {Route,Routes} from "react-router-dom"
function App() {
  return (
    <>
       <Routes>
        <Route exact path="/" element={<><Navbar/> <Home/></>}/>
        
           
        
        <Route path="/contact" element={<> <Navbar/> <Contact/></>} />
        <Route path="/about" element={<> <Navbar/> <About/></>} />
        <Route path="/login" element={<> <Navbar/>  <Login/></>} />
        <Route path="/signup" element={<> <Navbar/> <Signup/></>} />
      
        </Routes>
      
    </>
    
  );
}

export default App;
