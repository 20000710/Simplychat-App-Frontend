import React, { useState } from 'react'
import './chat.css'
import moment from 'moment';
import userDefault from '../../assets/img/user_default.png'
import Cookies from 'js-cookie';

const Chat = ({
  detailReceiver,
  activeReceiver,
  listChat,
  message,
  setMessage,
  onSendMessage
}) => {
  // const [editChat, setEditChat] = useState('');
  // const [editChatData, setEditChatData] = useState(null);
  console.log('listChat: ', listChat);
  console.log('activeReceiver: ', activeReceiver);
  console.log('detailReceiver: ', detailReceiver);
  console.log('listChat: ', listChat);

  console.log('messages: ', message);
  return (
    <div>
      <div className="main-chat">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="#">
            <img
              src={
                detailReceiver?.data?.photo === "user_default.png" ?
                  userDefault :
                  "https://telegram-app-backend-production.up.railway.app/" + detailReceiver?.data.photo
              }
              width="64"
              height="64"
              alt="icon profile"
            />
          </a>
          <div className="d-flex flex-column">
            <h4 className="profile-name">{detailReceiver?.data?.name}</h4>
            <p className="status">online</p>
          </div>
        </nav>
        {detailReceiver.isLoading ? (
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        ) : (
          <>
            {listChat.length ? (
              <>
                {listChat.map((chat) => (
                  <div key={chat.id}>
                    {chat.sender_id === Cookies.get('user_id') ? (
                      <div>
                        <div className="d-flex justify-content-end align-items-end mt-4">
                          <div className="ballon-right me-2">
                            {chat.is_deleted ? (
                              <p className="p-0 m-0 text-secondary">
                                <i>This message has been deleted</i>
                              </p>
                            ) : (
                              <>
                                <p className="p-0 m-0">{chat.chat}</p>
                                <small
                                  className="text-secondary"
                                  style={{ fontSize: '13px' }}
                                >
                                  {moment(chat.date).format('LLL')}
                                </small>
                              </>
                            )}
                          </div>
                        </div>
                        {/* {!chat.is_deleted && (
                          <div
                            className="d-flex justify-content-end w-100"
                            style={{ marginTop: '-12px' }}
                          >
                            <span
                              className="text-primary pointer mt-3 me-2"
                              data-bs-toggle="modal"
                              data-bs-target="#editChat"
                              onClick={() => {
                                setEditChat(chat.chat);
                                setEditChatData(chat);
                              }}
                            >
                              Edit
                            </span>
                            <div className="modal fade" id="editChat" tabIndex="-1" aria-labelledby="editChatLabel" aria-hidden="true">
                              <div className="modal-dialog modal-dialog-centered">
                                <div className="modal-content">
                                  <div className="modal-header">
                                    <h5 className="modal-title" id="editChatLabel">Edit Chat</h5>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                                  </div>
                                  <div className="modal-body">
                                    <input className="form-control" type="text" value={editChat} onChange={(e) => setEditChat(e.target.value)} />
                                  </div>
                                  <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" id="close">Close</button>
                                    <button type="button" className="btn bg-blue text-white" onClick={() => onEditMessage(editChat, editChatData)}>Save changes</button>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <span
                              className="text-danger pointer mt-3"
                              onClick={() => onDeleteMessage(chat)}
                              style={{ marginRight: '65px' }}
                            >
                              Delete
                            </span>
                          </div>
                        )} */}
                      </div>
                    ) : (
                      <div className="d-flex justify-content-start align-items-end mt-4">
                        <div className="ballon-left ms-2">
                          {
                            chat.is_deleted ? (
                              <p className="p-0 m-0 text-light">
                                <i>This message has been deleted</i>
                              </p>
                            ) : (
                              <>
                                <p className="p-0 m-0">{chat.chat}</p>
                                <small
                                  className="text-light"
                                  style={{ fontSize: '13px' }}
                                >
                                  {moment(chat.date).format('LLL')}
                                </small>
                              </>
                            )
                          }
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </>
            ) : (
              <p className="fs-5">No message yet</p>
            )}
          </>
        )
        }
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