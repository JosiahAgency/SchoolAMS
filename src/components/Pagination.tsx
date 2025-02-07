import React from 'react'

const Pagination = () => {
    return (
        <div className='p-4 justify-between text-gray-600 items-center flex'>
            <button disabled className="py-2 px-4 text-xs font-semibold rounded-md bg-slate-200 disabled:opacity-50 disabled:cursor-not-allowed">Prev</button>
            <div className=" flex items-center gap-2 text-sm">
                <button className="px-2 rounded-sm bg-purple-200">1</button>
                <button className="px-2 rounded-sm ">2</button>
                <button className="px-2 rounded-sm ">3</button>
                ...
                <button className="px-2 rounded-sm ">10</button>
            </div>
            <button className="py-2 px-4 text-xs font-semibold rounded-md bg-slate-200 disabled:opacity-50 disabled:cursor-not-allowed">Next</button>
        </div>
    )
}

export default Pagination