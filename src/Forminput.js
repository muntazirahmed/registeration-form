import React,{useState} from 'react';
import "./App.css"

const Forminput = (props) => {
    const {label,errormessage,onChange, ...inputprops}=props;
  const[focus,setfocus]=useState(false)
  
    const handlefocus =()=>{
setfocus(true);
  }
  
    return (

    <div className="forminput">
        <label>
            {label}
        </label>
        <input {...inputprops} onChange={onChange} onBlur={handlefocus}  focus={focus.toString()} onFocus={()=>inputprops.name ==="confirmpassword"&& setfocus(true)} />
        
        <span>{errormessage}</span>
    </div>
  )
}

export default Forminput