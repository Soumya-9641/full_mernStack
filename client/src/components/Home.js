import React,{useEffect,useState} from 'react'

const Home = () => {

  const [userdata, setUserdata] = useState({})
  const [show, setShow] = useState(false)
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
                      setUserdata(data);
                      console.log(data);
                      setShow(true)
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


  return (
    <>
      <div className="background_image">
            <div className="lg:mt-56">
                <p className="text-center">Welcome <span className='bold text-lg'>{userdata.name}</span></p>
                <h1 className="text-center text-xl font-bold">{ show? "Happy to see you back" :"we are the MERN developers"}</h1>
            </div>
      </div>
    </>
  )
}

export default Home