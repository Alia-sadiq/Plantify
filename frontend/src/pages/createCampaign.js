
// // import React, { useState, useEffect } from "react";
// // import axios from "axios";

// // const CreateCampaignForm = () => {
// //     const [imageFileName, setImageFileName] = useState('');
// //     const [bannerFileName, setBannerFileName] = useState('');
// //     const [faceImageFileName, setFaceImageFileName] = useState('');
// //     const [user, setUser] = useState(null);
// //     const [step, setStep] = useState(1);
// //     const [volunteerToggle, setVolunteerToggle] = useState(false);

// //     useEffect(() => {
// //         const storedUser = localStorage.getItem('user');
// //         if (storedUser) {
// //             const parsedUser = JSON.parse(storedUser);
// //             setUser(parsedUser);
// //         }
// //     }, []);

// //     const [formDataStep1, setFormDataStep1] = useState({
// //         user: '',
// //         title: '',
// //         description: '',
// //         banner: '',
// //         startDate: '',
// //         endDate: '',
// //     });

// //     useEffect(() => {
// //         if (user) {
// //             setFormDataStep1(prevState => ({
// //                 ...prevState,
// //                 user: user._id
// //             }));
// //         }
// //     }, [user]);

// //     const [formDataStep2, setFormDataStep2] = useState({
// //         targetDonation: '',
// //         volunteer: 0,
// //         location: ''
// //     });

// //     const handleFileInputChange = (event, setFileState, setFormData, fieldName) => {
// //         const file = event.target.files[0];
// //         if (file) {
// //             setFileState(file.name);
// //             setFormData(prevState => ({
// //                 ...prevState,
// //                 [fieldName]: file, // Set the file directly instead of its name
// //             }));
// //         }
// //     };

// //     const handleInputChange = (e, setFormData) => {
// //         const { name, value } = e.target;
// //         setFormData(prevState => ({
// //             ...prevState,
// //          [name]: name === 'endDate' ? new Date(value) : value, // Set end date as a Date object
// //         }));
// //     };

// //     const handleNumberInputChange = (e, setFormData) => {
// //         const { name, value } = e.target;
// //         const numberValue = parseInt(value, 10);
// //         if (!isNaN(numberValue)) {
// //             setFormData(prevState => ({
// //                 ...prevState,
// //                 [name]: numberValue
// //             }));
// //         }
// //     };
// //     const handleStep1Submit = (e) => {
// //         e.preventDefault();
// //         setStep(2);
// //         console.log('banner: ' + formDataStep1.banner);
// //         console.log('title: ' + formDataStep1.title);
// //         console.log('description: ' + formDataStep1.description);
// //         console.log('startDate: ' + formDataStep1.startDate);
// //         console.log('endDate: ' + formDataStep1.endDate);
// //     };

// //     const handleBackButton = (e) => {
// //         e.preventDefault();
// //         setStep(1);
// //     };

// //     const handleStep2Submit = async (e) => {
// //         e.preventDefault();
// //         console.log('targetDonation: ' + formDataStep2.targetDonation);
// //         console.log('volunteer: ' + formDataStep2.volunteer);
// //         console.log('location: ' + formDataStep2.location);
       
// //         try {
// //             const formData = new FormData();
// //             formData.append('user', formDataStep1.user);
// //             formData.append('title', formDataStep1.title);
// //             formData.append('description', formDataStep1.description);
// //             formData.append('banner', formDataStep1.banner);
// //             formData.append('startDate', formDataStep1.startDate);
// //             formData.append('endDate', formDataStep1.endDate);
// //             formData.append('targetDonation', formDataStep2.targetDonation);
// //             formData.append('volunteer', volunteerToggle ? formDataStep2.volunteer : 0);
// //             formData.append('location', formDataStep2.location);

// //             const response = await axios.post("http://localhost:5000/api/campaigns", formData);
// //             console.log("Data submitted:", response.data);
// //             alert("Data Submitted");
// //             // Redirect or show success message
// //         } catch (error) {
// //             console.error("Error submitting data:", error);
// //             // Handle error
// //         }
// //     };

