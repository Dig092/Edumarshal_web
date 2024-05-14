import React from 'react'
const Labels = [
  { name: "Company Name", smallWidth: "w-[16rem]" },
  { name: "Project Title", smallWidth: "w-[16rem]" },
  { name: "Faculty Mentor", smallWidth: "w-[16rem]" },
  { name: "Internship Mentor Name", smallWidth: "w-[16rem]" },
  { name: "Internship Mentor Designation", smallWidth: "w-[16rem]" },
  { name: "Internship Mentor Mobile Number",  smallWidth: "w-[16rem]" },
  { name: "Internship Mentor Email ID",  smallWidth: "w-[16rem]" },
  { name: "Area of Specialization",  smallWidth: "w-[16rem]" },
  { name: "Location of Internships",  smallWidth: "w-[16rem]" },
  { name: "Start Date",  smallWidth: "w-[16rem]" },
  { name: "End Date",  smallWidth: "w-[16rem]" },
];
function Internship() {
  return (
    <div>
    <div className="h-[3rem] bg-[#004BB8] my-5 rounded-[0.5rem] items-center md:justify-between justify-center md:px-12 px-6 flex cursor-pointer sm:mx-10 ml-2 text-lg text-[#FFFFFF]">
      <pre>Internship Details</pre>
    </div>
    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 ml-10 md:justify-items-start justify-items-center">
      {Labels.map((label, index) => (
        <div key={index} className={`relative my-5 md:my-3 ${label.smallWidth} `}>
          <input
            type="text"
            name={`input_${index}`}
            maxLength="100"
            placeholder={label.name}
            required
            className="border-2 border-black w-full py-2 px-3 pr-8 focus:outline-none rounded-xl"
          />
          <label
            className="bg-white font-sofia-sans font-medium md:text-xs text-[0.6rem] absolute left-3 top-2/5 bottom-9 px-1"
          >
            {label.name}
          </label>
        </div>
      ))}
    </div>
  </div>
  )
}

export default Internship