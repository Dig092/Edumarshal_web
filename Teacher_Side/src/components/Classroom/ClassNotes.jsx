import React, { useRef, useState, useEffect } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ClassNotes() {
  useEffect(() => {
    fetchSections();
}, []);

const fetchSections = async () => {
  try {
    const response = await axios.get(
      'https://akgec-edu.onrender.com/v1/teacher/sections',
      {
        withCredentials: true,
      }
    );
    console.log(response.data.sections[0].section.sectionId);
    setSection(response.data.sections[0].section.sectionId);
  } catch (error) {
    console.error("Error fetching documents:", error);
    toast.error("Error fetching documents");
  }
};

  const [data, setData] = useState([]);
  const [section,setSection]=useState([]);
  const fileInputRef = useRef(null);
  const handleUploadClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = async (event) => {
    const file = event.target.files[0];
    if (file) {
      const formData = new FormData();
      formData.append("document", file);
      try {
        await axios.post(
         `https://akgec-edu.onrender.com/v1/teacher/uploadNotes?sectionId=${section}&subject=COA`,
          formData,
          {
            withCredentials: true,
          }
        );
        toast.success("Class Notes uploaded successfully");
      } catch (error) {
        console.error("Error uploading ClassNotes:", error);
        toast.error("Error uploading class notes");
      }
    }
  };

  return (
    <div className='w-full'>
      <ToastContainer/>
      <div className='flex flex-wrap text-black justify-evenly items-center text-2xl font-semibold mt-5'>
        <div className='w-[15rem] flex gap-5'>File Name</div>       
        <div className='w-[15rem]'>Last Modified</div>
        <div className='w-[10rem]'>File Size</div>
        <div className='flex w-[10rem] justify-evenly'>
          Update File
        </div>
      </div>
      <div className='bg-black h-[0.1rem] w-full my-6'></div>
      <div className='flex justify-center items-center text-black gap-5 font-semibold text-2xl'>
        <div>Add New File</div>
        <img src='/plusicon.svg' onClick={handleUploadClick} alt="Add New File" style={{ cursor: 'pointer'}}/>
      </div>
      <div className='bg-black h-[0.1rem] w-full my-6'></div>
      <input
        type="file"
        id="fileInput"
        name="fileInput"
        accept=".jpg,.jpeg,.png,.heic"
        ref={fileInputRef}
        style={{ display: "none" }}
        onChange={handleFileChange}
      />
    </div>
  );
}

export default ClassNotes;
