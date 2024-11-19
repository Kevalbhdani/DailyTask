// import React, { useState } from 'react'

// function EmergencyPatient() {
//   const [active, setactive] = useState(false);

//   const toggleClass =()=>{

//     setactive(!active)
//   }

//   return (
//     <div>
//       <div className={`w-[50px]  h-[250px] bg-gray ${active ? 'AddClass' : ''} `}>
//         box
//       </div>

//       <button className='py-2 px-8 me-5 bg-red-500 ' onClick={toggleClass}>Add</button>
//       {/* <button className='py-2 px-8 me-5 bg-yellow-500' onClick={toggleClass}>Remove</button> */}

//     </div>
//   )
// }

// export default EmergencyPatient

import React from "react";
import DashboardView from "../Dashboard/DashboardView"; 

function EmergencyPatient() {
  return (
    <DashboardView>
      <br></br>
      <br></br>
      <label className="relative inline-flex items-center cursor-pointer">
        <input type="checkbox" class="sr-only peer"></input>
        <div className="group peer ring-0 checkedr:bg-gray  rounded-full outline-none duration-300 after:duration-300 w-9 h-4  shadow-md peer-checked:border-sky peer-focus:outline-none after:rounded-full after:absolute after:bg-gray-50 after:outline-none after:h-3 after:w-3 after:top-[2px] after:right-[2px] after:flex after:justify-start after:items-center after:bg-white checked:bg-sky peer-checked:after:-translate-x-5  peer:after:-scale-95"></div>
      </label>
      <br></br>
      <br></br>
      <label class="relative inline-flex items-center cursor-pointer">
        <input type="checkbox" class="sr-only peer" value="" />
        <div class="group peer bg-gray  rounded-full duration-300 w-9 h-4   after:duration-300 after:bg-white peer-checked:after:bg-sky peer-checked:ring-sky peer-checked:ring-2 after:rounded-full after:absolute after:h-3 after:w-3 after:top-[2px] after:right-1 after:flex after:justify-center after:items-center peer-checked:after:-translate-x-4 peer-hover:after:scale-95"></div>
      </label>
    </DashboardView>
  );
}

export default EmergencyPatient;
