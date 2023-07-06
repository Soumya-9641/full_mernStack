import React,{useState} from 'react'


const Personal = () => {
  const [formdata, setFormdata] = useState({
          name:"",
          email:"",
          contact:"",
          query:"",
          subject:"",
          message:""
        })
        const handleChange=(e)=>{
              const {name,value}=e.target;
              setFormdata((prev)=>({
                ...prev,
                [name]:value
              }))
        }
        const handleSubmit=async(e)=>{
            e.preventDefault();
            console.log(formdata);
            const res = await fetch("/personalquery",{
              method:"POST",
              headers:{
                Accept:"application/json",
                "Content-Type" : "application/json"
              },
              body:JSON.stringify({
                name:formdata.name,
                email:formdata.email,
                contact:formdata.contact,
                query: formdata.query,
                subject:formdata.subject,
                message:formdata.message
              })
            });
            const data = await res.json();
            console.log(data);
           setFormdata({
            name:"",
          email:"",
          contact:"",
          query:"",
          subject:"",
          message:""
           })
        }
  return (
    <div className='flex items-center justify-center   rounded-md'>
    <form onSubmit={handleSubmit} className="w-full bg-gradient-to-r from-indigo-500 p-20 mb-40 mt-40 rounded-2xl max-w-lg">
    <div className="flex w-[120%] flex-wrap -mx-3 mb-6">
      <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
        <label className="block uppercase tracking-wide text-gray-800 text-xs font-bold mb-2" for="grid-first-name">
           Name
        </label>
        <input name='name' onChange={handleChange} value={formdata.name} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="soumya"/>
        <p className="text-red-500 text-xs italic">Please fill out this field.</p>
      </div>
      <div className="w-full md:w-1/2 px-3">
        <label className="block uppercase tracking-wide text-gray-500 text-xs font-bold mb-2" for="grid-last-name">
          Email Address
        </label>
        <input name='email' onChange={handleChange} value={formdata.email} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="email" autoComplete='off' placeholder="soumya@gmail.com"/>
      </div>
    </div>
    <div className="flex flex-wrap -mx-3 mb-6">
      <div className="w-full px-3">
        <label className="block uppercase tracking-wide text-gray-800 text-xs font-bold mb-2" for="grid-password">
          Contact
        </label>
        <input name='contact' onChange={handleChange} value={formdata.contact} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="number" placeholder="434435434354"/>
        
      </div>
    </div>
    <div className="flex flex-wrap -mx-3 mb-2">
     
      <div className="w-full px-3">
        <label className="block uppercase tracking-wide text-gray-800 text-xs font-bold mb-2" for="grid-state">
          Query
        </label>
        <div className="relative">
          <select name='query' type='text' onChange={handleChange} value={formdata.query} className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
          <option value="" selected>Choose a types</option>
            <option  value="Donation Pickup">Donation Pickup</option>
            <option value="Volunteer Opportunity">Volunteer Opportunity</option>
            <option value="Society collective drives">Society collective drives</option>
            <option value="Others">Others</option>
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
          </div>
        </div>
      </div>
      
    </div>
    <div className="flex flex-wrap -mx-3 mb-6">
      <div className="w-full px-3">
        <label className="block uppercase tracking-wide text-gray-080 text-xs font-bold mb-2" for="grid-password">
          Subject
        </label>
        <input name='subject' onChange={handleChange} value={formdata.subject} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="text" placeholder="enter the subject of your content"/>
        
      </div>
    </div>
    <div className="flex flex-wrap -mx-3 mb-6">
      <div className="w-full px-3">
        <label className="block uppercase tracking-wide text-gray-800 text-xs font-bold mb-2" for="grid-password">
          Message
        </label>
        <textarea name='message' onChange={handleChange} value={formdata.message} className="appearance-none block bg-gray-200 text-gray-800 border border-gray-200  py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500  rounded-md md:w-50 lg:w-80 sm:w-40 h-20 resize-y" id="grid-password" type="text" placeholder="enter the subject of your content" />
        
      </div>
    </div>
    <button type='submit' className="mt-9 text-base font-semibold leading-none text-white py-4 px-10 bg-black rounded hover:bg-indigo-600 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 focus:outline-none">SUBMIT</button>
  </form>
  </div>
  )
}

export default Personal