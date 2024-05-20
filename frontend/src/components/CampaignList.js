// // Assuming you're using React for your frontend application
// import React, { useState, useEffect } from 'react';

// const CampaignList = () => {
//   const [campaigns, setCampaigns] = useState([]);

//   useEffect(() => {
//     // Fetch data from your backend API
//     fetch('/api/campaigns')
//       .then(response => {
//         if (!response.ok) {
//           throw new Error('Network response was not ok');
//         }
//         return response.json();
//       })
//       .then(data => {
//         setCampaigns(data); // Set the fetched campaigns in state
//       })
//       .catch(error => {
//         console.error('There was a problem fetching the campaign data:', error);
//       });
//   }, []); // Empty dependency array means this effect runs only once, on component mount

//   return (
//     <div>
//       {/* Render your campaign data here */}
//       {campaigns.map(campaign => (
//         <div key={campaign._id}>
//           <h3>{campaign.name}</h3>
//           {/* Render other campaign details */}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default CampaignList;
// CampaignList.js

// CampaignList.js

import React from 'react';
import { FiEdit, FiTrash } from 'react-icons/fi';

const CampaignList = ({ campaigns, onEdit, onDelete }) => {
  return (
    <ul className="w-full">
      {campaigns.map(campaign => (
        <li key={campaign._id} className="bg-white rounded-lg shadow-md p-4 mb-4 flex">
          <div className="w-50 ">
            <img src={`assest/${campaign.image}`} alt={campaign.title} className="w-40 h-40 object-cover rounded-lg" />
          </div>
          <div className="w-1/2 flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-semibold mb-1">{campaign.title}</h3>
              <p className="text-gray-600 mb-1">Location: {campaign.location}</p>
              <p className="text-gray-600 mb-1">Date: {new Date(campaign.startDate).toLocaleDateString()}</p>
              <p className="text-gray-600 mb-2">Donations: {campaign.targetDonation}</p>
            </div>
            <div className="flex items-center mt-4">
              <button onClick={() => onEdit(campaign._id)} className="text-blue-500 mr-2"><FiEdit /></button>
              <button onClick={() => onDelete(campaign._id)} className="text-red-500"><FiTrash /></button>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default CampaignList;
