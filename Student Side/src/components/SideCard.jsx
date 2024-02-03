import React, { useState } from "react";

export default function SideCard() {
    const [open, setOpen] = useState(false);
    const [height, setHeight] = useState("100px");
    const openHandler = () => {
        setHeight(!open ? "220px" : "100px");
        setOpen(!open);
        console.log(height);
        console.log(open);
    };
    return (
        <div
            className="w-[90%] mt-4 transition-all pb-4 rounded-md shadow-sm cursor-pointer shadow-black"
            style={{ height: height }}
        >
            {" "}
            <div className="flex w-[90%] m-auto mt-2 justify-between">
                <h1 className="font-semibold text-[15px]">Mathematics</h1>
                <img
                    onClick={openHandler}
                    src={`${open ? "./icons/up.png" : "./icons/down.png"}`}
                    alt=""
                    className="w-[20px] h-[20px]"
                />
            </div>
            <div className="flex justify-between items-end w-[90%] mt-3 m-auto">
                <div className="flex justify-evenly">
                    <img
                        className="w-[40px] h-[40px] mr-2"
                        src="./icons/teacherImage.png"
                        alt=""
                    />
                    <div className="flex flex-col justify-center">
                        <h1 className="text-[12px]">Minakshi Mam</h1>
                        <h2 className="text-[9px] text-gray-500">
                            Assitant Professor
                        </h2>
                    </div>
                </div>
                <span className="text-[9px] text-gray-600">view all</span>
            </div>
            <div>
                <div
                    className="flex justify-between items-center w-[90%] m-auto my-3 mt-5 bg-[#F2F6FF] py-1 px-2 rounded-lg"
                    style={{ display: `${open ? "flex" : "none"}` }}
                >
                    <div className="flex items-center">
                        <img
                            className="w-[30px] h-[30px] mr-2"
                            src="./icons/task.png"
                            alt=""
                        />
                        <div>
                            <h1 className="text-[10px] font-medium">
                                Statical Technique I
                            </h1>
                            <h2 className="text-[8px] text-gray-500">
                                Status - <span>Pending</span>
                            </h2>
                        </div>
                    </div>
                    <h3 className="text-[9px]">4:30pm</h3>
                </div>
                <div
                    className="flex justify-between items-center w-[90%] m-auto my-3 bg-[#F2F6FF] py-1 px-2 rounded-lg"
                    style={{ display: `${open ? "flex" : "none"}` }}
                >
                    <div className="flex items-center">
                        <img
                            className="w-[30px] h-[30px] mr-2"
                            src="./icons/task.png"
                            alt=""
                        />
                        <div>
                            <h1 className="text-[10px] font-medium">
                                Statical Technique I
                            </h1>
                            <h2 className="text-[8px] text-gray-500">
                                Status - <span>Pending</span>
                            </h2>
                        </div>
                    </div>
                    <h3 className="text-[9px]">4:30pm</h3>
                </div>
            </div>
        </div>
    );
}
