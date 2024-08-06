// src/App.jsx
import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Register from './components/Register';
import Footer from './components/Footer';
import Login from './components/Login';

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <div className="container-fluid">
        {/* <Home /> */}
        {/* <RegisterPage /> */}
        <Login />
      </div>
      <Footer />
    </div>
  );
};

export default App;
