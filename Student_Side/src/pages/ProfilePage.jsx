import React from "react";
import { useState, useEffect } from "react";
import SideBar from "../components/SideBar";
import { useRef } from "react";
import SwitchProfile from "../components/ProfileComponents/SwitchProfile";
import DocumentSection from "../components/ProfileComponents/DocumentSection";
import ProfileSection from "../components/ProfileComponents/ProfileSection";
import { useLocation } from "react-router-dom";
import NavBar from "../components/NavBar";
import SideBarMobile from "../components/SideBarMobile";

export default function ProfilePage() {
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
            <div className="h-screen  bg-[#ECEBFE] w-full flex">
                {/* <SideBar active={active} /> */}
                <div className="max-[767px]:hidden">
                    <SideBar active={active} />
                </div>
                <div className="min-[767px]:hidden">
                    <SideBarMobile active={active} />
                </div>

                <div className="flex flex-col w-full">
                    {/*Navbar Starts*/}
                    <NavBar title="Profile" />
                    {/* Navbar Ends */}
                    {/* Select Bar Starts */}
                    <div className=" max-[1024px]:w-[94%] max-[1024px]:ml-[100px] max-[1024px]:mx-0  bg-[#ffffff] mt-4 mx-4 flex flex-wrap items-center rounded-3xl">
                        <div className="ml-10">
                            <SwitchProfile
                                onSwitchChange={handleSwitchChange}
                                activeIndex={activeItem}
                            />
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