// //     const renderStep1Form = () => {
// //         return (
// //             <form onSubmit={handleStep1Submit}>
// //                 <h1 className="font-josefin-sans text-2xl text-black font-bold mb-6">Create Campaign</h1>
// //                 <label htmlFor="banner" className="block font-mini font-josefin-sans mb-1">Banner</label>
// //                 <div className="flex items-center bg-neutral mb-4 py-2 px-3 rounded-2xl">
// //                     <input
// //                         id="banner"
// //                         className="bg-inherit pl-2 w-full outline-none border-none"
// //                         type="file"
// //                         name="banner"
// //                         accept="image/*"
// //                         required
// //                         onChange={(e) => handleFileInputChange(e, setBannerFileName, setFormDataStep1, 'banner')}
// //                     />
// //                 </div>
// //                 <label htmlFor="title" className="block font-mini font-josefin-sans mb-1">Title</label>
// //                 <div className="flex items-center bg-neutral mb-4 py-2 px-3 rounded-2xl">
// //                     <input
// //                         id="title"
// //                         className="bg-inherit pl-2 w-full outline-none border-none"
// //                         type="text"
// //                         name="title"
// //                         placeholder="Enter your group's title"
// //                         required
// //                         value={formDataStep1.title || ''}
// //                         onChange={(e) => handleInputChange(e, setFormDataStep1)}
// //                     />
// //                 </div>
// //                 <label htmlFor="description" className="block font-mini font-josefin-sans mb-1">Description</label>
// //                 <div className="flex items-center bg-neutral mb-4 py-2 px-3 rounded-2xl">
// //                     <textarea
// //                         id="description"
// //                         className="bg-inherit pl-2 w-full outline-none border-none"
// //                         name="description"
// //                         placeholder="Enter detail about your  campaign"
// //                         maxLength="250"
// //                         required
// //                         value={formDataStep1.description || ''}
// //                         onChange={(e) => handleInputChange(e, setFormDataStep1)}
// //                     />
// //                 </div>
// //                 <label htmlFor="startDate" className="block font-mini font-josefin-sans mb-1">Start Date</label>
// //                 <div className="flex items-center bg-neutral mb-4 py-2 px-3 rounded-2xl">
// //                     <input
// //                         id="startDate"
// //                         className="bg-inherit pl-2 w-full outline-none border-none"
// //                         type="date"
// //                         name="startDate"
// //                         required
// //                         value={formDataStep1.startDate || ''}
// //                         onChange={(e) => handleInputChange(e, setFormDataStep1)}
// //                     />
// //                 </div>
// //                 <label htmlFor="endDate" className="block font-mini font-josefin-sans mb-1">End Date</label>
// // <div className="flex items-center bg-neutral mb-4 py-2 px-3 rounded-2xl">
// //     <input
// //         id="endDate"
// //         className="bg-inherit pl-2 w-full outline-none border-none"
// //         type="date"
// //         name="endDate"
// //         required
// //         value={formDataStep1.endDate || ''}
// //         onChange={(e) => {
// //             const startDate = new Date(formDataStep1.startDate);
// //             const endDate = new Date(e.target.value);
// //             if (endDate <= startDate) {
// //                 alert("End Date cannot be before or the same as Start Date");
// //             } else {
// //                 handleInputChange(e, setFormDataStep1);
// //             }
// //         }}
// //     />
// // </div>

// //                 <div className="mt-4">
// //                     <button type="submit" className="font-josefin-sans bg-dashboard text-white text-sm font-semibold px-4 py-2 rounded hover:rounded-full border-2 border-gray-100">Next</button>
// //                 </div>
// //             </form>
// //         );
// //     };

// //     const renderStep2Form = () => {
// //         return (
// //             <form onSubmit={handleStep2Submit}>
// //                 <h1 className="font-josefin-sans text-2xl text-black font-bold mb-6">Create Campaign</h1>
// //                 <label htmlFor="targetDonation" className="block font-mini font-josefin-sans mb-1">Target Donation</label>
// //                 <div className="flex items-center bg-neutral mb-4 py-2 px-3 rounded-2xl">
// //                     <input
// //                         id="targetDonation"
// //                         className="bg-inherit pl-2 w-full outline-none border-none"
// //                         type="number"
// //                         name="targetDonation"
// //                         placeholder="Enter your target donation amount"
// //                         required
// //                         max={99999}
// //                         min={10}
// //                         value={formDataStep2.targetDonation || ''}
// //                         onChange={(e) => handleNumberInputChange(e, setFormDataStep2)}
// //                     />
// //                 </div>
// //                 <label htmlFor="volunteer" className="block font-mini font-josefin-sans mb-1">Volunteers</label>
// //                 <div className="flex items-center bg-neutral mb-4 py-2 px-3 rounded-2xl">
// //                     <input
// //                         id="volunteerToggle"
// //                         type="checkbox"
// //                         className="mr-2"
// //                         checked={volunteerToggle}
// //                         onChange={(e) => setVolunteerToggle(e.target.checked)}
// //                     />
// //                     <label htmlFor="volunteerToggle" className="font-mini font-josefin-sans">Need Volunteers?</label>
// //                 </div>
                
