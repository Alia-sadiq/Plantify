// import React from "react";
// import Onboard from "./pages/onboard";
// import Campaigns from "./pages/Campaigns";
// import CreateCampaignForm from "./pages/createCampaign";
// import Team from "./pages/team";
// import SettingPage from "./pages/settingPage";
// import Profile from "./pages/profile";
// import Sidebar from "./components/sidebar";
// import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

// function App() {
//   return (
//     <Router>
//       <Sidebar />
//       <Routes>
//         <Route path="/" element={<Navigate to="/onboard" />} />
//         <Route path="/onboard" element={<Onboard />} />
//         <Route path="/Campaigns" element={<Campaigns />} />
//         <Route path="/createCampaign" element={<CreateCampaignForm />} />
//         {/* <Route path="/team" element={<Team />} /> */}
//         <Route path="/profile" element={<Profile />} />
//         <Route path="/settingPage" element={<SettingPage />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;
// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Layout from '../src/components/Layout';
// import Onboard from '../src/pages/onboard.js';
// import Campaigns from '../src/pages/Campaigns.js';
// import Calendar from './pages/Calender.js';
// import Profile from '../src/pages/profile.js';
// import Charts from '../src/pages/charts.js';

// const App = () => {
//   return (
//     <Router>
//       <Layout/>
//       <Routes>
        
//         <Route path="/" element={ <Onboard />}>
//           <Route path="onboard" element={<Onboard />} />
//           <Route path="campaigns" element={<Campaigns />} />
//           <Route path="calendar" element={<Calendar />} />
//           <Route path="profile" element={<Profile />} />
//           <Route path="charts" element={<Charts />} />
//         </Route>
//       </Routes>
//     </Router>
//   );
// };

// export default App;
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from '../src/components/Layout';
import Onboard from '../src/pages/onboard';
import Campaigns from '../src/pages/Campaigns';
import MyCalendarComponent from '../src/pages/Calender.js';
import Profile from '../src/pages/profile';
import Insight from '../src/pages/Insights.js';
import CreateCampaignForm from '../src/pages/createCampaign.js';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Onboard />} />
          <Route path="onboard" element={<Onboard />} />
          <Route path="campaigns" element={<Campaigns />} />
          <Route path="Calendar" element={<MyCalendarComponent />} />
          <Route path="profile" element={<Profile />} />
          <Route path="Insights" element={<Insight />} /> 
          <Route path="createCampaign" element={<CreateCampaignForm />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
