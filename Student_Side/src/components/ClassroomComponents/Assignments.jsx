import { useEffect, useState } from "react";
import AssignmentCard from "./AssignmentCard";
import axios from "axios";
const Assignments = () => {
    const [activeoption, setActiveoption] = useState(0);
    const handleoptionClick = (index) => {
        setActiveoption(index);
    };
    useEffect(() => {
        getAssignment();
    }, []);

    const [data, setData] = useState([]);
    const getAssignment = () => {
        axios
            .get(import.meta.env.VITE_BACKEND_API + "/v1/student/assignment", {
                withCredentials: true,
            })
            .then((res) => {
                console.log(res);
                const responseData = res.data.assignment;
                console.log(responseData);
                setData(responseData);
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
                >
                    Assignment
                </div>
            </div>
            
            <div className="sticky top-[9.6vh] max-[1024px]: bg-white flex justify-center items-center z-10">
                <div className="w-[96%] h-[1.5px] bg-[#D9D9D9] my-0 "></div>
            </div>
            <div className="flex justify-center items-center">
                <div className="w-[87rem] grid justify-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-1">
                    {data.length > 0 ? (
                        data.map((item) => (
                            <AssignmentCard
                                key={item.id}
                                sub={item.subject.name}
                                description={item.description}
                                deadline={item.deadline}
                                status="Pending"
                                question={item.assignment}
                            />
                        ))
                    ) : (
                        <div className="mt-10 ml-10 font-medium text-xl text-[#1A1A1A]">
                            No assignments available.
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Assignments;