// //                 {volunteerToggle && (
// //                     <div>
// //                         <label htmlFor="volunteer" className="block font-mini font-josefin-sans mb-1">Volunteers Needed</label>
// //                         <div className="flex items-center bg-neutral mb-4 py-2 px-3 rounded-2xl">
// //                             <input
// //                                 id="volunteer"
// //                                 className="bg-inherit pl-2 w-full outline-none border-none"
// //                                 type="number"
// //                                 name="volunteer"
// //                                 placeholder="Enter the number of volunteers needed"
// //                                 value={formDataStep2.volunteer || ''}
// //                                 onChange={(e) => handleNumberInputChange(e, setFormDataStep2)}
// //                             />
// //                         </div>
// //                     </div>
// //                 )}
// //                 <div className="mb-4">
// //                     <label htmlFor="location" className="block font-mini font-josefin-sans mb-1">Location</label>
// //                     <select
// //                         id="location"
// //                         name="location"
// //                         className="bg-neutral font-josefin-sans block w-full text-mini shadow-sm sm:text-sm rounded-2xl py-4 px-4"
// //                         value={formDataStep2.location || ''}
// //                         onChange={(e) => handleInputChange(e, setFormDataStep2)}
// //                     >
// //                         <option value="" disabled>Select The City</option>
// //                         <option value="Islamabad">Islamabad</option>
// //                         <option value="Rawalpindi">Rawalpindi</option>
// //                         <option value="Lahore">Lahore</option>
// //                         <option value="Balochistan">Balochistan</option>
// //                     </select>
// //                 </div>
// //                 <div className="flex gap-4 mt-4">
// //                     <button onClick={handleBackButton} className="font-josefin-sans bg-dashboard text-white text-sm font-semibold px-4 py-2 rounded hover:rounded-full border-2 border-gray-100">Back</button>
// //                     <button type="submit" className="font-josefin-sans bg-dashboard text-white text-sm font-semibold px-4 py-2 rounded hover:rounded-full border-2 border-gray-100">Submit</button>
// //                 </div>
// //             </form>
// //         );
// //     };

// //     return (
// //         <div className="flex items-center gap-[100px] justify-center  min-h-screen">
// //             {step === 1 ? (
// //                 <>
// //                     <div className="border border-2 border-gray-100 bg-white p-8 aupx-5  rounded-lg w-[600px]">
// //                         {renderStep1Form()}
// //                     </div>
// //                     <img src={`${process.env.PUBLIC_URL}/assest/Seeding-bro.png`} alt='leaves illustration' className="w-[500px] mt-8"/>
// //                 </>
// //             ) : (
// //                 <>
// //                     <img src={`${process.env.PUBLIC_URL}/assest/Reforestation-bro.png`} alt='leaves illustration' className="self-center w-[450px]"/>
// //                     <div className="bg-white  p-8 rounded-lg w-[400px] mt-8">
// //                         {renderStep2Form()}
// //                     </div>
// //                 </>
// //             )}
// //         </div>
// //     );
// // };

// // export default CreateCampaignForm;
// import React, { useState, useEffect } from "react";
// import axios from "axios";

// const CreateCampaignForm = () => {
//     const [imageFileName, setImageFileName] = useState('');
//     const [bannerFileName, setBannerFileName] = useState('');
//     const [faceImageFileName, setFaceImageFileName] = useState('');
//     const [user, setUser] = useState(null);
//     const [step, setStep] = useState(1);
//     const [volunteerToggle, setVolunteerToggle] = useState(false);



//     useEffect(() => {
//         const storedUser = localStorage.getItem('user');
//         if (storedUser) {
//             const parsedUser = JSON.parse(storedUser);
//             setUser(parsedUser);
//         }
//     }, []);

