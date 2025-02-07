import React from 'react'

const Tablee = ({ columns, renderRow, data }: {
    columns: { header: string; accessor: string; className?: string }
    renderRow: (item: any) => React.ReactNode;
    data: any[];
}) => {
    return (
        <table className='w-full mt-4'>
            <thead className=''>
                <tr className='text-left text-gray-500 text-sm'>
                    {columns.map((col) => (
                        <th key={col.accessor} className={`text-xs text-left font-semibold text-gray-500 ${column.className}`}>
                            {col.header}
                        </th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {data.map((item)=>renderRow(item))}
            </tbody>
        </table>
    )
}

export default Tablee