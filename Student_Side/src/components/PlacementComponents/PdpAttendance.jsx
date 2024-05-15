import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
function PdpAttendance() {
  const [Data,setData] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          import.meta.env
              .VITE_BACKEND_API +
              "/v1/student/pdpattendance",
          { withCredentials: true }
      )
      console.log(response.data)
      console.log(response.data.totalClasses)
       setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  return (
  <>
    <div className="h-[3rem] bg-[#004BB8] my-5 rounded-[0.5rem] items-center md:justify-between justify-center md:px-12 px-6 flex cursor-pointer sm:mx-10 ml-2 text-lg text-[#FFFFFF]">
      <pre>Attendance Details</pre>
    </div>
    
      <div className='border-2 h-[7vh] w-[50vw] ml-12 border-black rounded-2xl flex justify-start items-center' key={index}>
        <div className='flex ml-10 gap-10'>
        <div>display date here</div>
        <div className='ml-7'></div>
        </div>
      </div>
  
    </>
  )
}

export default PdpAttendance