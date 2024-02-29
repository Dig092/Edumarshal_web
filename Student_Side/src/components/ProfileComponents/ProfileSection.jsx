import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import profileSectionMenu from "../../constants/profileSectionInput.json";
import axios from "axios";
import PersonalInfo from "./ProfileSectionComponents/PersonalInfo";
import ContactInfo from "./ProfileSectionComponents/ContactInfo";
import ParentsInfo from "./ProfileSectionComponents/ParentsInfo";
import Subjects from "./ProfileSectionComponents/Subjects";
import OtherInfo from "./ProfileSectionComponents/OtherInfo";

export default function ProfileSection() {
    const [activeoption, setActiveoption] = useState(0);
    const [personalData, setPersonalData] = useState(null);
    const [contactData, setContactData] = useState(null);
    const [parentsData, setParentsData] = useState(null);
    const [subjects, setSubjects] = useState(null);
    const handleoptionClick = (index) => {
        setActiveoption(index);
    };
    useEffect(() => {
        axios
            .get(
                "https://akgec-edu.onrender.com/v1/student/profile/personalInfo",
                { withCredentials: true }
            )
            .then((res) => {
                setPersonalData(Object.entries(res.data.personalInfo));
            })
            .catch((err) => {
                console.log(err);
            });
        axios
            .get(
                "https://akgec-edu.onrender.com/v1/student/profile/contactdetails",
                { withCredentials: true }
            )
            .then((res) => {
                setContactData(Object.entries(res.data.contactDetails));
            })
            .catch((err) => {
                console.log(err);
            });
        axios
            .get(
                "https://akgec-edu.onrender.com/v1/student/profile/parentinfo",
                { withCredentials: true }
            )
            .then((res) => {
                setParentsData(Object.entries(res.data.parentsInfo));
            })
            .catch((err) => {
                console.log(err);
            });
        axios
            .get("https://akgec-edu.onrender.com/v1/student/subject", {
                withCredentials: true,
            })
            .then((res) => {
                setSubjects(res.data.subject);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);
    return (
        <div className="bg-[#ffffff] h-[75vh] max-[1024px]:w-[94%] max-[1024px]:ml-[100px] max-[1024px]:mx-0 max-[767px]:translate-x-5 rounded-3xl mx-4 mt-4 overflow-y-scroll overflow-x-hidden">
            {/*select option profile*/}
            <div className="h-[9.6vh] translate-x-4 max-[1088px]:h-[13vh] mb-4 max-[1200px]:text-sm z-50 sticky top-0 bg-white mr-3 flex flex-wrap items-center gap-3 text-base max-[425px]:text-xs">
                {[
                    "Personal Info",
                    "Contact Details",
                    "Parents",
                    "Education",
                    "Awards & Achievements",
                    "Subjects",
                    "Other Info",
                ].map((item, index) => (
                    <div
                        key={index}
                        onClick={() => handleoptionClick(index)}
                        className={`${
                            activeoption === index ? "border-b-4" : "border-b-0"
                        }
                        flex items-center p-1 font-medium gap-2 cursor-pointer ml-8 border-[#004BB8]`}
                    >
                        <span>{item}</span>
                    </div>
                ))}
            </div>
            {/*select option ends*/}
            {activeoption === 0 && <PersonalInfo personalData={personalData} />}
            {activeoption === 1 && (
                <ContactInfo
                    personalData={personalData}
                    contactData={contactData}
                />
            )}
            {activeoption === 2 && (
                <ParentsInfo
                    personalData={personalData}
                    parentsData={parentsData}
                />
            )}
            {activeoption === 5 && (
                <Subjects personalData={personalData} subjects={subjects} />
            )}
            {activeoption === 6 && <OtherInfo personalData={personalData} />}
        </div>
    );
}
