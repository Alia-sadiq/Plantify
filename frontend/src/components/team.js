
// // import React, { useState, useEffect } from 'react';
// // import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// // import { FaPlusCircle } from 'react-icons/fa';
// // import { faEllipsisV } from '@fortawesome/free-solid-svg-icons';

// // const Team = () => {
// //     const [teamData, setTeamData] = useState([]);
// //     const [showOptions, setShowOptions] = useState(null);
// //     const [activeIcon, setActiveIcon] = useState('plus');
// //     const [isModalVisible, setIsModalVisible] = useState(false);
// //     const [newMember, setNewMember] = useState({ name: '', role: '', profilePic: null });

// //     useEffect(() => {
// //         // Fetch data from API
// //         const fetchData = async () => {
// //             try {
// //                 const response = await fetch('http://localhost:5000/api/teams');
// //                 const data = await response.json();
// //                 setTeamData(data);
// //             } catch (error) {
// //                 console.error('Error fetching team data:', error);
// //             }
// //         };

// //         fetchData();
// //     }, []);

// //     const handleEdit = (index) => {
// //         // Handle edit logic here
// //         console.log('Edit member at index:', index);
// //     };

// //     const handleDelete = async (index) => {
// //         // Handle delete logic here
// //         try {
// //             const memberToDelete = teamData[index];
// //             await fetch(`http://localhost:5000/api/teams/${memberToDelete.id}`, {
// //                 method: 'DELETE',
// //             });
// //             setTeamData(teamData.filter((_, i) => i !== index));
// //             console.log('Deleted member at index:', index);
// //         } catch (error) {
// //             console.error('Error deleting team member:', error);
// //         }
// //     };

// //     const handleAdd = () => {
// //         setIsModalVisible(true);
// //     };

// //     const handleModalClose = () => {
// //         setIsModalVisible(false);
// //     };

// //     const handleInputChange = (e) => {
// //         const { name, value } = e.target;
// //         setNewMember((prevMember) => ({
// //             ...prevMember,
// //             [name]: value,
// //         }));
// //     };

// //     const handleFileChange = (e) => {
// //         setNewMember((prevMember) => ({
// //             ...prevMember,
// //             profilePic: e.target.files[0],
// //         }));
// //     };

// //     const handleModalSubmit = async (e) => {
// //         e.preventDefault();
// //         try {
// //             const formData = new FormData();
// //             formData.append('name', newMember.name);
// //             formData.append('role', newMember.role);
// //             formData.append('profilePic', newMember.profilePic);

// //             const response = await fetch('http://localhost:5000/api/teams', {
// //                 method: 'POST',
// //                 body: formData,
// //             });

// //             if (response.ok) {
// //                 const newMemberData = await response.json();
// //                 setTeamData([...teamData, newMemberData]);
// //                 setIsModalVisible(false);
// //             } else {
// //                 console.error('Error adding new member:', response.statusText);
// //             }
// //         } catch (error) {
// //             console.error('Error adding new member:', error);
// //         }
// //     };

// //     const toggleOptions = (index) => {
// //         if (showOptions === index) {
// //             setShowOptions(null);
// //         } else {
// //             setShowOptions(index);
// //         }
// //     };

// //     return (
// //         <div className="absolute right-2 top-72 p-1 bg-white rounded-md h-auto  w-56 shadow-md">
// //             <div className="flex justify-between items-center mb-4">
// //                 <h2 className="text-2xl font-bold text-black">Team</h2>
// //                 <div className="relative group">
// //                     <button onClick={handleAdd} className="text-xs">
// //                         <FaPlusCircle className={`h-6 w-6 ${activeIcon === 'plus' ? 'text-black' : 'text-gray-400'} hover:text-ngreen`} />
// //                     </button>
// //                     <span className="absolute right-0 w-24 p-1 text-xs text-black bg-white rounded hidden group-hover:block">
// //                         Add member
// //                     </span>
// //                 </div>
// //             </div>
// //             <div className="grid grid-cols-3 grid-rows-3 gap-2">
// //                 {teamData.map((member, index) => (
// //                     <div key={index} className="relative flex flex-col items-center">
// //                         {member.profilePic.length > 0 && (
// //                             <img className="w-12 h-12 rounded-full object-cover" src={`http://localhost:5000/assets/${member.profilePic[0]}`} alt="Profile Picture" />
// //                         )}
// //                         <span className="text-sm font-medium mt-2">{member.name}</span>
// //                         <div className="absolute top-0 right-0 mt-1 mr-1">
// //                             <button onClick={() => toggleOptions(index)} className="text-xs">
// //                                 <FontAwesomeIcon icon={faEllipsisV} className="text-black" />
// //                             </button>
// //                             {showOptions === index && (
// //                                 <div className="absolute right-0 mt-2 w-24 bg-white border rounded shadow-md">
// //                                     <button onClick={() => handleEdit(index)} className="block w-full px-2 py-1 text-left text-sm hover:bg-gray-100">Edit</button>
// //                                     <button onClick={() => handleDelete(index)} className="block w-full px-2 py-1 text-left text-sm hover:bg-gray-100">Delete</button>
// //                                 </div>
// //                             )}
// //                         </div>
// //                     </div>
// //                 ))}
// //             </div>

