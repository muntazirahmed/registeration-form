import React,{useState} from 'react'

function Usestateobject() {
    const [name,setname]=useState({fname:"",lname:""})



  return (
    <div><form>
        <input type="text"value={name.fname}onChange={event=>setname({fname:event.target.value})}>
        </input>
        <input type="text"value={name.lname}onChange={event=>setname({lname:event.target.value})}>
        </input>
        <h1> your firstname is:{name.fname}</h1>

        <h1>your last name is:{name.lname}</h1>
        
        
        
        </form></div>
  )
}

export default Usestateobject  