import { io } from "socket.io-client";

const URL = "https://telegram-app-backend-production.up.railway.app/";
const socket = io(URL, { autoConnect: false });

socket.onAny((event, ...args) => {
  console.log(event, args);
});

export default socket;
