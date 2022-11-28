import React, { useEffect, useState } from 'react'
import UserContact from '../components/user-contact/userContact'
// import socket from '../socket'
import { io } from "socket.io-client";
import { useSearchParams } from "react-router-dom";
import '../assets/style/chatroom.css'
import Chat from '../components/chat/chat';
import { useDispatch, useSelector } from 'react-redux';
import { getDetailReceiver, getDetailUser } from '../config/redux/actions/userDataActions';
import Cookies from 'js-cookie';
import Swal from 'sweetalert2';

const Chatroom = () => {
  const [socketio, setSocketio] = useState(null);
  const [tab, setTab] = useState(false);
  const dispatch = useDispatch();
  const [message, setMessage] = useState('');
  const [listChat, setListChat] = useState([]);
  const [activeReceiver, setActiveReceiver] = useState('');

  const { detailReceiver } = useSelector(state => state)
  const { usersDetail } = useSelector(state => state.dataUser)

  console.log('usersData: ', usersDetail);
  console.log('detailReceiver:', detailReceiver);

  useEffect(() => {
    const user_id = Cookies.get("user_id")
    console.log('user_id: ', user_id);
    dispatch(getDetailUser(user_id))

    const socket = io(process.env.REACT_APP_API_BACKEND);
    socket.on('send-message-response', (response) => {
      const receiver = Cookies.get('receiver');

      if (response.length) {
        if (
          receiver === response[0].sender_id
          || receiver === response[0].receiver_id
        ) {

          console.log(response[response.length - 1].date)
          console.log(new Date().getTime().toLocaleString("en-US", "Asia/Jakarta"))
          console.log(new Date(response[response.length - 1].date).getTime().toLocaleString("en-US", "Asia/Jakarta"))
          const dateNow = new Date().getTime().toLocaleString("en-US", "Asia/Jakarta").split(',').slice(3, 4).toString()
          const dateChat = new Date(response[response.length - 1].date).getTime().toLocaleString("en-US", "Asia/Jakarta").split(',').slice(3, 4).toString()
          console.log(dateNow)
          console.log(dateChat)

          if (dateChat === dateNow) {
            Cookies.set("notif", true)
            if (Cookies.get('notif') === 'true') {
              alert(response[response.length - 1].chat, 'success')

              setTimeout(() => {

                const chating = document.getElementById('note')
                chating.remove();

              }, 4000)
            }
            // return;
            Cookies.remove("notif")
          }
          setListChat(response);

          setTimeout(() => {
            const elem = document.getElementById('chatMenuMessage');
            // elem.scrollTop = elem.scrollHeight;
          }, 500);

        }
      }
    });
    setSocketio(socket);
  }, [])

  const selectReceiver = (receiverId) => {
    setListChat([]);
    dispatch(getDetailReceiver(receiverId));
    setActiveReceiver(receiverId);
    Cookies.set('receiver', receiverId);
    socketio.emit('join-room', Cookies.get('user_id'));
    socketio.emit('chat-history', {
      sender: Cookies.get('user_id'),
      receiver: receiverId,
    });
  };

  const onSendMessage = (e) => {
    e.preventDefault();
    if (!message) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Message empty!',
      });
      return;
    }

    const data = {
      sender: Cookies.get('user_id'),
      receiver: activeReceiver,
      date: new Date(),
      chat: message,
      // notif: `${detailUser.data.username}/As97$/${message}`
    };
    socketio.emit('send-message', data);

    const payload = {
      sender_id: Cookies.get('user_id'),
      receiver_id: activeReceiver,
      photo: usersDetail.photo,
      date: new Date(),
      chat: message,
      id: new Date(),
    };
    setListChat([...listChat, payload]);

    setMessage('');

    setTimeout(() => {
      const elem = document.getElementById('chatMenuMessage');
      // elem.scrollTop = elem.scrollHeight;
    }, 100);
  };

  const onDeleteMessage = (chat) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes',
    }).then((result) => {
      if (result.isConfirmed) {
        const data = {
          sender: chat.sender_id,
          receiver: chat.receiver_id,
          chatId: chat.id,
        };
        socketio.emit('delete-message', data);
      }
    });
  };

  const onEditMessage = (newChat, chat) => {
    if (!newChat) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Message empty!',
      });
      return;
    }

    const data = {
      sender: chat.sender_id,
      receiver: chat.receiver_id,
      chatId: chat.id,
      chat: newChat,
    };
    socketio.emit('edit-message', data);

    document.getElementById('close').click();
  };

  const handleTab = () => {
    setTab(true)
  }

  return (
    <div>
      <div style={{height: "100vh"}} className="row">
        <div
          style={{
            boxShadow: "0px 1px 20px rgba(197, 197, 197, 0.25)"
          }}
          className="col-lg-4 col-md-6 col-4"
        >
          <UserContact 
            selectReceiver={selectReceiver} 
            listChat={listChat} 
            handleTab={handleTab} 
          />
        </div>
        {tab === false ?
          <div className="col-lg-8 col-8 d-flex justify-content-center align-items-center" style={{ background: "#FAFAFA" }}>
            Please select a chat to start messaging
          </div>
          :
          <div className="col-lg-8 col-md-6 col-8">
            <Chat
              detailReceiver={detailReceiver}
              activeReceiver={activeReceiver}
              listChat={listChat}
              message={message}
              setMessage={setMessage}
              onSendMessage={onSendMessage}
              onDeleteMessage={onDeleteMessage}
              onEditMessage={onEditMessage}
            />
          </div>
        }
      </div>
    </div>
  )
}

export default Chatroom