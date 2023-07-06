import React,{useState} from 'react'

const Smartdonation = () => {
  const [formdata, setFormdata] = useState({
    societyname:"",
    orgname:"",
    email:"",
    contact:"",
    query:"",
    subject:"",
    donorsno:"",
    items:"",
    details:""
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
      const res = await fetch("/corporate",{
        method:"POST",
        headers:{
          Accept:"application/json",
          "Content-Type" : "application/json"
        },
        body:JSON.stringify({
          societyname:formdata.societyname,
          orgname:formdata.orgname,
          email:formdata.email,
          contact:formdata.contact,
          query:formdata.query,
          subject:formdata.subject,
          donorsno:formdata.donorsno,
          items:formdata.items,
          details:formdata.details
        })
      });
      const data = await res.json();
      console.log(data);
     setFormdata({
      societyname:"",
      orgname:"",
      email:"",
      contact:"",
      query:"",
      subject:"",
      donorsno:"",
      items:"",
      details:""
     })
  }
  return (
    <>
      <div className='flex flex-col justify-center items-center text-gradient mb-10 mt-10  '>
                <h1 className='font-poppins font-semibold xs:text-[40px] text-[30px] xs:leading-[53px] leading-[43px]'>Become our Partner NGO</h1>
             
    </div>
    <p className='font-poppins text-gray-500 font-normal flex flex-row mb-20 items-center'>SADS makes it super easy htmlFor you to organize collection drives at your society, workplace, tech park, school etc. Just follow the below steps and we will make sure that your donations reach the place they are most needed. ?</p>
    <img className='mb-10' src="https://i0.wp.com/www.smw66.org/wp-content/uploads/2019/11/smart-local-66-baby-donation-drive-2019.png?fit=1200%2C628&ssl=1" alt="" />

    <div className='flex items-center justify-center   rounded-md'>
    <form  className="w-full bg-gradient-to-r from-indigo-500 p-20 mb-40 mt-40 rounded-2xl max-w-lg">
    <div className="flex w-[120%] flex-wrap -mx-3 mb-6">
      <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
        <label className="block uppercase tracking-wide text-gray-800 text-xs font-bold mb-2" htmlFor="grid-first-name">
        NAME OF SOCIETY/CORPORATE/TECH PARK (REQUIRED)
        </label>
        <input name='societyname' value={formdata.societyname} onChange={handleChange} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="soumya"/>
        <p className="text-red-500 text-xs italic">Please fill out this field.</p>
      </div>
      <div className="w-full md:w-1/2 px-3">
        <label className="block uppercase tracking-wide text-gray-500 text-xs font-bold mb-2" htmlFor="grid-last-name">
        ORGANIZER'S NAME (REQUIRED)
        </label>
        <input name='orgname' value={formdata.orgname} onChange={handleChange} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="email" autoComplete='off' placeholder="soumya@gmail.com"/>
      </div>
    </div>
    <div className="flex flex-wrap -mx-3 mb-6">
      <div className="w-full px-3">
        <label className="block uppercase tracking-wide text-gray-800 text-xs font-bold mb-2" htmlFor="grid-password">
        ORGANIZER'S EMAIL ID (REQUIRED)
        </label>
        <input name='email' value={formdata.email} onChange={handleChange} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="email" placeholder="hhbdh@gmail.com"/>
        
      </div>
    </div>
    <div
     className="flex flex-wrap -mx-3 mb-6">
      <div className="w-full px-3">
        <label className="block uppercase tracking-wide text-gray-800 text-xs font-bold mb-2" htmlFor="grid-password">
        ORGANIZER'S CONTACT NUMBER (REQUIRED)
        </label>
        <input name='contact' value={formdata.contact} onChange={handleChange} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="number" placeholder="23333424"/>
        
      </div>
    </div>
    <div className="flex flex-wrap -mx-3 mb-2">
     
      <div className="w-full px-3">
        <label className="block uppercase tracking-wide text-gray-800 text-xs font-bold mb-2" htmlFor="grid-state">
        Where are you organizing the donation drive? (required)
        </label>
        <div className="relative">
          <select name="query" type='text' value={formdata.query} onChange={handleChange} className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
          <option value="" selected>Choose a types</option>
            <option>housing society</option>
            <option>tech park</option>
            <option>Corporate</option>
            <option>Others</option>
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
          </div>
        </div>
      </div>
      
    </div>
    <div className="flex flex-wrap -mx-3 mb-6">
      <div className="w-full px-3">
        <label className="block uppercase tracking-wide text-gray-080 text-xs font-bold mb-2" htmlFor="grid-password">
          Subject
        </label>
        <input name='subject' value={formdata.subject} onChange={handleChange} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="text" placeholder="enter the subject of your content"/>
        
      </div>
    </div>
    <div className="flex flex-wrap -mx-3 mb-6">
      <div className="w-full px-3">
        <label className="block uppercase tracking-wide text-gray-080 text-xs font-bold mb-2" htmlFor="grid-password">
        TENTATIVE NUMBER OF DONORS INVOLVED IN THE DONATION DRIVE (REQUIRED)
        </label>
        <input name='donorsno' value={formdata.donorsno} onChange={handleChange} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="text" placeholder="enter the subject of your content"/>
        
      </div>
    </div>
    
    <div className="flex flex-wrap -mx-3 mb-6">
      <div className="w-full px-3">
        <label className="block uppercase tracking-wide text-gray-080 text-xs font-bold mb-2" htmlFor="grid-password">
        Items that would be donated in the drive (required)
        </label>
        <input name='items' value={formdata.items} onChange={handleChange} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="text" placeholder="enter the subject of your content"/>
        
      </div>
    </div>

    <div className="flex flex-wrap -mx-3 mb-6">
      <div className="w-full px-3">
        <label className="block uppercase tracking-wide text-gray-800 text-xs font-bold mb-2" htmlFor="grid-password">
        ANY OTHER DETAILS
        </label>
        <textarea name='details' value={formdata.details} onChange={handleChange} className="appearance-none block bg-gray-200 text-gray-800 border border-gray-200  py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500  rounded-md md:w-80 w-44 h-20 resize-y" id="grid-password" type="text" placeholder="enter the subject of your content" />
        
      </div>
    </div>
    <button type='submit' onClick={handleSubmit} className="mt-9 text-base font-semibold leading-none text-white py-4 px-10 bg-black rounded hover:bg-indigo-600 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 focus:outline-none">SUBMIT</button>
  </form>
  </div>
    </>
    
  )
}

export default Smartdonation