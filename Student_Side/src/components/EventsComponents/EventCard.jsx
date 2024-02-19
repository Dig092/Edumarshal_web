import React from "react";
export default function EventCard ({event}) {
    return(
        <div className="w-[21rem] h-[19rem] justify-evenly  flex flex-col bg-[#FBFBFB] my-3 ml-8 rounded-3xl ">
            <div className="ml-4">
            <div className="text-2xl font-medium">{event.eventName}</div>
            <div className="text-lg text-[#4D4D4D]">{event.event}</div>
            </div>
            <div className="ml-4">
            <div className="text-base text-[#666666]">{event.hostingOrganization}</div>
            <div className="text-base text-[#808080]">IT Department</div>
            </div>
            <div className="flex text-xs justify-evenly">
                <div className="flex gap-1 justify-center items-center">
                <img src='./rupeesign.svg'/>
                <div>6000</div>
                </div>
                <div class=" border-[#00000033] border-r-[0.1rem]"></div>
                <div className="flex gap-1 justify-center items-center">
                <img src='./clocksign.svg'/>
                <div>23 Days Left</div>
                </div>
                <div class=" border-[#00000033] border-r-[0.1rem]"></div>
                <div className="flex gap-1 justify-center items-center">
                <img src='./peoplesign.svg'/>
                <div>8 Registered</div>
                </div>
            </div>
            <div className="mx-4">
            <div className="bg-[#004BB8] rounded-xl flex justify-center items-center px-8"><p className="text-base p-2 px-4 text-white">View Details</p></div>
            </div>
        </div>
    )
}
