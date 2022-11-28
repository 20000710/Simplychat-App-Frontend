import React, { useState } from 'react'
import contactImg5 from '../../assets/img/contact-img-5.png'
import './chat.css'

const Chat = ({
  detailReceiver,
  activeReceiver,
  listChat,
  message,
  setMessage,
  onSendMessage,
  onDeleteMessage,
  onEditMessage
}) => {
  console.log('listChat: ', listChat);
  console.log('activeReceiver: ', activeReceiver);
  console.log('detailReceiver: ', detailReceiver);

  console.log('messages: ', message);
  return (
    <div>
      <div className="main-chat">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="#">
            <img src={contactImg5} width="64" height="64" alt="icon profile" />
          </a>
          <div className="d-flex flex-column">
            <h4 className="profile-name">Mother</h4>
            <p className="status">online</p>
          </div>
        </nav>
        <form onSubmit={onSendMessage} className="input-message">
          <input
            type="text"
            className="form-control"
            id="message"
            name="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type your message..."
            required
            aria-describedby="emailHelp"
          />
          <div className="send-btn">
            <button type="submit" className="btn btn-primary btn-send">Send</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Chat