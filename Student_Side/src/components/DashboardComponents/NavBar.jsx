import React from "react";

export default function NavBar() {
    return (
        <div className="flex h-[60px] z-50 bg-white w-full px-4 justify-between items-center">
            <h1 className="text-xl font-semibold">Dashboard</h1>
            <div>
                <img
                    className="w-[30px]"
                    src="./icons/notifications.png"
                    alt="notifications"
                />
            </div>
        </div>
    );
}
{/* <div className="h-[9.6vh] bg-[#ffffff] mt-4 mx-4 rounded-2xl flex gap-8 items-center">
<div className="bg-[#F2F6FF] flex items-center p-3 ml-7 rounded-xl gap-2"><span>My profile</span><div><img src="../src/assets/arrowup.svg"/></div></div>
<div className="bg-[#F2F6FF] flex items-center p-3 rounded-xl gap-2"><span>My Document</span><div><img src="../src/assets/arrowup.svg"/></div></div>
<div className="bg-[#F2F6FF] flex items-center p-3 rounded-xl gap-2"><span>Registeration Form</span><div><img src="../src/assets/arrowup.svg"/></div></div>
</div> */}