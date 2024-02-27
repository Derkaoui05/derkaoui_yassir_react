import { useState } from "react"
function Accueil() {
  const   [title,setTitle ] = useState("Welcome to home page")
  function handleTitle(){
    return  setTitle("text changed")
  }
  return (
    <>
    <h1 className="text-primary">{title}</h1>
    <button onClick={handleTitle}>click here to change</button>
    </>
  )
}

export default Accueil