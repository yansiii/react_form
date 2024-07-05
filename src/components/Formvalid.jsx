import React from 'react'
import { useRef } from 'react'
import img1 from "./img/img1.png"

function Formvalid() {
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);


  const handleSubmit=(e)=>{
    e.preventDefault()
    alert("Form submitted");
    nameRef.current.value = " ";
    emailRef.current.value = '';
    passwordRef.current.value = '';
  }
  return (
    <>
    <h1>JavaScript <span id='heading'>Form Validation</span> </h1>
    <div className='part'>

      <div className='part1'>
    <img src={img1} alt="pic" />
    </div>

    <div className='part2'>
      <h2>Get Started</h2>
      <h5>Already have an account? <br/> <span id='login'>Log in</span></h5>
      <button id='b1'> <span id='btf1'>🌎</span> Sign up</button>
      <button id='b2'> 🧕🏼Sign up</button>

      <p id='text1'>Or</p>

      <form onSubmit={handleSubmit}>
        <label>Name</label> <br/>
        <input ref={nameRef} id='i1' placeholder='🧑🏻‍💻 Meghna Gondaliya' type="text" /> <br/>

        <label>Email</label> <br/>
        <input ref={emailRef} id='i1' placeholder='📼 @gmail.com' type="text" /> <br/>

        <label>Password</label> <br/>
        <input ref={passwordRef} id='i1' placeholder='......' type="password" /> <br/><br/>

        <input id='submit' type="Submit" />
      </form>
      
    
    </div>
    </div>
    </>
  )
}

export default Formvalid