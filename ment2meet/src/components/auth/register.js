import React, {Fragment, useEffect, useState} from 'react';
import axios from 'axios';
import { head } from '../../../../routes/api/users';

const Register = () => {
    const[formData, setFormData] = useState( {
        name: '',
        email: '',
        password: '',
        major: '',
    });
    
    const {name, email, password, major} = formData;
    const onChange = e => setFormData({...formData, [e.target.name]: e.target.value});
    const onSubmit = async e => {
        e.preventDefault();
        const newUser = {
            name,
            email,
            password,
            major
        }
        try {
            const config = {
                headers: {
                    'Content-Type': 'application/json'
                }
            }
            const body = JSON.stringify(newUser);
            const response = await axios.post('/api/users', body, config);
            console.log(response);
        } catch (err) {
            console.log(err.response.data);
        }
    };
  

    return (
        <Fragment>
            
      <h1>Create an Account</h1>
      <p>Enter your personal information to begin</p>
      <form class="form" onSubmit={e => onSubmit(e)}>
        <div class="form-group">
        <p>What's your name</p>
          <input type="text" placeholder="First and last name" name="name" value={name} onChange={e => onChange(e)} required />
        </div>
        <div class="form-group">
        <p>What's your email</p>
          <input type="email" placeholder="Start typing..." name="email" value={email} onChange={e => onChange(e)} required/>
        </div>
        <div class="form-group">
        <p>What you studying</p>
            <input type="text" placeholder="Subject/Major" name="major" value={major} onChange={e => onChange(e)} required/>
        </div>
        <div class="form-group">
        <p>Password</p>
          <input
            type="password"
            placeholder="8 characters minimum"
            name="password"
            minLength="8"
            value={password} onChange={e=>onChange(e)}
            required
          />
        </div>
        <input type="submit" value="Match me with mentors!" />
        <a href="aboutme.html">next</a>
      </form>
    
        </Fragment>
    );
  }

  export default Register;
