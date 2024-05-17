import React, { useEffect } from 'react'
import folderIcon from '../../assets/classNotesFolder1.svg';

function ClassnotesTable({ setPageName }) {

    
  return (
    <div className=''>
      
<table className="w-[87rem] border-collapse">
  <thead>
    <tr className="text-lg">
      <th className="px-5 py-4 text-center">File Name</th>
      <th className="px-5 py-4 text-center">Last Modified</th>
      <th className="px-5 py-4 text-center">File Size</th>
      <th className="px-5 py-4 text-center">Download</th>
    </tr>
    <tr>
      <td colSpan="4">
        <div className="ml-8 w-[96%] h-[1px] bg-[#000000]"></div>
      </td>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td className="px-5 py-4 ">
      <div className="flex items-center justify-center">
    <img src={folderIcon} className="mr-1" alt="" />
    <span>Stack & Queue</span>
  </div>
      </td>
      <td className="px-5 py-4 text-center">
        <span className=''>21/07/2004</span>
      </td>
      <td className="px-5 py-4 text-center">
        <span>12 MB</span>
      </td>
      <td className="px-5 py-4 text-center">
        <span>Download</span>
      </td>
    </tr>
    <tr>
      <td colSpan="4">
        <div className="ml-8 w-[96%] h-[1px] bg-[#000000]"></div>
      </td>
    </tr>
  </tbody>
</table>



    </div>
    
  )
}

export default ClassnotesTable
