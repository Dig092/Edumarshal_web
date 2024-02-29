import React from 'react'

const Syllabus = () => {

  const getTimetable = () => {
    axios
        .get("https://akgec-edu.onrender.com/v1/student/syllabus", {
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
  )
}

export default Syllabus