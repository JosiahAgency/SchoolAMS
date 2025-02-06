import Image from 'next/image'
import React from 'react'

const Usercard = ({ type }: { type: string }) => {
    return (
        <div className='rounded-2xl odd:bg-shade01 even:bg-shade02 p-4 flex-1 shadow-md'>
            <div className="flex justify-between items-center">
                <span className='text-[10px] bg-white px-2 py-1 rounded-full text-green-600'>2024/25</span>
                <Image src="/more.png" alt="more" width={16} height={16} />
            </div>
            <h1 className='text-2xl font-semibold my-4 '>1,256</h1>
            <h2 className='capitalize text-sm font-medium text-gray-200'>{type}</h2>
        </div>
    )
}

export default Usercard