// //             {isModalVisible && (
// //                 <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
// //                     <div className="bg-white p-6 rounded-md shadow-md w-96">
// //                         <h2 className="text-xl mb-4">Add New Member</h2>
// //                         <form onSubmit={handleModalSubmit}>
// //                             <div className="mb-4">
// //                                 <label className="block text-sm font-medium">Name</label>
// //                                 <input
// //                                     type="text"
// //                                     name="name"
// //                                     value={newMember.name}
// //                                     onChange={handleInputChange}
// //                                     className="w-full p-2 border border-gray-300 rounded-md"
// //                                     required
// //                                 />
// //                             </div>
// //                             <div className="mb-4">
// //                                 <label className="block text-sm font-medium">Role</label>
// //                                 <input
// //                                     type="text"
// //                                     name="role"
// //                                     value={newMember.role}
// //                                     onChange={handleInputChange}
// //                                     className="w-full p-2 border border-gray-300 rounded-md"
// //                                     required
// //                                 />
// //                             </div>
// //                             <div className="mb-4">
// //                                 <label className="block text-sm font-medium">Profile Picture</label>
// //                                 <input
// //                                     type="file"
// //                                     onChange={handleFileChange}
// //                                     className="w-full p-2 border border-gray-300 rounded-md"
// //                                     required
// //                                 />
// //                             </div>
// //                             <div className="flex justify-end">
// //                                 <button
// //                                     type="button"
// //                                     onClick={handleModalClose}
// //                                     className="mr-4 p-2 bg-gray-300 rounded-md"
// //                                 >
// //                                     Cancel
// //                                 </button>
// //                                 <button
// //                                     type="submit"
// //                                     className="p-2 bg-dashboard text-white rounded-md"
// //                                 >
// //                                     Add
// //                                 </button>
// //                             </div>
// //                         </form>
// //                     </div>
// //                 </div>
// //             )}
// //         </div>
// //     );
// // };

// // export default Team;
// import React, { useState, useEffect } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { FaPlusCircle } from 'react-icons/fa';
// import { faEllipsisV } from '@fortawesome/free-solid-svg-icons';

// const Team = () => {
//     const [teamData, setTeamData] = useState([]);
//     const [showOptions, setShowOptions] = useState(null);
//     const [isModalVisible, setIsModalVisible] = useState(false);
//     const [newTeam, setNewTeam] = useState({ name: '', role: '', profilePic: null });

//     useEffect(() => {
//         fetchData();
//     }, []);

//     const fetchData = async () => {
//         try {
//             const response = await fetch('http://localhost:5000/api/teams');
//             const data = await response.json();
//             setTeamData(data);
//         } catch (error) {
//             console.error('Error fetching team data:', error);
//         }
//     };

//     const handleEdit = (index) => {
//         console.log('Edit member at index:', index);
//     };

//     const handleDelete = async (index) => {
//         try {
//             const memberToDelete = teamData[index];
//             await fetch(`http://localhost:5000/api/teams/${memberToDelete.id}`, {
//                 method: 'DELETE',
//             });
//             setTeamData(teamData.filter((_, i) => i !== index));
//             console.log('Deleted member at index:', index);
//         } catch (error) {
//             console.error('Error deleting team member:', error);
//         }
//     };

