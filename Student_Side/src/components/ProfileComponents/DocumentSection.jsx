import React, { useRef, useState, useEffect } from "react";
import axios from "axios";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import documents from "../../constants/Documents.json";
import DocumentCard from "./Documentcard";

export default function DocumentSection() {
    const [uploadDocumentType, setUploadDocumentType] = useState("");
    const [documentUrls, setDocumentUrls] = useState({});
    const fileInputRef = useRef(null);

    const handleUploadClick = (document) => {
        if (fileInputRef.current) {
            fileInputRef.current.click();
            setUploadDocumentType(document.query);
        }
    };
    useEffect(() => {
        console.log(uploadDocumentType);
    }, [uploadDocumentType]);

    useEffect(() => {
        async function fetchDocuments() {
            try {
                const response = await axios.get(
                    "https://akgec-edu.onrender.com/v1/student/profile/documents",
                    {
                        withCredentials: true,
                    }
                );
                setDocumentUrls(response.data.documents);
                console.log(response.data.documents);
            } catch (error) {
                console.error("Error fetching documents:", error);
                toast.error("Error fetching documents");
            }
        }
        fetchDocuments();
    }, []);
    const handleDownloadClick = (document) => {
        const selectedDocument = documentUrls[document.query];
        if (selectedDocument) {
            window.open(selectedDocument, '_blank');
        } else {
            toast.error("Document not available");
        }
    };
    const handleFileChange = async (event) => {
        const file = event.target.files[0];
        if (file) {
            const formData = new FormData();
            formData.append("document", file);
            console.log(uploadDocumentType);
            try {
                const response = await axios.post(
                    `https://akgec-edu.onrender.com/v1/student/profile/document?documentType=${uploadDocumentType}`,
                    formData,
                    {
                        withCredentials: true,
                    }
                );
                toast.success("Document uploaded successfully");
            } catch (error) {
                console.error("Error uploading document:", error);
                toast.error("Error uploading document");
            }
        }
    };
    
    return (
        <div>
            <ToastContainer />
            <div className="bg-[#ffffff] md:h-[73vh] h-[90vh] rounded-3xl md:m-6 overflow-y-auto">
                <div className="md:text-lg text-md md:ml-10 ml-6 mt-4 font-medium flex items-center justify-center md:justify-start">
                    Upload/Update Document
                </div>
                <div className="flex justify-center items-center">
                    <div className="w-[94%]  h-[2px] bg-[#D9D9D9] my-4"></div>
                </div>
                <div className="flex justify-center md:justify-evenly">
                    <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-12 my-5 md:mr-8 items-center">
                        {documents.map((document, cardIndex) => (
                            <DocumentCard
                                key={cardIndex}
                                document={document}
                                cardIndex={cardIndex}
                                handleUploadClick={() => handleUploadClick(document)}
                                handleDownloadClick={() => handleDownloadClick(document)}
                            />
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