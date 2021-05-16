import React, { useEffect, useState }  from 'react'

import axios from 'axios'
// import Characterinfo from './component/Characterinfo.js'

export default function Character (props) {
const { handlers, close } = props
const[details, setDetails] = useState(null)


 useEffect(() => {
  axios.get('https://swapi.dev/api/people')
  .then(function (response) {
    // handle success
    console.log(response.handlers);
    setDetails(response.handlers)
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
return() =>{
  console.log('component unmounting, the id was' + handlers)
}
}, [handlers])

    return (
        <div className="character">
          <div>
            {handlers.map(handler => {
            //  <Characterinfo key={handler.id} handler={handler}/>
            return <div key ={handler.id}>{handler.name}
        <button
          
          onClick={() => setDetails(handler.id)}>More info
        </button>
        

             </div>
            })}
          </div>
          
        </div>
    )
}

