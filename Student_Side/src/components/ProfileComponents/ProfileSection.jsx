import React, { useState } from "react";

export default function ProfileSection() {
    const [activeoption, setActiveoption] = useState(0);
    const handleoptionClick = (index) => {
        setActiveoption(index);
    };
    return (
        <div className="bg-[#ffffff] h-[72vh] rounded-3xl mx-4 mt-4 overflow-y-auto">
            {/*select option profile*/}
            <div className="h-[9.6vh] sticky top-0 bg-white mr-4  flex flex-wrap items-center gap-3 text-lg ml-6">
                {[
                    "Personal Info",
                    "Contact Details",
                    "Parents",
                    "Education",
                    "Awards & Achievements",
                    "Subjects",
                    "Other Info",
                ].map((item, index) => (
                    <div
                        key={index}
                        onClick={() => handleoptionClick(index)}
                        className={`${
                            activeoption === index ? "border-b-4" : "border-b-0"
                        }
                     flex items-center p-1 font-medium gap-2 cursor-pointer ml-8 border-[#004BB8]`}
                    >
                        <span>{item}</span>
                    </div>
                ))}
            </div>
            {/*select option ends*/}
            {activeoption === 0 && (
                //  Input Box
                // <InputBox />
                <div className="w-[95%] m-auto flex h-full justify-evenly">
                    <div className="w-[25%] bg-[#F2F6FF] h-full"></div>
                    <div className="w-[70%] bg-[#F2F6FF] h-full"></div>
                </div>
                // Input Box Ends
            )}
        </div>
    );
}
