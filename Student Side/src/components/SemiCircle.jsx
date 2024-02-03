import React, { useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";

export default function SemiCircle() {
    var collection = {
        series: [60],
        options: {
            chart: {
                type: "radialBar",
                offsetY: -20,
                sparkline: {
                    enabled: true,
                },
            },
            plotOptions: {
                radialBar: {
                    startAngle: -90,
                    endAngle: 90,
                    track: {
                        background: "#e7e7e7",
                        strokeWidth: "97%",
                        margin: 5, // margin is in pixels
                        dropShadow: {
                            enabled: true,
                            top: 2,
                            left: 0,
                            color: "#999",
                            opacity: 1,
                            blur: 2,
                        },
                    },
                    dataLabels: {
                        name: {
                            show: false,
                        },
                        value: {
                            offsetY: -2,
                            fontSize: "35px",
                            fontFamily: "Poppins",
                            fontWeight: "bold",
                        },
                    },
                },
            },
            grid: {
                padding: {
                    top: -10,
                },
            },
            fill: {
                type: "gradient",
                colors: ["#004BB8", "#5299FF"],
                gradient: {
                    shade: "light",
                    shadeIntensity: 0.4,
                    inverseColors: false,
                    opacityFrom: 1,
                    opacityTo: 1,
                    stops: [0, 100],
                },
            },
            labels: ["Average Results"],
        },
    };
    return (
        <div className="w-[300px]">
            <ReactApexChart
                options={collection.options}
                series={collection.series}
                type="radialBar"
            />
        </div>
    );
}
