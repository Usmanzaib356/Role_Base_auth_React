import React from 'react';
import Navbar from './Components/Navbar';
import { Routes, Route } from 'react-router-dom';
import Signin from './Components/Signin';
import "./index.css";
import Signup from './Components/Singup';
import Admin from "./Components/Admin";
import Users from "./Components/Users";
import Permission from './Components/Permission';
import useAuth from './hooks/useAuth';
import Logout from './Components/Logout';
import Adminper from './Components/Adminper';

function App() {
  const { isLogin, Role } = useAuth();

  return (
    <>
      <div>
        <Navbar></Navbar>
      </div>
      <Routes>
        <Route path='/' element={<Signin />} />
        <Route path='signup' element={<Signup />} />
        {Role === 'admin' ? (
          <Route path='admin' element={isLogin ? <Admin /> : <Permission />} />
        ) : (
          <Route path='admin' element={<Adminper />} />
        )}
        <Route path='users' element={isLogin ? <Users /> : <Permission />} />
        <Route path='logout' element={<Logout />} />
      </Routes>
    </>
  );
}

export default App;
