import React, { useState } from "react";
import { toggleMenu } from "../../store/store";
import { useDispatch } from "react-redux";

export default function NavBar() {
    const [sem, setSem] = useState("Select Semester");
    const [toggle, setToggle] = useState(false);
    const dispatch = useDispatch();
    return (
        <div className="flex h-[60px] max-[780px]:ml-[70px] z-50 bg-white w-full px-4 justify-between items-center">
            <img
                className="max-[500px]:block hidden w-[30px]"
                src={toggle ? "./hamburgerDark.png" : "./closeDark.png"}
                alt=""
                onClick={() => {
                    setToggle(!toggle);
                    dispatch(toggleMenu());
                }}
            />
            <h1 className="text-xl font-semibold">Dashboard</h1>
            <div className="flex max-[500px]:w-[50%] items-center max-[500px]:justify-evenly">
                <img
                    className="w-[30px] h-[30px] mr-7 max-[500px]:m-0"
                    src="./icons/notifications.png"
                    alt="notifications"
                />
                <select
                    onChange={(e) => setSem(e.target.value)}
                    className="outline outline-1 max-[550px]:w-[100px] max-[410px]:w-[40px] outline-black px-4 py-2 rounded-md w-[250px]"
                >
                    <option value={sem}>{sem}</option>
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                    <option value={4}>4</option>
                </select>
                <div className="w-[40px] ml-5 h-[40px] rounded-md bg-gray-300"></div>
            </div>
        </div>
    );
}