import React from "react";
import ReactApexChart from "react-apexcharts";

export default function DoughNut() {
    // Donut Graph
    const state = {
        series: [10, 30],
        options: {
            chart: {
                type: "donut",
            },
            labels: ["Not Attended", "Attended"],
            legend: {
                show: false,
            },
            colors: ["#5299FF", "#004BB8"],
            responsive: [
                {
                    breakpoint: 480,
                    options: {
                        chart: {
                            width: 150,
                        },
                    },
                },
            ],
        },
    };
    return (
        <div
            className="flex justify-center mt-4 items-center relative"
            style={{
                width: "100%",
                height: "200px",
                padding: "0px 20px",
                background: "white",
            }}
        >
            <h1 className="font-bold text-5xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                75%
            </h1>
            <ReactApexChart
                options={state.options}
                series={state.series}
                type="donut"
                height="250"
            />
        </div>
    );
}
