import * as React from "react";
import {
    Bar,
    BarChart,
    CartesianGrid,
    ResponsiveContainer,
    Text,
    XAxis,
    YAxis,
} from "recharts";
import { Distribution } from "../../../types";
import styles from "./index.module.css";

type ChartProps = {
    data: Array<Distribution>;
};

type CustomLabelProps = {
    axis: "x" | "y";
};

export const CustomLabel = ({ axis }: CustomLabelProps) => {
    const dimensions = {
        x: { angle: 270, x: 35, y: 150, title: "Count" },
        y: { angle: 0, x: 200, y: 395, title: "Rating" },
    };

    const { angle, x, y, title } = dimensions[axis];

    return (
        <Text angle={angle} x={x} y={y}>
            {title}
        </Text>
    );
};

export const Chart = ({ data }: ChartProps) => {
    return (
        <div className={styles.chartWrapper}>
            <ResponsiveContainer width="100%" height="100%">
                <BarChart data={data} barSize={20} className={styles.chart}>
                    <XAxis
                        dataKey="name"
                        padding={{ left: 10, right: 10 }}
                        label={<CustomLabel axis="x" />}
                    />
                    <YAxis label={<CustomLabel axis="y" />} />
                    <CartesianGrid strokeDasharray="2 2" />
                    <Bar dataKey="percentage" fill="#8884d8" />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};
