import React, { useEffect, useState } from "react";
import SideBar from "../components/SideBar";
import NavBar from "../components/NavBar";
import DoughNut from "../components/DashboardComponents/DonutGraph";
import ColumnGraph from "../components/DashboardComponents/ColumnGraph";
import SemiCircle from "../components/DashboardComponents/SemiCircle";
import SideCard from "../components/DashboardComponents/SideCard";
import { useLocation } from "react-router-dom";
import SideBarMobile from "../components/SideBarMobile";
import axios from "axios";
import totalAtt from "../constants/totalAtt";
import { separateAssignment } from "../constants/separateAssignments";
import Loader from "../components/Loader";
import EventsCard from "../components/DashboardComponents/EventsCard";
import {Snackbar} from '@mui/material';
import MuiAlert from '@mui/lab/Alert';

export default function DashBoardPage() {
    const [active, setActive] = useState("");
    const [att, setAtt] = useState(0);
    const [array, setArray] = useState([]);
    const [timetable, setTimetable] = useState("");
    const [assignment, setAssignment] = useState([]);
    const [loading, setLoading] = useState(false);
    const [pdp, setPdp] = useState([0, 0]);
    const [events, setEvents] = useState([]);
    const location = useLocation();
    const [snackbarOpen, setSnackbarOpen] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState('');

  const getResponses = () => {
    axios
      .get("https://akgec-edu.onrender.com/v1/student/attendance", {
        withCredentials: true,
      })
      .then((res) => {
        setArray(res.data);
        setAtt(totalAtt(res.data).attendance);
        axios
          .get("https://akgec-edu.onrender.com/v1/student/event")
          .then((res) => {
            setEvents(res.data.event);
            axios
              .get("https://akgec-edu.onrender.com/v1/student/timetable", {
                withCredentials: true,
              })
              .then((res) => {
                setTimetable(res.data.timetable);
                axios
                  .get("https://akgec-edu.onrender.com/v1/student/assignment", {
                    withCredentials: true,
                  })
                  .then((res) => {
                    setAssignment(separateAssignment(res.data.assignment));
                    axios
                      .get(
                        "https://akgec-edu.onrender.com/v1/student/pdpattendance",
                        { withCredentials: true }
                      )
                      .then((res) => {
                        setPdp([
                          res.data.totalClasses - res.data.totalPresent,
                          res.data.totalPresent,
                        ]);
                      })
                      .catch((err) => {
                        console.log(err);
                      });
                    setLoading(false);
                  })
                  .catch((e) => {
                    console.log(e);
                    setLoading(false);
                  });
              })
              .catch((e) => {
                console.log(e);
                setLoading(false);
              });
          })
          .catch((e) => {
            console.log(e);
            setLoading(false);
          });
      })
      .catch((e) => {
        console.log(e);
        setLoading(false);
      });
  };

    useEffect(() => {
        try {
            setActive(location.state.active);
        } catch (e) {
            setActive("");
        }
        setLoading(true);
        getResponses();

        // Check if there's a success message from the login page
        const successMessage = location.state?.successMessage;
        if (successMessage) {
            setSnackbarMessage(successMessage);
            setSnackbarOpen(true);
        }
    }, [location.state]);

    return (
        <div>
            {loading ? (
                <Loader />
            ) : (
                <div className="bg-[#ECEBFE] w-full flex">
                    <div className="max-[767px]:hidden">
                        <SideBar active={active} />
                    </div>
                    <div className="min-[767px]:hidden">
                        <SideBarMobile active={active} />
                    </div>
                    <div className="text-black flex flex-col max-[500px]:items-center w-full">
                        <NavBar title="Dashboard" />

                        <div className="flex max-[1024px]:w-full max-[500px]:items-center max-[500px]:flex-col max-[1024px]:ml-[70px] max-[500px]:ml-0 mb-[1.5vh] mt-[2vh] justify-evenly">
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
                                        <DoughNut pdp={pdp} />
                                        <h1 className="font-bold text-lg mt-10 mb-1">
                                            Total Lectures -{" "}
                                            <span>{`${pdp[0] + pdp[1]}`}</span>
                                        </h1>
                                        <div className="flex w-[90%] mt-3 mb-4 bg-white z-50  justify-evenly">
                                            <div className="flex items-center">
                                                <div className="w-[10px] mr-2 h-[10px] rounded-sm bg-[#004BB8]"></div>
                                                <h1 className="text-xs">
                                                    Attended
                                                </h1>
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
                                    <img className="" src={timetable} alt="" />
                                </div>
                            </div>
                            <div className="pb-10 max-[1000px]:hidden max-[500px]:block max-[500px]:w-[95%] w-[26%] h-full rounded-md">
                                <div className="h-[450px] max-[500px]:h-fit pb-7 overflow-y-scroll flex flex-col items-center bg-white rounded-md">
                                    <h1 className="text-2xl font-semibold pt-4">
                                        Assignment
                                    </h1>
                                    {assignment.map((assignment, id) => (
                                        <SideCard key={id} array={assignment} />
                                    ))}
                                </div>
                                <div className="bg-white flex flex-col mt-4 pb-5 rounded-md h-[400px] overflow-y-scroll">
                                    <h1 className="text-2xl font-semibold p-4">
                                        Current Events
                                    </h1>
                                    <div className="flex flex-col p-2 rounded-md shadow-md w-[90%] m-auto max-[500px]:translate-x-5">
                                        <div className="flex justify-between w-full mb-4 items-center ">
                                            <h1 className="text-lg">
                                                Upcoming Events
                                            </h1>
                                            <h2 className="text-xs">
                                                view all
                                            </h2>
                                        </div>
                                        {events != [] &&
                                            events.map((event, id) => (
                                                <EventsCard
                                                    event={event}
                                                    key={id}
                                                />
                                            ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Snackbar
                open={snackbarOpen}
                autoHideDuration={3000}
                onClose={() => setSnackbarOpen(false)}
            >
                <MuiAlert
                    onClose={() => setSnackbarOpen(false)}
                    severity="success"
                    elevation={6}
                    variant="filled"
                >
                    {snackbarMessage}
                </MuiAlert>
            </Snackbar>
                </div>
            )}
        </div>
    );
}
