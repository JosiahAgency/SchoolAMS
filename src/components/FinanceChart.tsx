"use client"

import Image from 'next/image'
import React, { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
    {
        name: 'Jan',
        income: 4000,
        expense: 2400,
    },
    {
        name: 'Feb',
        income: 3000,
        expense: 1398,
    },
    {
        name: 'April',
        income: 2000,
        expense: 9800,
    },
    {
        name: 'May',
        income: 2780,
        expense: 3908,
    },
    {
        name: 'June',
        income: 1890,
        expense: 4800,
    },
    {
        name: 'July',
        income: 2390,
        expense: 3800,
    },
    {
        name: 'Aug',
        income: 3490,
        expense: 4300,
    },
    {
        name: 'Sep',
        income: 3490,
        expense: 4300,
    },
    {
        name: 'Oct',
        income: 3490,
        expense: 4300,
    },
    {
        name: 'Nov',
        income: 590,
        expense: 4300,
    },
    {
        name: 'Dec',
        income: 349,
        expense: 430,
    },
];

const FinanceChart = () => {
    return (
        <div className='bg-purple-100 rounded-lg shadow-md h-full p-4'>
            <div className="flex justify-between items-center">
                <h1 className='text-lg font-semibold'>Finance</h1>
                <Image src="/moreDark.png" alt="more" width={20} height={20} />
            </div>
            <ResponsiveContainer width="100%" height="90%">
                <LineChart
                    width={500}
                    height={300}
                    data={data}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#ddd"/>
                    <XAxis dataKey="name" axisLine={false} tickLine={false} />
                    <YAxis axisLine={false} tickLine={false} />
                    <Tooltip contentStyle={{ borderRadius: "10px", borderColor: "lightray" }}  />
                    <Legend align='center' verticalAlign='top'
                        wrapperStyle={{ paddingTop: "20px", paddingBottom: "40px" }} />
                    <Line type="monotone" dataKey="income" stroke="#993FFC" strokeWidth={2}/>
                    <Line type="monotone" dataKey="expense" stroke="#FC3FCF" strokeWidth={2}/>
                </LineChart>
            </ResponsiveContainer>
        </div>)
}

export default FinanceChart