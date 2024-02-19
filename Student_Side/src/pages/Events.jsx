import React, { useState, useEffect } from "react";
import axios from "axios";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { FaArrowLeft } from 'react-icons/fa';
import SideBar from "../components/SideBar";
import SideBarMobile from "../components/SideBarMobile";
import NavBar from "../components/NavBar";
import EventCard from "../components/EventsComponents/EventCard";

export default function Events() {
    const [active, setActive] = useState("");
    const [events, setEvents] = useState([]);
    const [selectedEvent, setSelectedEvent] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("https://akgec-edu.onrender.com/v1/student/event");
                setEvents(response.data.event);
            } catch (error) {
                console.error("Error fetching data: ", error);
            }
        };
        fetchData();
    }, []);

    const handleViewDetails = (eventId) => {
        const selected = events.find(event => event._id === eventId);
        setSelectedEvent(selected);
    };

    const handleEventDetails = () => {
        setSelectedEvent(null);
    };

    return (
        <div className="h-screen bg-[#ECEBFE] w-full flex">
            <div className="max-[500px]:hidden">
                <SideBar active={active} />
            </div>
            <div className="min-[500px]:hidden">
                <SideBarMobile active={active} />
            </div>
            <div className="text-black flex flex-col max-[500px]:items-center w-full">
                <NavBar title="Events" />
                <div className="bg-[#ffffff] mt-4 flex rounded-2xl w-[97%] md:h-[4rem] md:ml-5 h-[3rem] items-center md:justify-start justify-center">
                    <div className="my-3 ml-10 bg-[#004BB8] md:p-2 p-1 px-4 rounded-[0.5rem]"><p className="text-white text-sm md:text-base">College Events</p></div>
                </div>
                <div className="bg-[#ffffff] md:h-[73vh] h-[90vh] rounded-3xl m-6 overflow-y-auto md:flex md:flex-row flex flex-col">
                    <div className="m-4 md:w-[30%] flex justify-center items-center">
                        <Calendar/>
                    </div>
                    {selectedEvent ? (
                        <div className="w-[60%] bg-[#F2F6FF] h-[30rem] mt-10 rounded-[0.5rem] overflow-y-auto flex justify-center items-center">
                            <div className="cursor-pointer" onClick={handleEventDetails}>            
                                <FaArrowLeft />
                            </div>     
                            <div className="w-[33rem] h-[25rem] justify-evenly ml-12 flex flex-col bg-[#FBFBFB] rounded-3xl">
                                <div className="flex justify-between">
                                    <div className="ml-10">
                                        <div className="text-2xl font-medium">{selectedEvent.eventName}</div>
                                        <div className="text-lg text-[#4D4D4D]">{selectedEvent.event}</div>
                                    </div>
                                    <div className="mr-10 items-center flex flex-col">
                                        <div className="text-sm text-[#666666]">{selectedEvent.hostingOrganization}</div>
                                        <div className="text-xs text-[#808080]">IT Department</div>
                                    </div>
                                </div>
                                <div className="ml-10 text-xl font-semibold">Event Details</div>
                                <div className="ml-10">
                                    <div className="flex"><p className="text-base font-medium">Date : {selectedEvent.date}</p></div>
                                    <div className="flex"><p className="text-base font-medium">Venue : {selectedEvent.venue}</p></div>
                                    <div className="flex"><p className="text-base font-medium">For Queries Contact : {selectedEvent.contact}</p></div>
                                    <div className="flex"><p className="text-base font-medium">Prize : {selectedEvent.prize}</p></div>
                                    <div className="flex"><p className="text-base font-medium">Time Left : {selectedEvent.timeLeft}</p></div>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div className="w-[60%] bg-[#F2F6FF] h-[30rem] mt-10 rounded-[0.5rem] overflow-y-auto grid xl:grid-cols-2 grid-cols-1 justify-center items-center">
                            {events.map(event => (
                                <EventCard key={event._id} event={event} handleViewDetails={() => handleViewDetails(event._id)} />
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
