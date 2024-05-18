<<<<<<< HEAD
import './App.css';
import './index.css';
import Footer from './components/footer';
import NavBar from './components/nav-bar';
import LandingPage from './pages/landing-page';
import CampaignPage from './pages/campaign-page';
// import SocialProfilePage from './pages/profile-page';
import HomePage from './pages/home-page';
import LoginPage from './pages/login-page';
import Shop from './pages/shop';
import Logout from './pages/logout';
import PlantifyNetwork from './pages/network';
import ContactUsPage from './pages/contact-us-page';
import SocialSignUpPage from './pages/social-signup-page';
import SettingsPage from './pages/settings';
import AuthCheck from './pages/check';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Profile from './profileComp/profile-full';
import React from 'react';

function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
          <Route index element={<LandingPage/>}/>
          <Route path="campaign" element={<CampaignPage/>} />
          {/* <Route path="campaign/socialGroup/:id" element={<SocialProfilePage/>} /> */}
          <Route path="home" element={<HomePage/>} />
          <Route path="login" element={<LoginPage/>} />
          <Route path="logout" element={<Logout/>} />
          <Route path="shop" element={<Shop/>} />
          <Route path="plantify-network" element={<PlantifyNetwork/>} />
          <Route path="contact-us" element={<ContactUsPage/>} />
          <Route path="about-us" element={<PlantifyNetwork/>} />
          <Route path="social-signUp" element={<SocialSignUpPage/>} />
          <Route path="settings" element={<SettingsPage/>} />
          <Route path='auth-check' element={<AuthCheck/>} />
      </Routes>
      <Footer/>
    </BrowserRouter>
=======
import React from "react";
import "./App.css";
import "./index.css";
import Dashboard from "./pages/dashboard";
import inbox from "./pages/inbox";
import create from "./pages/create";
import team from "./pages/team";
import setting from "./pages/setting";
import profile from "./pages/profile";
import Sidebar from "./components/sidebar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <Sidebar />
  
      <Routes>
        <Route index element={<Dashboard />} />
        <Route path="/pages/inbox" element={<inbox />} />
        <Route path="/pages/create" element={<create />} />
        <Route path="/pages/team" element={<team />} />
        <Route path="/pages/setting" element={<setting />} />
        <Route path="/pages/profile" element={<profile />} />
      </Routes>
    </Router>
>>>>>>> b3291e92832e236fa7cdce97e49d448b2bcf4342
  );
}

export default App;
