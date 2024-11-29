import React from "react";

function demo() {
  return (
    // <div>
    //   <div className="flex flex-col h-full w-full content-between ">
    //     <div>
    //       <div className="flex items-center  mt-8  w-[250px]  justify-center">
    //         <img
    //           className="w-[35px] m-1 "
    //           src={require("../../imges/Vector.png")}
    //           alt=""
    //         />
    //         <h2 className="lato font-bold ms-2 font-lato">CICERO HOSPITAL</h2>
    //       </div>

    //       <div className="">
    //         <div className="Dashboard-option ">
    //           <div className="w-full mt-5">
    //             <ul className="p-4 ">
    //               <li className="p-3 mt-1 hover:bg-whiteSky ">
    //                 <a href="" className=" flex items-center">
    //                   <img
    //                     src={require("../../imges/category.png")}
    //                     className="h-[20] w-[20] mr-2 text-grayText"
    //                     alt=""
    //                   />

    //                   <h3 className="font-nunitoSans font-normal text-grayText hover:text-sky ">
    //                     Dashboard
    //                   </h3>
    //                 </a>
    //               </li>

    //               <li className="p-3 mt-1 hover:bg-whiteSky">
    //                 <a href="" className="flex items-center">
    //                   <img
    //                     src={require("../../imges/ProfileIcon.png")}
    //                     className="h-[20] w-[20] mr-2"
    //                     alt=""
    //                   />

    //                   <h3 className="font-nunitoSans font-normal text-grayText">
    //                     Patients
    //                   </h3>
    //                 </a>
    //               </li>

    //               <li className="p-3 mt-1 hover:bg-whiteSky">
    //                 <a href="" className="flex items-center">
    //                   <img
    //                     src={require("../../imges/Tretmenticon.png")}
    //                     className="h-[20] w-[20] mr-2"
    //                     alt=""
    //                   />

    //                   <h3 className="font-nunitoSans font-normal text-grayText">
    //                     Running Treatment
    //                   </h3>
    //                 </a>
    //               </li>

    //               <li className="p-3 mt-1 hover:bg-whiteSky">
    //                 <a href="" className="flex items-center">
    //                   <img
    //                     src={require("../../imges/Tretmenticon.png")}
    //                     className="h-[20] w-[20] mr-2"
    //                     alt=""
    //                   />
    //                   <h3 className="font-nunitoSans font-normal text-grayText">
    //                     Inspection Request
    //                   </h3>
    //                 </a>
    //               </li>

    //               <li className="p-3 mt-1 hover:bg-whiteSky">
    //                 <a href="" className="flex items-center">
    //                   <img
    //                     src={require("../../imges/EmergencyIcon.png")}
    //                     className="h-[20] w-[20] mr-2"
    //                     alt=""
    //                   />
    //                   <h3 className="font-nunitoSans font-normal text-grayText">

    //                     Emergency Patient
    //                   </h3>
    //                 </a>
    //               </li>
    //             </ul>
    //           </div>
    //         </div>
    //       </div>
    //     </div>

    //     <div className="p-2  lg:mb-auto mt-auto mx-5 ">
    //       <hr className="border- " />
    //       <div className="  footer-box flex justify-start flex-col text-gray  relative ">
    //         <div
    //           className="bg-white  cursor-pointer flex items-center justify-start bg-transparent mt-3"
    //           onClick={toggleCountryDropdown}>
    //           <img
    //             src={selectedCountry.flag}
    //             alt={selectedCountry.name}
    //             className="inline-block w-5 h-5 mr-2" />
    //           {selectedCountry.name}
    //         </div>
    //         {isCountryDropdownOpen && (
    //           <ul className="absolute z-10 bottom-10 w-[200px] bg-white  rounded shadow-lg">
    //             {countries.map((country) => (
    //               <li
    //                 key={country.code}
    //                 onClick={() => handleCountrySelect(country)}
    //                 className="flex items-center px-4 py-2 cursor-pointer hover:bg-gray-100"
    //               >
    //                 <img
    //                   src={country.flag}
    //                   alt={country.name}
    //                   className="inline-block w-5 h-5 mr-2"
    //                 />
    //                 {country.name}
    //               </li>
    //             ))}
    //           </ul>
    //         )}
    //       </div>
    //       <div className="mt-5">
    //         <a href="" className="flex items-center ">
    //           <img src={require("../../imges/LogoutIcon.png")} alt="" />
    //           <h3 className=" text-grayText ml-2 font-AlbertSans font-normal"> Logout </h3>
    //         </a>
    //       </div>
    //     </div>

    //   </div>
    // </div>
    // <div className=" bg-gray-100  ">
    //   <div className=" grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 lg:gap-4 md:gap-4 sm:gap-2 mx-auto ">
    //     {patients.map((patient) => (
    //       <Link
    //         to={`/PatientDetails/${patient.id}`}
    //         key={patient.id}
    //         className="bg-white shadow-sm rounded-2xl p-4 flex flex-col"
    //       >
    //         <div className=" lg:pb-4 md:pb-2 pb-2 flex flex-row items-center gap-3 borderline">
    //           <div className="flex items-center ">
    //             <img
    //               src={patient.avatarUrl}
    //               alt="Patient avatar"
    //               className="w-11 h-11 rounded-full"
    //             />
    //           </div>
    //           <div className="title">
    //             <h2 className="text-lg font-normal font-nunitoSans capitalize">
    //               {patient.name}
    //             </h2>
    //           </div>
    //           <button className="text-red-500 ms-auto">
    //             <Trash></Trash>
    //           </button>
    //         </div>

    //         <div className="flex lg:my-3 md:my-2 my-2 items-center space-x-2">
    //           <div>
    //             <Callicon></Callicon>
    //           </div>
    //           <span className="font-nunitoSans font-normal text-black text-base !m-0 ps-2 ">
    //             {patient.phone}
    //           </span>
    //         </div>

    //         <div className="flex items-center gap-4">
    //           <div className="gender flex items-center">
    //             <span>
    //               <Maleicon className={`text-sky`} />
    //             </span>
    //             <h6 className="text-black text-base mb-0 ps-2 font-nunitoSans font-normal capitalize ">
    //               {patient.gender}
    //             </h6>
    //           </div>
    //           <div className="Age flex items-center">
    //             <span>
    //               <BdayIcon className={`text-sky`} />
    //             </span>
    //             <h6 className="text-black text-base mb-0 ps-2 font-nunitoSans font-normal ">
    //               {patient.age}
    //             </h6>
    //           </div>
    //         </div>

    //         <div className="lg:mt-4 md:mt-2 mt-2">
    //           <div className="flex items-center flex-row gap-3">
    //             <h6 className="text-black text-base font-medium mb-0 capitalize font-nunitoSans">
    //               Status
    //             </h6>
    //             <div className="ms-auto">
    //               <label class="relative inline-flex items-center cursor-pointer">
    //                 <input type="checkbox" class="sr-only peer" value="" />
    //                 <div class="group peer bg-gray  rounded-full duration-300 w-8 h-4 after:duration-300 after:bg-white peer-checked:after:bg-sky peer-checked:ring-sky peer-checked:ring-2 after:rounded-full after:absolute after:h-2.5 after:w-2.5 after:top-[3px] after:right-1 after:flex after:justify-center after:items-center peer-checked:after:-translate-x-4 peer-hover:after:scale-95"></div>
    //               </label>
    //             </div>
    //           </div>
    //         </div>
    //       </Link>
    //     ))}
    //   </div>
    // </div>

    // <div
    //   className={`flex items-center gap-2 my-4 bg-white ${
    //     active ? "AddClass" : ""
    //   }`}
    // >
    //   <div
    //     className={`flex items-center cursor-pointer ${
    //       Selectedactive === "Calendar" ? "checked-text " : ""
    //     }`}
    //     onClick={() => handleSelectactive("Calendar")}
    //   >
    //     <input
    //       type="radio"
    //       name="gender"
    //       className="hidden"
    //       checked={Selectedactive === "Calendar"}
    //       readOnly
    //     />
    //     <label
    //       className={`flex items-center py-[12px] px-[15px] Calendar`}
    //       onClick={Class}
    //     >
    //       <div>
    //         <p className="font-nunitoSans font-thin text-lg">Calendar</p>
    //       </div>
    //     </label>
    //   </div>

    //   <div
    //     className={`flex items-center cursor-pointer ${
    //       Selectedactive === "Statistics" ? "checked-text  " : ""
    //     }`}
    //     onClick={() => handleSelectactive("Statistics")}
    //   >
    //     <input
    //       type="radio"
    //       name="gender"
    //       className="hidden"
    //       checked={Selectedactive === "Statistics"}
    //       readOnly
    //     />
    //     <label
    //       className={`flex items-center py-[12px] px-[15px]  Statistics `}
    //       onClick={Class}
    //     >
    //       <div>
    //         <p className="font-nunitoSans font-thin text-lg">Statistics</p>
    //       </div>
    //     </label>
    //   </div>
    // </div>
  );
}

export default demo;
