import React, { useEffect, useState } from "react";
import SideBar from "../components/SideBar";
import NavBar from "../components/DashboardComponents/NavBar";
import DoughNut from "../components/DashboardComponents/DonutGraph";
import ColumnGraph from "../components/DashboardComponents/ColumnGraph";
import SemiCircle from "../components/DashboardComponents/SemiCircle";
import SideCard from "../components/DashboardComponents/SideCard";
import { useLocation } from "react-router-dom";

export default function DashBoardPage() {
    const [active, setActive] = useState("");
    const location = useLocation();
    useEffect(() => {
        try {
            setActive(location.state.active);
        } catch (e) {
            setActive("");
        }
    }, []);
    return (
        <div className="bg-[#ECEBFE] w-full flex">
            <SideBar active={active} />
            <div className="text-black flex flex-col justify-between w-full">
                <NavBar />
                <div className="flex h-[120vh] mb-[1.5vh] mt-[2vh] justify-evenly">
                    <div className="h-full flex flex-col justify-between w-[71%]">
                        <div className="h-[45%] flex justify-between">
                            <div className="h-full flex flex-col items-center bg-white rounded-md w-[62%]">
                                <div className="flex w-[95%] justify-between mt-[18px] m-auto">
                                    <h1 className="font-semibold text-lg">
                                        Attendence
                                    </h1>
                                    <a
                                        className="text-xs text-blue-500"
                                        href=""
                                    >
                                        View Details
                                    </a>
                                </div>
                                <SemiCircle />
                                <ColumnGraph />
                            </div>
                            <div className="h-full flex flex-col justify-center items-center bg-white rounded-md w-[36.5%]">
                                <div className="flex my-1 justify-between w-[90%] items-center font-semibold text-lg z-50">
                                    <h1>PDP Attendence</h1>
                                    <a
                                        href=""
                                        className="text-blue-500 font-normal text-xs"
                                    >
                                        View Details
                                    </a>
                                </div>
                                <DoughNut />
                                <h1 className="font-bold text-lg mt-10 mb-1">
                                    Total Lectures - <span>40</span>
                                </h1>
                                <div className="flex w-[90%] mt-3 mb-4 bg-white z-50  justify-evenly">
                                    <div className="flex items-center">
                                        <div className="w-[10px] mr-2 h-[10px] rounded-sm bg-[#004BB8]"></div>
                                        <h1 className="text-xs">Attended</h1>
                                    </div>
                                    <div className="flex items-center">
                                        <div className="w-[10px] mr-2 h-[10px] rounded-sm bg-[#5299FF]"></div>
                                        <h1 className="text-xs">
                                            Not Attended
                                        </h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="h-[53%] w-full z-50 bg-white rounded-md"></div>
                    </div>
                    <div className="pb-10 w-[26%] h-full rounded-md">
                        <div className="h-[450px] pb-7 overflow-y-scroll flex flex-col items-center bg-white rounded-md">
                            <h1 className="text-2xl font-semibold pt-4">
                                Assignment
                            </h1>
                            <SideCard />
                            <SideCard />
                            <SideCard />
                        </div>
                        <div className="bg-white flex flex-col mt-4 pb-5 rounded-md h-fit">
                            <h1 className="text-2xl font-semibold p-4">
                                Current Events
                            </h1>
                            <div className="flex flex-col p-2 rounded-md shadow-md w-[90%] m-auto">
                                <div className="flex justify-between w-full mb-4 items-center ">
                                    <h1 className="text-lg">Upcoming Events</h1>
                                    <h2 className="text-xs">view all</h2>
                                </div>
                                <div className="bg-[#F2F6FF] w-full pb-2 rounded-lg">
                                    <div className="flex p-2 justify-between">
                                        <div className="flex w-[60%] justify-evenly">
                                            <img
                                                src="./icons/event.png"
                                                alt=""
                                                className="w-[30px] h-[30px]"
                                            />
                                            <div>
                                                <h1 className="text-[13px]">
                                                    Codeshell 5.0
                                                </h1>
                                                <h3 className="text-[9px]">
                                                    Event Organizer - CSI
                                                </h3>
                                            </div>
                                        </div>
                                        <h1 className="text-[7px]">
                                            1 Day ago
                                        </h1>
                                    </div>
                                    <div className="w-[90%] m-auto mb-1">
                                        <h1 className="text-xs font-medium">
                                            About Event:
                                        </h1>
                                        <p className="text-[8px] text-gray-600">
                                            Coding event Organised by{" "}
                                            <span className="text-gray-600 font-semibold">
                                                Computer Society Of India.
                                            </span>{" "}
                                            This is a coding event for 2nd, 3rd,
                                            4th year students. The Prize money
                                            of this event is 3000 rupees.{" "}
                                        </p>
                                    </div>
                                    <div className="w-[90%] m-auto">
                                        <h1 className="text-[9px] text-gray-600">
                                            <span className="font-medium text-black">
                                                Event Date:
                                            </span>{" "}
                                            21/9/2024{" "}
                                        </h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
