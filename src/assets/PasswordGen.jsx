import React from 'react';
import {useState } from "react";

export const PasswordGen = () => {
  const [length,setlength]=useState();
  const[includeUpper, setincludeUpper]=useState(true);
  const[includelower, setincludelower]=useState(true);
  const[includeNumber, setincludeNumber]=useState(true);
  const[includeSymbol, setincludeSymbol]=useState(true);
  const[password,setpassword]=useState("");
  const generatepassword=()=>{
     let charset="";
     if(includeUpper)
         charset+="ABCDEFGHIJKLMNOPQRSRUVWXYZ";
     if (includelower)
         charset+="abcdefghijklmnopqrstuvwxyz";
    if(includeNumber)
         charset+="0123456789";
    if(includeSymbol)
         charset+="!@#$%^&*?:;|";
     let generatepass="";
     for(let i=0;i<length;i++){
        let randomindex=Math.floor(Math.random()*charset.length);
        generatepass+=charset[randomindex];

     }
     setpassword(generatepass);

  };

  const copytoClipboard=()=>{
    navigator.clipboard.writeText(password);
    alert("Password Copied!");
  }
  return (
    <>
         <div className='passwordgenerator'>
           <h2>Strong Password Generator</h2>
            <div className='passswordinput'>
                <label htmlFor='num'>Password Length</label>
                 <input type="number" id="num" value={length} onChange={(e)=>setlength(parseInt(e.target.value))}/>
           </div>
           <div className='checkboxinput'>
           <label><input type="checkbox" checked={ includeUpper} 
           onClick={(e)=>setincludeUpper(e.target.checked)}/>Include UpperCase</label>
           <label><input type="checkbox" checked={ includelower}
           onClick={(e)=>setincludelower(e.target.checked)}/>Include LowerCase</label>
           <label><input type="checkbox" checked={ includeNumber}
           onClick={(e)=>setincludeNumber(e.target.checked)}/>Include Numbers</label>
           <label><input type="checkbox" checked={ includeSymbol}
           onClick={(e)=>setincludeSymbol(e.target.checked)}/>Include Symbol</label>
           </div>
           <button className="passwordbtn" onClick={generatepassword}>Generate Password</button>
           <div className='text'>
              <input readOnly type="text" value={password}/>
              <button className='copybtn'onClick={copytoClipboard}>Copy</button>
           </div>
        </div>
    </>
  )
}
