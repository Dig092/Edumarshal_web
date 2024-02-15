import React from "react";
import { useState, useEffect } from "react";
import SideBar from "../components/SideBar";
// import arrowup from "./icons/arrowup.svg";
// import arrowdown from "./icons/arrowdown.svg";
import { useRef } from "react";
// import { Scrollbar } from "react-scrollbars-custom";
import SwitchProfile from "../components/ProfileComponents/SwitchProfile";
import DocumentSection from "../components/ProfileComponents/DocumentSection";
import ProfileSection from "../components/ProfileComponents/ProfileSection";
import { useLocation } from "react-router-dom";
import NavBar from "../components/NavBar";

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
            <div className="h-screen bg-[#ECEBFE] w-full flex">
                <SideBar active={active} />
                <div className="flex flex-col w-full">
                    {/*Navbar Starts*/}
                    <NavBar title="Profile" />
                    {/* Navbar Ends */}
                    {/* Select Bar Starts */}
                    <div className="h-[70px] bg-[#ffffff] mt-4 mx-4 flex flex-wrap items-center rounded-3xl">
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
