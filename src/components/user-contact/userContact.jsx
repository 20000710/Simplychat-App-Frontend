import React, { useEffect, useState } from 'react'
import contactImg from '../../assets/img/contact-img.png'
import contactImg2 from '../../assets/img/contact-img-2.png'
import contactImg3 from '../../assets/img/contact-img-3.png'
import contactImg4 from '../../assets/img/contact-img-4.png'
import purpleBell from '../../assets/img/purple-bell.svg'
import purpleCheckist from '../../assets/img/purple-checklist.svg'
import './userContact.css'
import { useDispatch, useSelector } from 'react-redux'
import { getAllUser } from '../../config/redux/actions/userDataActions'

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
                                                        src={contactImg2}
                                                        alt="card contact"
                                                    />
                                                </p>
                                                <div className="d-flex content-wrapper">
                                                    <div className="d-flex flex-column card-desc">
                                                        <h4 className="card-title">Calvin Flores</h4>
                                                        <p className="card-text">Why did you do that?</p>
                                                    </div>
                                                    <div className="notif-bell">
                                                        <img src={purpleBell} alt="purple icon" />
                                                    </div>
                                                    <div className="d-flex flex-column right-side">
                                                        <div className="time">
                                                            <p>15:13</p>
                                                        </div>
                                                        <div className="notif-number">1</div>
                                                    </div>
                                                </div>
                                            </div>
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