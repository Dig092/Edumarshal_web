import React, { useEffect, useState } from "react";
import ExamComponent from "./ExamComponent";
import axios from "axios";

const Exams = () => {
    const [activeOption, setActiveOption] = useState(0);
    const [examData, setExamData] = useState([]);
    const [selectedExam, setSelectedExam] = useState("");
    const [Timetable, setTimetable] = useState();

    useEffect(() => {
        getExam();
        getTimetable();
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
    const getTimetable = () => {
        axios
            .get("https://akgec-edu.onrender.com/v1/student/exam/timetable", {
                withCredentials: true,
            })
            .then((res) => {
                const timetable = res.data.examTimetable.examTimetableUrl;
                console.log(timetable);
                setTimetable(timetable);
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
        ? examData.filter((exam) => exam.exam === selectedExam)
        : examData;

    return (
        <div className="bg-[#ffffff]  max-[1024px]:ml-[80px] max-[1024px]:w-[98%]  h-[95%] max-[768px]:h-[100%] max-[768px]:ml-[4.75rem] rounded-3xl mx-4 mt-4 overflow-auto">
            <div className="sticky top-0 bg-white mr-4 flex flex-wrap items-center gap-3 text-lg ml-6 z-10">
                {["Your Result", "Time Table"].map((item, index) => (
                    <div
                        key={index}
                        onClick={() => handleOptionClick(index)}
                        className={`${
                            activeOption === index ? "border-b-4" : "border-b-0"
                        }
      flex items-center p-3 font-medium gap-2 cursor-pointer ml-8 mt-5 border-[#004BB8]`}
                    >
                        <span>{item}</span>
                    </div>
                ))}
            </div>
            <div className="flex justify-center items-center sticky top-[9.6vh] z-10">
                <div className="w-[94%] h-[1.5px] bg-[#D9D9D9] my-0"></div>
            </div>

            {activeOption === 0 && (
                <div className="flex flex-col  mx-auto">
                    <div className=" mt-5 ml-8  flex-col">
                        <select
                            id="examSelect"
                            className="w-[40rem] max-[500px]:w-5/6 max-[500px]:ml-1 border border-gray-300 rounded-[12px] p-2 "
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
                    <div className="max-[768px]:flex max-[768px]:justify-center max-[768px]:items-center">
                    <div className="w-full max-[768px]:w-[65%] max-[500px]:w-full grid grid-cols-3 max-[1024px]:grid-cols-2 max-[768px]:grid-cols-1 gap-4">
                        {filteredExamData.map((exam, index) =>
                            exam.result.map((result, resultIndex) => (
                                <div key={resultIndex} className="w-full">
                                    <ExamComponent
                                        subject={result.subject}
                                        maximumMarks={result.maximumMarks}
                                        marksObtained={result.marksObtained}
                                    />
                                </div>
                            ))
                        )}
                    </div>
                    </div>
                </div>
            )}
            {activeOption === 1 && (
                <div className="flex h-5/6 justify-center my-3">
                    <img src={Timetable} alt="" />
                </div>
            )}
        </div>
    );
};

export default Exams;