//     const handleAdd = () => {
//         setIsModalVisible(true);
//     };

//     const handleModalClose = () => {
//         setIsModalVisible(false);
//     };

//     const handleInputChange = (e) => {
//         const { name, value } = e.target;
//         setNewTeam((prevTeam) => ({
//             ...prevTeam,
//             [name]: value,
//         }));
//     };

//     const handleFileChange = (e) => {
//         setNewTeam((prevTeam) => ({
//             ...prevTeam,
//             profilePic: e.target.files[0],
//         }));
//     };

//     const handleModalSubmit = async (e) => {
//         e.preventDefault();
//         try {
//             const formData = new FormData();
//             formData.append('name', newTeam.name);
//             formData.append('role', newTeam.role);
//             formData.append('profilePic', newTeam.profilePic);

//             const response = await fetch('http://localhost:5000/api/teams', {
//                 method: 'POST',
//                 body: formData,
//             });

//             if (response.ok) {
//                 const newTeamData = await response.json();
//                 setTeamData([...teamData, newTeamData]);
//                 setIsModalVisible(false);
//             } else {
//                 console.error('Error adding new member:', response.statusText);
//             }
//         } catch (error) {
//             console.error('Error adding new member:', error);
//         }
//     };

//     const toggleOptions = (index) => {
//         if (showOptions === index) {
//             setShowOptions(null);
//         } else {
//             setShowOptions(index);
//         }
//     };

//     return (
//         <div className="absolute right-2 top-72 p-1 bg-white rounded-md h-auto w-56 shadow-md">
//             <div className="flex justify-between items-center mb-4">
//                 <h2 className="text-2xl font-bold text-black">Team</h2>
//                 <div className="relative group">
//                     <button onClick={handleAdd} className="text-xs">
//                         <FaPlusCircle className="h-6 w-6 text-black hover:text-ngreen" />
//                     </button>
//                     <span className="absolute right-0 w-24 p-1 text-xs text-black bg-white rounded hidden group-hover:block">
//                         Add member
//                     </span>
//                 </div>
//             </div>
//             <div className="grid grid-cols-3 grid-rows-3 gap-2">
//                 {teamData.map((Team, index) => (
//                     <div key={index} className="relative flex flex-col items-center">
//                         {Team.profilePic && (
//                             <img className="w-12 h-12 rounded-full object-cover" src={`/assest/${Team.profilePic}`} alt="Profile Picture" />
//                         )}
//                         <span className="text-sm font-medium mt-2">{Team.name}</span>
//                         <div className="absolute top-0 right-0 mt-1 mr-1">
//                             <button onClick={() => toggleOptions(index)} className="text-xs">
//                                 <FontAwesomeIcon icon={faEllipsisV} className="text-black" />
//                             </button>
//                             {showOptions === index && (
//                                 <div className="absolute right-0 mt-2 w-24 bg-white border rounded shadow-md">
//                                     <button onClick={() => handleEdit(index)} className="block w-full px-2 py-1 text-left text-sm hover:bg-gray-100">Edit</button>
//                                     <button onClick={() => handleDelete(index)} className="block w-full px-2 py-1 text-left text-sm hover:bg-gray-100">Delete</button>
//                                 </div>
//                             )}
//                         </div>
//                     </div>
//                 ))}
//             </div>

//             {isModalVisible && (
//                 <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
//                     <div className="bg-white p-6 rounded-md shadow-md w-96">
//                         <h2 className="text-xl mb-4">Add New Member</h2>
//                         <form onSubmit={handleModalSubmit}>
//                             <div className="mb-4">
//                                 <label className="block text-sm font-medium">Name</label>
//                                 <input
//                                     type="text"
//                                     name="name"
//                                     value={newTeam.name}
//                                     onChange={handleInputChange}
//                                     className="w-full p-2 border border-gray-300 rounded-md"
//                                     required
//                                 />
//                             </div>
//                             <div className="mb-4">
//                                 <label className="block text-sm font-medium">Role</label>
//                                 <input
//                                     type="text"
//                                     name="role"
//                                     value={newTeam.role}
//                                     onChange={handleInputChange}
//                                     className="w-full p-2 border border-gray-300 rounded-md"
//                                     required
//                                 />
//                             </div>
//                             <div className="mb-4">
//                                 <label className="block text-sm font-medium">Profile Picture</label>
//                                 <input
//                                     type="file"
//                                     onChange={handleFileChange}
//                                     className="w-full p-2 border border-gray-300 rounded-md"
//                                     required
//                                 />
//                             </div>
//                             <div className="flex justify-end">
//                                 <button
//                                     type="button"
//                                     onClick={handleModalClose}
//                                     className="mr-4 p-2 bg-gray-300 rounded-md"
//                                 >
//                                     Cancel
//                                 </button>
//                                 <button
//                                     type="submit"
//                                     className="p-2 bg-dashboard text-white rounded-md"
//                                 >
//                                     Add
//                                 </button>
//                             </div>
//                         </form>
//                     </div>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default Team;
// import React, { useState, useEffect } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { FaPlusCircle } from 'react-icons/fa';
// import { faEllipsisV } from '@fortawesome/free-solid-svg-icons';