//     const [formDataStep1, setFormDataStep1] = useState({
//         user: '',
//         title: '',
//         description: '',
//         banner: '',
//         startDate: '',
//         endDate: '',
//     });

//     useEffect(() => {
//         if (user) {
//             setFormDataStep1(prevState => ({
//                 ...prevState,
//                 user: user._id
//             }));
//         }
//     }, [user]);

//     const [formDataStep2, setFormDataStep2] = useState({
//         targetDonation: '',
//         volunteer: 0,
//         location: ''
//     });

//     const handleFileInputChange = (event, setFileState, setFormData, fieldName) => {
//         const file = event.target.files[0];
//         if (file) {
//             setFileState(file.name);
//             setFormData(prevState => ({
//                 ...prevState,
//                 [fieldName]: file.name
//             }));
//         }
//     };

//     const handleInputChange = (e, setFormData) => {
//         const { name, value } = e.target;
//         setFormData(prevState => ({
//             ...prevState,
//             [name]: value
//         }));
//     };

//     const handleNumberInputChange = (e, setFormData) => {
//         const { name, value } = e.target;
//         const numberValue = parseInt(value, 10);
//         if (!isNaN(numberValue)) {
//             setFormData(prevState => ({
//                 ...prevState,
//                 [name]: numberValue
//             }));
//         }
//     };

//     const handleStep1Submit = (e) => {
//         e.preventDefault();
//         setStep(2);
//         console.log('banner: ' + formDataStep1.banner);
//         console.log('title: ' + formDataStep1.title);
//         console.log('description: ' + formDataStep1.description);
//         console.log('startDate: ' + formDataStep1.startDate);
//         console.log('endDate: ' + formDataStep1.endDate);
//     };

//     const handleBackButton = (e) => {
//         e.preventDefault();
//         setStep(1);
//     };

//     // Update handleStep2Submit function
// const handleStep2Submit = async (e) => {
//     e.preventDefault();
//     try {
//         const formData = {
//             ...formDataStep1, // Include formDataStep1 fields
//             ...formDataStep2, // Include formDataStep2 fields
//         };

//         const response = await axios.post("http://localhost:5000/api/campaigns", formData);
//         console.log("Data submitted:", response.data);
//         alert("Data Submitted");
//         // Redirect or show success message
//     } catch (error) {
//         console.error("Error submitting data:", error);
//         // Handle error
//         if (error.response) {
//             console.error("Server responded with:", error.response.status, error.response.data);
//         }
//     }
// };

//     const renderStep1Form = () => {
//         return (
//             <form onSubmit={handleStep1Submit}>
//                 <h1 className="font-josefin-sans text-2xl text-black font-bold mb-6">Create Campaign</h1>
//                 <label htmlFor="banner" className="block font-mini font-josefin-sans mb-1">Banner</label>
//                 <div className="flex items-center bg-neutral mb-4 py-2 px-3 rounded-2xl">
//                     <input
//                         id="banner"
//                         className="bg-inherit pl-2 w-full outline-none border-none"
//                         type="file"
//                         name="banner"
//                         accept="image/*"
//                         required
//                         onChange={(e) => handleFileInputChange(e, setBannerFileName, setFormDataStep1, 'banner')}
//                     />
//                 </div>
//                 <label htmlFor="title" className="block font-mini font-josefin-sans mb-1">Title</label>
//                 <div className="flex items-center bg-neutral mb-4 py-2 px-3 rounded-2xl">
//                     <input
//                         id="title"
//                         className="bg-inherit pl-2 w-full outline-none border-none"
//                         type="text"
//                         name="title"
//                         placeholder="Enter your group's title"
//                         required
//                         value={formDataStep1.title || ''}
//                         onChange={(e) => handleInputChange(e, setFormDataStep1)}
//                     />
//                 </div>
//                 <label htmlFor="description" className="block font-mini font-josefin-sans mb-1">Description</label>
//                 <div className="flex items-center bg-neutral mb-4 py-2 px-3 rounded-2xl">
//                     <textarea
//                         id="description"
//                         className="bg-inherit pl-2 w-full outline-none border-none"
//                         name="description"
//                         placeholder="Enter detail about your  campaign"
//                         maxLength="250"
//                         required
//                         value={formDataStep1.description || ''}
//                         onChange={(e) => handleInputChange(e, setFormDataStep1)}
//                     />
//                 </div>
//                 <label htmlFor="startDate" className="block font-mini font-josefin-sans mb-1">Start Date</label>
//                 <div className="flex items-center bg-neutral mb-4 py-2 px-3 rounded-2xl">
//                     <input
//                         id="startDate"
//                         className="bg-inherit pl-2 w-full outline-none border-none"
//                         type="date"
//                         name="startDate"
//                         required
//                         value={formDataStep1.startDate || ''}
//                         onChange={(e) => handleInputChange(e, setFormDataStep1)}
//                     />
//                 </div>
//                 <label htmlFor="endDate" className="block font-mini font-josefin-sans mb-1">End Date</label>
//                 <div className="flex items-center bg-neutral mb-4 py-2 px-3 rounded-2xl">
//                     <input
//                         id="endDate"
//                         className="bg-inherit pl-2 w-full outline-none border-none"
//                         type="date"
//                         name="endDate"
//                         required
//                         value={formDataStep1.endDate || ''}
//                         onChange={(e) => {
//                             const startDate = new Date(formDataStep1.startDate);
//                             const endDate = new Date(e.target.value);
//                             if (endDate <= startDate) {
//                                 alert("End Date cannot be before or the same as Start Date");
//                             } else {
//                                 handleInputChange(e, setFormDataStep1);
//                             }
//                         }}
//                     />
//                 </div>

