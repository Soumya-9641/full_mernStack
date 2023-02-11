import React,{useEffect,useState} from 'react'

const Contact = () => {


 // const [message, setMessage] = useState()
  const [userdata, setUserdata] = useState({name:"",email:"",phone:"",message:""});
  //const navigate = useNavigate();
const calldatapage= async()=>{
              try{
                      const res = await fetch("/getdata",{
                        method:"GET", 
                        headers:{
                         
                          "Content-Type" : "application/json"
                        },
                   
                      })
                      const data = await res.json();
                      setUserdata({...userdata, name:data.name, email:data.email,phone:data.phone});
                      console.log(data);
                      if(!res.status===200){
                        const error = new Error(res.error)
                        throw error;
                      }
              }catch(err){
                console.log(err)
               // navigate("/login"); 
              }
}
useEffect(() => {
  calldatapage();
},[]);

const handleChange = (e)=>{
        const name = e.target.name;
        const value = e.target.value;
        setUserdata({...userdata,[name]:value})
}

//send data to the backend
  const handleClick= async (e)=>{
    e.preventDefault();
    const {name,email,phone,message} = userdata;
    try{
      const res = await fetch("/contact",{
        method:"POST", 
        headers:{
         
          "Content-Type" : "application/json"
        },
        body: JSON.stringify({
          name,email,phone,message
        })
      });
      const data = await res.json();
      if(!data){
        console.log("Message is not sent");
      }else{
        alert("Message send");
        setUserdata({...userdata,message:""});
      }
      }
    catch(err){
          console.log(err)
// navigate("/login"); 
      }

  }

  return (
   <>
    <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    
    <div className="flex flex-wrap -m-4">
      <div className="xl:w-1/3 md:w-1/2 p-4">
        <div className="border border-gray-200 p-6 rounded-lg">
          <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-6 h-6" viewBox="0 0 24 24">
              <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
            </svg>
          </div>
          <h2 className="text-lg text-gray-900 font-medium title-font mb-2">Phone</h2>
          <p className="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waist co, subway tile poke farm.</p>
        </div>
      </div>
      <div className="xl:w-1/3 md:w-1/2 p-4">
        <div className="border border-gray-200 p-6 rounded-lg">
          <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-6 h-6" viewBox="0 0 24 24">
              <circle cx="6" cy="6" r="3"></circle>
              <circle cx="6" cy="18" r="3"></circle>
              <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
            </svg>
          </div>
          <h2 className="text-lg text-gray-900 font-medium title-font mb-2">Email</h2>
          <p className="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waist co, subway tile poke farm.</p>
        </div>
      </div>
      <div className="xl:w-1/3 md:w-1/2 p-4">
        <div className="border border-gray-200 p-6 rounded-lg">
          <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-6 h-6" viewBox="0 0 24 24">
              <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
          </div>
          <h2 className="text-lg text-gray-900 font-medium title-font mb-2">Address</h2>
          <p className="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waist co, subway tile poke farm.</p>
        </div>
      </div>
      
      
     
    </div>
    
  </div>
  {/* next part*/}
  <div method="POST" className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
    
    <div className="lg:w-1/2 md:w-1/2 bg-white flex flex-col md:ml-36 lg:ml-60 w-full md:py-8 mt-8 md:mt-0">
      <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">Contact Us</h2>
      <p className="leading-relaxed mb-5 text-gray-600">write down your query here </p>
      <div className="relative mb-4">
        <label htmlFor="name" className="leading-7 text-sm text-gray-600">Name</label>
        <input type="text" id="name" name="name" onChange={handleChange} value={userdata.name} className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" autoComplete='off'/>
      </div>
      <div className="relative mb-4">
        <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
        <input type="email" id="email" name="email" onChange={handleChange} value={userdata.email} className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" autoComplete='off'/>
      </div>
      <div className="relative mb-4">
        <label htmlFor="phone" className="leading-7 text-sm text-gray-600">Phone</label>
        <input type="phone" id="phone" name="phone" onChange={handleChange} value={userdata.phone} className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" autoComplete='off'/>
      </div>
      <div className="relative mb-4">
        <label htmlFor="message" className="leading-7 text-sm text-gray-600">Message</label>
        <textarea  onChange={handleChange} value={userdata.message} id="message" name="message" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
      </div>
      <button type='submit' onClick={handleClick} className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Submit</button>
      
    </div>
  </div>
</section>
   </>
  )
}

export default Contact