// const Team = () => {
//     const [teamData, setTeamData] = useState([]);
//     const [showOptions, setShowOptions] = useState(null);
//     const [isModalVisible, setIsModalVisible] = useState(false);
//     const [newTeam, setNewTeam] = useState({ name: '', role: '', profilePic: null });
//     const [editIndex, setEditIndex] = useState(null); // Track index of member being edited

//     useEffect(() => {
//         fetchData();
//     }, []);

//     const fetchData = async () => {
//         try {
//             const response = await fetch('http://localhost:5000/api/teams');
//             const data = await response.json();
//             setTeamData(data);
//         } catch (error) {
//             console.error('Error fetching team data:', error);
//         }
//     };

//     const handleEdit = (index) => {
//         setEditIndex(index);
//         const member = teamData[index];
//         setNewTeam({ name: member.name, role: member.role, profilePic: member.profilePic });
//         setIsModalVisible(true);
//     };

//     const handleDelete = async (index) => {
//         try {
//             const memberToDelete = teamData[index];
//             await fetch(`http://localhost:5000/api/teams/${memberToDelete._id}`, {
//                 method: 'DELETE',
//             });
//             setTeamData(teamData.filter((_, i) => i !== index));
//             console.log('Deleted member at index:', index);
//         } catch (error) {
//             console.error('Error deleting team member:', error);
//         }
//     };

//     const handleAdd = () => {
//         setEditIndex(null); // Clear editIndex
//         setNewTeam({ name: '', role: '', profilePic: null });
//         setIsModalVisible(true);
//     };

//     const handleModalClose = () => {
//         setIsModalVisible(false);
//     };

//     const handleInputChange = (e) => {
//         const { name, value } = e.target;
//         setNewTeam((prevTeam) => ({
//             ...prevTeam,
//             [name]: value,
//         }));
//     };

//     const handleFileChange = (e) => {
//         setNewTeam((prevTeam) => ({
//             ...prevTeam,
//             profilePic: e.target.files[0],
//         }));
//     };

//     const handleModalSubmit = async (e) => {
//         e.preventDefault();
//         try {
//             const formData = new FormData();
//             formData.append('name', newTeam.name);
//             formData.append('role', newTeam.role);
//             formData.append('profilePic', newTeam.profilePic);

//             let response;
//             if (editIndex !== null) {
//                 // If editIndex is not null, it's an edit operation
//                 response = await fetch(`http://localhost:5000/api/teams/${teamData[editIndex]._id}`, {
//                     method: 'PUT',
//                     body: formData,
//                 });
//             } else {
//                 // Otherwise, it's an add operation
//                 response = await fetch('http://localhost:5000/api/teams', {
//                     method: 'POST',
//                     body: formData,
//                 });
//             }

//             if (response.ok) {
//                 const newData = await response.json();
//                 if (editIndex !== null) {
//                     // If editing, update the existing member in the array
//                     const updatedData = [...teamData];
//                     updatedData[editIndex] = newData;
//                     setTeamData(updatedData);
//                 } else {
//                     // If adding, append the new member to the array
//                     setTeamData([...teamData, newData]);
//                 }
//                 setIsModalVisible(false);
//             } else {
//                 console.error('Error adding/editing member:', response.statusText);
//             }
//         } catch (error) {
//             console.error('Error adding/editing member:', error);
//         }
//     };

