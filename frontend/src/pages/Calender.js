
// import React, { useState, useEffect } from 'react';
// import { Calendar as BigCalendar, momentLocalizer } from 'react-big-calendar';
// import moment from 'moment';
// import 'react-big-calendar/lib/css/react-big-calendar.css';
// import axios from 'axios';
// import Calendar from '../components/Calendar'; // Ensure you have the correct import path

// const localizer = momentLocalizer(moment);

// const MyCalendarComponent = () => {
//   const [view, setView] = useState('month');
//   const [events, setEvents] = useState([]);
//   const [showEventForm, setShowEventForm] = useState(false);
//   const [eventFormData, setEventFormData] = useState({
//     title: '',
//     start: '',
//     end: ''
//   });

//   const fetchEvents = async () => {
//     try {
//       const response = await axios.get('http://localhost:5000/api/events');
//       const eventsData = response.data.map(event => ({
//         title: event.title,
//         start: new Date(event.date),
//         end: new Date(event.date)
//       }));
//       setEvents(eventsData);
//     } catch (error) {
//       console.error('Error fetching events:', error);
//     }
//   };

//   useEffect(() => {
//     fetchEvents();
//   }, []);

//   const handleViewChange = newView => {
//     setView(newView);
//   };

//   const handleInputChange = event => {
//     const { name, value } = event.target;
//     setEventFormData({
//       ...eventFormData,
//       [name]: value
//     });
//   };

//   const handleSubmit = async event => {
//     event.preventDefault();
//     try {
//       const response = await axios.post('http://localhost:5000/api/events', eventFormData);
//       console.log('Event added:', response.data);
//       fetchEvents(); // Refresh events after adding a new one
//       setShowEventForm(false); // Hide the form after adding the event
//     } catch (error) {
//       console.error('Error adding event:', error);
//     }
//   };

//   return (
//     <div>
//       <div className="flex mt-3 space-x-4 mb-4">
//         <h1 className='text-2xl mr-[820px]' >Calendar</h1>
        
//         <button className=" btn  w-20 rounded bg-dashboard" onClick={() => setShowEventForm(true)}>
//           Add Event
//         </button>
//       </div>
//       {showEventForm && (
//         <form onSubmit={handleSubmit}>
//           <label>
//             Title:
//             <input
//               type="text"
//               name="title"
//               value={eventFormData.title}
//               onChange={handleInputChange}
//               required
//             />
//           </label>
//           <label>
//             Start:
//             <input
//               type="datetime-local"
//               name="start"
//               value={eventFormData.start}
//               onChange={handleInputChange}
//               required
//             />
//           </label>
//           <label>
//             End:
//             <input
//               type="datetime-local"
//               name="end"
//               value={eventFormData.end}
//               onChange={handleInputChange}
//               required
//             />
//           </label>
//           <button type="submit">Submit</button>
//         </form>
//       )}
//       <BigCalendar
//         localizer={localizer}
//         events={events}
//         startAccessor="start"
//         endAccessor="end"
//         views={['month', 'week', 'day']}
//         view={view}
//         style={{ height: 500 }}
//       />
//       <Calendar events={events} />
//     </div>
//   );
// };

// export default MyCalendarComponent;
// import React, { useState, useEffect } from 'react';
// import { Calendar as BigCalendar, momentLocalizer } from 'react-big-calendar';
// import moment from 'moment';
// import 'react-big-calendar/lib/css/react-big-calendar.css';
// import axios from 'axios';
// import Popup from '../components/Popup.js'; // Import the Popup component

// const localizer = momentLocalizer(moment);

// const MyCalendarComponent = () => {
//   const [view, setView] = useState('month');
//   const [events, setEvents] = useState([]);
//   const [showEventForm, setShowEventForm] = useState(false);
//   const [eventFormData, setEventFormData] = useState({
//     title: '',
//     description: '',
//     startDate: new Date(), // Initialize with a default value (e.g., current date)
//     endDate: new Date() // Initialize with a default value (e.g., current date)
//   });
  

//   const fetchEvents = async () => {
//     try {
//       const response = await axios.get('http://localhost:5000/api/events');
//       const eventsData = response.data.map(event => ({
//         title: event.title,
//         description: event.description,
//         startDate: new Date(event.start),
//         endDate: new Date(event.end)
//       }));
//       setEvents(eventsData);
//     } catch (error) {
//       console.error('Error fetching events:', error);
//     }
//   };

//   useEffect(() => {
//     fetchEvents();
//   }, []);

//   const handleViewChange = newView => {
//     setView(newView);
//   };

//   const handleInputChange = event => {
//     const { name, value } = event.target;
//     setEventFormData({
//       ...eventFormData,
//       [name]: value
//     });
//   };

//   const handleSubmit = async event => {
//     event.preventDefault();
//     try {
//       const response = await axios.post('http://localhost:5000/api/events', eventFormData);
//       console.log('Event added:', response.data);
//       fetchEvents(); // Refresh events after adding a new one
//       setShowEventForm(false); // Hide the form after adding the event
//     } catch (error) {
//       console.error('Error adding event:', error);
//     }
//   };

//   const handleCalendarClick = () => {
//     setShowEventForm(true);
//   };

//   return (
//     <div>
//       <div className="flex mt-3 space-x-4 mb-4">
//         <h1 className="text-2xl mr-[820px]">Calendar</h1>
//         <button className="btn w-20 right-5 rounded-lg bg-dashboard text-white py-2 hover:bg-blue-700" onClick={handleCalendarClick}>
//           Add Event
//         </button>
//       </div>
//       {showEventForm && (
//         <Popup
//           eventFormData={eventFormData}
//           handleInputChange={handleInputChange}
//           handleSubmit={handleSubmit}
//           handleClose={() => setShowEventForm(false)}
//         />
//       )}
//       <BigCalendar
//         localizer={localizer}
//         events={events}
//         startAccessor="start"
//         endAccessor="end"
//         views={['month', 'week', 'day']}
//         defaultView={view}
//         style={{ height: 500 }}
//         onView={handleViewChange} // Handle view change dynamically
//       />
//     </div>
//   );
// };

