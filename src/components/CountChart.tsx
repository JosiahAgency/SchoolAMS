"use client";

import Image from 'next/image';
import React, { PureComponent } from 'react';
import { RadialBarChart, RadialBar, Legend, ResponsiveContainer } from 'recharts';

const data = [
    {
        name: 'Total',
        count: 100,
        fill: '#f3e8ff',
    },
    {
        name: 'Boys',
        count: 45,
        fill: 'blue',
    },
    {
        name: 'Girls',
        count: 55,
        fill: '#FC3F5D',
    },
];

const CountChart = () => {
    return (
        <div className='bg-purple-100 rounded-lg shadow-md w-full h-full p-4'>
            <div className="flex justify-between items-center">
                <h1 className='text-lg font-semibold'>Students</h1>
                <Image src="/moreDark.png" alt="more" width={20} height={20} />
            </div>
            <div className="relative w-full h-[75%]">
                <ResponsiveContainer>
                    <RadialBarChart cx="50%" cy="50%" innerRadius="40%" outerRadius="100%" barSize={32} data={data}>
                        <RadialBar
                            background
                            dataKey="count"
                        />
                    </RadialBarChart>
                </ResponsiveContainer>
                <Image src="/malefemale.png" alt="" width={50} height={50} className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2' />
            </div>
            <div className="flex justify-center gap-16">
                <div className="flex flex-col gap-1">
                    <div className="w-5 h-5 rounded-full bg-shade06" />
                    <h1 className='foont-bold'>4562</h1>
                    <h2 className='text-xs text-gray-700'>Boys (45%)</h2>
                </div>
                <div className="flex flex-col gap-1">
                    <div className="w-5 h-5 rounded-full bg-shade05" />
                    <h1 className='foont-bold'>8562</h1>
                    <h2 className='text-xs text-gray-700'>Girls (55%)</h2>
                </div>
            </div>

        </div>
    )
}

export default CountChart