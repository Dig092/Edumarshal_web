import React, { useEffect, useState } from 'react';
import ExamComponent from './ExamComponent';
import axios from "axios";

const Exams = () => {
  const [activeOption, setActiveOption] = useState(0);
  const [examData, setExamData] = useState([]);
  const [selectedExam, setSelectedExam] = useState(''); 

  useEffect(() => {
    getExam();
  }, []); 

  const getExam = () => {
    axios
      .get("https://akgec-edu.onrender.com/v1/student/exam/result", {
        withCredentials: true,
      })
      .then((res) => {
        const responseData = res.data;
        console.log(responseData);
        setExamData(responseData);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const handleOptionClick = (index) => {
    setActiveOption(index);
  };

  const handleExamChange = (event) => {
    setSelectedExam(event.target.value);
  };

  const filteredExamData = selectedExam
    ? examData.filter(exam => exam.exam === selectedExam)
    : examData;

    return (
        <div className="bg-[#ffffff] h-[95%] max-[768px]:h-[100%] max-[768px]:ml-[4.75rem] rounded-3xl mx-4 mt-4 overflow-y-auto">
          <div className="h-[9.6vh] sticky top-0 bg-white mr-4  flex flex-wrap items-center gap-3 text-lg ml-6">
            {["Your Result", "Recent Assignment"].map((item, index) => (
              <div
                key={index}
                onClick={() => handleOptionClick(index)}
                className={`${
                  activeOption === index ? "border-b-4" : "border-b-0"
                }
                flex items-center p-3 font-medium gap-2 cursor-pointer ml-8 mt-5  border-[#004BB8]`}
              >
                <span>{item}</span>
              </div>
            ))}
          </div>
          <div className="flex justify-center items-center">
            <div className="w-[94%] h-[1.5px] bg-[#D9D9D9] my-0"></div>
          </div>
          {activeOption === 0 && (
            <div className="flex flex-col w-4/5 mx-auto">
              <div className=" mt-5 flex-col">
                <select
                  id="examSelect"
                  className="w-[40rem] border border-gray-300 rounded-[12px] p-2 "
                  value={selectedExam}
                  onChange={handleExamChange}
                >
                  <option value="">All</option>
                  {examData.map((exam, index) => (
                    <option key={index} value={exam.exam}>
                      {exam.exam}
                    </option>
                  ))}
                </select>
              </div>
              <div className="w-full flex flex-wrap justify-center">
                {filteredExamData.map((exam, index) => (
                  <div key={index}>
                    {exam.result.map((result, resultIndex) => (
                      <ExamComponent
                        key={resultIndex}
                        subject={result.subject}
                        maximumMarks={result.maximumMarks}
                        marksObtained={result.marksObtained}
                      />
                    ))}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      );
                    }      

export default Exams;
