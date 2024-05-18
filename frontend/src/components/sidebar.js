<<<<<<< HEAD

import React from 'react';
import { Link } from 'react-router-dom';
import { FaChartLine, FaBullhorn, FaCalendarAlt, FaUser, FaChartBar, FaArrowLeft } from 'react-icons/fa';

const Sidebar = () => {
  return (
    <div className="flex flex-col h-full w-52 bg-dashboard text-white">
      <div className="flex items-center justify-start ml-10 h-16 border-b border-gray-800">
        <div className="flex items-start">
          <FaChartLine className="text-green text-2xl mr-2" />
          <span className="text-xl font-semibold">Plantify</span>
        </div>
      </div>
      <div className="flex flex-col p-4 space-y-4 flex-grow">
        <div className="space-y-1">
          <Link to="/onboard" className="flex items-center p-2 text-gray-200 hover:bg-dbhover rounded" aria-label="Dashboard">
            <FaChartLine className="mr-3" />
            Dashboard
          </Link>
          <Link to="/campaigns" className="flex items-center p-2 text-gray-200 hover:bg-dbhover rounded" aria-label="Campaigns">
            <FaBullhorn className="mr-3" />
            Campaigns
          </Link>
          <Link to="/profile" className="flex items-center p-2 text-gray-200 hover:bg-dbhover rounded" aria-label="Profile">
            <FaUser className="mr-3" />
            Profile
          </Link>
          {/* <Link to="/Calendar" className="flex items-center p-2 text-gray-200 hover:bg-dbhover rounded" aria-label="Calendar">
            <FaCalendarAlt className="mr-3" />
            Calendar
          </Link> */}
         
        </div>
        <div className="mt-auto space-y-1">
          <div className="text-gray-500 uppercase text-xs">Others</div>
          <Link to="/Insights" className="flex items-center p-2 text-gray-200 hover:bg-dbhover rounded" aria-label="Chart">
            <FaChartBar className="mr-3" />
            Insights
          </Link>
        </div>
      </div>
      <div className="p-4">
        <Link to="/back" className="flex items-center p-2 text-gray-200 hover:bg-dbhover rounded" aria-label="Back">
          <FaArrowLeft className="mr-3" />
          Back
        </Link>
      </div>
=======
import React from "react";
import { AiOutlineAppstoreAdd } from "react-icons/ai";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { FiSettings } from "react-icons/fi";
import { BsPeople } from "react-icons/bs";
import { FaEnvelope } from "react-icons/fa";
import { IoMdPerson } from "react-icons/io";
import { Link } from "react-router-dom";
const Sidebar = () => {
 
  return (
    <div className="fixed bg-greent w-10 h-80 flex flex-col rounded-r-full justify-between items-center top-40 bottom-30 overflow-auto">
      <ul className="mt-8">
        <li className="mb-4">
          <Link className="nav-link" to="/dashboard" >
            <AiOutlineAppstoreAdd className="h-8 w-8 text-gray-400 hover:text-ngreen" />
          </Link>
        </li>
        <li className="mb-4 ml-1">
          <Link className="nav-link" to="/inbox">
            <FaEnvelope className="h-7 w-6 text-gray-400 hover:text-ngreen" />
          </Link>
        </li>
        <li className="mb-4 mr-1">
          <Link className="nav-link" to="/create" >
            <AiOutlinePlusCircle className="h-8 w-8 text-gray-400 hover:text-ngreen" />
          </Link>
        </li>
        <li className="mb-4 ml-0.5">
          <Link className="nav-link" to="/team" >
            <BsPeople className="h-7 w-7 text-gray-400 hover:text-ngreen" />
          </Link>
        </li>
        <li className="mb-4">
          <Link className="nav-link" to="/setting" >
            <FiSettings className="h-7 w-8 text-gray-400 hover:text-ngreen" />
          </Link>
        </li>
        <li className="mb-4">
          <Link className="nav-link" to="/profile" >
            <IoMdPerson className="h-8 w-8 text-gray-400 hover:text-ngreen" />
          </Link>
        </li>
      </ul>
>>>>>>> b3291e92832e236fa7cdce97e49d448b2bcf4342
    </div>
  );
};

export default Sidebar;
<<<<<<< HEAD

=======
>>>>>>> b3291e92832e236fa7cdce97e49d448b2bcf4342
