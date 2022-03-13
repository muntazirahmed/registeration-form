import React, { Component } from 'react'
import Errorhandle from  './Errorhandle'
 class Errorshow extends Component {


    constructor(props){
       super(props)
     const names=["samir","rahul"]

    this.greetparent=this.greetparent.bind(this)
    }

    greetparent(){

  console.log(`${this.state.name}`)      
    }
  render() {
    return (
      <div>{
          
          
         this.names.Map(x => <h1>{this.x}</h1>)
          
          }


        
      </div>
    )
  }
}

export default Errorshow