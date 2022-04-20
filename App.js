import React from "react";
import "./style.css"
import { useState, useEffect } from "react";

function App(){

  const [gotData, setGotData] = useState({})
  const [count, setCount] = useState(1)
  const [Rodzaj, setRodzaj] = useState("people");

  useEffect (() =>{
     console.log("Effect")
  fetch(`https://swapi.dev/api/${Rodzaj}/${count}/`)
  .then(res => res.json())
  .then(data => setGotData(data))
},[count][Rodzaj])

  function Next(){
    setCount(count +1)
  }
  
  function Back(){
    setCount(count -1)
  }

  function Next10(){
    setCount(count + 10)
  }

  function Back10(){
    setCount(count - 10)
  }

  function Planets(){
    setRodzaj('planets')
  }

  function Films(){
    setRodzaj('films')
  }

  function People(){
    setRodzaj('people')
  }
  
  function Species(){
    setRodzaj('species')
  }

  function Starships(){
    setRodzaj('starships')
  }

  function Vehicles(){
    setRodzaj('vehicles')
  }

  return(
    <div>
      <img src="https://csn.naekranie.pl/wp-content/uploads/2020/05/Star%20Wars3_5eaff4747334e.jpeg"/>
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Star_wars2.svg/1200px-Star_wars2.svg.png"/>
      <img src="https://i0.wp.com/cyberfeed.pl/wp-content/uploads/2021/12/star_wars_eclipse_still_17.jpg?fit=1200%2C628&ssl=1"/>

     <h2 className="option4">Objekt nr. {count} z uniwersum Gwiezdnych Wojen: </h2>
     <h3><div><button onClick={Planets}>planets</button>
     <button onClick={Films}>films</button>
     <button onClick={People}>people</button>
     <button onClick={Species}>species</button>
     <button onClick={Starships}>starships</button>
     <button onClick={Vehicles}>vehicles</button></div></h3>
     <pre className="styled">{JSON.stringify(gotData, null, 2)}</pre>
     <button onClick={Next}>+1</button>
     <button onClick={Back}>-1</button>
     <button onClick={Next10}>+10</button>
     <button onClick={Back10}>-10</button>
     
    </div>
  )
}
export default App;