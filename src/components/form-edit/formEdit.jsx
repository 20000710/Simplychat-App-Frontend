import React, { useState } from 'react'
import { useDispatch } from "react-redux";
import { updateUser } from '../../config/redux/actions/userDataActions';
import { useNavigate } from 'react-router-dom';

const FormEdit = ({ id, phone, name, email, setEdit }) => {
    const navigate = useNavigate();
    // const [close, setCloe] = useState(false)
    const token = localStorage.getItem("token")
    const dispatch = useDispatch();
    const [data, setData] = useState({
        name,
        email,
        phone,
    })

    const handleChange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value,
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(updateUser(data, token, setEdit))
        window.location.reload();
    }

    const handleCancelEdit = () => {
        navigate('/profile', { state: { edit: false } })
    }

    console.log('data: ', data)
    return (
        <form onSubmit={handleSubmit}>
            <div className="form-group mb-3">
                <label htmlFor="name">Fullname:</label>
                <input
                    type="text"
                    className="form-control"
                    id={id}
                    name="name"
                    value={data.name}
                    required
                    onChange={handleChange} />
            </div>
            <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    className="form-control"
                    id={id}
                    name="email"
                    value={data.email}
                    required
                    onChange={handleChange} />
            </div>
            <div className="form-group mb-3">
                <label htmlFor="phone">Phone:</label>
                <input
                    type="text"
                    className="form-control"
                    id={id}
                    name="phone"
                    value={data.phone}
                    required
                    onChange={handleChange} />
            </div>
            <div className="d-flex justify-content-start my-5">
                <button type="button" onClick={handleCancelEdit} className="btn btn-danger btn-cancel">cancel</button>
                <button type="submit" className="btn btn-primary btn-submit">submit changes</button>
            </div>
        </form>
    )
}

export default FormEdit