//                 <div className="mt-4">
//                     <button type="submit" className="font-josefin-sans bg-dashboard text-white text-sm font-semibold px-4 py-2 rounded hover:rounded-full border-2 border-gray-100">Next</button>
//                 </div>
//             </form>
//         );
//     };

//     const renderStep2Form = () => {
//         return (
//             <form onSubmit={handleStep2Submit}>
//                 <h1 className="font-josefin-sans text-2xl text-black font-bold mb-6">Create Campaign</h1>
//                 <label htmlFor="targetDonation" className="block font-mini font-josefin-sans mb-1">Target Donation</label>
//                 <div className="flex items-center bg-neutral mb-4 py-2 px-3 rounded-2xl">
//                     <input
//                         id="targetDonation"
//                         className="bg-inherit pl-2 w-full outline-none border-none"
//                         type="number"
//                         name="targetDonation"
//                         placeholder="Enter your target donation amount"
//                         required
//                         max={99999}
//                         min={10}
//                         value={formDataStep2.targetDonation || ''}
//                         onChange={(e) => handleNumberInputChange(e, setFormDataStep2)}
//                     />
//                 </div>
//                 <label htmlFor="volunteer" className="block font-mini font-josefin-sans mb-1">Volunteers</label>
//                 <div className="flex items-center bg-neutral mb-4 py-2 px-3 rounded-2xl">
//                     <input
//                         id="volunteerToggle"
//                         type="checkbox"
//                         className="mr-2"
//                         checked={volunteerToggle}
//                         onChange={(e) => setVolunteerToggle(e.target.checked)}
//                     />
//                     <label htmlFor="volunteerToggle" className="font-mini font-josefin-sans">Need Volunteers?</label>
//                 </div>
                
//                 {volunteerToggle && (
//                     <div>
//                         <label htmlFor="volunteer" className="block font-mini font-josefin-sans mb-1">Volunteers Needed</label>
//                         <div className="flex items-center bg-neutral mb-4 py-2 px-3 rounded-2xl">
//                             <input
//                                 id="volunteer"
//                                 className="bg-inherit pl-2 w-full outline-none border-none"
//                                 type="number"
//                                 name="volunteer"
//                                 placeholder="Enter the number of volunteers needed"
//                                 value={formDataStep2.volunteer || ''}
//                                 onChange={(e) => handleNumberInputChange(e, setFormDataStep2)}
//                             />
//                         </div>
//                     </div>
//                 )}
//                 <div className="mb-4">
//                     <label htmlFor="location" className="block font-mini font-josefin-sans mb-1">Location</label>
//                     <select
//                         id="location"
//                         name="location"
//                         className="bg-neutral font-josefin-sans block w-full text-mini shadow-sm sm:text-sm rounded-2xl py-4 px-4"
//                         value={formDataStep2.location || ''}
//                         onChange={(e) => handleInputChange(e, setFormDataStep2)}
//                     >
//                         <option value="" disabled>Select The City</option>
//                         <option value="Islamabad">Islamabad</option>
//                         <option value="Rawalpindi">Rawalpindi</option>
//                         <option value="Lahore">Lahore</option>
//                         <option value="Balochistan">Balochistan</option>
//                     </select>
//                 </div>
//                 <div className="flex gap-4 mt-4">
//                     <button onClick={handleBackButton} className="font-josefin-sans bg-dashboard text-white text-sm font-semibold px-4 py-2 rounded hover:rounded-full border-2 border-gray-100">Back</button>
//                     <button type="submit" className="font-josefin-sans bg-dashboard text-white text-sm font-semibold px-4 py-2 rounded hover:rounded-full border-2 border-gray-100">Submit</button>
//                 </div>
//             </form>
//         );
//     };

