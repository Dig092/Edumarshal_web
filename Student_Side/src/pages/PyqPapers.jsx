import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import SideBar from "../components/SideBar";
import NavBar from "../components/NavBar";
import SideBarMobile from "../components/SideBarMobile";
import Subjectwise from '../components/PYQComponents/Subjectwise';
import Yearwise from '../components/PYQComponents/Yearwise';
import SwitchPYQ from '../components/PYQComponents/SwitchPWQ';


// Example subjects
const subjects = ["Math", "Science", "History"]; 

function PyqPapers() {
  const [active, setActive] = useState("");
  const location = useLocation();

  useEffect(() => {
    if (location.state && location.state.active) {
      setActive(location.state.active);
    }
  }, [location.state]);

  const [activeItem, setActiveItem] = useState(0);
  const [selectedSubject, setSelectedSubject] = useState(0); // New state for selected subject

  const handleSwitchChange = (value) => {
    setActiveItem(value);
    setSelectedSubject(0); // Reset selected subject when switching between Subjectwise and Yearwise
  };

  return (
    <div className="bg-[#ECEBFE] w-full flex">
      {/* SideBar */}
      <div className="hidden md:block">
        <SideBar active={active} />
      </div>
      <div className="block md:hidden">
        <SideBarMobile active={active} />
      </div>

      <div className="flex flex-col w-full">
        {/* Navbar */}
        <NavBar title="PYQ Papers" />

        {/* Select Bar */}
        <div className="hidden md:block items-center justify-center py-4 bg-[#ffffff]  mt-4 mx-4 rounded-3xl">
          <div className="ml-10 flex justify-between rounded-2xl">
            <div className="flex gap-4">
              {activeItem === 0 ? (
                subjects.map((subject, index) => (
                  <div
                    key={index}
                    onClick={() => setSelectedSubject(index)} // Set selected subject
                    className={`text-black p-3 font-medium text-lg cursor-pointer ${
                      selectedSubject === index ? "border-b-4 border-[#004BB8]" : ""
                    }`}
                  >
                    {subject}
                  </div>
                ))
              ) : (
                <div className="text-black p-3 font-medium text-lg cursor-pointer border-b-4 border-[#ffffff]">
                  All PYQ
                </div>
              )}
            </div>

            <SwitchPYQ onSwitchChange={handleSwitchChange} activeIndex={activeItem} />
          </div>
          
        </div>

        {/* Main Content */}
        <div className="bg-[#ffffff] h-dvh flex items-center justify-center rounded-3xl mx-4 mt-4 overflow-y-auto ">
      <div className="w-[95%] flex justify-center items-center">
      {activeItem === 0 ? <Subjectwise/> : <Yearwise />}
        </div>
        </div>
       
      </div>
    </div>
  );
}

export default PyqPapers;