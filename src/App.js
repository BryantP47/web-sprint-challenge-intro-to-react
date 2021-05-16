import React, { useEffect, useState } from 'react';
import './App.css';
import { data } from './mocks/handlers'

import Character  from './components/Character.js'
import axios from 'axios'

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [handlers, setHandlers] = useState(data)
  const [currentCharacterId, setCurrentCharacterId] = useState(null)
  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
 const openDetails = id => {
   setCurrentCharacterId(id)
 }
 const closeDetails = () => {
   setCurrentCharacterId(null)
 }

 useEffect(() => {
axios.get(' https://swapi.dev/api/people')
  .then(function (response) {
    // handle success
    console.log(response.data);
    setCurrentCharacterId(response.data)
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  return() => {

  }
 }, [])
 const Chara = props => (
<div className='chara'>
    
     {props.data.name}
     <button onClick ={() => openDetails(props.data.id)}>
      More Info
     </button> 
 </div>
 )
  return (
    <div className="App">
        <h1 className="Header">Characters</h1>
        <Character handlers={handlers}/>
        
{/*     
        {
        currentCharacterId && <Character handlers={currentCharacterId} close={closeDetails} />
      } */}
       
    </div>

  );
}

export default App;
