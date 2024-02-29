import React, { useState } from "react";
import { toggleMenu } from "../store/store";
import { useDispatch } from "react-redux";
import semester from "../constants/semester.json";
export default function NavBar(props) {
    const [sem, setSem] = useState("Select Semester");
    const [toggle, setToggle] = useState(false);
    const dispatch = useDispatch();
    return (
        <div className="flex h-[60px] sticky top-0 z-[98] max-[1024px]:ml-[70px] bg-white w-full px-4 max-[767px]:ml-0 justify-between items-center">
            <img
                className="max-[767px]:block hidden w-[30px]"
                src={!toggle ? "./hamburgerDark.png" : "./closeDark.png"}
                alt=""
                onClick={() => {
                    setToggle(!toggle);
                    dispatch(toggleMenu());
                }}
            />
            <h1 className="text-2xl max-[410px]:text-lg font-semibold px-6">
                {props.title}
            </h1>
            <div className="flex max-[500px]:w-[50%] items-center max-[500px]:justify-evenly max-[410px]:w-[40%]">
                <img
                    className="w-[30px] max-[410px]:w-[25px] max-[410px]:h-[25px] h-[30px] mr-7 max-[500px]:m-0"
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
                <div className="w-[40px] max-[410px]:w-[30px] max-[410px]:h-[30px] ml-5 h-[40px] rounded-md bg-gray-300"></div>
            </div>
        </div>
    );
}
