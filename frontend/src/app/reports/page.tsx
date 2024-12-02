import FilterBar from '@/components/FilterBar'
import React from 'react'

const page = () => {
  return (
    <div className='flex flex-col width-full  min-h-screen px-8'>

        {/* Page header */}
        <div className='flex flex-row width-full justify-between border-b py-4 items-center pb-8'>
            <h1 className='text-[24px] font-[700] font-inter'>Reports</h1>
            <h1 className='text-[14px] font-[600] font-inter text-[#4D4D4D]'>Download</h1>
        </div>


        <FilterBar/>


    </div>

    

  )
}

export default page