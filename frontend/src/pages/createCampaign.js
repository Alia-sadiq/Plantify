
// // import React, { useState } from 'react';
// // import axios from 'axios';

// // const addCampaign = async (formData) => {
// //   try {
// //     const response = await axios.post('http://localhost:5000/api/campaigns', formData);
// //     return response.data;
// //   } catch (error) {
// //     throw new Error(error.message);
// //   }
// // };

// // const CreateCampaignForm = () => {
// //   const [currentStep, setCurrentStep] = useState(1);
// //   const [formData, setFormData] = useState({
// //     campaignName: '',
// //     date: '',
// //     image: '',
// //     donationTarget: '',
// //     location: '',
// //     city: '',
// //     province: '',
// //     country: '',
// //     teams: '',
// //     volunteers: false,
// //   });

// //   const handleInputChange = (e) => {
// //     const { name, value, type, checked } = e.target;
// //     setFormData((prevData) => ({
// //       ...prevData,
// //       [name]: type === 'checkbox' ? checked : value,
// //     }));
// //   };

// //   const handleNextStep = () => {
// //     setCurrentStep((prevStep) => prevStep + 1);
// //   };

// //   const handlePrevStep = () => {
// //     setCurrentStep((prevStep) => prevStep - 1);
// //   };

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     try {
// //       const createdCampaign = await addCampaign(formData);
// //       console.log('Campaign created:', createdCampaign);
// //     } catch (error) {
// //       console.error('Error creating campaign:', error.message);
// //     }
// //   };

// //   return (
// //     <div className="flex flex-col items-center justify-center min-h-screen bg-gg">
// //       <h2 className="text-2xl font-bold mb-4">Create Campaign</h2>
// //       <div className="w-[700px] h-[400px] items-center ml-30 p-6 bg-white rounded-lg shadow-lg">
// //         <div className="flex justify-between mb-4">
// //           <div className="flex items-center">
// //             <div className={`w-8 h-8 flex items-center justify-center rounded-full border-2 ${currentStep >= 1 ? 'bg-green-500 border-green-500' : 'border-gray-300'}`}>
// //               {currentStep >= 1 ? '1' : ''}
// //             </div>
// //             <p className="ml-2">Step 1</p>
// //           </div>
// //           <div className="flex items-center">
// //             <div className={`w-8 h-8 flex items-center justify-center rounded-full border-2 ${currentStep >= 2 ? 'bg-green-500 border-green-500' : 'border-gray-300'}`}>
// //               {currentStep >= 2 ? '2' : ''}
// //             </div>
// //             <p className="ml-2">Step 2</p>
// //           </div>
// //           <div className="flex items-center">
// //             <div className={`w-8 h-8 flex items-center justify-center rounded-full border-2 ${currentStep === 3 ? 'bg-green-500 border-green-500' : 'border-gray-300'}`}>
// //               {currentStep === 3 ? '3' : ''}
// //             </div>
// //             <p className="ml-2">Step 3</p>
// //           </div>
// //         </div>
// //         <form onSubmit={handleSubmit}>
// //           {currentStep === 1 && (
// //             <div className='flex flex-col '>
// //               <p className="text-gray-500 mt-8 mb-2">Please enter campaign name</p>
// //               <input type="text" name="campaignName" value={formData.campaignName} onChange={handleInputChange} placeholder="Campaign Name" className="mb-4 items-center bg-gray-200 rounded-lg px-4 py-2 w-full" />
// //               <p className="text-gray-500 mb-2">Choose Image</p>
// //               <input type="file" name="image" onChange={handleInputChange} className="mb-20 items-center bg-gray-200 rounded-lg px-4 py-2 w-full" />
// //             </div>
// //           )}
// //           {currentStep === 2 && (
// //             <div className="flex flex-col ">
// //               <p className="text-gray-500 mt-8 mb-2">Select Date</p>
// //               <input type="date" name="date" value={formData.date} onChange={handleInputChange} className="mb-4 items-center bg-gray-200 rounded-lg px-4 py-2 w-full" />
// //               <p className="text-gray-500 mb-2">Set Donation Target</p>
// //               <input type="number" name="donationTarget" value={formData.donationTarget} onChange={handleInputChange} placeholder="Donation Target" className="mb-20 items-center bg-gray-200 rounded-lg px-4 py-2 w-full" />
// //             </div>
// //           )}
          
// //             {currentStep === 3 && (
// //   <div className="flex flex-col">
// //     <p className="text-gray-500 mt-5 mb-2">Country</p>
// //     <input type="text" name="country" value={formData.country} onChange={handleInputChange} placeholder="Country" className="mb-4 bg-gray-200 rounded-lg px-4 py-2 items-center" />
// //     <p className="text-gray-500 mb-2">City</p>
// //     <input type="text" name="city" value={formData.city} onChange={handleInputChange} placeholder="City" className="mb-4 bg-gray-200 rounded-lg px-4 py-2 items-center" />
// //     <p className="text-gray-500 mb-2">Volunteers</p>
// //     <button
// //       type="button"
// //       className={`relative w-12 h-6 flex mb-5 items-center rounded-full p-1 ${formData.volunteers ? 'bg-blue-500' : 'bg-gray-300'}`}
// //       onClick={() => setFormData(prevData => ({ ...prevData, volunteers: !prevData.volunteers }))}>
// //       <span className={`absolute left-0 inline-block w-5 h-5 bg-white rounded-full transition-transform duration-300 ease-in-out transform ${formData.volunteers ? 'translate-x-full' : 'translate-x-0'}`}></span>
// //     </button>
// //   </div>
// //           )}
// //           <div className="flex justify-between">
// //             {currentStep > 1 && (
// //               <button onClick={handlePrevStep} type="button" className="py-2 px-4 bg-gray-300 text-gray-700 rounded-lg">
// //                 Back
// //               </button>
// //             )}
// //             {currentStep < 3 ? (
// //               <button onClick={handleNextStep} type="button" className="py-2 px-4 bg-green-500 text-white rounded-lg">
// //                 Next
// //               </button>
// //             ) : (
// //               <button type="submit" className="py-2 px-4 bg-blue-500 text-white rounded-lg">
// //                 Create
// //               </button>
// //             )}
// //           </div>
// //         </form>
// //       </div>
// //     </div>
// //   );
// // };

// // export default CreateCampaignForm;
// // import React, { useState } from 'react';
// // import axios from 'axios';

// // const addCampaign = async (formData) => {
// //   try {
// //     const response = await axios.post('http://localhost:5000/api/campaigns', formData);
// //     return response.data;
// //   } catch (error) {
// //     throw new Error(error.message);
// //   }
// // };

// // const CreateCampaignForm = () => {
// //   const [currentStep, setCurrentStep] = useState(1);
// //   const [formData, setFormData] = useState({
// //     campaignName: '',
// //     date: '',
// //     image: '',
// //     donationTarget: '',
// //     location: '',
// //     city: '',
// //     province: '',
// //     country: '',
// //     teams: '',
// //     volunteers: false,
// //   });

// //   const handleInputChange = (e) => {
// //     const { name, value, type, checked } = e.target;
// //     setFormData((prevData) => ({
// //       ...prevData,
// //       [name]: type === 'checkbox' ? checked : value,
// //     }));
// //   };

// //   const handleNextStep = () => {
// //     setCurrentStep((prevStep) => prevStep + 1);
// //   };

// //   const handlePrevStep = () => {
// //     setCurrentStep((prevStep) => prevStep - 1);
// //   };

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     try {
// //       const createdCampaign = await addCampaign(formData);
// //       console.log('Campaign created:', createdCampaign);
// //     } catch (error) {
// //       console.error('Error creating campaign:', error.message);
// //     }
// //   };

// //   return (
// //     <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
// //       <h2 className="text-2xl font-bold mb-4">Create Campaign</h2>
// //       <div className="w-[700px] p-6 bg-white rounded-lg shadow-lg">
// //         <div className="flex justify-between mb-4">
// //           {[1, 2, 3].map(step => (
// //             <div key={step} className="flex items-center">
// //               <div className={`w-8 h-8 flex items-center justify-center rounded-full border-2 ${currentStep >= step ? 'bg-green-500 border-green-500' : 'border-gray-300'}`}>
// //                 {currentStep >= step ? step : ''}
// //               </div>
// //               <p className="ml-2">Step {step}</p>
// //             </div>
// //           ))}
// //         </div>
// //         <form onSubmit={handleSubmit}>
// //           {currentStep === 1 && (
// //             <div className='flex flex-col'>
// //               <p className="text-gray-500 mt-8 mb-2">Please enter campaign name</p>
// //               <input type="text" name="campaignName" value={formData.campaignName} onChange={handleInputChange} placeholder="Campaign Name" className="mb-4 bg-gray-200 rounded-lg px-4 py-2" />
// //               <p className="text-gray-500 mb-2">Choose Image</p>
// //               <input type="file" name="image" onChange={handleInputChange} className="mb-20 bg-gray-200 rounded-lg px-4 py-2" />
// //             </div>
// //           )}
// //           {currentStep === 2 && (
// //             <div className="flex flex-col">
// //               <p className="text-gray-500 mt-8 mb-2">Select Date</p>
// //               <input type="date" name="date" value={formData.date} onChange={handleInputChange} className="mb-4 bg-gray-200 rounded-lg px-4 py-2" />
// //               <p className="text-gray-500 mb-2">Set Donation Target</p>
// //               <input type="number" name="donationTarget" value={formData.donationTarget} onChange={handleInputChange} placeholder="Donation Target" className="mb-20 bg-gray-200 rounded-lg px-4 py-2" />
// //             </div>
// //           )}
// //           {currentStep === 3 && (
// //             <div className="flex flex-col">
// //               <p className="text-gray-500 mt-8 mb-2">Country</p>
// //               <input type="text" name="country" value={formData.country} onChange={handleInputChange} placeholder="Country" className="mb-4 bg-gray-200 rounded-lg px-4 py-2" />
// //               <p className="text-gray-500 mb-2">City</p>
// //               <input type="text" name="city" value={formData.city} onChange={handleInputChange} placeholder="City" className="mb-4 bg-gray-200 rounded-lg px-4 py-2" />
// //               <p className="text-gray-500 mb-2">Volunteers</p>
// //               <button
// //                 type="button"
// //                 className={`relative w-12 h-6 flex mb-5 items-center rounded-full p-1 ${formData.volunteers ? 'bg-blue-500' : 'bg-gray-300'}`}
// //                 onClick={() => setFormData(prevData => ({ ...prevData, volunteers: !prevData.volunteers }))}>
// //                 <span className={`absolute left-0 inline-block w-5 h-5 bg-white rounded-full transition-transform duration-300 ease-in-out transform ${formData.volunteers ? 'translate-x-full' : 'translate-x-0'}`}></span>
// //               </button>
// //             </div>
// //           )}
// //           <div className="flex justify-between">
// //             {currentStep > 1 && (
// //               <button onClick={handlePrevStep} type="button" className="py-2 px-4 bg-gray-300 text-gray-700 rounded-lg">
// //                 Back
// //               </button>
// //             )}
// //             {currentStep < 3 ? (
// //               <button onClick={handleNextStep} type="button" className="py-2 px-4 bg-green-500 text-white rounded-lg">
// //                 Next
// //               </button>
// //             ) : (
// //               <button type="submit" className="py-2 px-4 bg-blue-500 text-white rounded-lg">
// //                 Create
// //               </button>
// //             )}
// //           </div>
// //         </form>
// //       </div>
// //     </div>
// //   );
// // };

// // export default CreateCampaignForm;
// // import React, { useState,useEffect } from 'react';
// // import axios from 'axios';

// // const addCampaign = async (formData) => {
// //   try {
// //     const response = await axios.post('http://localhost:5000/api/campaigns', formData);
// //     return response.data;
// //   } catch (error) {
// //     throw new Error(error.message);
// //   }
// // };

// // const CreateCampaignForm = () => {
// //   const [currentStep, setCurrentStep] = useState(1);
// //   const [formData, setFormData] = useState({
// //     campaignName: '',
// //     date: '',
// //     image: '',
// //     targetAmount: '',
// //     location: '',
// //     city: '',
// //     province: '',
// //     country: '',
// //     teams: '',
// //     volunteers: false,
// //     about: '',
// //     startDate: '',
// //     endDate: '',
// //   });

// //   const handleInputChange = (e) => {
// //     const { name, value, type, checked } = e.target;
// //     setFormData((prevData) => ({
// //       ...prevData,
// //       [name]: type === 'checkbox' ? checked : value,
// //     }));
// //   };

// //   const handleNextStep = () => {
// //     setCurrentStep((prevStep) => prevStep + 1);
// //   };

// //   const handlePrevStep = () => {
// //     setCurrentStep((prevStep) => prevStep - 1);
// //   };

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     try {
// //       const createdCampaign = await addCampaign(formData);
// //       console.log('Campaign created:', createdCampaign);
// //     } catch (error) {
// //       console.error('Error creating campaign:', error.message);
// //     }
// //   };
// //   const handleCityChange = async (e) => {
// //     const city = e.target.value;
// //     setFormData((prevData) => ({
// //       ...prevData,
// //       city,
// //     }));
// //   };
// //   useEffect(() => {
// //     const fetchCities = async () => {
// //       try {
// //         const response = await axios.get(`http://api.geonames.org/searchJSON?country=PK&username=aliasadiq`);
// //         const cities = response.data.results.map((result) => result.components.city);
// //         setFormData((prevData) => ({
// //           ...prevData,
// //           cities,
// //         }));
// //       } catch (error) {
// //         console.error('Error fetching cities:', error.message);
// //       }
// //     };

// //     fetchCities();
// //   }, []);
// //   return (
// //     <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
// //       <h2 className="text-2xl font-bold mb-4">Create Campaign</h2>
// //       <div className="w-[700px] p-6 bg-white rounded-lg shadow-lg">
// //         <div className="flex justify-between mb-4">
// //           {[1, 2, 3].map(step => (
// //             <div key={step} className="flex items-center">
// //               <div className={`w-8 h-8 flex items-center justify-center rounded-full border-2 ${currentStep >= step ? 'bg-green-500 border-green-500' : 'border-gray-300'}`}>
// //                 {currentStep >= step ? step : ''}
// //               </div>
// //               <p className="ml-2">Step {step}</p>
// //             </div>
// //           ))}
// //         </div>
// //         <form onSubmit={handleSubmit}>
// //           {currentStep === 1 && (
// //             <div className='flex flex-col'>
// //               <p className="text-gray-500 mt-8 mb-2">Campaign name</p>
// //               <input type="text" name="campaignName" value={formData.campaignName} onChange={handleInputChange} placeholder="Campaign Name" className="mb-4 bg-gray-200 rounded-lg px-4 py-2" />
// //               <p className="text-gray-500 mb-2">Choose Image</p>
// //               <input type="file" name="image" onChange={handleInputChange} className="mb-20 bg-gray-200 rounded-lg px-4 py-2" />
// //               <p className="text-gray-500 mb-2">About Campaign</p>
// //               <textarea name="about" value={formData.about} onChange={handleInputChange} placeholder="About the Campaign" className="mb-4 bg-gray-200 rounded-lg px-4 py-2" />
// //             </div>
// //           )}
// //           {currentStep === 2 && (
// //             <div className="flex flex-col">
// //                  <p className="text-gray-500 mt-8 mb-2">Start Date</p>
// //               <input type="date" name="startDate" value={formData.startDate} onChange={handleInputChange} className="mb-4 bg-gray-200 rounded-lg px-4 py-2" />
// //               <p className="text-gray-500 mb-2">End Date</p>
// //               <input type="date" name="endDate" value={formData.endDate} onChange={handleInputChange} className="mb-4 bg-gray-200 rounded-lg px-4 py-2" />
// //               <p className="text-gray-500 mb-2">Target Amount</p>
// //               <input type="number" name="targetAmount" value={formData.targetAmount} onChange={handleInputChange} placeholder="Target Amount" className="mb-20 bg-gray-200 rounded-lg px-4 py-2" />
// //               {/* <p className="text-gray-500 mt-8 mb-2">Select Date</p>
// //               <input type="date" name="date" value={formData.date} onChange={handleInputChange} className="mb-4 bg-gray-200 rounded-lg px-4 py-2" /> */}
// //               {/* <p className="text-gray-500 mb-2">About the Campaign</p>
// //               <textarea name="about" value={formData.about} onChange={handleInputChange} placeholder="About the Campaign" className="mb-4 bg-gray-200 rounded-lg px-4 py-2" /> */}
           
// //             </div>
// //           )}
// //           {currentStep === 3 && (
// //             <div className="flex flex-col">
// //            <p className="text-gray-500 mt-8 mb-2">City</p>
// //            <select name="city" value={formData.city} onChange={handleCityChange} className="mb-4 bg-gray-200 rounded-lg px-4 py-2">
// //   <option value="">Select City</option>
// //   {formData.cities && formData.cities.map((city, index) => (
// //     <option key={index} value={city}>
// //       {city}
// //     </option>
// //   ))}
// // </select>

// //               <p className="text-gray-500 mt-8 mb-2">Location</p>
// //               <input type="text" name="campaignName" value={formData.campaignName} onChange={handleInputChange} placeholder="Campaign Name" className="mb-4 bg-gray-200 rounded-lg px-4 py-2" />
// //               <p className="text-gray-500 mb-2">Volunteers</p>
// //               <button
// //                 type="button"
// //                 className={`relative w-12 h-6 flex mb-5 items-center rounded-full p-1 ${formData.volunteers ? 'bg-blue-500' : 'bg-gray-300'}`}
// //                 onClick={() => setFormData(prevData => ({ ...prevData, volunteers: !prevData.volunteers }))}>
// //                 <span className={`absolute left-0 inline-block w-5 h-5 bg-white rounded-full transition-transform duration-300 ease-in-out transform ${formData.volunteers ? 'translate-x-full' : 'translate-x-0'}`}></span>
// //               </button>
// //             </div>
// //           )}
// //           <div className="flex justify-between">
// //             {currentStep > 1 && (
// //               <button onClick={handlePrevStep} type="button" className="py-2 px-4 bg-gray-300 text-gray-700 rounded-lg">
// //                 Back
// //               </button>
// //             )}
// //             {currentStep < 3 ? (
// //               <button onClick={handleNextStep} type="button" className="py-2 px-4 bg-green-500 text-white rounded-lg">
// //                 Next
// //               </button>
// //             ) : (
// //               <button type="submit" className="py-2 px-4 bg-blue-500 text-white rounded-lg">
// //                 Create
// //               </button>
// //             )}
// //           </div>
// //         </form>
// //       </div>
// //     </div>
// //   );
// // };

// // export default CreateCampaignForm;
// // import React, { useState } from 'react';
// // import axios from 'axios';

// // const addCampaign = async (formData) => {
// //   try {
// //     let response = await axios.post('http://localhost:5000/api/campaigns', formData, {
// //       headers: {
// //         'Content-Type': 'multipart/form-data',
// //       },
// //     });
// //     return response.data;
// //   } catch (error) {
// //     console.error('API call error:', error);
// //     throw new Error(error.message);
// //   }
// // };

// // const CreateCampaignForm = () => {
// //   const [currentStep, setCurrentStep] = useState(1);
// //   const [formData, setFormData] = useState({
// //     campaignName: '',
// //     image: null,
// //     targetAmount: '',
// //     location: '',
// //     city: '',
// //     volunteers: false,
// //     about: '',
// //     startDate: '',
// //     endDate: '',
// //     numberOfVolunteers: '',
// //   });

// //   const handleInputChange = (e) => {
// //     const { name, value, type, checked, files } = e.target;
// //     setFormData((prevData) => ({
// //       ...prevData,
// //       [name]: type === 'checkbox' ? checked : type === 'file' ? files[0] : value,
// //     }));
// //   };

// //   const handleNextStep = () => {
// //     setCurrentStep((prevStep) => prevStep + 1);
// //   };

// //   const handlePrevStep = () => {
// //     setCurrentStep((prevStep) => prevStep - 1);
// //   };

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     const formDataToSend = new FormData();
// //     for (const key in formData) {
// //       formDataToSend.append(key, formData[key]);
// //     }
// //     console.log('Form Data to send:', formDataToSend);
// //     try {
// //       const createdCampaign = await addCampaign(formDataToSend);
// //       console.log('Campaign created:', createdCampaign);
// //       // Handle successful creation (e.g., redirect to another page or show a success message)
// //     } catch (error) {
// //       console.error('Error creating campaign:', error.message);
// //       // Handle error (e.g., show an error message)
// //     }
// //   };

// //   return (
// //     <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
// //       <h2 className="text-2xl font-bold mb-4">Create Campaign</h2>
// //       <div className="w-[700px] p-6 bg-white rounded-lg shadow-lg">
// //         <div className="flex justify-between mb-4">
// //           {[1, 2, 3].map(step => (
// //             <div key={step} className="flex items-center">
// //               <div className={`w-8 h-8 flex items-center justify-center rounded-full border-2 ${currentStep >= step ? 'bg-green-500 border-green-500' : 'border-gray-300'}`}>
// //                 {currentStep >= step ? step : ''}
// //               </div>
// //               <p className="ml-2">Step {step}</p>
// //             </div>
// //           ))}
// //         </div>
// //         <form onSubmit={handleSubmit}>
// //           {currentStep === 1 && (
// //             <div className="flex flex-col">
// //               <p className="text-gray-500 mt-8 mb-2">Campaign name</p>
// //               <input type="text" name="campaignName" value={formData.campaignName} onChange={handleInputChange} placeholder="Campaign Name" className="mb-4 bg-gray-200 rounded-lg px-4 py-2" />
// //               <p className="text-gray-500 mb-2">Choose Image</p>
// //               <input type="file" name="image" onChange={handleInputChange} className="mb-20 bg-gray-200 rounded-lg px-4 py-2" />
// //               <p className="text-gray-500 mb-2">About Campaign</p>
// //               <textarea name="about" value={formData.about} onChange={handleInputChange} placeholder="About the Campaign" className="mb-4 bg-gray-200 rounded-lg px-4 py-2" />
// //             </div>
// //           )}
// //           {currentStep === 2 && (
// //             <div className="flex flex-col">
// //               <p className="text-gray-500 mt-8 mb-2">Start Date</p>
// //               <input type="date" name="startDate" value={formData.startDate} onChange={handleInputChange} className="mb-4 bg-gray-200 rounded-lg px-4 py-2" />
// //               <p className="text-gray-500 mb-2">End Date</p>
// //               <input type="date" name="endDate" value={formData.endDate} onChange={handleInputChange} className="mb-4 bg-gray-200 rounded-lg px-4 py-2" />
// //               <p className="text-gray-500 mb-2">Target Amount</p>
// //               <input type="number" name="targetAmount" value={formData.targetAmount} onChange={handleInputChange} placeholder="Target Amount" className="mb-20 bg-gray-200 rounded-lg px-4 py-2" />
// //             </div>
// //           )}
// //           {currentStep === 3 && (
// //             <div className="flex flex-col">
// //               <p className="text-gray-500 mt-8 mb-2">City</p>
// //               <select name="city" value={formData.city} onChange={handleInputChange} className="mb-4 bg-gray-200 rounded-lg px-4 py-2">
// //                 <option value="">Select City</option>
// //                 <option value="Karachi">Karachi</option>
// //                 <option value="Lahore">Lahore</option>
// //                 <option value="Islamabad">Islamabad</option>
// //                 <option value="Quetta">Quetta</option>
// //                 <option value="Peshawar">Peshawar</option>
// //               </select>
// //               <p className="text-gray-500 mt-8 mb-2">Location</p>
// //               <input type="text" name="location" value={formData.location} onChange={handleInputChange} placeholder="Location" className="mb-4 bg-gray-200 rounded-lg px-4 py-2" />
// //               <p className="text-gray-500 mb-2">Volunteers</p>
// //               <button
// //                 type="button"
// //                 className={`relative w-12 h-6 flex mb-5 items-center rounded-full p-1 ${formData.volunteers ? 'bg-blue-500' : 'bg-gray-300'}`}
// //                 onClick={() => setFormData(prevData => ({ ...prevData, volunteers: !prevData.volunteers }))}>
// //                 <span className={`absolute left-0 inline-block w-5 h-5 bg-white rounded-full transition-transform duration-300 ease-in-out transform ${formData.volunteers ? 'translate-x-full' : 'translate-x-0'}`}></span>
// //               </button>
// //               {formData.volunteers && (
// //                 <div className="flex flex-col">
// //                   <p className="text-gray-500 mb-2">Number of Volunteers</p>
// //                   <input
// //                     type="number"
// //                     name="numberOfVolunteers"
// //                     value={formData.numberOfVolunteers}
// //                     onChange={handleInputChange}
// //                     placeholder="Number of Volunteers"
// //                     className="mb-4 bg-gray-200 rounded-lg px-4 py-2"
// //                   />
// //                 </div>
// //               )}
// //             </div>
// //           )}
// //           <div className="flex justify-between">
// //             {currentStep > 1 && (
// //               <button onClick={handlePrevStep} type="button" className="py-2 px-4 bg-gray-300 text-gray-700 rounded-lg">
// //                 Back
// //               </button>
// //             )}
// //             {currentStep < 3 ? (
// //               <button onClick={handleNextStep} type="button" className="py-2 px-4 bg-green-500 text-white rounded-lg">
// //                 Next
// //               </button>
// //             ) : (
// //               <button type="submit" onClick={handleSubmit}value ="Submit"className="py-2 px-4 bg-blue-500 text-white rounded-lg">
// //                 Create
// //               </button>
// //             )}
// //           </div>
// //         </form>
// //       </div>
// //     </div>
// //   );
// // };

// // export default CreateCampaignForm;
// import React from 'react';
// import MultiStepForm from '../Forms/Multi-step-form';

// const CreateCampaignForm = () => {
//   return (
//     <div className="flex h-full">
//       <div className="font-josefin-sans text-gray-100">
//         <h1 className="text-2xl font-bold pt-10 pl-14">Dashboard</h1>
//         <div className="flex">
//           <div className="perspective flex-1">
//             <div className="box-border h-56 top-5 bg-white rounded-md shadow-lg ml-20 relative">
//               <div className="absolute top-0 left-10 text-lg font-bold">Campaign Graph</div>
//               <MultiStepForm />
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CreateCampaignForm;

import React, { useState, useEffect } from "react";
import Button from "../components/button";
import axios from "axios";

const  CreateCampaignForm= () => {
    const [imageFileName, setImageFileName] = useState('');
    const [bannerFileName, setBannerFileName] = useState('');
    const [faceImageFileName, setFaceImageFileName] = useState('');
    const [user, setUser] = useState(null);
    const [step, setStep] = useState(1);
    const [volunteerToggle, setVolunteerToggle] = useState(false);

    useEffect(() => {
        // Retrieve user information from local storage
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            const parsedUser = JSON.parse(storedUser);
            setUser(parsedUser);
        }
    }, []);
    
    const [formDataStep1, setFormDataStep1] = useState({
        user: '',
        title: '',
        description: '',
        image: '',
        banner: '',
        startDate: '',
        endDate: '',
        targetDonation: '',
        volunteer: 0,
        location: ''
    });

    useEffect(() => {
        if (user) {
            // Update formDataStep1 with user._id when user state is set
            setFormDataStep1(prevState => ({
                ...prevState,
                user: user._id
            }));
        }
    }, [user]); 

    const [formDataStep2, setFormDataStep2] = useState({
        cnic: '',
        faceImage: '',
        contact: '',
        address: '',
        status: '',
    });

    const handleFileInputChange = (event, setFileState, setFormData, fieldName) => {
        const file = event.target.files[0];
        if (file) {
            setFileState(file.name);
            setFormData(prevState => ({
                ...prevState,
                [fieldName]: file.name
            }));
        }
    };

    const handleInputChange = (e, setFormData) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleStep1Submit = (e) => {
        e.preventDefault();
        setStep(2);
        console.log('user' + formDataStep1.user);
        console.log('image: ' + formDataStep1.image);
        console.log('banner: ' + formDataStep1.banner);
        console.log('title: ' + formDataStep1.title);
        console.log('description: ' + formDataStep1.description);
        console.log('startDate: ' + formDataStep1.startDate);
        console.log('endDate: ' + formDataStep1.endDate);
        console.log('targetDonation: ' + formDataStep1.targetDonation);
        console.log('volunteer: ' + formDataStep1.volunteer);
        console.log('location: ' + formDataStep1.location);
    };

    const handleBackButton = (e) => {
        e.preventDefault();
        setStep(1);
    };

    const handleStep2Submit = async (e) => {
        e.preventDefault();
        console.log('faceimage: ' + formDataStep2.faceImage);
        console.log('cnic: ' + formDataStep2.cnic);
        console.log('contact: ' + formDataStep2.contact);
        console.log('address: ' + formDataStep2.address);
        console.log('status: ' + formDataStep2.status);
        try {
            const formData = {
                ...formDataStep1,
                ...formDataStep2,
            };
            console.log('full: ' + formData.user);
            console.log('full: ' + user.isSocial);
            console.log('full: ' + formData.user);
            console.log('full: ' + formData.image);
            console.log('full: ' + formData.banner);
            console.log('full: ' + formData.contact);
            console.log('full: ' + formData.faceImage);

            const response = await axios.post("http://localhost:5000/api/socialgroup", formData);
            console.log("Data submitted:", response.data);
            // Redirect or show success message
        } catch (error) {
            console.error("Error submitting data:", error);
            // Handle error
        }
    };

    const renderStep1Form = () => {
        return (
            <form onSubmit={handleStep1Submit}>
                <h1 className="font-josefin-sans text-2xl text-black font-bold mb-6">Create a Campaign</h1>
                {/* <label htmlFor="image" className="block font-mini font-josefin-sans mb-1">Logo</label>
                <div className="flex items-center bg-neutral mb-4 py-2 px-3 rounded-2xl">
                    <input 
                        id="image" 
                        className="bg-inherit pl-2 w-full outline-none border-none" 
                        type="file" 
                        name="image" 
                        accept="image/*"
                        required
                        onChange={(e) => handleFileInputChange(e, setImageFileName, setFormDataStep1, 'image')}
                    />
                </div> */}
                <label htmlFor="banner" className="block font-mini font-josefin-sans mb-1">Banner</label>
                <div className="flex items-center bg-neutral mb-4 py-2 px-3 rounded-2xl">
                    <input 
                        id="banner" 
                        className="bg-inherit pl-2 w-full outline-none border-none" 
                        type="file" 
                        name="banner" 
                        accept="image/*"
                        required
                        onChange={(e) => handleFileInputChange(e, setBannerFileName, setFormDataStep1, 'banner')}
                    />
                </div>
                <label htmlFor="title" className="block font-mini font-josefin-sans mb-1">Title</label>
                <div className="flex items-center bg-neutral mb-4 py-2 px-3 rounded-2xl">
                    <input 
                        id="title" 
                        className="bg-inherit pl-2 w-full outline-none border-none" 
                        type="text" 
                        name="title" 
                        placeholder="Enter your group's title" 
                        required
                        value={formDataStep1.title}
                        onChange={(e) => handleInputChange(e, setFormDataStep1)}
                    />
                </div>
                <label htmlFor="description" className="block font-mini font-josefin-sans mb-1">Description</label>
                <div className="flex items-center bg-neutral mb-4 py-2 px-3 rounded-2xl">
                    <textarea 
                        id="description" 
                        className="bg-inherit pl-2 w-full outline-none border-none" 
                        name="description" 
                        placeholder="Enter detail about your social group" 
                        maxLength="250"
                        required
                        value={formDataStep1.description}
                        onChange={(e) => handleInputChange(e, setFormDataStep1)}
                    />
                </div>
                <label htmlFor="startDate" className="block font-mini font-josefin-sans mb-1">Start Date</label>
                <div className="flex items-center bg-neutral mb-4 py-2 px-3 rounded-2xl">
                    <input 
                        id="startDate" 
                        className="bg-inherit pl-2 w-full outline-none border-none" 
                        type="date" 
                        name="startDate" 
                        required
                        value={formDataStep1.startDate}
                        onChange={(e) => handleInputChange(e, setFormDataStep1)}
                    />
                </div>
                <label htmlFor="endDate" className="block font-mini font-josefin-sans mb-1">End Date</label>
                <div className="flex items-center bg-neutral mb-4 py-2 px-3 rounded-2xl">
                    <input 
                        id="endDate" 
                        className="bg-inherit pl-2 w-full outline-none border-none" 
                        type="date" 
                        name="endDate" 
                        required
                        value={formDataStep1.endDate}
                        onChange={(e) => {
                            if (new Date(e.target.value) < new Date(formDataStep1.endDate)) {
                                alert("End Date cannot be before Start Date");
                            } else {
                                handleInputChange(e, setFormDataStep1);
                            }
                        }}
                    />
                </div>
                
                <div className="mt-4">
                    <button type="submit" className="font-josefin-sans bg-gray-100 text-white text-sm font-semibold px-4 py-2 rounded hover:rounded-full border-2 border-gray-100">Next</button>
                </div>
            </form>
        );
    };

    const renderStep2Form = () => {
        return (
            <form onSubmit={handleStep2Submit}>
                <h1 className="font-josefin-sans text-2xl text-gray-100 font-bold mb-6">Get yourself Verified</h1>
                <label htmlFor="targetDonation" className="block font-mini font-josefin-sans mb-1">Target Donation</label>
                <div className="flex items-center bg-neutral mb-4 py-2 px-3 rounded-2xl">
                    <input 
                        id="targetDonation" 
                        className="bg-inherit pl-2 w-full outline-none border-none" 
                        type="number" 
                        name="targetDonation" 
                        placeholder="Enter your target donation amount" 
                        required
                        max={99999}
                        min={10}
                        value={formDataStep1.targetDonation}
                        onChange={(e) => handleInputChange(e, setFormDataStep1)}
                    />
                </div>
                <label htmlFor="volunteer" className="block font-mini font-josefin-sans mb-1">Volunteers</label>
                <div className="flex items-center bg-neutral mb-4 py-2 px-3 rounded-2xl">
                    <input 
                        id="volunteerToggle" 
                        type="checkbox" 
                        className="mr-2"
                        checked={volunteerToggle}
                        onChange={(e) => setVolunteerToggle(e.target.checked)}
                    />
                    <label htmlFor="volunteerToggle" className="font-mini font-josefin-sans">Enable Volunteers</label>
                </div>
                {volunteerToggle && (
                    <div className="flex items-center bg-neutral mb-4 py-2 px-3 rounded-2xl">
                        <input 
                            id="volunteer" 
                            className="bg-inherit pl-2 w-full outline-none border-none" 
                            type="number" 
                            name="volunteer" 
                            placeholder="Enter number of volunteers" 
                            required
                            max={20}
                            min={0}
                            value={formDataStep1.volunteer}
                            onChange={(e) => handleInputChange(e, setFormDataStep1)}
                        />
                    </div>
                )}
                <div className="mb-4">
                    <label htmlFor="location" className="block font-mini font-josefin-sans mb-1">Location</label>
                    <select 
                        id="location" 
                        name="location" 
                        className="bg-neutral font-josefin-sans block w-full text-mini shadow-sm sm:text-sm rounded-2xl py-4 px-4"
                        value={formDataStep1.location}
                        onChange={(e) => handleInputChange(e, setFormDataStep1)}
                    >
                        <option value="" disabled>Select The City</option>
                        <option value="Islamabad">Islamabad</option>
                    </select>
                </div>
                <div className="flex gap-4 mt-4">
                    <Button onClick={handleBackButton} text='Back'/>
                    <button type="submit">Submit</button>
                </div>
            </form>
        );
    };

    return (
        <div className="flex items-center py-96 gap-[100px] justify-center pt-2 pb-20">
            {step === 1 ? (
                <>
                    <div className="border  border-2 border-gray-100 bg-white px-5 pt-2 rounded-lg ml-[30px] w-[450px]">
                        {renderStep1Form()}
                    </div>
                    <img src={`${process.env.PUBLIC_URL}/assets/group.svg`} alt='leaves illustration' className="w-[600px] mt-8"/>
                </>
            ) : (
                <>
                    <img src={`${process.env.PUBLIC_URL}/assets/verify.svg`} alt='leaves illustration' className="self-center w-[450px]"/>
                    <div className="bg-white p-8 rounded-lg ml-[100px] w-[450px] mt-8">
                        {renderStep2Form()}
                    </div>
                </>
            )}
        </div>
    );
}

export default CreateCampaignForm;
