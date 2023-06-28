import React ,{useState} from 'react'
import { NavLink ,useNavigate} from 'react-router-dom'
import { background } from '../assets';
import "./login.css"
const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const handleChange =(e)=>{
      if(e.target.name==="email"){
        setEmail(e.target.value);
      }
      else if(e.target.name==="password"){
        setPassword(e.target.value)
      }
  }
  const handleSubmit=async (e)=>{
          e.preventDefault();
          //const user = {email,password}
          const res = await fetch("/login",{
            method:"POST",
            headers:{
              Accept:"application/json",
              "Content-Type" : "application/json"
            },
            body:JSON.stringify({
              email,password
            })
          });
          const data = await res.json();
          console.log(data);
          if(data.status===400 || !data){
            window.alert("INvalid credentials")
          }else{
            window.alert("login successfully")
            navigate("/")
          }

  }
  return (
    <>
      <div className='App'>

      
      <form type="POST" className="form" >
        <div className="input-container">
          <label className="label">Username: </label>
          <input
            type="text"
            name="email"
            className="input"
            placeholder="Username"
            value={email}
            onChange={handleChange}
          />
        </div>
        <div className="input-container">
          <label className="label">Password: </label>
          <input
            type="password"
            name="password"
            className="input"
            placeholder="Password"
            value={password}
            onChange={handleChange}
          />
          <a href="/" className="link forgotten-password">
            Forgot password?
          </a>
        </div>
        <button onClick={handleSubmit} type="submit" id="login-btn">
          Login
        </button>
      </form>
      <div className='mt-10'>
        <h6 className='font font-poppins text-gray-300'>Dont have an account?<a href="/signup"><span className='text-pink-300 cursor-pointer'>Sign Up</span></a> </h6>
      </div>
      </div>
    </>
  )
}

export default Login