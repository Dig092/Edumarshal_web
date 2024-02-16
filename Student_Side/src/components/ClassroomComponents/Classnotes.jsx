import React, { useState } from 'react'
import ClassnotesCard from './ClassnotesCard'

const Classnotes = () => {
  
  return (
    <div className="bg-[#ffffff] h-[95%] max-[768px]:h-[100%] max-[768px]:ml-[4.75rem] rounded-3xl mx-4 mt-4 overflow-y-auto">
    <div className="h-[9.6vh] sticky top-0 bg-white mr-4  flex flex-wrap items-center gap-3 text-lg ml-6">
        <div className='flex items-center p-3 font-medium gap-2 cursor-pointer ml-8 mt-5'>
          All Class Notes
          </div>
        </div>
        <div className="flex justify-center items-center">
                    <div className="w-[94%]  h-[1.5px] bg-[#D9D9D9] my-0"></div>
        </div>
      <ClassnotesCard/>






    </div>
  )
}

export default Classnotes