import React from "react";
import sidebar from "../components/sidebar"; 

const Dashboard = () => {
    
    return(
           <div className="bg-gg  h-screen flex h-full">
        <div className="font-josefin-sans text-gary-100 ">
         <h1 className="text-2xl font-bold py-10 px-40 ">Dashboard</h1>
         <div className="relative bg-white text-black rounded-full top-30 left-20 px-80 py-14 ">
  Welcome, User
</div>
 <div class="absolute bg-white text-black top-0 right-0 px-40 py-72">
 <div class="absolute top-4 right-4 flex items-center">

  <div class="flex flex-col">
    <span class="text-sm font-medium">Melissa Peters</span>
    <span class="text-xs text-gray-500 text-center">New York</span>
  </div>
  <img class="w-12 h-12 rounded-full object-cover ml-2" src="https://picsum.photos/id/237/100" alt="Profile Picture" />
</div>

 

</div> 
                
   </div>
   </div>
 
    );
};
export default Dashboard;