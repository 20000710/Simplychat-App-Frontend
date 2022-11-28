import React, { useState } from 'react'
import MenuIcon from '../../assets/img/Menu.svg'
import './header.css'
import { Link } from 'react-router-dom'
import logo from '../../assets/img/simplychat.png'
import SettingsIcon from '../../assets/img/settings.svg'
import ContactIcon from '../../assets/img/contacts.svg'
import CallsIcon from '../../assets/img/calls.svg'
import SaveMessageIcon from '../../assets/img/save-message.svg'
import InviteFriendsIon from '../../assets/img/invite-friends.svg'
import FAQIcon from '../../assets/img/FAQ.svg'
import searchIcon from '../../assets/img/Search.svg'
import { useEffect } from 'react'
import { getAllUser } from '../../config/redux/actions/userDataActions'
import { useDispatch } from 'react-redux'

const Header = () => {
    const dispatch = useDispatch()
    const [query, setQuery] = useState("")
    const [modalOpen, setModalOpen] = useState(false)

    const handleModal = () => {
        if (modalOpen === true) {
            setModalOpen(false)
        } else {
            setModalOpen(true)
        }
    }

    const handleQuery = (e) => {
        setQuery(e.target.value)
    }

    const handleSeach = () => {
        let search = query?.toLowerCase()
        dispatch(getAllUser(search))
    }
    useEffect(() => {
        handleSeach()       
    },[])

    console.log('query: ', query);

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
                        <input 
                        className="search-input" 
                        type="text" 
                        placeholder="search your contact" 
                        aria-label="Search"
                        value={query}
                        onChange={handleQuery}
                        />
                    </Link>
                </div>
                <div className="search-icon col-lg-2 col-2">
                    <button type='button' onClick={handleSeach}>
                        <img src={searchIcon} alt="search icon" />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Header