//     const toggleOptions = (index) => {
//         if (showOptions === index) {
//             setShowOptions(null);
//         } else {
//             setShowOptions(index);
//         }
//     };

//     return (
//         <div className="absolute right-2 top-72 p-1 bg-white rounded-md h-auto w-56 shadow-md">
//             <div className="flex justify-between items-center mb-4">
//                 <h2 className="text-2xl font-bold text-black">Team</h2>
//                 <div className="relative group">
//                     <button onClick={handleAdd} className="text-xs">
//                         <FaPlusCircle className="h-6 w-6 text-black hover:text-ngreen" />
//                     </button>
//                     <span className="absolute right-0 w-24 p-1 text-xs text-black bg-white rounded hidden group-hover:block">
//                         Add member
//                     </span>
//                 </div>
//             </div>
//             <div className="grid grid-cols-3 grid-rows-3 gap-2">
//                 {teamData.map((member, index) => (
//                     <div key={index} className="relative flex flex-col items-center">
//                         {member.profilePic && (
//                             <img className="w-12 h-12 rounded-full object-cover" src={`/assest/${member.profilePic}`} alt="Profile Picture" />
//                         )}
//                         <span className="text-sm font-medium mt-2">{member.name}</span>
//                         <div className="absolute top-0 right-0 mt-1 mr-1">
//                             <button onClick={() => toggleOptions(index)} className="text-xs">
//                                 <FontAwesomeIcon icon={faEllipsisV} className="text-black" />
//                             </button>
//                             {showOptions === index && (
//                                 <div className="absolute right-0 mt-2 w-24 bg-white border rounded shadow-md">
//                                     <button onClick={() => handleEdit(index)} className="block w-full px-2 py-1 text-left text-sm hover:bg-gray-100">Edit</button>
//                                     <button onClick={() => handleDelete(index)} className="block w-full px-2 py-1 text-left text-sm hover:bg-gray-100">Delete</button>
//                                 </div>
//                             )}
//                         </div>
//                     </div>
//                 ))}
//             </div>

//             {isModalVisible && (
//                 <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
//                     <div className="bg-white p-6 rounded-md shadow-md w-96">
//                         <h2 className="text-xl mb-4">{editIndex !== null ? 'Edit Member' : 'Add New Member'}</h2>
//                         <form onSubmit={handleModalSubmit}>
//                             <div className="mb-4">
//                                 <label className="block text-sm font-medium">Name</label>
//                                 <input
//                                     type="text"
//                                     name="name"
//                                     value={newTeam.name}
//                                     onChange={handleInputChange}
//                                     className="w-full p-2 border border-gray-300 rounded-md"
//                                     required
//                                 />
//                             </div>
//                             <div className="mb-4">
//                                 <label className="block text-sm font-medium">Role</label>
//                                 <input
//                                     type="text"
//                                     name="role"
//                                     value={newTeam.role}
//                                     onChange={handleInputChange}
//                                     className="w-full p-2 border border-gray-300 rounded-md"
//                                     required
//                                 />
//                             </div>
//                             <div className="mb-4">
//                                 <label className="block text-sm font-medium">Profile Picture</label>
//                                 <input
//                                     type="file"
//                                     onChange={handleFileChange}
//                                     className="w-full p-2 border border-gray-300 rounded-md"
//                                     required
//                                 />
//                             </div>
//                             <div className="flex justify-end">
//                                 <button
//                                     type="button"
//                                     onClick={handleModalClose}
//                                     className="mr-4 p-2 bg-gray-300 rounded-md"
//                                 >
//                                     Cancel
//                                 </button>
//                                 <button
//                                     type="submit"
//                                     className="p-2 bg-dashboard text-white rounded-md"
//                                 >
//                                     {editIndex !== null ? 'Save' : 'Add'}
//                                 </button>
//                             </div>
//                         </form>
//                     </div>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default Team;
// import React, { useState, useEffect } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { FaPlusCircle } from 'react-icons/fa';
// import { faEllipsisV } from '@fortawesome/free-solid-svg-icons';

// const Team = () => {
//     const [teamData, setTeamData] = useState([]);
//     const [showOptions, setShowOptions] = useState(null);
//     const [isModalVisible, setIsModalVisible] = useState(false);
//     const [newTeam, setNewTeam] = useState({ name: '', role: '', profilePic: null });
//     const [editIndex, setEditIndex] = useState(null); // Track index of member being edited

