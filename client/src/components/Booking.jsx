import React,{useState} from 'react'

const Booking = () => {
  const [enable, setEnable] = useState(false)
  const handleclick=(e)=>{
          setEnable(true)
  }
  return (
    <section className="text-gray-600 body-font relative mb-80">
  <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
    <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative opacity-70">
      <iframe width="100%" height="100%" className="absolute inset-0" frameborder="0" title="map" marginheight="0" marginwidth="0" scrolling="no" src="https://maps.google.com/maps?width=100%&amp;height=600&amp;hl=en&amp;q=%C4%B0zmir+(My%20Business%20Name)&amp;ie=UTF8&amp;t=&amp;z=14&amp;iwloc=B&amp;output=embed"></iframe>
      <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md">
        <div className="lg:w-1/2 px-6">
          <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">ADDRESS</h2>
          <p className="mt-1">Photo booth tattooed prism, portland taiyaki hoodie neutra typewriter</p>
        </div>
        <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
          <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">EMAIL</h2>
          <a href='/' className="text-indigo-500 leading-relaxed">example@email.com</a>
          <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">PHONE</h2>
          <p className="leading-relaxed">123-456-7890</p>
        </div>
      </div>
    </div>
    <div className="lg:w-1/3 md:w-1/2 bg-gray-800 outline-blue-500 outline outline-offset-2 flex flex-col md:ml-auto w-full md:py-8 px-6 rounded-xl opacity-80 mt-8 md:mt-0">
      <h2 className="text-gray-400 text-lg mb-1 font-medium title-font">Book A Pickup</h2>
      <p className="leading-relaxed mb-5 text-gray-600">Enter the necessary things</p>
      <div className="relative mb-4">
        <label for="name" className="leading-7 text-sm text-gray-400">Enter your location</label>
        <input type="text" id="name" name="name" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>
      <div className="relative mb-4">
        <label for="email" className="leading-7 text-sm text-gray-400">Choose pickup types</label>
        <input  onClick={handleclick} type="email" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>
      {enable ?<fieldset>
  <legend className="sr-only">options</legend>

  <div className="flex items-center mb-4">
    <input id="country-option-1" type="radio" name="countries" value="USA" className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600" checked/>
    <label for="country-option-1" className="block ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
    Light Pickup (via 2-Wheeler)
    </label>
  </div>

  <div className="flex items-center mb-4">
    <input id="country-option-2" type="radio" name="countries" value="Germany" className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"/>
    <label for="country-option-2" className="block ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
    Collection Drive Pickup
    </label>
  </div>

  <div className="flex items-center mb-4">
    <input id="country-option-3" type="radio" name="countries" value="Spain" className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:bg-gray-700 dark:border-gray-600"/>
    <label for="country-option-3" className="block ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
      Medium to heavy Pickup
    </label>
  </div>

</fieldset>:"" }
      <a href='/pickupouantity'>
      <button className="py-4 px-6 bg-blue-gradient2 fongt-poppins font-medium text-[18px] text-primary outline-none 
     rounded-[10px]">Button</button>
     </a>
    </div>
  </div>
</section>
  )
}

export default Booking