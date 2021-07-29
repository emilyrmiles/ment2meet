import Rect, {Fragment, useState} from 'react';
import axios from 'axios';

const Register = () => {

    const [formData, setFormData] = useState({
        name :'',
        email: '',
        password: '',
        major: ''
    });

    const {name, email, password, major} = formData;

    const onchange = e => setFormData({
        ...formData,
        [e.target.name]: e.target.value,
    });

    const onSubmit = async e => {
        e.preventDefault();
        const newUser = {
            name,
            email,
            password,
            major
        };

        try {
          const config = {
            headers: {
              'Content-Type': 'application/json'
            }
          }
          const body = JSON.stringify(newUser);
          const response = await axios.post('/api/users', body, config);
          console.log(response.data);
        } catch (err) {
          console.error(err.response.data);
        }
    }

    return (
        <Fragment>
        <h1 className="large text-primary">Sign Up</h1>

      <form className="form" onSubmit={e=> onSubmit(e)}>

        <div className="form-group">
          <input
            type="text"
            placeholder="Name"
            name="name"
            value={name}
            onChange={e => onchange(e)}
          />
        </div>

        <div className="form-group">
          <input
            type="text"
            placeholder="Major"
            name="major"
            value={major}
            onChange={e => onchange(e)}
          />
        </div>

        <div className="form-group">
          <input
            type="email"
            placeholder="Email Address"
            name="email"
            value={email}
            onChange={e => onchange(e)}
          />
        </div>

        <div className="form-group">
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={password}
            onChange={e => onchange(e)}
          />
        </div>

        <input type="submit" value="Register" />

      </form>
      

        </Fragment>
    );
}

export default Register;