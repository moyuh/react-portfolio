import React, { useEffect, useState } from 'react';
import { validateEmail } from '../utils/helpers';

function Contact() {
  const [errorMessage, setErrorMessage] = useState('');
  const [email, setEmail] = useState('');
  const [contactName, setContactName] = useState('');
  const [contactMessage, setContactMessage] = useState('');
 
  const handleInputChange = (e) => {

    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

     if (inputType === 'contactName') {
      setContactName(inputValue);
      
    }
    else if (inputType === 'email') {
      setEmail(inputValue);
      
    }
    else if (inputType === 'contactMessage'){
      setContactMessage(inputValue);
      
    }
  };
 
 const nameLeave = (e) => {
  const { target } = e
  if (!target.value) {
    setErrorMessage("Entering your name is required")
  }
  else {
    setErrorMessage("")
  }
 }   
 useEffect(() => {
  if (validateEmail(email) || email === ''){
    setErrorMessage("")
  }
  else{
    setErrorMessage("Don't Forget to add your email!")
  }
 }, [email])
 
    return (  
        <main className='contact-section'> 
        <form >
          <br></br><br></br>
          <div className="container-2">   
              <div className="form-floating entry">
                <input 
                name='contactName'
                type="text" 
                value={contactName}
                className="form-control" 
                id="floatingName" 
                onChange={handleInputChange}
                onMouseLeave={nameLeave}>
                </input>
                <label >Name</label>
              </div>
              
              <br></br>
              <div className="form-floating mb-3 entry">
                <input 
                name='email'
                type="email"
                value={email} 
                className="form-control" 
                onChange={handleInputChange}
                id="floatingInput"
                onMouseLeave={nameLeave}>
                </input>
                <label>Email address</label>
              </div>
             <br></br>
              <div className="form-floating textarea"> 
                <textarea 
                name='contactMessage'
                value={contactMessage}
                className="form-control long" 
                onChange={handleInputChange}
                id="floatingTextarea2" 
                onMouseLeave={nameLeave}>
                </textarea>
                <label>Message</label>
            </div>
            <p className="error-text">{errorMessage}</p>
              <button className="btn-main btn2" id="btn-support" type="sumbit">Submit</button>
            <div className="contact-info">
              <p>Contact Me:</p>
              <p>Call or Text: 303-513-6115</p>
              <a className="email" href="mailto:mlroth94@gmail.com" target="_blank" rel='noreferrer'>mlroth94@gmail.com</a>
             </div>
            </div>
        </form>
    
      </main>
    );
  }
  
  export default Contact;