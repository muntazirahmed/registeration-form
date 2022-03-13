import React, { useState, useEffect } from 'react'
import axios from 'axios'

function Forms() {

  // const [data,getdata]=useState([])
  const [data, getdata] = useState([])

  useEffect(() => {
    const getApi = async () => {
      let x = await axios.get('https://jsonplaceholder.typicode.com/users')
      getdata(x.data)
      console.log(x, "x", data)
    }
    getApi()
    console.log(data)
  }, [])

  console.log("2", data)

  return (
    <>
      forms
      <ul>
        <li>1</li>
      </ul>
      <ul>
        {data.map(e => (
          <li key={e.id}>{e.name}</li>
        ))}
      </ul>
    </>
  )
}

export default Forms
