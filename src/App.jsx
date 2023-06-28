import Component1 from './Components/Component1'
import './App.css'
import phrases from './data/phrases.json'
import { useState } from 'react'

function App() {
 
  console.log( phrases[0] )

 const [index, setIndex] = useState(0)
 
 function randomPhrase (min, max)  {
   
  return Math.floor(Math.random() * (max - min + 1 )) + min;
 }

 const pushClick =  () => {
  setIndex (randomPhrase(0, 14));
 }

  return (
    <>

    
      
       <Component1
       data = {  phrases[index] }
       />
       <div className='container_btn'>
     <button onClick={pushClick} type="button" className="boton">¿Que te dice la fortuna?</button>
     </div>
     
    </>
  )
}

export default App
