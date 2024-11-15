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

import React from 'react'
import DashboardView from '../Dashboard/DashboardView'

function EmergencyPatient() {
  return (
    <DashboardView>
      EmergencyPatient
    </DashboardView>

  )
}

export default EmergencyPatient