import React from "react";

export default function  PaymentHistory () {
    return (
        <div className="bg-[#f2f6ff] h-[68vh] rounded-3xl mx-12 mt-4 overflow-y-auto">
          <div className="h-[44px] bg-[#004BB8] m-10 rounded-[0.5rem] items-center flex justify-between px-5 text-white">
            <div>Fee Submission Date</div>
            <div>Fees Paid</div>
            <div>Collection Name</div>
            <div>Payment Mode</div>
            <div>Payment Note</div>
            <div>Print</div>
           </div>
           <div className="flex justify-between ml-14 mr-10">
           <input type="text" className="h-[40px] w-[180px] border-2 border-black rounded-xl p-2 bg-[#f2f6ff]"></input>
           <input type="text" className="h-[40px] w-[100px] border-2 border-black rounded-xl p-2 bg-[#f2f6ff]"></input>
           <input type="text" className="h-[40px] w-[200px] border-2 border-black rounded-xl p-2 bg-[#f2f6ff]"></input>
           <input type="text" className="h-[40px] w-[100px] border-2 border-black rounded-xl p-2 bg-[#f2f6ff] ml-5"></input>
           <input type="text" className="h-[40px] w-[150px] border-2 border-black rounded-xl p-2 bg-[#f2f6ff] ml-9"></input>
           <button className="border-2 py-2 px-10 border-none rounded-2xl bg-[#004BB8] text-white">Print</button>
           </div>
        </div>
    )
} 