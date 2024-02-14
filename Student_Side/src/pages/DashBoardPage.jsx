import React, { useEffect, useState } from "react";
import SideBar from "../components/SideBar";
import NavBar from "../components/DashboardComponents/NavBar";
import DoughNut from "../components/DashboardComponents/DonutGraph";
import ColumnGraph from "../components/DashboardComponents/ColumnGraph";
import SemiCircle from "../components/DashboardComponents/SemiCircle";
import SideCard from "../components/DashboardComponents/SideCard";
import { useLocation } from "react-router-dom";
import SideBarMobile from "../components/SideBarMobile";
import axios from "axios";
import totalAtt from "../constants/totalAtt";

export default function DashBoardPage() {
    const [active, setActive] = useState("");
    const [att, setAtt] = useState(0);
    const [array, setArray] = useState([]);
    const location = useLocation();

    const getAttendence = () => {
        axios
            .get("https://akgec-edu.onrender.com/v1/student/attendance", {
                withCredentials: true,
            })
            .then((res) => {
                setArray(res.data);
                setAtt(totalAtt(res.data).attendance);
            })
            .catch((e) => {
                console.log(e);
            });
    };

    useEffect(() => {
        try {
            setActive(location.state.active);
        } catch (e) {
            setActive("");
        }
        getAttendence();
    }, []);
    return (
        <div className="bg-[#ECEBFE] w-full flex">
            <div className="max-[500px]:hidden">
                <SideBar active={active} />
            </div>
            <div className="min-[500px]:hidden">
                <SideBarMobile active={active} />
            </div>
            <div className="text-black flex flex-col max-[500px]:items-center w-full">
                <NavBar />

                <div className="flex max-[780px]:w-full max-[500px]:items-center max-[500px]:flex-col max-[780px]:ml-[70px] max-[500px]:ml-0 mb-[1.5vh] mt-[2vh] justify-evenly">
                    <div className="h-full flex max-[1000px]:w-[95%] flex-col w-[71%]">
                        <div className="h-full max-[500px]:flex-col max-[500px]:items-center flex justify-between">
                            <div className="h-full flex flex-col items-center  bg-white rounded-md max-[800px]:w-1/2 max-[500px]:mb-3 max-[500px]:w-[97%] w-[62%]">
                                <div className="flex w-[95%] justify-between mt-[18px] max-[500px]:translate-x-3 m-auto">
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
                                <SemiCircle att={att} />
                                <ColumnGraph array={array} />
                            </div>
                            <div className="h-full max-[800px]:w-[48%] flex flex-col justify-between items-center max-[500px]:w-[97%] max-[500px]:mb-3 bg-white rounded-md w-[36.5%]">
                                <div className="flex my-1 mt-3 justify-between w-[90%] items-center font-semibold text-lg z-50">
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
                        <div className="w-full max-[500px]:hidden z-50 my-3 bg-white rounded-md">
                            <img className="" src="./timetable.png" alt="" />
                        </div>
                    </div>
                    <div className="pb-10 max-[1000px]:hidden max-[500px]:block max-[500px]:w-[95%] w-[26%] h-full rounded-md">
                        <div className="h-[450px] max-[500px]:h-fit pb-7 overflow-y-scroll flex flex-col items-center bg-white rounded-md">
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
                            <div className="flex flex-col p-2 rounded-md shadow-md w-[90%] m-auto max-[500px]:translate-x-5">
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
                                    <div className="w-[90%] m-auto max-[500px]:translate-x-5 mb-1">
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
                                    <div className="w-[90%] m-auto max-[500px]:translate-x-5">
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
