// Classnotes component
import React, { useEffect, useState } from 'react';
import ClassnotesCard from './ClassnotesCard';
import ClassnotesTable from './ClassnotesTable';
import axios from 'axios';

const Classnotes = () => {
  const [pageName, setPageName] = useState("All Class Notes");
  const [classNotes, setClassNotes] = useState([]);
  const [subjectName, setSubjectName] = useState("");

const resetName =()=>{
  setPageName("All Class Notes")
}

  useEffect(() => {
    getClassnotes();
  }, []); 

  const getClassnotes = () => {
    axios
      .get("https://akgec-edu.onrender.com/v1/student/classNotes", {
        withCredentials: true,
      })
      .then((res) => {
        const responseData = res.data.classNotes;
        console.log(responseData);
        setClassNotes(responseData);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <div className="bg-[#ffffff] h-[95%] max-[768px]:h-[100%] max-[1024px]:ml-[80px] max-[1024px]:w-[98%] max-[768px]:ml-[4.75rem] rounded-3xl mx-4 mt-4 overflow-y-auto overflow-x-hidden">
      <div className="h-[9.6vh] sticky top-0 bg-white mr-4  flex flex-wrap items-center gap-3 text-lg ml-6">
        <div className='flex items-center p-3 font-medium gap-2 cursor-pointer ml-8 mt-5' onClick={resetName}>
          {pageName}
        </div>
      </div>
      <div className="flex justify-center items-center">
        <div className="w-[94%]  h-[1.5px] bg-[#D9D9D9] my-0"></div>
      </div>
      {pageName === "All Class Notes" && 
      <div className='max-[500px]:flex max-[500px]:justify-center max-[500px]:items-center'>
        <div className='w-full max-[500px]:w-[70%] grid grid-cols-3 max-[768px]:grid-cols-2 max-[768px]:ml-6 max-[500px]:grid-cols-1  max-[1024px]:grid-cols-3 gap-4 max-[1024px]:gap-0 max-[1024px]:m-0 ml-5'>
          {classNotes.length > 0 ? (
            classNotes.map((note, index) => (
              <ClassnotesCard 
                key={index} 
                setPageName={setPageName} 
                subjectName={note.subject.name} 
                setSubjectName={setSubjectName} 
              />
            ))
          ) : (
            <div className='mt-10 font-medium text-xl text-[#1A1A1A]'>No assignments available.</div>
          )}
        </div>
        </div>
      }
      {pageName === subjectName && <ClassnotesTable setPageName={setPageName} />}
    </div>
  );
}

export default Classnotes;
