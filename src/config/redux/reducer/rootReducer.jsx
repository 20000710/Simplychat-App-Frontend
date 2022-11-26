import { combineReducers } from "@reduxjs/toolkit";
import detailReceiverReducer from "./detailReceiver";
import { usersDataReducers } from "./userDataReducer";
import { usersReducers } from "./userReducer";


const rootReducer = combineReducers({
  users: usersReducers,
  dataUser: usersDataReducers,
  detailReceiver: detailReceiverReducer,
});

export default rootReducer;