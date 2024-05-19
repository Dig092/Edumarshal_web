/* eslint-disable react/prop-types */
import { useState } from "react";
import { toggleMenu } from "../store/store";
import { useDispatch } from "react-redux";
import semester from "../constants/semester.json";
import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function NavBar(props) {
  const [sem, setSem] = useState("Select Semester");
  const [toggle, setToggle] = useState(false);
  const [documentUrls, setDocumentUrls] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate("/profile"); // Adjust the path to your profile section
  };
  useEffect(() => {
    fetchDocuments();
  }, []);

  const fetchDocuments = async () => {
    try {
      const response = await axios.get(
        import.meta.env.VITE_BACKEND_API + "/v1/student/profile/documents",
        {
          withCredentials: true,
        }
      );
      setDocumentUrls(response.data.documents.studentPhoto);
      console.log(response.data.documents.studentPhoto);
    } catch (error) {
      console.error("Error fetching documents:", error);
      toast.error("Error fetching documents");
    }
  };

  return (
    <div className="flex h-[60px] sticky top-0 z-[98] bg-white w-full px-4 justify-between items-center">
      <img
        className="max-md:block hidden w-[30px]"
        src={!toggle ? "./hamburgerDark.png" : "./closeDark.png"}
        alt=""
        onClick={() => {
          setToggle(!toggle);
          dispatch(toggleMenu());
        }}
      />
      <h1 className="text-lg md:text-xl lg:text-2xl font-semibold px-6">
        {props.title}
      </h1>
      <div className="flex max-[500px]:w-[50%] items-center max-[500px]:justify-evenly max-[410px]:w-[40%]">
        <img
          className="cursor-pointer w-[30px] max-[410px]:w-[25px] max-[410px]:h-[25px] h-[30px] mr-7 max-[500px]:m-0"
          src="./icons/notifications.png"
          alt="notifications"
        />
        <select
          onChange={(e) => setSem(e.target.value)}
          className="outline outline-1 max-[550px]:w-[100px] max-[410px]:w-[30px] max-[410px]:h-[30px] outline-black px-4 py-2 rounded-md w-[250px]"
        >
          {semester?.map((sem, id) => (
            <option key={id} value={sem.value}>
              {sem.key}
            </option>
          ))}
        </select>
        <div
          className="cursor-pointer w-[40px] max-[410px]:w-[30px] max-[410px]:h-[30px] ml-5 h-[40px] rounded-md"
          style={{
            backgroundImage: `url(${documentUrls})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          onClick={handleNavigation}
        ></div>
      </div>
    </div>
  );
}
