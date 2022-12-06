import React,{ useState } from 'react'
import Style from './main.css'

function Form () {
  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [subject,setSubject] = useState("");
  const [message,setMessage] = useState("");
  const submitHandler = (e) =>{
    e.preventDefault();
    console.log(name);
    console.log(email);
    console.log(subject);
    console.log(message);
    setName("");
    setEmail("");
    setSubject("");
    setMessage("");
  }
  return (
    <div style={Style} id="Contact">
      <div className='ContactHeading'>Get in touch</div>
      <div className='ContactDescription'>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed, dolor?
      </div>
      <form className='ContactForm' onSubmit={submitHandler}>
        <input id='Name' type='text' onChange={e => setName(e.target.value)} value={name} placeholder='Your name' />
        <input id='Email' type='text' onChange={e => setEmail(e.target.value)} value={email} placeholder='Your email' />
        <br />
        <input id='Subject' type='text' onChange={e => setSubject(e.target.value)} value={subject} placeholder='Subject' />
        <br />
        <textarea id='Message' type='text' onChange={e => setMessage(e.target.value)} value={message} placeholder='Message' />
        <br />
        <button id='SubmitContactForm'>Send message</button>
      </form>
    </div>
  )
}

export default Form
