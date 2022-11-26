import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from "react-redux";
import '../../assets/style/auth.css'
import { login } from '../../config/redux/actions/userActions';
// import eyeIcon from '../assets/img/eye.svg'
import socket from '../../socket';

const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [alreadySelected, setAlreadySelected] = useState(false);
    const [loading, setLoading] = useState(false);
    const [form, setForm] = useState({
        email: "",
        password: "",
    });
 
    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        })
    }

    // const handleUsernameSelection = (username) => {
    //     setAlreadySelected(true);
    //     socket.auth = {username};
    //     socket.connect();
    // }

    const handleSubmit = (e) => {

        e.preventDefault();
        // handleUsernameSelection(email);
        setLoading(true);
        dispatch(login(form, navigate, setLoading))
    }

    return (
        <div className="container-fluid login">
            <div className="login-title">
                <h1>Login</h1>
            </div>
            <div className="form-login">
                <div className="greeting">
                    <p>Hi, Welcome back!</p>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Email</label>
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
                        <label htmlFor="exampleInputPassword1">Password</label>
                        <input 
                            type="password" 
                            className="form-control" 
                            id="exampleInputPassword1" 
                            name="password"
                            placeholder="Enter password"
                            onChange={handleChange} />
                    </div>
                    <div className="forgot-psw my-3 d-flex justify-content-end wb">
                        <p>
                            <Link href="#">
                                Forgot password?
                            </Link>
                        </p>
                    </div>
                    <div className="d-flex justify-content-center">
                        <button type="submit" className="btn btn-primary btn-login">Login</button>
                    </div>
                </form>
                <div className="sign-up d-flex justify-content-center wb">
                    <p>
                        Don't have an account?
                        <Link to="/signup" className="signup wb">
                            Sign Up
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Login