//     useEffect(() => {
//         fetchData();
//     }, []);

//     const fetchData = async () => {
//         try {
//             const response = await fetch('http://localhost:5000/api/teams');
//             const data = await response.json();
//             setTeamData(data);
//         } catch (error) {
//             console.error('Error fetching team data:', error);
//         }
//     };

//     const handleEdit = (index) => {
//         setEditIndex(index);
//         const member = teamData[index];
//         setNewTeam({ name: member.name, role: member.role, profilePic: member.profilePic });
//         setIsModalVisible(true);
//     };

//     const handleDelete = async (index) => {
//         try {
//             const memberToDelete = teamData[index];
//             await fetch(`http://localhost:5000/api/teams/${memberToDelete._id}`, {
//                 method: 'DELETE',
//             });
//             setTeamData(teamData.filter((_, i) => i !== index));
//             console.log('Deleted member at index:', index);
//         } catch (error) {
//             console.error('Error deleting team member:', error);
//         }
//     };

//     const handleAdd = () => {
//         setEditIndex(null); // Clear editIndex
//         setNewTeam({ name: '', role: '', profilePic: null });
//         setIsModalVisible(true);
//     };

//     const handleModalClose = () => {
//         setIsModalVisible(false);
//     };

//     const handleInputChange = (e) => {
//         const { name, value } = e.target;
//         setNewTeam((prevTeam) => ({
//             ...prevTeam,
//             [name]: value,
//         }));
//     };

//     const handleFileChange = (e) => {
//         setNewTeam((prevTeam) => ({
//             ...prevTeam,
//             profilePic: e.target.files[0],
//         }));
//     };

//     const handleModalSubmit = async (e) => {
//         e.preventDefault();
//         try {
//             const formData = new FormData();
//             formData.append('name', newTeam.name);
//             formData.append('role', newTeam.role);
//             formData.append('profilePic', newTeam.profilePic);

//             let response;
//             if (editIndex !== null) {
//                 // If editIndex is not null, it's an edit operation
//                 response = await fetch(`http://localhost:5000/api/teams/${teamData[editIndex]._id}`, {
//                     method: 'PUT',
//                     body: formData,
//                 });
//             } else {
//                 // Otherwise, it's an add operation
//                 response = await fetch('http://localhost:5000/api/teams', {
//                     method: 'POST',
//                     body: formData,
//                 });
//             }

//             if (response.ok) {
//                 const newData = await response.json();
//                 if (editIndex !== null) {
//                     // If editing, update the existing member in the array
//                     const updatedData = [...teamData];
//                     updatedData[editIndex] = newData;
//                     setTeamData(updatedData);
//                 } else {
//                     // If adding, append the new member to the array
//                     setTeamData([...teamData, newData]);
//                 }
//                 setIsModalVisible(false);
//             } else {
//                 console.error('Error adding/editing member:', response.statusText);
//             }
//         } catch (error) {
//             console.error('Error adding/editing member:', error);
//         }
//     };

//     const toggleOptions = (index) => {
//         if (showOptions === index) {
//             setShowOptions(null);
//         } else {
//             setShowOptions(index);
//         }
//     };

//     return (
//         <div className="absolute right-2 top-72 p-1 bg-white rounded-md h-auto w-56 shadow-md">
//             <div className="flex justify-between items-center mb-4">
//                 <h2 className="text-2xl font-bold text-black">Team</h2>
//                 <div className="relative group">
//                     <button onClick={handleAdd} className="text-xs">
//                         <FaPlusCircle className="h-6 w-6 text-black hover:text-ngreen" />
//                     </button>
//                     <span className="absolute right-0 w-24 p-1 text-xs text-black bg-white rounded hidden group-hover:block">
//                         Add member
//                     </span>
//                 </div>
//             </div>
//             <div className="grid grid-cols-3 grid-rows-3 gap-2">
//                 {teamData.map((member, index) => (
//                     <div key={index} className="relative flex flex-col items-center">
//                         {member.profilePic && (
//                             <img className="w-12 h-12 rounded-full object-cover" src={`/assest/${member.profilePic}`} alt="Profile Picture" />
//                         )}
//                         <span className="text-sm font-medium mt-2">{member.name}</span>
//                         <div className="absolute top-0 right-0 mt-1 mr-1">
//                             <button onClick={() => toggleOptions(index)} className="text-xs">
//                                 <FontAwesomeIcon icon={faEllipsisV} className="text-black" />
//                             </button>
//                             {showOptions === index && (
//                                 <div className="absolute right-0 mt-2 w-24 bg-white border rounded shadow-md">
//                                     <button onClick={() => handleEdit(index)} className="block w-full px-2 py-1 text-left text-sm hover:bg-gray-100">Edit</button>
//                                     <button onClick={() => handleDelete(index)} className="block w-full px-2 py-1 text-left text-sm hover:bg-gray-100">Delete</button>
//                                 </div>
//                             )}
//                         </div>
//                     </div>
//                 ))}
//             </div>

