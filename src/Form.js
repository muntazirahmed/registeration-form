import React, {useState} from 'react';
import Forminput from './Forminput';
import "./App.css"

function Form() {
    const[values,setvalues]=useState({
        username:"",
        email:"",
        birthday:"",
        password:"",
        confirmpassword:"",
    });
    const inputs=[
    {
            
            id:5,
            name:"name",
            type:"text",
            placeholder:"username",
            errormessage:"username 3-16 character",
            label:"username",
            pattern:"^[A-Za-z0-9]{3,16}$",
            required:true,
     },
    {
            id:1,
            name:"email",
            type:"email",
            placeholder:"email",
            errormessage:"invalid e-mail address",
            label:"email",
            required:true,
    },
        {
            id:2,
            name:"birthday",
            type:"date",
            placeholder:"birthday",
            label:"birthday"
        },
        {
            id:3,
            name:"password",
            type:"password",
            placeholder:"password",
            errormessage:"one letter one number and one special character",
            label:"password",
           
            required:true,
        },
        {
            id:4,
            name:"confirm password",
            type:"password",
            placeholder:"confirm password",
            errormessage:"pasword does not match",
            label:"confirm password",
            pattern:values.password,
            required:true,
        },
    ]
    const handlesubmit =(e)=>{
        e.preventDefault();

    }
const onChange=(event)=>{
    setvalues({...values,[event.target.name]:event.target.value});

};
console.log(values)
    
  return (
    <div className="app">
        <form onSubmit={handlesubmit}>
            <h1>Register</h1>
            {
                inputs.map((input)=>(
                    <Forminput  key={input.id} {...input} value={values[input.name]} onChange={onChange}/>
                ))
            }
            <button>submit</button>
        </form>
    </div>
  )
        }

export default Form