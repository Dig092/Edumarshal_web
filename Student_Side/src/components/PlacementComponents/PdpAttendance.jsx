import React, { useState, useEffect } from 'react';
import axios from 'axios';

function PdpAttendance() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_BACKEND_API}/v1/student/pdpattendance`,
          { withCredentials: true }
        );
        console.log(response.data);
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="h-[3rem] bg-[#004BB8] my-5 rounded-[0.5rem] items-center md:justify-between justify-center md:px-12 px-6 flex cursor-pointer sm:mx-10 ml-2 text-lg text-[#FFFFFF]">
        <pre>Attendance Details</pre>
      </div>
      {data.attendance.map((item, index) => (
        <div className='border-2 h-[7vh] md:w-[28rem] w-[20rem] ml-12 border-black rounded-2xl flex justify-start items-center my-2' key={index}>
          <div className='flex md:ml-10 gap-10'>
            <div>{item.date}</div>
            <div
              className='ml-7'
              style={{ color: item.attended ? 'green' : 'red' }}
            >
              {item.attended ? 'P' : 'A'}
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default PdpAttendance;
