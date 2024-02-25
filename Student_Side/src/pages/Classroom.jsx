import React from "react";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar";
import SwitchClassroom from "../components/ClassroomComponents/SwitchClassroom";
import Attendance from "../components/ClassroomComponents/Attendance/Attendance";
import Assignments from "../components/ClassroomComponents/Assignments";
import ClassNotes from "../components/ClassroomComponents/Classnotes";
import Exams from "../components/ClassroomComponents/Exams";
import Syllabus from "../components/ClassroomComponents/Syllabus";
import Feedback from "../components/ClassroomComponents/Feedback";

export default function Classroom() {
  const [active, setActive] = useState("");
  const location = useLocation();
  useEffect(() => {
    setActive(location.state.active);
  }, []);
  const [activeItem, setActiveItem] = useState(1);
  const handleSwitchChange = (value) => {
    setActiveItem(value);
  };

  return (
    <>
      <div className="h-screen overflow-hidden bg-[#ECEBFE] w-full flex">
        <SideBar active={active} />
        <div className="flex flex-col w-3/4 md:w-full">

          {/*Navbar Starts*/}
          <NavBar title="Classroom" />
          {/* Navbar Ends */}

          {/* Select Bar Starts */}
          <div className="py-3 bg-[#ffffff] mt-4 mx-4 flex flex-wrap items-center rounded-3xl">
            <div className="ml-10 rounded-2xl">
              <SwitchClassroom onSwitchChange={handleSwitchChange} activeIndex={activeItem}/>
            </div>
          </div>
          {/* Select Bar Ends */}

          {activeItem === 0 && <Attendance />}
          {activeItem === 1 && <Assignments />}
          {activeItem === 2 && <ClassNotes />}
          {activeItem === 3 && <Exams />}
          {activeItem === 4 && <Syllabus />}
          {activeItem === 5 && <Feedback />}
        </div>
      </div>
    </>
  );
}
