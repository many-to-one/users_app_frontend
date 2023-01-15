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


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path='/register' exact element={<Register/>} />
          <Route path='/login' exact element={<Login/>} />
          <Route path='/logout' exact element={<Logout/>} />
          <Route path='/' exact element={<Home/>} />
          <Route path='/profile' exact element={<Profile/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
