import { useState } from "react"

function Contact() {
  const [name,setName] = useState("")
  const [email, setEmail]=useState("")
  const handleName = (e) => setName(e.target.value)
  const handleEmail = (e) =>setEmail(e.target.value)

  return (
    <>
    <h2 className="text-secondary">contact me here</h2>
    <form action="">
      <label>
        {name}
      </label>
      <input type="text"/>
      <label>
       {email}
      </label>
      <input type="email"  />
      <input type="submit" value="name" onChange={()=>handleName} />
      <input type="submit" value="emaill" onChange={()=>handleEmail} />
    </form>
    </>
    
  )
}

export default Contact