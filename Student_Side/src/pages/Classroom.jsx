import React from "react";
import { useState, useEffect } from "react";
import SideBar from "../components/SideBar";
import { useRef } from "react";
import SwitchProfile from "../components/SwitchProfile";
import DocumentSection from "../components/DocumentSection";
import ProfileSection from "../components/ProfileSection";
import { useLocation } from "react-router-dom";

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
      <div className="h-screen bg-[#ECEBFE] w-full flex">
        <SideBar active={active} />
        <div className="flex flex-col w-full">
          {/*Navbar Starts*/}
          <div className="h-[84px] w-full bg-[#FBFBFB] rounded-2xl flex justify-between items-center">
            <div className="text-2xl font-semibold ml-8">Profile</div>
            <div className="flex items-center mr-5 gap-8">
              <div>
                <img src="./icons/notifications.png" />
              </div>
              <div className="bg-[#C4C4C4] h-[50px] w-[50px] rounded-2xl"></div>
            </div>
          </div>
          {/* Navbar Ends */}

          {/* Select Bar Starts */}
          <div className="h-[9.6vh] bg-[#ffffff] mt-4 mx-4 flex flex-wrap items-center">
            <div className="ml-10">
              <SwitchProfile onSwitchChange={handleSwitchChange} />
            </div>
          </div>
          {/* Select Bar Ends */}

          {/* Document Page*/}
          {activeItem === 1 && <DocumentSection />}
          {/* Document Page Ends */}
          
          {/* Profile Section Starts */}
          {activeItem === 0 && <ProfileSection />}
        </div>
      </div>
    </>
  );
}