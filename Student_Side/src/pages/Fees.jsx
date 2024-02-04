import React from "react";
import SideBar from "../components/SideBar";
import FeesNavbar from "../components/FeesComponents/FeesNavbar";

export default function Fees() {
    return (
        <div className="h-screen bg-[#ECEBFE] w-full flex">
            <SideBar/>
            <div className="flex flex-col w-full">
                <FeesNavbar/>
            </div>

        </div>
    )
}