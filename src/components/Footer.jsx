import { useState } from "react"


function Footer() {
  const   [title,setTitle ] = useState("your footer is here")
  function handleTitle(){
    return  setTitle("derkaoui yassir")
  }
  return <>
    <footer className="bg-dark">
        <p>Created by <span> {title} </span> </p>
         <button onClick={handleTitle}>click here to change</button>
    </footer>
  </>
}

export default Footer