//             {isModalVisible && (
//                 <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
//                     <div className="bg-white p-6 rounded-md shadow-md w-96">
//                         <h2 className="text-xl mb-4">{editIndex !== null ? 'Edit Member' : 'Add New Member'}</h2>
//                         <form onSubmit={handleModalSubmit}>
//                             <div className="mb-4">
//                                 <label className="block text-sm font-medium">Name</label>
//                                 <input
//                                     type="text"
//                                     name="name"
//                                     value={newTeam.name}
//                                     onChange={handleInputChange}
//                                     className="w-full p-2 border border-gray-300 rounded-md"
//                                     required
//                                 />
//                             </div>
//                             <div className="mb-4">
//                                 <label className="block text-sm font-medium">Role</label>
//                                 <input
//                                     type="text"
//                                     name="role"
//                                     value={newTeam.role}
//                                     onChange={handleInputChange}
//                                     className="w-full p-2 border border-gray-300 rounded-md"
//                                     required
//                                 />
//                             </div>
//                             <div className="mb-4">
//                                 <label className="block text-sm font-medium">Profile Picture</label>
//                                 <input
//                                     type="file"
//                                     onChange={handleFileChange}
//                                     className="w-full p-2 border border-gray-300 rounded-md"
//                                     required
//                                 />
//                             </div>
//                             <div className="flex justify-end">
//                                 <button
//                                     type="button"
//                                     onClick={handleModalClose}
//                                     className="mr-4 p-2 bg-gray-300 rounded-md"
//                                 >
//                                     Cancel
//                                 </button>
//                                 <button
//                                     type="submit"
//                                     className="p-2 bg-dashboard text-white rounded-md"
//                                 >
//                                     {editIndex !== null ? 'Save' : 'Add'}
//                                 </button>
//                             </div>
//                         </form>
//                     </div>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default Team;
import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FaPlusCircle } from 'react-icons/fa';
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons';

