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

const username = null

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path='/login' exact element={<Login/>} />
          <Route path='/' exact element={<Home/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
