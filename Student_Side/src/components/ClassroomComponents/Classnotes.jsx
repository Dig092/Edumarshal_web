// Classnotes component
import { useEffect, useState } from "react";
import ClassnotesCard from "./ClassnotesCard";
import ClassnotesTable from "./ClassnotesTable";
import axios from "axios";

const Classnotes = () => {
    const [pageName, setPageName] = useState("All Class Notes");
    const [classNotes, setClassNotes] = useState([]);
    const [subjectName, setSubjectName] = useState("");

    const resetName = () => {
        setPageName("All Class Notes");
    };

    useEffect(() => {
        getClassnotes();
    }, []);

    const getClassnotes = () => {
        axios
            .get(import.meta.env.VITE_BACKEND_API + "/v1/student/classNotes", {
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
        <div className="bg-[#ffffff] max-[md]:h-[100%] px-5 max-[lg]:w-[98%] max-[md]:ml-[4.75rem] rounded-3xl mx-4 mt-4 overflow-y-auto overflow-x-hidden">
            <div className="h-[9.6vh] sticky top-0 bg-white mr-4  flex flex-wrap items-center gap-3 text-lg ml-6">
                <div
                    className="flex items-center p-3 font-medium gap-2 cursor-pointer ml-8 mt-5"
                    onClick={resetName}
                >
                    {pageName}
                </div>
            </div>
            <div className="sticky top-[9.6vh] max-[1024px]: bg-white flex justify-center items-center z-10">
                <div className="w-[96%] h-[1.5px] bg-[#D9D9D9] my-0 "></div>
            </div>
            {pageName === "All Class Notes" && (
                <div className="flex justify-center items-center">
                <div className="w-[87rem] grid justify-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-1">
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
                        <div className="mt-10 font-medium text-xl text-[#1A1A1A]">
                            No assignments available.
                        </div>
                    )}
                </div>
            </div>
            

            )}
            {pageName === subjectName && (
                <ClassnotesTable setPageName={setPageName} />
            )}
        </div>
    );
};

export default Classnotes;