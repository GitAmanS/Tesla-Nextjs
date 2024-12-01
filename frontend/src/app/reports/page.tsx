import React from 'react'

const page = () => {
  return (
    <div className='flex flex-col width-full  min-h-screen px-8'>

        {/* Page header */}
        <div className='flex flex-row width-full justify-between border-b py-4 items-center pb-8'>
            <h1 className='text-[24px] font-[700] font-inter'>Reports</h1>
            <h1 className='text-[14px] font-[600] font-inter text-[#4D4D4D]'>Download</h1>
        </div>



        <div className="grid grid-cols-3 gap-4">
  <div className="col-span-1">
    Content 1
  </div>
  <div className="col-span-1">
    Content 2
  </div>
  <div className="col-span-1">
    Content 3
  </div>

  <div className="col-span-1">
    Content 4
  </div>
  <div className="col-span-1">
    Content 5
  </div>

  <div className="col-span-1">
    Content 6
  </div>
  <div className="col-span-1">
    Content 7
  </div>
</div>

    </div>

    

  )
}

export default page