import React, { useRef } from "react";

export default function DocumentSection() {
    const documents = [
        {
            name: "Student Photo",
        },
        {
            name: "Aadhaar Card",
        },
        {
            name: "10th Marksheet",
        },
        {
            name: "12th Marksheet",
        },
        {
            name: "Domicile Certificate",
        },
        {
            name: "Allotment Letter",
        },
        {
            name: "Covid 19 certificate",
        },
        {
            name: "TC or Migration Certificate",
        },
        {
            name: "10th Pass Certificate",
        },
        {
            name: "Caste Certificate",
        },
        {
            name: "Income Certificate(TFW)",
        },
        {
            name: "EWS Certificate(EWS)",
        },
        {
            name: "Medical Fitness Certificate",
        },
        {
            name: "Affidavit for the gap period After Qualifying exam",
        },
    ];
    const handleUploadClick = () => {
        if (fileInputRef.current) {
            fileInputRef.current.click();
        }
    };
    const fileInputRef = useRef(null);
    return (
        <div>
            <div className="bg-[#ffffff] h-[72vh] rounded-3xl mx-4 mt-4 overflow-y-auto">
                <div className="text-md ml-10 mt-4 font-medium">
                    Upload/Update Document
                </div>
                <div className="flex justify-center items-center">
                    <div className="w-[94%]  h-[2px] bg-[#D9D9D9] my-4"></div>
                </div>
                {/* Cards Starts */}
                <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10">
                    {documents.map((document, cardIndex) => (
                        <div
                            key={cardIndex}
                            className="md:w-42 w-21 relative md:ml-14 ml-2 my-7"
                        >
                            <div className="rounded-t-2xl bg-slate-700 h-[214px] w-[214px] relative"></div>
                            <div className="absolute bottom-0 left-0 right-0 mb-4 ml-48 cursor-pointer">
                                <img
                                    src="./downloadarrow.svg"
                                    style={{
                                        transform: "translate(-23%,-73%)",
                                    }}
                                    onClick={handleUploadClick}
                                />
                            </div>
                            <div
                                className="absolute bottom-0 left-0 right-0 bg-[#004BB8]  h-[30%] md:w-[13.39rem] w-[13.39rem] flex justify-center items-center rounded-b-2xl"
                                style={{
                                    transform: "translateY(33%)",
                                }}
                            >
                                <span className="text-sm text-center text-white">
                                    {document.name}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            {/* Cards Ends */}
            <input
                type="file"
                id="fileInput"
                name="fileInput"
                accept=".jpg,.jpeg,.png,.heic"
                ref={fileInputRef}
                style={{ display: "none" }}
            />
        </div>
    );
}
