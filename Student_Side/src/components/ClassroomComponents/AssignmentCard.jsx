import React, { useRef, useState } from 'react';
import axios from 'axios';

function AssignmentCard({ sub, status, deadline, description, question }) {
  const fileInputRef = useRef(null);
  const [isUploaded, setIsUploaded] = useState(false);
  const [uploadedFile, setUploadedFile] = useState(null);

  const handleFileUpload = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = async (event) => {
    const file = event.target.files[0];
    setIsUploaded(true);
    setUploadedFile(file);
    console.log('Selected file:', file);

    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await axios.post(
        'https://akgec-edu.onrender.com/v1/student/assignment/uploadSolution?assignmentId=65bd15fc0b2169b2a959de6a',
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      );

      console.log('File uploaded successfully:', response.data);
    } catch (error) {
      console.error('Error uploading file:', error);
    }
  };

  const openquestion = () => {
    window.open(question);
  };

  const openPdf = () => {
    if (uploadedFile) {
      const fileUrl = URL.createObjectURL(uploadedFile);
      window.open(fileUrl);
    }
  };

  return (
    <div className="m-8 max-[500px]:pl-5 flex flex-col justify-center w-[18rem] rounded-[15px] overflow-hidden shadow-lg border border-[#7F7F7F]">
      <div className="flex w-2/3 font-bold text-2xl text-[#004BB8] ml-7 my-4">{sub}</div>
      {isUploaded ? (
        <div className="ml-7 mt-2 mb-0 font-semibold text-base text-[#1A1A1A]">Status - Completed</div>
      ) : (
        <div className="ml-7 mt-2 mb-0 font-semibold text-base text-[#1A1A1A]">Status - {status}</div>
      )}

      <div className="ml-7 my-3 font-medium text-base text-[#333333]">Deadline : {deadline}</div>
      <div className="ml-7 font-medium text-sm text-[#4D4D4D]">Description :</div>
      <div className="ml-7 my-1 font-medium text-sm text-[#4D4D4D] overflow-hidden max-w-[15rem] whitespace-nowrap overflow-ellipsis">
        {description}
      </div>
      {isUploaded ? (
        <button onClick={openPdf} className="bg-[#004BB8] w-4/5 rounded-[10px] font-medium text-sm text-white p-2 mb-5 mt-5 ml-7">
          View Solution
        </button>
      ) : (
        <button onClick={openquestion} className="bg-[#004BB8] w-4/5 rounded-[10px] font-medium text-sm text-white p-2 mt-5 ml-7">
          View Question
        </button>
      )}
      <input type="file" ref={fileInputRef} style={{ display: 'none' }} onChange={handleFileChange} />
      {isUploaded ? (
        <></>
      ) : (
        <button onClick={handleFileUpload} className="bg-[#004BB8] w-4/5 rounded-[10px] font-medium text-sm text-white p-2 mt-2 mb-5 ml-7">
          Upload Solution
        </button>
      )}
    </div>
  );
}

export default AssignmentCard;
