import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Login from './pages/auth/login';
import Chatroom from './pages/chatroom';
import Signup from './pages/auth/signup';
import Profile from './pages/profile';
import Auth from './components/auth/auth';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace="true" />}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/chat" element={<Auth><Chatroom/></Auth>}/>
        <Route path="/profile" element={<Auth><Profile/></Auth>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
