import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import SwitchClassroomTeacher from "../components/Classroom/SwitchClassroomTeacher";
import NavBarTeacher from "../components/NavBarTeacher";
import SideBarTeacher from "../components/SideBarTeacher";

import Attendance from "../components/Classroom/Attendance";
import Assignments from "../components/Classroom/Assignments";
import ClassNotes from "../components/Classroom/ClassNotes";
import Exams from "../components/Classroom/Exams";
import Feedback from "../components/Classroom/Feedback";

const Classroom = () => {
  // const [active, setActive] = useState("");
  // const location = useLocation();

  // useEffect(() => {
  //   setActive(location.state.active);
  // }, []);

  const [activeItem, setActiveItem] = useState(0);

  const handleSwitchChange = (value) => {
    setActiveItem(value);
  };

  return (
    <>
      <div className=" bg-[#ECEBFE] w-full flex">
        {/* SideBar */}
        <div className="hidden md:block">
          <SideBarTeacher  />
        </div>
        {/* <div className="block md:hidden">
          <SideBarMobile active={active} />
        </div> */}

        <div className="flex flex-col w-full">
          {/* Navbar */}
          <NavBarTeacher title="Classroom" />

          {/* Select Bar */}
          <div className="hidden md:block items-center justify-center  py-4 bg-[#ffffff] mt-4 mx-4 rounded-3xl">
            <div className="ml-10 rounded-2xl">
              <SwitchClassroomTeacher
                onSwitchChange={handleSwitchChange}
                activeIndex={activeItem}
              />
            </div>
          </div>

          {/* Main Content */}
          <div className="flex w-full ">
            {activeItem === 0 && <Attendance />}
            {activeItem === 1 && <Assignments />}
            {activeItem === 2 && <ClassNotes />}
            {activeItem === 3 && <Exams />}
            {activeItem === 4 && <Feedback />}
          </div>
        </div>
      </div>
    </>
  );
}

export default Classroom;
