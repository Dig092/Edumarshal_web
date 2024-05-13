import React from 'react'

function ClassNotes() {
  return (
<div className="bg-[#ffffff] md:h-[73vh] h-[90vh] rounded-3xl md:m-6 overflow-y-auto">
    <div className='flex justify-between mx-12'>
   <div className="md:text-lg text-3xl  mt-4 font-medium flex items-center justify-center md:justify-start">
                Class Notes
   </div>
   <div className="md:text-lg text-3xl mt-4 font-medium flex items-center justify-center md:justify-start">
                Subject
   </div>
   </div>
   <div className='flex justify-center items-center'>
   <div className="w-[94%] h-px bg-gray-400 my-4"></div>
   </div>
   <div className="flex justify-evenly ml-14 mr-10 font-medium">
            <div className="w-[18rem]">File Name</div>
            <div className="w-[15rem]">Last Modified</div>
            <div className="w-[15rem]">File Size</div>
            <div className="w-[15rem]">Update File</div>
    </div>
    <div className='flex justify-center items-center'>
   <div className="w-[94%] h-px bg-black my-4"></div>
   </div>
    <div className="flex justify-evenly ml-14 mr-10 font-medium">
            <div className="w-[18rem]">File Name</div>
            <div className="w-[15rem]">Last Modified</div>
            <div className="w-[15rem]">File Size</div>
            <div className="w-[15rem]">Update File</div>
    </div>
    <div className='flex justify-center items-center'>
   <div className="w-[94%] h-px bg-black my-4"></div>
   </div>

</div>
  )
}

export default ClassNotes