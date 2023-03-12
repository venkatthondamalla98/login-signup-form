import React, { useState } from 'react';

import axios from 'axios'

const Form = () => {
  const [data, setData] = useState({
    userName:"",
    email:"",
    password:"",
    confirmPassword:""
  });
  const{userName, email, password, confirmPassword} = data;

  const handleOnChange = e => {
    setData({...data, [e.target.name]: e.target.value})
  }

  const submitOnHandler = e => {
    e.preventDefault();
    if(password !== confirmPassword){
      alert("password and confirmPassword are not equal")
    } else{
    axios.post('https://react-projects-33545-default-rtdb.firebaseio.com/register.json', data).then(
      () => alert("submitted successfully")
    )
    }
  }

  return (
    <center>
      <div>
        <form onSubmit={submitOnHandler}>
          <h1>SignUp</h1>
          <input type='text' name='userName' value={userName} onChange={handleOnChange} placeholder="username" /><br />
          <input type='email' name='email' value={email} onChange={handleOnChange} placeholder="email" /><br />
          <input type="password" name='password' value={password} onChange={handleOnChange} placeholder="password" /><br />
          <input type="password" name='confirmPassword' value={confirmPassword} onChange={handleOnChange} placeholder="confirmPassword" /><br />
          <input type="submit" name="submit" />
        </form>
      </div>
    </center>
  )
}
export default Form;
