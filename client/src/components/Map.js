import React, { useState,useEffect ,useRef} from 'react';
import ReactMapGL from "react-map-gl"
import "mapbox-gl/dist/mapbox-gl.css"
const Map = () => {
  const [viewport, setViewport] = useState({
        latitude: 28.6448,
        longitude:77.216,
        zoom:6,
  })
   return (
 
  <div className='bg-white' style={{width:"100vh",height:"100%,zIndex:999"}}>
      <ReactMapGL
      {...viewport}
      mapboxApiAccessToken='pk.eyJ1IjoiYmlsdHUiLCJhIjoiY2xqbGV2Y3V0MGs3aDNnc2QydWx6amlleiJ9.aG1BUE58XBL-Nf-aI1mrnQ'
      width="100%"
      height="100%"
      transitionDuration="200"
     mapStyle="https://api.mapbox.com/styles/v1/biltu/cljle39h4005101pm1v5wcp7j.html?title=view&access_token=pk.eyJ1IjoiYmlsdHUiLCJhIjoiY2xqaXM0OTZ4MDN4bjNrbWtxYjhvOW1pcCJ9.2RMleSlBqhIMcb6em9Q8cw&zoomwheel=true&fresh=true#2/37.75/-92.25" 
      >

      </ReactMapGL>
  </div>
   
  )
}

export default Map