import React, { useState } from 'react';
import ClassnotesCard from './ClassnotesCard';
import ClassnotesTable from './ClassnotesTable';

const Classnotes = () => {
  const [pageName, setPageName] = useState("All Class Notes");

  return (
    <div className="bg-[#ffffff] h-[95%] max-[768px]:h-[100%] max-[768px]:ml-[4.75rem] rounded-3xl mx-4 mt-4 overflow-y-auto">
      <div className="h-[9.6vh] sticky top-0 bg-white mr-4  flex flex-wrap items-center gap-3 text-lg ml-6">
        <div className='flex items-center p-3 font-medium gap-2 cursor-pointer ml-8 mt-5'>
          {pageName}
        </div>
      </div>
      <div className="flex justify-center items-center">
        <div className="w-[94%]  h-[1.5px] bg-[#D9D9D9] my-0"></div>
      </div>
      {pageName === "All Class Notes" && <ClassnotesCard setPageName={setPageName} />}
      {pageName === "Data Structure" && <ClassnotesTable setPageName={setPageName} />}
    </div>
  );
}

export default Classnotes;
