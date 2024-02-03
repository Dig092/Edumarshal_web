// import React from "react";
// import SideBar from "../components/SideBar";
// import NavBar from "../components/NavBar";
// export default function HostelPage() {
//     return (
//         <div className="h-screen bg-[#ECEBFE] w-full flex">
//             <SideBar />
//             <div className="flex h-[60px] bg-white w-full px-4 justify-between items-center">
//             <h1 className="text-xl font-semibold">Hostel</h1>
//             </div></div>
//                 )}
import React, { useState } from "react";
import SideBar from "../components/SideBar";


export default function HostelPage() {
    const [activeTab, setActiveTab] = useState("applyLeave");

    const handleTabChange = (tab) => {
        setActiveTab(tab);
    };

    return (
        <div className="h-screen bg-[#ECEBFE] w-full flex">
            <SideBar />
            <div className="flex flex-col w-full">
                <div className="flex h-[60px] bg-white w-full px-4 justify-between items-center">
                    <h1 className="text-xl font-semibold">Hostel</h1>
                </div>
                <div className="flex w-full justify-between p-4">
                    <div
                        className={`cursor-pointer ${
                            activeTab === "applyLeave" ? "text-blue-500" : ""
                        }`}
                        onClick={() => handleTabChange("applyLeave")}
                    >
                        Apply Leave
                    </div>
                    <div
                        className={`cursor-pointer ${
                            activeTab === "yourLeave" ? "text-blue-500" : ""
                        }`}
                        onClick={() => handleTabChange("yourLeave")}
                    >
                        Your Leave
                    </div>
                </div>
                {/* Render content based on active tab */}
                {activeTab === "applyLeave" && (
                    <div>
                        {/* Content for Apply Leave tab */}
                        <p>Apply Leave Content</p>
                    </div>
                )}
                {activeTab === "yourLeave" && (
                    <div>
                        {/* Content for Your Leave tab */}
                        <p>Your Leave Content</p>
                    </div>
                )}
            </div>
        </div>
    );
}
