import React from "react";


export default function OfflinePaymentHistory () {
    return (
        <div className="bg-[#f2f6ff] h-[68vh] rounded-3xl mx-12 mt-4 overflow-y-auto">
          <div className="h-[44px] bg-[#004BB8] m-10 rounded-[0.5rem] items-center flex justify-between text-white px-12">
               <div>Offline Payment</div>
               <div className="flex items-center justify-center gap-5">
               <div>Apply Leave</div>
               <div>
                <img src="./plussign.svg"/>
               </div>
               </div>
             </div>
             <div>
            <div className="position-relative border-2 border-black px-4 p-2"></div>
            <div className="position-absolute">Payment Mode</div>
             </div>
          </div>
    )
}