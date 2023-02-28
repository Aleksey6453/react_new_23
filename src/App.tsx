import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import LoginPage from './components/auth/login/loginPage';
import Home from './components/home'
import PrivateRoute from './utils/router/privatRoute';



function App() {
  return (
    <div className="App main">
      <Routes>
        <Route element={<PrivateRoute/>}>
          <Route path='/' element={<Home/>} />
        </Route>
        <Route path='login' element={<LoginPage/>} />
      </Routes>
    </div>
  );
}

export default App;
