import React from "react";

export default function PayOnline() {
    return (
        <div className="bg-[#f2f6ff] h-[68vh] rounded-3xl mx-12 mt-4 overflow-y-auto">
          <div className="bg-[#FBFBFB] h-[230px] mx-12 mt-12 rounded-[0.75rem] flex">
            <div className="h-full w-[13px] rounded-l-[0.25rem] bg-[#004BB8]"></div>
            <div className="flex flex-col w-full">
                <div className="text-base font-semibold ml-10 mt-7">Important Note :</div>
                <ul className="font-medium mx-10">
                 <li className="my-2">1.Current Year (2023 - 23) Academic Fee is visible here.</li>
                 <li className="my-2">2.Help Manual is attached for your reference.</li>
                 <li className="my-2">3.Incase you make payment and do not get the receipt due to net connectivity, kindly wait for 24 hours for automatically Re-generation of   receipt.</li>
                 <li className="mt-2">4.For UPI payments, kindly check your payment limits (Should be greater than 1,00,000) otherwise choose Netbanking/Credit Card/Debit Card.</li>
                </ul>
            </div>
          </div>
          <div className="h-[44px] bg-[#004BB8] m-10 rounded-[0.5rem] items-center flex justify-evenly text-white font-semibold">
        <div>Collection Name</div>
        <div>Amount</div>
        <div>Pay</div>
      </div>
      <div className="flex items-center justify-center gap-20">
       <input type="text" className="h-[40px] w-[350px] border-2 border-black rounded-xl p-2 bg-[#f2f6ff]"></input>
        <input type="text" className="h-[40px] w-[284px] border-2 border-black rounded-xl bg-[#f2f6ff] p-2"></input>
        <div><button className="border-2 py-2 px-5 border-none rounded-2xl bg-[#004BB8] text-white">Pay fee</button></div>
         </div> 
         </div>
    )
    }