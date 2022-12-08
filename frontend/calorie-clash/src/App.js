import './stylesheets/App.css';
import './stylesheets/general.css';
import Home from './pages/home';
import Started from './pages/get-started';
import Leaderboard from './pages/leaderboard';
import Profile from './pages/profile';
import RivalInfo from './pages/rival-info';

import LogCalories from './forms/log-calories';
import EditProfile from './forms/edit-profile';
import Signup from './forms/signup';
import Login from './forms/login';
import ForgotPassword from './forms/forgot-password';
import Logout from './pages/logout';
import Rival from './pages/rival';

import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';
  
function App() {
return (
    <Router>
    <Navbar />
    
    <Routes>
        {/* <Route exact path='/' exact element={<Home/>} /> */}
        <Route path='/home' element={<Home/>} />
        <Route path='' element={<Home/>} />
        <Route path='/get-started' element={<Started/>} />
        <Route path='/leaderboard' element={<Leaderboard/>} />
        <Route path='/profile' element={<Profile/>} />
        <Route path='/log-calories' element={<LogCalories/>} />
        <Route path='/edit-profile' element={<EditProfile/>} />
        <Route path='/rival-info' element={<RivalInfo/>} />
        <Route path='/signup' element={<Signup/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/logout' element={<Logout/>} />
        <Route path='/forgot-password' element={<ForgotPassword/>} />
        <Route path='/rival' element={<Rival/>} />
    </Routes>
    </Router>
);
}
  
export default App;
