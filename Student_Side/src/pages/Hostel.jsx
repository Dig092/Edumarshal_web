import { useState } from "react";

import SideBar from "../components/SideBar";
import SideBarMobile from "../components/SideBarMobile";
import FeeStructure from "../components/FeesComponents/FeeStructure";
import PayOnline from "../components/FeesComponents/PayOnline";
import NavBar from "../components/NavBar";

export default function Fees() {
  const [active, setActive] = useState("");
  const [activefees, setActivefees] = useState(0);
  const handleoptionfees = (index) => {
    setActivefees(index);
  };
  return (
    <div className="bg-[#ECEBFE] w-full flex">
      <div className="hidden md:block">
          <SideBar active={active} />
        </div>
        <div className="block md:hidden">
          <SideBarMobile active={active} />
        </div>
      <div className="flex flex-col w-full">
        <NavBar title="Hostel" />
        <div className="bg-[#ffffff] h-full overflow-y-auto">
          {/* Select Option for fees */}
          <div className=" sticky top-0 w-full bg-white flex flex-wrap items-center md:gap-5 gap-1 md:text-lg text-sm  p-4  px-8 ml-0">
            {["Apply Leave", "Your Leaves"].map((item, index) => (
              <div
                key={index}
                onClick={() => handleoptionfees(index)}
                className={`${
                  activefees === index
                    ? "md:border-b-4 border-b-2"
                    : "md:border-b-0"
                }
                     flex items-center p-1  font-medium cursor-pointer border-[#004BB8]`}
              >
                <span>{item}</span>
              </div>
            ))}
          </div>
          {activefees === 0 && <FeeStructure />}
          {activefees === 1 && <PayOnline />}
        </div>
      </div>
    </div>
  );
}