const Team = () => {
    const [teamData, setTeamData] = useState([]);
    const [showOptions, setShowOptions] = useState(null);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [newTeam, setNewTeam] = useState({ name: '', role: '', profilePic: null });
    const [editIndex, setEditIndex] = useState(null); // Track index of member being edited

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await fetch('http://localhost:5000/api/teams');
            const data = await response.json();
            setTeamData(data);
        } catch (error) {
            console.error('Error fetching team data:', error);
        }
    };

    const handleEdit = (index) => {
        setEditIndex(index);
        const member = teamData[index];
        setNewTeam({ name: member.name, role: member.role, profilePic: member.profilePic });
        setIsModalVisible(true);
    };

    const handleDelete = async (index) => {
        try {
            const memberToDelete = teamData[index];
            await fetch(`http://localhost:5000/api/teams/${memberToDelete._id}`, {
                method: 'DELETE',
            });
            setTeamData(teamData.filter((_, i) => i !== index));
            console.log('Deleted member at index:', index);
        } catch (error) {
            console.error('Error deleting team member:', error);
        }
    };

    const handleAdd = () => {
        setEditIndex(null); // Clear editIndex
        setNewTeam({ name: '', role: '', profilePic: null });
        setIsModalVisible(true);
    };

    const handleModalClose = () => {
        setIsModalVisible(false);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewTeam((prevTeam) => ({
            ...prevTeam,
            [name]: value,
        }));
    };

    const handleFileChange = (e) => {
        setNewTeam((prevTeam) => ({
            ...prevTeam,
            profilePic: e.target.files[0],
        }));
    };

    const handleModalSubmit = async (e) => {
        e.preventDefault();
        try {
            const formData = new FormData();
            formData.append('name', newTeam.name);
            formData.append('role', newTeam.role);
            formData.append('profilePic', newTeam.profilePic);

            let response;
            if (editIndex !== null) {
                // If editIndex is not null, it's an edit operation
                response = await fetch(`http://localhost:5000/api/teams/${teamData[editIndex]._id}`, {
                    method: 'PUT',
                    body: formData,
                });
            } else {
                // Otherwise, it's an add operation
                response = await fetch('http://localhost:5000/api/teams', {
                    method: 'POST',
                    body: formData,
                });
            }

            if (response.ok) {
                const newData = await response.json();
                if (editIndex !== null) {
                    // If editing, update the existing member in the array
                    const updatedData = [...teamData];
                    updatedData[editIndex] = newData;
                    setTeamData(updatedData);
                } else {
                    // If adding, append the new member to the array
                    setTeamData([...teamData, newData]);
                }
                setIsModalVisible(false);
            } else {
                console.error('Error adding/editing member:', response.statusText);
            }
        } catch (error) {
            console.error('Error adding/editing member:', error);
        }
    };

    const toggleOptions = (index) => {
        if (showOptions === index) {
            setShowOptions(null);
        } else {
            setShowOptions(index);
        }
    };

    return (
        <div className="absolute right-2 top-72 p-1 bg-white rounded-md h-auto w-56 shadow-md">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold text-black">Team</h2>
                <div className="relative group">
                    <button onClick={handleAdd} className="text-xs">
                        <FaPlusCircle className="h-6 w-6 text-black hover:text-ngreen" />
                    </button>
                    <span className="absolute right-0 w-24 p-1 text-xs text-black bg-white rounded hidden group-hover:block">
                        Add member
                    </span>
                </div>
            </div>
            <div className="grid grid-cols-3 grid-rows-3 gap-2">
                {teamData.map((member, index) => (
                    <div key={index} className="relative flex flex-col items-center">
                        {member.profilePic && (
                            <img className="w-12 h-12 rounded-full object-cover" src={`/assest/${member.profilePic}`} alt="Profile Picture" />
                        )}
                        <span className="text-sm font-medium mt-2">{member.name}</span>
                        <div className="absolute top-0 right-0 mt-1 mr-1">
                            <button onClick={() => toggleOptions(index)} className="text-xs">
                                <FontAwesomeIcon icon={faEllipsisV} className="text-black" />
                            </button>
                            {showOptions === index && (
                                <div className="absolute right-0 mt-2 w-24 bg-white border rounded shadow-md">
                                    <button onClick={() => handleEdit(index)} className="block w-full px-2 py-1 text-left text-sm hover:bg-gray-100">Edit</button>
                                    <button onClick={() => handleDelete(index)} className="block w-full px-2 py-1 text-left text-sm hover:bg-gray-100">Delete</button>
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>

            {isModalVisible && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
                    <div className="bg-white p-6 rounded-md shadow-md w-96">
                        <h2 className="text-xl mb-4">{editIndex !== null ? 'Edit Member' : 'Add New Member'}</h2>
                        <form onSubmit={handleModalSubmit}>
                            <div className="mb-4">
                                <label className="block text-sm font-medium">Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={newTeam.name}
                                    onChange={handleInputChange}
                                    className="w-full p-2 border border-gray-300 rounded-md"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-sm font-medium">Role</label>
                                <input
                                    type="text"
                                    name="role"
                                    value={newTeam.role}
                                    onChange={handleInputChange}
                                    className="w-full p-2 border border-gray-300 rounded-md"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-sm font-medium">Profile Picture</label>
                                <input
                                    type="file"
                                    onChange={handleFileChange}
                                    className="w-full p-2 border border-gray-300 rounded-md"
                                    required
                                />
                            </div>
                            <div className="flex justify-end">
                                <button
                                    type="button"
                                    onClick={handleModalClose}
                                    className="mr-4 p-2 bg-gray-300 rounded-md"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    className="p-2 bg-dashboard text-white rounded-md"
                                >
                                    {editIndex !== null ? 'Save' : 'Add'}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Team;

