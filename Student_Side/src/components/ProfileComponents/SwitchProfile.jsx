import React from "react";

const ProfileSections = ["My profile", "My document", "Registration Form"];

function SwitchProfile({ activeIndex, onSwitchChange }) {
  return (
    <div className="flex gap-6 cursor-pointer">
      {ProfileSections.map((item, index) => (
        <div
          key={index}
          onClick={() => onSwitchChange(index)}
          className={`${
            activeIndex === index
              ? "bg-[#004BB8] text-white"
              : "bg-[#F2F6FF] text-black"
          } h-[42px] flex items-center justify-center p-2 px-4 font-medium text-base rounded-[0.5rem] cursor-pointer`}
        >
          {item}
        </div>
      ))}
    </div>
  );
}

export default SwitchProfile;