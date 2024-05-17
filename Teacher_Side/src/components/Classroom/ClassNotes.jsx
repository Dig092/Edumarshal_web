import React from 'react'
import { useEffect,useState } from 'react';
import axios from "axios";
function ClassNotes() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetchClassnotes();
}, []);

const fetchClassnotes = async () => {
    try {
        const response = await axios.get(
          "https://akgec-edu.onrender.com/v1/student/classNotes",
            {
                withCredentials: true,
            }
        );
        setData(response.data.classNotes);
        console.log(response.data.classNotes[0].classNotes);
    } catch (error) {
        console.error("Error fetching documents:", error);
    }
};
  return (
  <div>
    classnotes
  
  </div>
  )
}

export default ClassNotes