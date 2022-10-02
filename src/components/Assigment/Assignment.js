import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const Assignment = () => {
    const data = [
        {
          name: "Page A",
          markes: 4000,
          quiz: 2400,
          amt: 2400
        },
        {
          name: "Page B",
          markes: 3000,
          quiz: 1398,
          amt: 2210
        },
        {
          name: "Page C",
          markes: 2000,
          quiz: 9800,
          amt: 2290
        },
        {
          name: "Page D",
          markes: 2780,
          quiz: 3908,
          amt: 2000
        },
        {
          name: "Page E",
          markes: 1890,
          quiz: 4800,
          amt: 2181
        },
        {
          name: "Page F",
          markes: 2390,
          quiz: 3800,
          amt: 2500
        },
        {
          name: "Page G",
          markes: 3490,
          quiz: 4300,
          amt: 2100
        }
      ];
    return (
        <div>
            <LineChart width={500} height={400} data={data} >
                          <Line type="monotone" dataKey="markes" stroke="#82ca9d" />
                          <XAxis dataKey="name" /><YAxis />
                          <Tooltip></Tooltip>
            </LineChart>
        </div>
    );
};

export default Assignment;