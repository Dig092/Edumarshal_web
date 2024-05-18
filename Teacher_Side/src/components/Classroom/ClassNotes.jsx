import React from 'react'
import { useEffect,useState } from 'react';
import axios from "axios";
function ClassNotes() {
  const [data, setData] = useState([]);
  const [sections, setSections] = useState([]);
  useEffect(() => {
    fetchClassnotes();
    fetchSections();
}, []);

const fetchClassnotes = async () => {
    try {
        const response = await axios.get(
          "https://akgec-edu.onrender.com/v1/student/classNotes",
            {
                withCredentials: true,
            }
        );
        setData(response.data.classNotes);
        // console.log(response.data.classNotes[0].classNotes);
        // console.log(response.data.classNotes[0].subject.name);
        
    } catch (error) {
        console.error("Error fetching documents:", error);
    }
};
const fetchSections = async () => {
  try {
    const response = await axios.get(
  "https://akgec-edu.onrender.com/v1/teacher/sections",
      {
        withCredentials: true,
      }
    );
    console.log(response);
  } catch (error) {
    console.error("Error fetching sections:", error);
  }
};
  return (
     <div className='w-full'>
      <div className='flex flex-wrap text-black justify-evenly items-center text-2xl font-semibold mt-5'>
         <div className='w-[15rem] flex gap-5'>File Name</div>       
            <div className='w-[15rem]'>Last Modified</div>
            <div className='w-[10rem]'>File Size</div>
            <div className='flex w-[10rem] justify-evenly'>
           Update File
            </div>
      </div>
      <div className='bg-black h-[0.1rem] w-full my-6'></div>
      {data.length > 0 ? (
        data.map((item, index) => (
          <div key={index} className='flex flex-wrap text-black justify-evenly items-center text-2xl font-semibold'>
            <div className='w-[15rem] flex gap-5'><img src='/folder.svg'/>{item.subject.name}</div>     
            <div className='w-[15rem]'>21/03/2023</div>
            <div className='w-[10rem]'>12 MB</div>
            <div className='flex w-[10rem] justify-evenly'>
            <div><img src='/upload.svg'/></div>
            <div><img src='/delete.svg'/></div>
            </div>
            <div className='bg-black h-[0.1rem] w-full my-6'></div>
          </div>
        ))
      ) : (
        <div>No class notes available</div>
      )}
      <div className='flex justify-center items-center text-black gap-5 font-semibold text-2xl cursor-pointer'>
        <div>Add New File (classNotes)</div>
        <img src='/plusicon.svg'/>
      </div>
      <div className='bg-black h-[0.1rem] w-full my-6'></div>
</div>
  )
}

export default ClassNotes