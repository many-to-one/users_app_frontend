import React from 'react';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';
import Login from './components/pages/Login';
import Home from './components/pages/Home';
import Header from './components/Header';
import Logout from './components/pages/Logout';
import Register from './components/pages/Register';
import Profile from './components/pages/Profile';
import RequestResetMail from './components/pages/RequestResetMail';
import PasswordReseteComplete from './components/pages/PasswordReseteComplete';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path='/register' exact element={<Register/>} />
          <Route path='/' exact element={<Login/>} />
          <Route path='/logout' exact element={<Logout/>} />
          <Route path='/home' exact element={<Home/>} />
          <Route path='/profile' exact element={<Profile/>} />
          <Route path='/request-reset-email' exact element={<RequestResetMail />} />
          <Route path='/password-reset-complete' exact element={<PasswordReseteComplete />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
