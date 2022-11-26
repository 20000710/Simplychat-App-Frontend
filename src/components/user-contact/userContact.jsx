import React, { useState } from 'react'
import contactImg from '../../assets/img/contact-img.png'
import contactImg2 from '../../assets/img/contact-img-2.png'
import contactImg3 from '../../assets/img/contact-img-3.png'
import contactImg4 from '../../assets/img/contact-img-4.png'
import purpleBell from '../../assets/img/purple-bell.svg'
import purpleCheckist from '../../assets/img/purple-checklist.svg'
import './userContact.css'

const UserContact = ({ selector, listChat, handleTab}) => {

    return (
        <div className="contact-card">
            <button className="contact-btn" onClick={handleTab}>
                <div className="card">
                    <div className="card-body d-flex align-items-center">
                        <p className="mb-0">
                            <img
                                className="img-fluid contact-img"
                                src={contactImg}
                                alt="card contact"
                            />
                        </p>
                        <div className="d-flex content-wrapper">
                            <div className="d-flex flex-column card-desc">
                                <h4 className="card-title">Theresa Webb</h4>
                                <p className="card-text">Why did you do that?</p>
                            </div>
                            <div className="notif-bell">
                                <img src={purpleBell} alt="purple icon" />
                            </div>
                            <div className="d-flex flex-column right-side">
                                <div className="time">
                                    <p>15:20</p>
                                </div>
                                <div className="notif-number">2</div>
                            </div>
                        </div>
                    </div>
                </div>
            </button>
            <button className="contact-btn" onClick={handleTab}>
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
            <button className="contact-btn" onClick={handleTab}>
                <div className="card">
                    <div className="card-body d-flex align-items-center">
                        <p className="mb-0">
                            <img
                                className="img-fluid contact-img"
                                src={contactImg3}
                                alt="card contact"
                            />
                        </p>
                        <div className="d-flex content-wrapper">
                            <div className="d-flex flex-column card-desc">
                                <h4 className="card-title">Gregory Bell</h4>
                                <p className="card-text">Why did you do that?</p>
                            </div>
                            <div className="notif-bell">
                                <img src={purpleBell} alt="purple icon" />
                            </div>
                            <div className="d-flex flex-column right-side">
                                <div className="time">
                                    <p>15:13</p>
                                </div>
                                <div className="notif-number">164</div>
                            </div>
                        </div>
                    </div>
                </div>
            </button>
            <button className="contact-btn" onClick={handleTab}>
                <div className="card">
                    <div className="card-body d-flex align-items-center">
                        <p className="mb-0">
                            <img
                                className="img-fluid contact-img"
                                src={contactImg}
                                alt="card contact"
                            />
                        </p>
                        <div className="d-flex content-wrapper">
                            <div className="d-flex flex-column card-desc">
                                <h4 className="card-title">Theresa Webb</h4>
                                <p className="card-text">Why did you do that?</p>
                            </div>
                            <div className="notif-bell">
                                <img src={purpleBell} alt="purple icon" />
                            </div>
                            <div className="d-flex flex-column right-side">
                                <div className="time">
                                    <p>15:20</p>
                                </div>
                                <div className="notif-number">2</div>
                            </div>
                        </div>
                    </div>
                </div>
            </button>
            <button className="contact-btn" onClick={handleTab}>
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
            <div className="card">
                <div className="card-body d-flex align-items-center">
                    <p className="mb-0">
                        <img
                            className="img-fluid contact-img"
                            src={contactImg3}
                            alt="card contact"
                        />
                    </p>
                    <div className="d-flex content-wrapper">
                        <div className="d-flex flex-column card-desc">
                            <h4 className="card-title">Gregory Bell</h4>
                            <p className="card-text">Why did you do that?</p>
                        </div>
                        <div className="notif-bell">
                            <img src={purpleBell} alt="purple icon" />
                        </div>
                        <div className="d-flex flex-column right-side">
                            <div className="time">
                                <p>15:13</p>
                            </div>
                            <div className="notif-number">164</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card">
                <div className="card-body d-flex align-items-center">
                    <p className="mb-0">
                        <img
                            className="img-fluid contact-img"
                            src={contactImg4}
                            alt="card contact"
                        />
                    </p>
                    <div className="d-flex content-wrapper">
                        <div className="d-flex flex-column card-desc">
                            <h4 className="card-title">Soham Henry</h4>
                            <p className="card-text read">Me: Bro, just fuck off</p>
                        </div>
                        <div className="notif-bell">
                            <img src={purpleBell} alt="purple icon" />
                        </div>
                        <div className="d-flex flex-column right-side">
                            <div className="time">
                                <p>15:13</p>
                            </div>
                            {/* <div className="notif-number">164</div> */}
                            <div className="checklist">
                                <img src={purpleCheckist} alt="icon checklist" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserContact