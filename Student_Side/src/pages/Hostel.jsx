// import { useState } from "react";

// import SideBar from "../components/SideBar";
// import SideBarMobile from "../components/SideBarMobile";
// import FeeStructure from "../components/FeesComponents/FeeStructure";
// import PayOnline from "../components/FeesComponents/PayOnline";
// import NavBar from "../components/NavBar";

// export default function Hostel() {
//   const [isLeaveContentVisible, setLeaveContentVisible] = useState(false);

//   const handleApplyLeaveClick = () => {
//     setLeaveContentVisible(!isLeaveContentVisible);
//   };



//   const [active, setActive] = useState("");
//   const [activefees, setActivefees] = useState(0);
//   const handleoptionfees = (index) => {
//     setActivefees(index);
//   };
//   return (
//     <div className="bg-[#ECEBFE] w-full flex">
//       <div className="hidden md:block">
//           <SideBar active={active} />
//         </div>
//         <div className="block md:hidden">
//           <SideBarMobile active={active} />
//         </div>
//       <div className="flex flex-col w-full">
//         <NavBar title="Hostel" />
//         <div className="bg-[#ffffff] h-full overflow-y-auto">
//           {/* Select Option for fees */}
//           <div className=" sticky top-0 w-full bg-white flex flex-wrap items-center md:gap-5 gap-1 md:text-lg text-sm  p-4  px-8 ml-0">
//             {["Apply Leave", "Your Leaves"].map((item, index) => (
//               <div
//                 key={index}
//                 onClick={() => handleoptionfees(index)}
//                 className={`${
//                   activefees === index
//                     ? "md:border-b-4 border-b-2"
//                     : "md:border-b-0"
//                 }
//                      flex items-center p-1  font-medium cursor-pointer border-[#004BB8]`}
//               >
//                 <span>{item}</span>
//               </div>
//             ))}
//           </div>
//           {/* {activefees === 0 && <FeeStructure />} */}
//       <div className="bg-[#f2f6ff]  md:rounded-3xl rounded-xl overflow-y-auto">

//       {/* <div className={`h-[50px] bg-[#004BB8] my-5 rounded-[0.5rem] items-center flex justify-between cursor-pointer sm:mx-10 mx-2`} onClick={() => handleClick()}>
//          <div className="text-white md:font-semibold sm:text-base text-xs px-3 md:pl-10 flex justify-between w-full">
//              <span>My Hostel/Room</span>
//              <span className="flex">Apply Leave<span className="pl-2 pt-0.5 pr-6"><img src="./icons/PlusSign.png"/></span></span>
            
//         </div>
//       </div> */}
//       <div>
//       <div className={`h-[50px] bg-[#004BB8] my-5 rounded-[0.5rem] items-center flex justify-between cursor-pointer sm:mx-10 mx-2`}>
//         <div className="text-white md:font-semibold sm:text-base text-xs px-3 md:pl-10 flex justify-between w-full">
//           <span>My Hostel/Room</span>
//           <span onClick={handleApplyLeaveClick}>Apply Leave</span>
//         </div>
//       </div>
//       {isLeaveContentVisible && (
//         <div className="content-below bg-white p-4 rounded shadow-md sm:mx-10 mx-2">
//           {/* Your content goes here */}
//           <p>This is the content that appears when "Apply Leave" is clicked.</p>
//         </div>
//       )}
//     </div>


//       </div>
//           {activefees === 1 && <PayOnline />}
//         </div>
//       </div>
//     </div>
//   );
// }

import { useState } from "react";

import SideBar from "../components/SideBar";
import SideBarMobile from "../components/SideBarMobile";
import Internship from '../components/PlacementComponents/Internship';
import PayOnline from "../components/FeesComponents/PayOnline";
import NavBar from "../components/NavBar";
import ApplyForm from "../components/HostelComponents/ApplyForm";

export default function Hostel() {
  const [isLeaveContentVisible, setLeaveContentVisible] = useState(false);

  const handleApplyLeaveClick = () => {
    setLeaveContentVisible(!isLeaveContentVisible);
  };
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
          <div className="sticky top-0 w-full bg-white flex flex-wrap items-center md:gap-5 gap-1 md:text-lg text-sm p-4 px-8 ml-0">
            {["Apply Leave", "Your Leaves"].map((item, index) => (
              <div
                key={index}
                onClick={() => handleoptionfees(index)}
                className={`${
                  activefees === index
                    ? "md:border-b-4 border-b-2"
                    : "md:border-b-0"
                }
                     flex items-center p-1 font-medium cursor-pointer border-[#004BB8]`}
              >
                <span>{item}</span>
              </div>
            ))}
          </div>
          <div className="bg-[#f2f6ff] md:rounded-3xl rounded-xl overflow-y-auto">
            <div className={`h-[50px] bg-[#004BB8] my-5 rounded-[0.5rem] items-center flex justify-between cursor-pointer sm:mx-10 mx-2`}>
              <div className="text-white md:font-semibold sm:text-base text-xs px-3 md:pl-10 flex justify-between w-full">
                <span>My Hostel/Room</span>
                <span className="flex" onClick={handleApplyLeaveClick}>Apply Leave<span className="pl-2 pt-0.5 pr-6"><img src="./icons/PlusSign.png"/></span></span>
              </div>
            </div>
            
            {isLeaveContentVisible && (
              <div className="content-below bg-white p-4 rounded shadow-md sm:mx-10 mx-2">
                {/* Your content goes here */}
                


                <ApplyForm />
                
              </div>
            )}
          </div>
          {/* {activefees === 1 && <PayOnline />} */}
        </div>
      </div>
    </div>
  );
}
