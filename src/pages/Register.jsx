import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    password1: '',
    password2: ''
  });

  const changeInputHandler = (e) => {
    setUserData((prevState) => {
      return { ...prevState, [e.target.name]: e.target.value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your registration logic here using the userData state
    console.log('Submitted:', userData);
  };

  return (
    <section className='register'>
      <div className='container'>
        <h2>Sign Up</h2>
        <form className='form register_form' onSubmit={handleSubmit}>
          <p className='form_error-message'>This is an error message</p>
          <input
            type='text'
            placeholder='Full Name'
            name='name'
            value={userData.name}
            onChange={changeInputHandler}
          />
          <input
            type='text'
            placeholder='email'
            name='email'
            value={userData.email}
            onChange={changeInputHandler}
          />
          <input
            type='password'
            placeholder='password'
            name='password1'
            value={userData.password1}
            onChange={changeInputHandler}
          />
          <input
            type='password'
            placeholder='Confirm password'
            name='password2'
            value={userData.password2}
            onChange={changeInputHandler}
          />
          <button type='submit' className='btn primary'>
            Register
          </button>
        </form>
        <small>
          Already have an account? <Link to='/login'>Sign in</Link>
        </small>
      </div>
    </section>
  );
};

export default Register;