//import { set } from 'mongoose'
import React,{useState} from 'react'
import { useNavigate} from 'react-router-dom'
const Signup = () => {
  const navigate = useNavigate()
   const [name, setName] = useState("")
   const [email, setEmail] = useState("")
   const [work, setWork] = useState("")
   const [phone, setPhone] = useState("")
   const [password, setPassword] = useState("")
   const [cpassword, setCpassword] = useState("")
  const handleChange =(e)=>{
   if(e.target.name==="name"){
      setName(e.target.value)
      console.log(e.target.value)
   }
   if(e.target.name==="email"){
    setEmail(e.target.value)
    console.log(e.target.value)
  }
    if(e.target.name==="work"){
     setWork(e.target.value)
    console.log(e.target.value)
  }
    if(e.target.name==="phone"){
       setPhone(e.target.value)
      console.log(e.target.value)
    }
      if(e.target.name==="password"){
        setPassword(e.target.value)
        console.log(e.target.value)
    }
    if(e.target.name==="cpassword"){
      setCpassword(e.target.value)
      console.log(e.target.value)
  }
  }
  const handleClick=async (e)=>{
    e.preventDefault();

    const user = {name,email,phone,work,password,cpassword};
    const res = await fetch("/register",{
      method:"POST",
      headers:{
        "Content-Type" : "application/json"
      },

      body:JSON.stringify(user)
    });
    const data = await res.json()
    console.log(data)
    if(data.status === 422 || !data){
          window.alert("Invalid registration")
          console.log("Invalid registration")
    }else{
      window.alert(" registration successful")
          console.log("Invalid successful")
          setName('')
          setEmail('')
          setPhone('')
          setWork('')
          setPassword('')
          setCpassword('')
        navigate("/login")
    }
 }
  return (
    <>
      <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto flex flex-wrap items-center">
    <div className="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
      <img className="h-3/5" src="https://images.unsplash.com/photo-1611643378160-39d6dd915b69?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=htmlFormat&fit=crop&w=765&q=80" alt="img" srcSet="" />
    </div>
    
    <form method='POST' className="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
      <h2 className="text-gray-900 text-lg font-medium title-font mb-5">Sign Up</h2>
      <div className="relative mb-4">
        <label htmlFor="full-name" className="leading-7 text-sm text-gray-600">Full Name</label>
        <input value={name} onChange={handleChange} type="text" id="name" name="name" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>
      <div className="relative mb-4">
        <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
        <input value={email} onChange={handleChange} type="email" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" autoComplete='off'/>
      </div>
      <div className="relative mb-4">
        <label htmlFor="work" className="leading-7 text-sm text-gray-600">Work</label>
        <input value={work} onChange={handleChange} type="work" id="work" name="work" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" autoComplete='off'/>
      </div>
      <div className="relative mb-4">
        <label htmlFor="phone" className="leading-7 text-sm text-gray-600">Contact</label>
        <input value={phone} onChange={handleChange} type="contact" id="phone" name="phone" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" autoComplete='off'/>
      </div>
      <div className="relative mb-4">
        <label htmlFor="password" className="leading-7 text-sm text-gray-600">Password</label>
        <input value={password} onChange={handleChange} type="password" id="password" name="password" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" autoComplete='off'/>
      </div><div className="relative mb-4">
        <label htmlFor="password" className="leading-7 text-sm text-gray-600">Confirm Password</label>
        <input value={cpassword} onChange={handleChange} type="password" id="cpassword" name="cpassword" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" autoComplete='off'/>
      </div>
      <button type='submit' onClick={handleClick} className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button>
      <p className="text-xs text-gray-500 mt-3">Literally you probably haven't heard of them jean shorts.</p>
    
    </form>
  </div>
</section>
    </>
  )
}

export default Signup