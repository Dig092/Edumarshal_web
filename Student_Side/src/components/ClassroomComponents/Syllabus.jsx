/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Syllabus = () => {
  const getTimetable = () => {
    axios
            .get(import.meta.env.VITE_BACKEND_API + "/v1/student/syllabus", {
        withCredentials: true,
      })
      .then((res) => {
                const syllabus = res.data.examTimetable.examTimetableUrl;
        console.log(syllabus);
      })
      .catch((e) => {
        console.log(e);
      });
  };
  return (
        <div className="bg-[#ffffff] h-[95%] max-[768px]:h-[100%] max-[1024px]:ml-[80px] max-[1024px]:w-[98%]  max-[768px]:ml-[4.75rem] rounded-3xl mx-4 mt-4 overflow-auto"></div>
  );
};

export default Syllabus;
