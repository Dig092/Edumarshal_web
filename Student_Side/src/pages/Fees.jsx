import react from "react";
import SideBar from "../components/SideBar";
import FeesNavbar from "../components/FeesComponents/FeesNavbar";
import { useState } from "react";
import FeeStructure from "../components/FeesComponents/FeeStructure";
import PayOnline from "../components/FeesComponents/PayOnline";
import PaymentHistory from "../components/FeesComponents/PaymentHistory";
import OfflinePaymentHistory from "../components/FeesComponents/OfflinePaymentHistory";

export default function Fees() {
    const [activefees, setActivefees] = useState(0);
    const handleoptionfees = (index) => {
        setActivefees(index);
    };
    return (
        <div className="h-screen bg-[#ECEBFE] w-full flex">
            <SideBar/>
            <div className="flex flex-col w-full">
                <FeesNavbar/>
                <div className="bg-[#ffffff] h-[84vh] rounded-3xl mx-4 mt-4 overflow-y-auto">
                 {/* Select Option for fees */}
                 <div className="h-[9.6vh] sticky top-0 bg-white mr-4  flex flex-wrap items-center gap-3 text-lg ml-6">
                {[
                    "Fee Structure",
                    "Pay Online",
                    "Payment History",
                    "Offline Payment History"
                ].map((item, index) => (
                    <div
                        key={index}
                        onClick={() => handleoptionfees(index)}
                        className={`${
                            activefees === index ? "border-b-4" : "border-b-0"
                        }
                     flex items-center p-1 font-medium gap-2 cursor-pointer ml-8 border-[#004BB8]`}
                    >
                        <span>{item}</span>
                    </div>
                ))}
                    </div>
              {/* Select Option For fees ends */}
              {/* Fee Structure components */}
              { activefees===0 && <FeeStructure/> }
              { activefees===1 && <PayOnline/> }
              { activefees===2 && <PaymentHistory/> }
              { activefees===3 && <OfflinePaymentHistory/> }
              {/* Fee Structure components Ends */}
            </div>
            </div>
        </div>
    )
}