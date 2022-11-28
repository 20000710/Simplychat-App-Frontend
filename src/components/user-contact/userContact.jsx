import React, { useEffect, useState } from 'react'
import './userContact.css'
import { useDispatch, useSelector } from 'react-redux'
import { getAllUser } from '../../config/redux/actions/userDataActions'
import userDefault from '../../assets/img/user_default.png'
import Header from '../header/header'

const UserContact = ({ selectReceiver, listChat, handleTab }) => {
    const dispatch = useDispatch();
    console.log('selector: ', selectReceiver);
    const { userList } = useSelector(state => state.dataUser)
    console.log('data-users: ', userList);
    console.log('contact-chat: ', listChat);
    useEffect(() => {
        dispatch(getAllUser())
    }, [])

    return (
        <>
        <Header userList={userList} />
            {userList === undefined ?
                <h5>something wrong!</h5> : (
                    <div>
                        {userList.length ? (
                            userList.map((user) => (
                                <div className="contact-card">
                                    <button onClick={() => {
                                        selectReceiver(user.id)
                                        handleTab()
                                    }}
                                        className="contact-btn"
                                    >
                                        <div className="card">
                                            <div className="card-body d-flex align-items-center">
                                                <p className="mb-0">
                                                    <img
                                                        className="img-fluid contact-img"
                                                        src={user.photo === "user_default.png" || user.photo === undefined ?
                                                            userDefault :
                                                            "https://telegram-app-backend-production.up.railway.app/" + user.photo
                                                        }
                                                        alt="card contact"
                                                    />
                                                </p>
                                                <div className="d-flex content-wrapper">
                                                    <div className="d-flex flex-column card-desc">
                                                        <h4 className="card-title">{user.name}</h4>
                                                        <p className="card-text">{listChat.length ?
                                                            listChat.map(val => val.receiver_id === user.id ? val.chat : ""

                                                            ) : ""}</p>
                                                    </div>
                                                    {/* <div className="notif-bell">
                                                        <img src={purpleBell} alt="purple icon" />
                                                    </div>
                                                    <div className="d-flex flex-column right-side">
                                                        <div className="time">
                                                            <p>15:13</p>
                                                        </div>
                                                        <div className="notif-number">1</div>
                                                    </div> */}
                                                </div>
                                            </div>
                                            <hr style={{width: "100%"}}/>
                                        </div>
                                    </button>
                                </div>
                            ))
                        ) : (
                            <h5>User not found!</h5>
                        )
                        }
                    </div>
                )}
        </>
    )
}

export default UserContact