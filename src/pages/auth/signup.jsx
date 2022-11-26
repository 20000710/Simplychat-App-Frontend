import React, { useState } from 'react'
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import '../../assets/style/auth.css'
import { register } from '../../config/redux/actions/userActions';

const Signup = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true)
    dispatch(register(form, navigate, setLoading))
  }

  console.log('form: ', form)

  return (
    <div className="container-fluid register">
      <div className="register-title">
        <h1>Register</h1>
      </div>
      <div className="form-register">
        <div className="greeting">
          <p>Let's create your account</p>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label for="name">Name</label>
            <input 
              type="text" 
              className="form-control" 
              id="name"
              name="name"
              required 
              aria-describedby="emailHelp" 
              placeholder="Enter name"
              onChange={handleChange} />
          </div>
          <div className="form-group">
            <label for="exampleInputEmail1">Email</label>
            <input 
              type="email" 
              className="form-control" 
              id="exampleInputEmail1"
              name="email" 
              aria-describedby="emailHelp" 
              placeholder="Enter email"
              onChange={handleChange} />
          </div>
          <div className="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input 
              type="password" 
              className="form-control" 
              id="exampleInputPassword1"
              name="password" 
              placeholder="Enter password"
              onChange={handleChange} />
          </div>
          <div className="d-flex justify-content-center">
            <button type="submit" className="btn btn-primary btn-register">Register</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Signup
