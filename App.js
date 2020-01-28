import React, { useState, useEffect } from "react";
import SuperHeros from "./SuperHeros";
import axios from "axios";


function App() {
  const [data, setdata] = useState([])

  useEffect(() => {
    axios.get('https://www.superheroapi.com/api.php/10159133864942506/search/flash')
    .then(
      res => {
        console.log(res.data.results)
        console.log(Object.entries(res.data.results))
        const grabData = Object.entries(res.data.results);
        setdata(grabData);
      
    }
        
      )
    .catch(error => {
      console.log("An ERROR", error)
    })
  }, [])
  return (
    <div>
    {data.map( hero => {
    return  <SuperHeros  key={Object.keys.id} />
    })}
     </div>
  )
}  
export default App;
