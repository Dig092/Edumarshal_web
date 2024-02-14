import React, { useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";

export default function ColumnGraph(props) {
    const [total, setTotal] = useState([]);
    const [classes, setClasses] = useState([]);
    const [subjects, setSubjects] = useState([]);

    useEffect(() => {
        setTotal([]);
        setClasses([]);
        setSubjects([]);
        props.array.forEach((element) => {
            setTotal((prev) => [...prev, element.totalClasses]);
            setClasses((prev) => [...prev, element.totalPresent]);
            setSubjects((prev) => [...prev, element.subject]);
        });
    }, [props.array]);

    var collection = {
        series: [
            {
                name: "Total Classes",
                data: total,
            },
            {
                name: "Classes Attended",
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
                categories: subjects,
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
