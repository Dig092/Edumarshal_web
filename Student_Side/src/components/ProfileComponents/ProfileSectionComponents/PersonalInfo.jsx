import { TextField } from "@mui/material";
import React from "react";

export default function PersonalInfo(props) {
    return (
        <div className="w-[95%] pb-10 m-auto flex h-fit justify-evenly">
            <div className="w-[25%] pb-6 items-center rounded-xl flex flex-col bg-[#F2F6FF] h-full">
                <img
                    src="./displayPicture.png"
                    className="w-[80%] mt-6"
                    alt=""
                />
                {props.personalData != null &&
                    props.personalData.map(([key, value], id) =>
                        id > 5 ? null : (
                            <TextField
                                style={{
                                    margin: `${
                                        id == 0 ? "30px 0 10px 0" : "10px 0"
                                    }`,
                                    width: "88%",
                                }}
                                key={id}
                                id="outlined-disabled"
                                variant="outlined"
                                disabled
                                label={key
                                    .replace(/\b\w/g, (char) =>
                                        char.toUpperCase()
                                    )
                                    .replace(/([A-Z])/g, " $1")
                                    .trim()}
                                defaultValue={value}
                            />
                        )
                    )}
            </div>
            <div className="w-[70%] py-5 rounded-xl flex flex-wrap justify-evenly bg-[#F2F6FF] h-full">
                {props.personalData != null &&
                    props.personalData.map(([key, value], id) =>
                        id < 6 ? null : (
                            <TextField
                                style={{
                                    margin: `${
                                        id == 0 ? "30px 0 10px 0" : "10px 0"
                                    }`,
                                }}
                                key={id}
                                id="outlined-disabled"
                                variant="outlined"
                                disabled
                                label={key
                                    .replace(/\b\w/g, (char) =>
                                        char.toUpperCase()
                                    )
                                    .replace(/([A-Z])/g, " $1")
                                    .trim()}
                                defaultValue={value}
                            />
                        )
                    )}
            </div>
        </div>
    );
}
