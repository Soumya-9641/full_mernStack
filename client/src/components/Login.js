import React ,{useState} from 'react'
import { NavLink ,useNavigate} from 'react-router-dom'
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
  const handleClick=async (e)=>{
          e.preventDefault();
          //const user = {email,password}
          const res = await fetch("/login",{
            method:"POST",
            headers:{
              "Content-Type" : "application/json"
            },
            body:JSON.stringify({
              email,password
            })
          });
          const data = await res.json();
          console.log(data);
          if(data.status===402 || !data){
            window.alert("INvalid credentials")
          }else{
            window.alert("login successfully")
            navigate("/")
          }

  }
  return (
    <>
    <section className="text-black-300 body-font">
      <div className="container mx-auto flex flex-wrap flex-col md:flex-row items-center px-10 py-24 my-24">
          <div className="lg:w-2/6 md:w-1/2 lg:pr-16 md:pr-0 pr-0">
             <img src="https://i.pinimg.com/564x/9e/ec/e2/9eece2da8a0cfb34185fad3fc830026d.jpg" alt="img" srcSet="" />
          </div>
          
          <form  method="POST" className="lg:w-2/5 md:w-1/2rounded-lg p-10 bg-gray-300 ">
              <h2 className="text-2xl mb-4">Log In</h2>
             <div className="mb-2">
               <label htmlFor="email" className="">Your Email</label>
                  <input value={email} type="text" onChange={handleChange} id="email" name="email" className=" rounded-sm w-full bg-white  border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" autoComplete='off'/>
              </div>
              <div className="mb-2">
                  <label htmlFor="password" className="">Password</label>
                   <input value={password} type="password" onChange={handleChange} id="password" name="password" className="w-full rounded-sm  bg-white  border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" autoComplete='off'/>
               </div>
               <button onClick={handleClick} type='submit'  className="mb-2 mt-4 bg-indigo-600 px-8 py-2 rounded-lg hover:bg-indigo-300 border-0 focus:outline-none text-lg lg:ml-48 md:ml-16">Button</button>
              
              <NavLink to="/signup"> <p className="text-md">Sign up</p></NavLink>
         
          </form>
          
      </div>
      </section>
    </>
  )
}

export default Login