// export default MyCalendarComponent;
// import React, { useState, useEffect } from 'react';
// import { Calendar as BigCalendar, momentLocalizer } from 'react-big-calendar';
// import moment from 'moment';
// import 'react-big-calendar/lib/css/react-big-calendar.css';
// import axios from 'axios';
// import Popup from '../components/Popup.js'; // Import the Popup component

// const localizer = momentLocalizer(moment);

// const MyCalendarComponent = () => {
//   const [view, setView] = useState('month');
//   const [events, setEvents] = useState([]);
//   const [showEventForm, setShowEventForm] = useState(false);
//   const [eventFormData, setEventFormData] = useState({
//     title: '',
//     description: '',
//     startDate: new Date(),
//     endDate: new Date()
//   });

//   const fetchEvents = async () => {
//     try {
//       const response = await axios.get('http://localhost:5000/api/events');
//       const eventsData = response.data.map(event => ({
//         title: event.title,
//         description: event.description,
//         startDate: new Date(event.start),
//         endDate: new Date(event.end)
//       }));
//       setEvents(eventsData);
//     } catch (error) {
//       console.error('Error fetching events:', error);
//     }
//   };

//   useEffect(() => {
//     fetchEvents();
//   }, []);

//   const handleViewChange = newView => {
//     setView(newView);
//   };

//   const handleInputChange = event => {
//     const { name, value } = event.target;
//     setEventFormData({
//       ...eventFormData,
//       [name]: value
//     });
//   };

//   const handleSubmit = async event => {
//     event.preventDefault();
//     try {
//       const response = await axios.post('http://localhost:5000/api/events', eventFormData);
//       console.log('Event added:', response.data);
//       fetchEvents(); // Refresh events after adding a new one
//       setShowEventForm(false); // Hide the form after adding the event
//     } catch (error) {
//       console.error('Error adding event:', error);
//     }
//   };

//   const handleCalendarClick = () => {
//     setShowEventForm(true);
//   };

//   // Handle clicking on month or day to change the view
//   const handleDateClick = (event, view) => {
//     if (view === 'month') {
//       setView('week');
//     } else if (view === 'week') {
//       setView('day');
//     }
//   };

//   return (
//     <div>
//       <div className="flex mt-3 space-x-4 mb-4">
//         <h1 className="text-2xl mr-[820px]">Calendar</h1>
//         <button className="btn w-20 right-5 rounded-lg bg-dashboard text-white py-2 hover:bg-blue-700" onClick={handleCalendarClick}>
//           Add Event
//         </button>
//       </div>
//       {showEventForm && (
//         <Popup
//           eventFormData={eventFormData}
//           handleInputChange={handleInputChange}
//           handleSubmit={handleSubmit}
//           handleClose={() => setShowEventForm(false)}
//         />
//       )}
//       <BigCalendar
//         localizer={localizer}
//         events={events}
//         startAccessor="startDate"
//         endAccessor="endDate"
//         views={['month', 'week', 'day']}
//         defaultView={view}
//         style={{ height: 500 }}
//         onView={handleViewChange}
//         onSelectSlot={handleDateClick} // Handle clicking on month or day
//       />
//     </div>
//   );
// };

// export default MyCalendarComponent;

import React, { useState, useEffect } from 'react';
import { Calendar as BigCalendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import axios from 'axios';
import Popup from '../components/Popup.js'; // Import the Popup component

const localizer = momentLocalizer(moment);

const MyCalendarComponent = () => {
  const [events, setEvents] = useState([]);
  const [showEventForm, setShowEventForm] = useState(false);
  const [eventFormData, setEventFormData] = useState({
    title: '',
    description: '',
    startDate: new Date(),
    endDate: new Date()
  });

  const fetchEvents = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/events');
      const eventsData = response.data.map(event => ({
        title: event.title,
        description: event.description,
        startDate: new Date(event.start),
        endDate: new Date(event.end)
      }));
      setEvents(eventsData);
    } catch (error) {
      console.error('Error fetching events:', error);
    }
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  const handleInputChange = event => {
    const { name, value } = event.target;
    setEventFormData({
      ...eventFormData,
      [name]: value
    });
  };

  const handleSubmit = async event => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/events', eventFormData);
      console.log('Event added:', response.data);
      fetchEvents(); // Refresh events after adding a new one
      setShowEventForm(false); // Hide the form after adding the event
    } catch (error) {
      console.error('Error adding event:', error);
    }
  };

  const handleCalendarClick = () => {
    setShowEventForm(true);
  };

  return (
    <div>
      <div className="flex mt-3 space-x-4 mb-4">
        <h1 className="text-2xl mr-[820px]">Calendar</h1>
        <button className="btn w-20 right-5 rounded-lg bg-dashboard text-white py-2 hover:bg-blue-700" onClick={handleCalendarClick}>
          Add Event
        </button>
      </div>
      {showEventForm && (
        <Popup
          eventFormData={eventFormData}
          handleInputChange={handleInputChange}
          handleSubmit={handleSubmit}
          handleClose={() => setShowEventForm(false)}
        />
      )}
      <BigCalendar
        localizer={localizer}
        events={events}
        startAccessor="startDate"
        endAccessor="endDate"
        defaultView="month" // You can change this to 'week' or 'day' if you prefer
        style={{ height: 500 }}
        selectable
      />
    </div>
  );
};

export default MyCalendarComponent;
