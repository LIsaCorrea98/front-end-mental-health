import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import ForgotPassword from './pages/ForgotPassword';
import Thanks from './pages/Thanks';
import User from './pages/User';
import MoreInfo from './pages/MoreInfo';
import Alarms from './pages/Alarms';
import Calendar from './pages/Calendar';
import Food from './pages/Food';
import Rutines from './pages/Rutines';

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/thanks" element={<Thanks />} />
        <Route path="/user" element={<User />} />
        <Route path="/moreinfo" element={<MoreInfo />} />
        <Route path="/alarms" element={<Alarms />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/food" element={<Food />} />
        <Route path="/rutines" element={<Rutines />} />
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;