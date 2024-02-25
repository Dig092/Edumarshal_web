import React, { useEffect, useState } from 'react'
import AssignmentCard from './AssignmentCard';
import axios from "axios";
const Assignments = () => {
  const [activeoption, setActiveoption] = useState(0);
    const handleoptionClick = (index) => {
        setActiveoption(index);
    };
    useEffect(() => {
        getAssignment();
      }, []); 

    const [data, setData] = useState([]);
    const getAssignment = () => {
        axios
            .get("https://akgec-edu.onrender.com/v1/student/assignment", {
                withCredentials: true,
            })
            .then((res) => {
                console.log(res)
                const responseData= res.data.assignment
                console.log(responseData)
                setData(responseData);
            })
            .catch((e) => {
                console.log(e);
            });
    };


  return (
    <div className="bg-[#ffffff] h-[72vh] rounded-3xl mx-4 mt-4 overflow-y-auto">
        <div className="h-[9.6vh] sticky top-0 bg-white mr-4  flex flex-wrap items-center gap-3 text-lg ml-6">
                {[
                    "All Assignment",
                    "Recent Assignment",
                ].map((item, index) => (
                    <div
                        key={index}
                        onClick={() => handleoptionClick(index)}
                        className={`${
                            activeoption === index ? "border-b-4" : "border-b-0"
                        }
                     flex items-center p-3 font-medium gap-2 cursor-pointer ml-8 mt-5  border-[#004BB8]`}
                    >
                        <span>{item}</span>
                    </div>
                ))}
            </div>
            <div className="flex justify-center items-center">
                    <div className="w-[94%]  h-[1.5px] bg-[#D9D9D9] my-0"></div>
            </div>
            <div className='flex flex-wrap justify-center '>
  {data.length > 0 ? (
    data.map(item => (
      <AssignmentCard key={item.id} sub={item.subject.name} description={item.description} deadline={item.deadline} status="Pending" question={item.assignment}  />
    ))
  ) : (
    <div className='mt-10  font-medium text-xl text-[#1A1A1A]'>No assignments available.</div>
  )}
</div>

    </div>
  )
}

export default Assignments