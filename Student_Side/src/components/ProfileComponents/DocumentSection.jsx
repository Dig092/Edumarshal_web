import React, { useRef, useState } from "react";

export default function DocumentSection() {
    const [uploadedFiles, setUploadedFiles] = useState(Array(14).fill(null));
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

  
    const handleUploadClick = (cardIndex) => {
        if (currentlyUploadingIndex === null) {
            setCurrentlyUploadingIndex(cardIndex);
            if (fileInputRef.current) {
                fileInputRef.current.click();
            }
        } else if (currentlyUploadingIndex === cardIndex) {
            setCurrentlyUploadingIndex(null);
        } else {
            setCurrentlyUploadingIndex(cardIndex);
        }
    };

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const updatedFiles = [...uploadedFiles];
            updatedFiles[currentlyUploadingIndex] = URL.createObjectURL(file);
            setUploadedFiles(updatedFiles);
            setCurrentlyUploadingIndex(null);
        }
    };

    const fileInputRef = useRef(null);
    const [currentlyUploadingIndex, setCurrentlyUploadingIndex] = useState(null);

    return (
        <div>
            <div className="bg-[#ffffff] h-auto md:h-[83vh] rounded-3xl  md:m-6 overflow-y-auto">
            <div className="md:text-lg  text-md md:ml-10 ml-6 mt-4 font-medium flex items-center justify-center md:justify-start">
                    Upload/Update Document
                </div>
                <div className="flex justify-center items-center">
                    <div className="w-[94%]  h-[2px] bg-[#D9D9D9] my-4"></div>
                </div>
                {/* Cards Starts */}
                <div className="flex justify-center md:justify-evenly">
                <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-12 my-5 md:mr-20">
                    {documents.map((document, cardIndex) => (
                        <div
                            key={cardIndex}
                            className="md:w-42 w-21 relative md:ml-14 ml-2 my-7"
                        >
                            <div
                                className="rounded-t-2xl bg-slate-700 sm:h-[214px] sm:w-[214px] h-[180px] w-[180px] relative"
                                style={{
                                    backgroundImage: `url(${uploadedFiles[cardIndex]})`,
                                    backgroundSize: "cover",
                                    backgroundPosition: "center",
                                }}
                            ></div>
                            <div >
                            <div className="absolute bottom-0 right-0 left-50 mb-5 cursor-pointer">
                                <img
                                    src="./downloadarrow.svg"
                                    style={{
                                        transform: "translate(-35%,-100%)",
                                    }}
                                    onClick={() => handleUploadClick(cardIndex)}
                                />
                            </div>
                            <div
                                className="absolute bottom-0 left-0 right-0 bg-[#004BB8]  h-[30%] sm:w-[13.39rem] w-[11.25rem] flex justify-center items-center rounded-b-2xl"
                                style={{
                                    transform: "translateY(43%)",
                                }}
                            >
                                <span className="text-sm text-center text-white">
                                    {document.name}
                                </span>
                            </div>
                            </div>
                        </div>
                    ))}
                </div>
                </div>
            </div>
            <input
                type="file"
                id="fileInput"
                name="fileInput"
                accept=".jpg,.jpeg,.png,.heic"
                ref={fileInputRef}
                style={{ display: "none" }}
                onChange={handleFileChange}
            />
        </div>
    );
}