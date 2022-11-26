import React, { useState } from 'react'
import MenuIcon from '../../assets/img/Menu.svg'
// import SearchIcon from '../../assets/img/Search.svg'
import PlusIcon from '../../assets/img/Plus.svg'
import './header.css'
import { Link } from 'react-router-dom'
import logo from '../../assets/img/simplychat.png'
import SettingsIcon from '../../assets/img/settings.svg'
import ContactIcon from '../../assets/img/contacts.svg'
import CallsIcon from '../../assets/img/calls.svg'
import SaveMessageIcon from '../../assets/img/save-message.svg'
import InviteFriendsIon from '../../assets/img/invite-friends.svg'
import FAQIcon from '../../assets/img/FAQ.svg'

const Header = () => {
    const [modalOpen, setModalOpen] = useState(false)

    const handleModal = () => {
        if (modalOpen === true) {
            setModalOpen(false)
        } else {
            setModalOpen(true)
        }
    }

    return (
        <div className="header-app">
            <div className="navbar-header">
                <div className="app-name">
                    <img width={150} src={logo} alt="logo" />
                </div>
                <div className="menu-icon">
                    <Link to="#" onClick={handleModal}>
                        <img src={MenuIcon} alt="menu icon" />
                    </Link>
                </div>
            </div>
            {modalOpen === true ?
                <div className="modal-menu">
                    <ul className="list-menu">
                        <li style={{ paddingLeft: "0.5rem" }}>
                            <Link to="/profile">
                                <img src={SettingsIcon} alt="icon settings" style={{marginRight: "1.875rem"}} />
                                Settings
                            </Link>
                        </li>
                        <li style={{ paddingLeft: "0.5rem" }}>
                            <Link to="#">
                                <img src={ContactIcon} alt="icon contacts" style={{marginRight: "1.875rem"}}/>
                                Contacts
                            </Link>
                        </li>
                        <li style={{ paddingLeft: "0.5rem" }}>
                            <Link to="#">
                            <img src={CallsIcon} alt="icon settings" style={{marginRight: "1.575rem"}} /> 
                                Calls
                            </Link>
                        </li>
                        <li style={{ paddingLeft: "0.75rem" }}>
                            <Link to="#">
                            <img src={SaveMessageIcon} alt="icon settings" style={{marginRight: "1.875rem"}} />
                                Save messages
                            </Link>
                        </li>
                        <li style={{ paddingLeft: "0.5rem" }}>
                            <Link to="#">
                            <img src={InviteFriendsIon} alt="icon settings" style={{marginRight: "1.275rem"}} />
                                Invite Friends
                            </Link>
                        </li>
                        <li style={{ paddingLeft: "0.75rem" }}>
                            <Link to="#">
                            <img src={FAQIcon} alt="icon settings" style={{marginRight: "1.375rem"}} />
                                Telegram FAQ
                            </Link>
                        </li>
                    </ul>
                </div> : ""
            }
            <div className="row menu-row">
                <div className="search-icon col-lg-10 col-10">
                    <Link to="#">
                        <input className="search-input" type="search" placeholder="Type your message..." aria-label="Search" />
                    </Link>
                </div>
                <div className="plus-icon col-lg-2 col-2">
                    <Link to="#">
                        <img src={PlusIcon} alt="plus icon" />
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Header