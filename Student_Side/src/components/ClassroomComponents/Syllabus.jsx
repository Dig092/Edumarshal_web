import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Syllabus = () => {
  const [syllabusPdf, setSyllabusPdf] = useState('');

  useEffect(() => {
    getTimetable();
  }, []);

  const getTimetable = () => {
    axios
      .get("https://akgec-edu.onrender.com/v1/student/syllabus", {
        withCredentials: true,
      })
      .then((res) => {
        const syllabus = res.data.syllabus.syllabus;
        console.log(syllabus);
        setSyllabusPdf(syllabus);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const openPdfInNewTab = () => {
    window.open(syllabusPdf, '_blank');
  };

  return (
    <div className="bg-[#ffffff] h-[95%] max-[768px]:h-[100%] max-[1024px]:ml-[80px] max-[1024px]:w-[98%]  max-[768px]:ml-[4.75rem] rounded-3xl mx-4 mt-4 overflow-auto">
      <div className="pdf-card" onClick={openPdfInNewTab}>
      <object width="20%" height="400" data={syllabusPdf} type="application/pdf">   </object>
       
      </div>
    </div>
  );
};

export default Syllabus;
