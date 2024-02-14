import React from 'react'

function AssignmentCard({sub,status,deadline,description}) {
  return (
    <div className="m-8 flex flex-col justify-center max-w-xs rounded-[15px] overflow-hidden shadow-lg border border-[#7F7F7F]">
      <div className='flex w-2/3 font-bold text-2xl text-[#004BB8] ml-7 my-4'>{sub}</div>
      <div className=' ml-7 mt-2 mb-0 font-semibold text-base text-[#1A1A1A]'>Status - {status}</div>
      <div className=' ml-7 my-3 font-medium text-base text-[#333333]'>Deadline : {deadline}</div>
      <div className=' ml-7 font-medium text-sm text-[#4D4D4D]'>Description :</div>
      <div className=' ml-7 my-1 font-medium text-sm text-[#4D4D4D]'>{description}</div>
      <button className='bg-[#004BB8] w-4/5 rounded-[10px] font-medium text-sm text-white p-2 mt-5 ml-7'>View Question</button>
      <button className='bg-[#004BB8] w-4/5 rounded-[10px] font-medium text-sm text-white p-2 mt-2 mb-5 ml-7'>Upload Solution</button>
    </div>
  )
}

export default AssignmentCard
