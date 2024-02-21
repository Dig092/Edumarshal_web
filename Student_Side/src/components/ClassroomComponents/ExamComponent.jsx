import React from 'react'
import Examlogo from '../../assets/ExamComponent.svg'
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';

function ExamComponent() {
  
  return (
    <div className="m-8 flex flex-col justify-center w-[25rem] rounded-[15px] overflow-hidden shadow-lg  bg-[#F2F6FF] border border-[#C4C4C4]">
        <div className='flex ml-4 mt-3'>
        <img src={Examlogo} className='w-1/6' alt="" />
      <div className='flex flex-col mt-1'>
        <span className='text-[#004BB8] font-medium text-lg ml-2 mt-3 '>Data Structure</span>
        <span className='text-[#004BB8] font-medium text-xs ml-2 mt-2'>By Swati Tomar</span>
      </div>
      <div className='mt-[3rem]'>
      <span className='text-[#004BB8] font-medium text-4xl mt-[5rem] ml-2'>45/50</span>
      <span className='text-[#004BB8] font-medium text-xs '>Marks</span>
      </div>
      </div>
      <span className='text-[#004BB8] font-medium text-xs ml-5 mt-1'>Your percentage</span>
      <LinearProgress variant="determinate" value={75} sx={{height: 10, borderRadius:5, backgroundColor:'#FFFFFF', '& .MuiLinearProgress-bar': {backgroundColor: '#004BB8', borderRadius:5},}} className='mb-5 w-[22rem] ml-5 mt-1'/>

    </div>
  )
}

export default ExamComponent
