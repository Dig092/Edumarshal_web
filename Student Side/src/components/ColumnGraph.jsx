import React, { useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";

export default function ColumnGraph() {
    const [total, setTotal] = useState([]);
    const [classes, setClasses] = useState([]);

    useEffect(() => {
        randomBars();
    }, []);

    const randomBars = () => {
        setClasses([]);
        setTotal([]);
        for (let i = 0; i < 10; i++) {
            setClasses((prev) => [
                ...prev,
                Math.floor(Math.random() * (50 - 10 + 1)) + 10,
            ]);
            setTotal((prev) => [
                ...prev,
                Math.floor(Math.random() * (50 - 10 + 1)) + 10,
            ]);
        }
        setTimeout(() => {
            randomBars();
        }, 2000);
    };

    var collection = {
        series: [
            {
                name: "Total Classes",
                // data: [48, 55, 42, 51, 42, 32, 24, 22, 16, 19],
                data: total,
            },
            {
                name: "Classes Attended",
                // data: [36, 42, 29, 36, 34, 27, 22, 21, 13, 17],
                data: classes,
            },
        ],
        options: {
            chart: {
                type: "bar",
                height: 350,
            },
            plotOptions: {
                bar: {
                    horizontal: false,
                    columnWidth: "55%",
                    endingShape: "rounded",
                },
            },
            dataLabels: {
                enabled: false,
            },
            stroke: {
                show: true,
                width: 2,
                colors: ["transparent"],
            },
            colors: ["#004BB8", "#5299FF"],
            xaxis: {
                categories: [
                    "Math IV",
                    "DSTL",
                    "UHV",
                    "Data Structure",
                    "COA",
                    "Python",
                    "DS Lab",
                    "COA Lab",
                    "Web Designing",
                    "Mini Project",
                ],
            },
            yaxis: {
                title: {
                    text: "",
                },
            },
            fill: {
                opacity: 1,
            },
            tooltip: {
                y: {
                    formatter: function (val) {
                        return val + " Classes";
                    },
                },
            },
        },
    };
    return (
        <div className="w-full">
            <ReactApexChart
                options={collection.options}
                series={collection.series}
                type="bar"
                height={250}
            />
        </div>
    );
}