//     return (
//         <div className="flex items-center gap-[100px] justify-center  min-h-screen">
//             {step === 1 ? (
//                 <>
//                     <div className="border border-2 border-gray-100 bg-white p-8 aupx-5  rounded-lg w-[600px]">
//                         {renderStep1Form()}
//                     </div>
//                     <img src={`${process.env.PUBLIC_URL}/assest/Seeding-bro.png`} alt='leaves illustration' className="w-[500px] mt-8"/>
//                 </>
//             ) : (
//                 <>
//                     <img src={`${process.env.PUBLIC_URL}/assest/Reforestation-bro.png`} alt='leaves illustration' className="self-center w-[450px]"/>
//                     <div className="bg-white  p-8 rounded-lg w-[400px] mt-8">
//                         {renderStep2Form()}
//                     </div>
//                 </>
//             )}
//         </div>
//     );
// };

// export default CreateCampaignForm;


import React, { useState, useEffect } from "react";
import axios from "axios";

const CreateCampaignForm = () => {
    const [imageFileName, setImageFileName] = useState('');
    const [bannerFileName, setBannerFileName] = useState('');
    const [faceImageFileName, setFaceImageFileName] = useState('');
    const [user, setUser] = useState(null);
    const [step, setStep] = useState(1);
    const [volunteerToggle, setVolunteerToggle] = useState(false);

    useEffect(() => {
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
        banner: '',
        startDate: '',
        endDate: '',
    });

    useEffect(() => {
        if (user) {
            setFormDataStep1(prevState => ({
                ...prevState,
                user: user._id
            }));
        }
    }, [user]);

    const [formDataStep2, setFormDataStep2] = useState({
        targetDonation: '',
        volunteer: 0,
        location: ''
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

    const handleNumberInputChange = (e, setFormData) => {
        const { name, value } = e.target;
        const numberValue = parseInt(value, 10);
        if (!isNaN(numberValue)) {
            setFormData(prevState => ({
                ...prevState,
                [name]: numberValue
            }));
        }
    };

    const handleStep1Submit = (e) => {
        e.preventDefault();
        setStep(2);
        console.log('banner: ' + formDataStep1.banner);
        console.log('title: ' + formDataStep1.title);
        console.log('description: ' + formDataStep1.description);
        console.log('startDate: ' + formDataStep1.startDate);
        console.log('endDate: ' + formDataStep1.endDate);
    };

    const handleBackButton = (e) => {
        e.preventDefault();
        setStep(1);
    };

    const handleStep2Submit = async (e) => {
        e.preventDefault();
        console.log('targetDonation: ' + formDataStep2.targetDonation);
        console.log('volunteer: ' + formDataStep2.volunteer);
        console.log('location: ' + formDataStep2.location);
       
        try {
            const formData = {
                ...formDataStep1,
                ...formDataStep2,
            };

            const response = await axios.post("http://localhost:5000/api/campaigns", formData);
            console.log("Data submitted:", response.data);
            alert("Data Submitted");
            // Redirect or show success message
        } catch (error) {
            console.error("Error submitting data:", error);
            // Handle error
        }
    };

    const renderStep1Form = () => {
        return (
            <form onSubmit={handleStep1Submit}>
                <h1 className="font-josefin-sans text-2xl text-black font-bold mb-6">Create Campaign</h1>
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
                        value={formDataStep1.title || ''}
                        onChange={(e) => handleInputChange(e, setFormDataStep1)}
                    />
                </div>
                <label htmlFor="description" className="block font-mini font-josefin-sans mb-1">Description</label>
                <div className="flex items-center bg-neutral mb-4 py-2 px-3 rounded-2xl">
                    <textarea
                        id="description"
                        className="bg-inherit pl-2 w-full outline-none border-none"
                        name="description"
                        placeholder="Enter detail about your  campaign"
                        maxLength="250"
                        required
                        value={formDataStep1.description || ''}
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
                        value={formDataStep1.startDate || ''}
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
                        value={formDataStep1.endDate || ''}
                        onChange={(e) => {
                            const startDate = new Date(formDataStep1.startDate);
                            const endDate = new Date(e.target.value);
                            if (endDate <= startDate) {
                                alert("End Date cannot be before or the same as Start Date");
                            } else {
                                handleInputChange(e, setFormDataStep1);
                            }
                        }}
                    />
                </div>
                <div className="mt-4">
                    <button type="submit" className="font-josefin-sans bg-dashboard text-white text-sm font-semibold px-4 py-2 rounded hover:rounded-full border-2 border-gray-100">Next</button>
                </div>
            </form>
        );
    };

    const renderStep2Form = () => {
        return (
            <form onSubmit={handleStep2Submit}>
                <h1 className="font-josefin-sans text-2xl text-black font-bold mb-6">Create Campaign</h1>
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
                        value={formDataStep2.targetDonation || ''}
                        onChange={(e) => handleNumberInputChange(e, setFormDataStep2)}
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
                    <label htmlFor="volunteerToggle" className="font-mini font-josefin-sans">Need Volunteers?</label>
                </div>
                
                {volunteerToggle && (
                    <div>
                        <label htmlFor="volunteer" className="block font-mini font-josefin-sans mb-1">Volunteers Needed</label>
                        <div className="flex items-center bg-neutral mb-4 py-2 px-3 rounded-2xl">
                            <input
                                id="volunteer"
                                className="bg-inherit pl-2 w-full outline-none border-none"
                                type="number"
                                name="volunteer"
                                placeholder="Enter the number of volunteers needed"
                                value={formDataStep2.volunteer || ''}
                                onChange={(e) => handleNumberInputChange(e, setFormDataStep2)}
                            />
                        </div>
                    </div>
                )}
                <div className="mb-4">
                    <label htmlFor="location" className="block font-mini font-josefin-sans mb-1">Location</label>
                    <select
                        id="location"
                        name="location"
                        className="bg-neutral font-josefin-sans block w-full text-mini shadow-sm sm:text-sm rounded-2xl py-4 px-4"
                        value={formDataStep2.location || ''}
                        onChange={(e) => handleInputChange(e, setFormDataStep2)}
                    >
                        <option value="" disabled>Select The City</option>
                        <option value="Islamabad">Islamabad</option>
                        <option value="Rawalpindi">Rawalpindi</option>
                        <option value="Lahore">Lahore</option>
                        <option value="Balochistan">Balochistan</option>
                    </select>
                </div>
                <div className="flex gap-4 mt-4">
                    <button onClick={handleBackButton} className="font-josefin-sans bg-dashboard text-white text-sm font-semibold px-4 py-2 rounded hover:rounded-full border-2 border-gray-100">Back</button>
                    <button type="submit" className="font-josefin-sans bg-dashboard text-white text-sm font-semibold px-4 py-2 rounded hover:rounded-full border-2 border-gray-100">Submit</button>
                </div>
            </form>
        );
    };

    return (
        <div className="flex items-center gap-[100px] justify-center  min-h-screen">
            {step === 1 ? (
                <>
                    <div className="border border-2 border-gray-100 bg-white p-8 aupx-5  rounded-lg w-[600px]">
                        {renderStep1Form()}
                    </div>
                    <img src={`${process.env.PUBLIC_URL}/assest/Seeding-bro.png`} alt='leaves illustration' className="w-[500px] mt-8"/>
                </>
            ) : (
                <>
                    <img src={`${process.env.PUBLIC_URL}/assest/Reforestation-bro.png`} alt='leaves illustration' className="self-center w-[450px]"/>
                    <div className="bg-white  p-8 rounded-lg w-[400px] mt-8">
                        {renderStep2Form()}
                    </div>
                </>
            )}
        </div>
    );
};

export default CreateCampaignForm;