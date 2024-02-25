import React from 'react'
import folderIcon from '../../assets/classNotesFolder1.svg';
function ClassnotesTable({ setPageName }) {
  return (
    <div className=''>
      {/* <div className='mx-[5rem] mt-5 mb-3 flex text-lg font-medium justify-between'>
        <span> File Name</span>
        <span>Last Modified</span>
        <span>File Size</span>
        <span>Download</span>
      </div>
      <div className="flex justify-center items-center">
        <div className="w-[92%]  h-[1.5px] bg-[#000000] my-0"></div>
      </div>
      <div className='mx-[5rem] my-3 flex text-lg font-normal justify-between'>
        <div className='flex h-[1.75rem]'>
            <img src={folderIcon} className="mr-1" alt="" />
        <span> Stack & Queue</span>
        </div>
        <span>21/07/2004</span>
        <span>12 MB</span>
        <span>Download</span>
      </div>
      <div className="flex justify-center items-center">
        <div className="w-[92%]  h-[1.6px] bg-[#000000] my-0"></div>
      </div> */}
<table className="w-full border-collapse">
  <thead>
    <tr className="text-lg">
      <th className="px-5 py-4">File Name</th>
      <th className="px-5 py-4">Last Modified</th>
      <th className="px-5 py-4">File Size</th>
      <th className="px-5 py-4">Download</th>
    </tr>
    <tr>
      <td colSpan="4">
        <div className="ml-8 w-[96%] h-[1px] bg-[#000000]"></div>
      </td>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td className="px-5 py-4 ml-2">
        <div className="flex items-center">
          <img src={folderIcon} className="mr-1" alt="" />
          <span>Stack & Queue</span>
        </div>
      </td>
      <td className="px-5 py-4 ml-3">
        <span className='ml-5'>21/07/2004</span>
      </td>
      <td className="px-5 py-4">
        <span>12 MB</span>
      </td>
      <td className="px-5 py-4">
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
