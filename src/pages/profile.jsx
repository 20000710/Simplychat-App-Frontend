import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import backIcon from '../assets/img/back.svg'
import '../assets/style/profile.css'
import userDefault from '../assets/img/user_default.png'
import { useDispatch, useSelector } from "react-redux";
import jwt_decode from "jwt-decode";
import { getDetailUser } from '../config/redux/actions/userDataActions'
import FormEdit from '../components/form-edit/formEdit';
import ModalUpload from '../components/modal-upload/modalUpload';
import { useLocation } from 'react-router-dom';
import Cookies from 'js-cookie';

const Profile = () => {
    const dispatch = useDispatch();
    const location = useLocation();
    const [edit, setEdit] = useState(false)
    const [upload, setUpload] = useState(false)
    const { usersDetail } = useSelector((state) => state.dataUser)
    const token = Cookies.get("token")
    const decode = jwt_decode(token)
    const id = decode.id

    useEffect(() => {
        dispatch(getDetailUser(id));
    }, []);

    const handleEdit = () => {
        setEdit(true)
    }

    const handleOpenUpload = () => {
        setUpload(true)
    }

    console.log('location: ', location?.state?.edit);

    return (
        <div>
            <div className="header">
                <div className="col-lg-5 col-5">
                    <Link to="/chat">
                        <img className="back-icon" src={backIcon} alt="back icon" />
                    </Link>
                </div>
                <div className="col-lg-7 col-7">
                    <h3 className="email">
                        {
                            usersDetail?.email === "" || usersDetail?.email === undefined ?
                            "-" : usersDetail?.email
                        }
                    </h3>
                </div>
            </div>
            <div className="main-profile">
                <div className="photo">
                    <img 
                        src={usersDetail?.photo === "user_default.png" ? userDefault :
                        "https://telegram-app-backend-production.up.railway.app/" + usersDetail?.photo
                        } 
                        alt="profile images" 
                    />
                    {upload === false ?
                        <Link to={"#"} onClick={handleOpenUpload} >change photo</Link>
                        :
                        <ModalUpload photo={usersDetail?.photo} id={id} token={token} />
                    }
                    <div className="d-flex flex-column account-profile">
                        <h4>{usersDetail?.name}</h4>
                        <p className="phone">{usersDetail?.phone}</p>
                    </div>
                </div>
                <div className="detail-account">
                    <h1>Account</h1>
                    {edit === false ?
                        <>
                            <div>
                                <h2>Phone:</h2>
                                <p className="phone">{usersDetail?.phone}</p>
                            </div>
                            <hr />
                            <div>
                                <h2>Fullname: </h2>
                                <p>{usersDetail?.name}</p>
                            </div>
                            <hr />
                            <div>
                                <h2>Email: </h2>
                                <p>{usersDetail?.email}</p>
                            </div>
                            <hr />
                            <button className="btn btn-primary btn-edit" onClick={handleEdit} type="button">Edit Profile</button>
                        </>
                        :
                        <FormEdit id={id} phone={usersDetail?.phone} name={usersDetail?.name} email={usersDetail?.email} setEdit={setEdit} />
                    }
                </div>
            </div>
        </div>
    )
}

export default Profile