import React, { useState } from "react";
import SideBar from "../components/SideBar";
import SideBarMobile from "../components/SideBarMobile";
import NavBar from "../components/NavBar";
import { useEffect } from "react";
import axios from "axios";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import EventCard from "../components/EventsComponents/EventCard";

export default function Events() {
    const [active, setActive] = useState("");
    const [events, setEvents] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("https://akgec-edu.onrender.com/v1/student/event");
                setEvents(response.data.event);
                console.log(events);
            } catch (error) {
                console.error("Error fetching data: ", error);
            }
        };
        fetchData();
    }, []);
    
    const hasEvent = (date) => {
        return events.some(event => new Date(event.date).toDateString() === date.toDateString());
    };

    const renderTileContent = ({ date, view }) => {
        if (view === 'month') {
            const dateString = date.toDateString();
            return hasEvent(date) ? <div className="red-dot"></div> : null;
        }
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
                <div className=" bg-[#ffffff] mt-4 flex rounded-2xl w-[97%] md:h-[4rem] md:ml-5 h-[3rem] items-center md:justify-start justify-center">
                  <div className="my-3 ml-10 bg-[#004BB8] md:p-2 p-1 px-4 rounded-[0.5rem]"><p className="text-white text-sm md:text-base">College Events</p></div></div>
                  <div className="bg-[#ffffff] md:h-[73vh] h-[90vh] rounded-3xl m-6 overflow-y-auto flex flex-wrap">
                     <div className="m-4 w-[30%] flex justify-center items-center">
                        <Calendar/>
                     </div>
                     <div className="w-[60%] bg-[#F2F6FF] h-[30rem] mt-10 ml-10 rounded-[0.5rem] overflow-y-auto grid xl:grid-cols-2 grid-cols-1 justify-center items-center">
                     {events.map(event => (
                            <EventCard key={event._id} event={event} />
                        ))}
                     </div>
                </div>
                </div> 
        </div>
    );
}
