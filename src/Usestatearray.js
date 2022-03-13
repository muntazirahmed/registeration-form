import React,{useState} from 'react'

function Usestatearray() {

    const[items,setitems]=useState([])

    const addItems=()=>{
        setitems([...items,{
            id:items.length,
            value:100-1
        }])
    }
  return (
 <div>  <button onClick = {addItems}>add a number</button>
     
      <ul>
        
        {items.map(item=>(<li key={item.id}>{item.value}</li>))}
        </ul>
        
</div>
  )
}

export default Usestatearray