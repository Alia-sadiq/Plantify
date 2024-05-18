// import React from "react";
// import Calendar from "../components/Calendar.js";
// import FilterableCampaigns from "../components/Campaignfilters.js";
// import CampaignFilters from "../components/Campaignfilters.js"
// import Team from "../components/team.js";
// import { FaPlusCircle } from "react-icons/fa";
// import { Link } from "react-router-dom";
// const Campaigns = () => {
//   return (
//     <div className="flex h-full">
//     <div className="font-josefin-sans text-gary-100 ">
//       <h1 className="text-2xl font-bold pt-10 pl-14 ">Campaigns</h1>
//       <div>
//         <CampaignFilters/>
//       </div>
//       <div>
//       <Link to="/createCampaign" className="flex items-center p-2 text-gray-200 hover:bg-dbhover rounded" aria-label="Campaigns">
//             <FaPlusCircle className="mr-3" />
//             Create Campaign
//           </Link>
//       </div>
//       <div className="absolute bg-transparent text-black top-0 right-0  py-80">
//        <div className="fixed right-0.5 top-2 shadow-md rounded-l-full h-16 w-48 bg-gg"> 
//           <div className="absolute top-2 right-2 flex items-center">
//              <div className=" flex flex-col right-2">
//               <span className="text-sm font-medium">The Alia Sadiq</span>
//               <span className="text-xs text-gray-500 text-center">
//                 Rawalpindi
//               </span>
//             </div>
//             <img
//               className="w-12 h-10 rounded-full object-cover ml-2 mr-5 "
//               src="https://picsum.photos/id/237/100"
//               alt="Profile Picture"
//             />
//            </div> 
//         </div> 
//         {/* <div> */}
//         <div className="absolute right-3 h-48 top-20 flex items-center  ">
//           <Calendar />
//         </div>
//         <div>
//         <div className="absolute right-1 top-1 flex items-center ">
//         <Team/>
//         </div>
      
// </div> 

//  </div> 
//       </div>
//       </div>
//   );
// };

// export default Campaigns;
// Campaigns.js
import React from "react";
import FilterableCampaigns from "../components/Campaignfilters";
import CampaignList from "../components/CampaignList";
import Calendar from "../components/Calendar";
import Team from "../components/team.js";
import { FaPlusCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

const Campaigns = () => {
  const campaigns = []; // Assuming campaigns are fetched or passed as props

  return (
    <div className="flex h-full">
      <div className="font-josefin-sans text-gary-100 ">
        <h1 className="text-2xl font-bold pt-10 pl-14 ">Campaigns</h1>
        <div>
          <FilterableCampaigns />
        </div>
        <div>
          <Link
            to="/createCampaign"
            className="flex items-center p-2 text-gray-200 hover:bg-dbhover rounded"
            aria-label="Campaigns"
          >
            <FaPlusCircle className="mr-3" />
            Create Campaign
          </Link>
        </div>
        <div className="campaign-list">
          <CampaignList campaigns={campaigns} />
        </div>
        <div className="absolute right-3 h-48 top-20 flex items-center  ">
          <Calendar />
        </div>
        {/* <div> */}
        <div className="absolute right-1 top-1 flex items-center ">
        <Team/>
        </div>
      </div>
    </div>
  );
};

export default Campaigns;
