import React, { useEffect, useState } from 'react'
import axios from 'axios'



function Datafetching() {
  const [posts, setposts] = useState([])


  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(res => {
        console.log(res)
        setposts(res.data)
      })
      .catch(err => {
        console.log(err)
      })
  }, [])
  return (
    <div><ul>
      {posts.map(post => <li key={post.id}> {post.title} </li>)}
    </ul>


      Datfetching</div>
  )
}

export default Datafetching