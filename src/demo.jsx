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

    // <div className="flex  ">
    //   {/* Sidebar */}
    //   <aside
    //     width="250px"
    //     className={` min-h-screen  bg-white shadow z-[980] bg-overlap ${active ? "AddClass" : ""
    //       }`}
    //   >
    //     <div
    //       className={`ps-sidebar-container flex flex-col  justify-between min-h-screen w-[250px] sticky top-0 left-0 overflow-hidden `}
    //     >
    //       <div className="Upper-sidebar relative h-full overflow-y-auto overflow-x-hidden z-3">
    //         <div className="logo-images" onClick={() => setisdiv(!isdiv)}>
    //           <Link
    //             className="flex items-center  img-class mt-6 mx-auto  justify-center cursor-pointer "
    //             onClick={Class}
    //           >
    //             <img
    //               className="w-8 h-7 m-2  object-cover "
    //               src={require("../../imges/Vector.png")}
    //               alt=""
    //             />
    //             <h3 className="lato font-bold ms-2 font-lato dashboars-text ">
    //               CICERO HOSPITAL
    //             </h3>
    //           </Link>
    //         </div>
    //         <nav className="dashboard-menu  p-3.5 ">
    //           <ul>
    //             <SidebarItem
    //               label="Dashboard"
    //               path="/dashboardmenu"
    //               icon={<Dashboard />}
    //               isActive={pathname === "/dashboardmenu"}
    //             />
    //             <SidebarItem
    //               label="Patients"
    //               path="/patients"
    //               icon={<ProfileIcon />}
    //               isActive={pathname === "/patients"}
    //             />
    //             <SidebarItem
    //               label="Running Treatment"
    //               path="/Treatment"
    //               icon={<Treatment />}
    //               isActive={pathname === "/Treatment"}
    //             />
    //             <SidebarItem
    //               label="Inspection Request"
    //               path="/InspectionRequest"
    //               icon={<Treatment />}
    //               isActive={pathname === "/InspectionRequest"}
    //             />
    //             <SidebarItem
    //               label="Emergency Patient"
    //               path="/EmergencyPatient"
    //               icon={<Emergncy />}
    //               isActive={pathname === "/EmergencyPatient"}
    //             />
    //           </ul>
    //         </nav>
    //       </div>
    //       <div>
    //         <div className="sidebar-footer   relative hidden lg:inline">
    //           <div className="footer-box  ">
    //             <div className=" bordertop p-3 ">
    //               <div
    //                 className="bg-white  cursor-pointer flex items-center justify-start bg-transparent mt-3  text-grayText font-AlbertSans font-normal text-xs "
    //                 onClick={toggleCountryDropdown}
    //               >
    //                 <img
    //                   src={selectedCountry.flag}
    //                   alt={selectedCountry.name}
    //                   className="w-8 h-8 mr-3 "
    //                 />
    //                 {selectedCountry.name}
    //               </div>
    //               {isCountryDropdownOpen && (
    //                 <ul className="absolute z-10 bottom-28 w-[200px] bg-white  rounded shadow-lg ">
    //                   {countries.map((country) => (
    //                     <li
    //                       key={country.code}
    //                       onClick={() => handleCountrySelect(country)}
    //                       className="flex items-center px-4  cursor-pointer hover:bg-grayLight text-grayText  "
    //                     >
    //                       <img
    //                         src={country.flag}
    //                         alt={country.name}
    //                         className="inline-block  mr-2 h-[20px] w-[20px]  "
    //                       />
    //                       <p className="dashboars-text"> {country.name}</p>
    //                     </li>
    //                   ))}
    //                 </ul>
    //               )}
    //             </div>
    //             <Link to={""}>
    //               <div className="flex items-center mb-5 mt-5">
    //                 <img
    //                   src={require("../../imges/LogoutIcon.png")}
    //                   className="h-[20px] w-[20px] mx-4 "
    //                   alt=""
    //                 />
    //                 <h3 className="font-AlbertSans font-normal text-grayText text-xs dashboars-text ">
    //                   Logout
    //                 </h3>
    //               </div>
    //             </Link>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </aside>
    //   {/* Header and Main Content */}
    //   <div className={`sidebar-layout  w-full bg-offwhite bg-overlap `}>
    //     <header className=" header  shadow-md space-x-4  sticky top-0 right-0 px-4 p-4 w-full  bg-white z-[9] ">
    //       <div className="flex items-center w-full relative  ">
    //         <div className={`flex items-center rounded-lg  w-full`}>
    //           <button className={`sidebar serch-box `} onClick={Class}>
    //             <IoMenu className={` w-8 h-8  m-2 text-gray lg:hidden `} />
    //           </button>
    //           <div className=" flex items-center bg-grayLight rounded-lg ">
    //             <button
    //               className="flex items-center  serch-box"
    //               onClick={toggleSearchBar}
    //             >
    //               <BiSearchAlt className="w-5 h-5  m-2 text-gray lg:inline-block hidden" />
    //               <input
    //                 type="text"
    //                 placeholder="Search"
    //                 className="px-1 py-2 text-md rounded-md font-nunitoSans font-normal  bg-grayLight focus:outline-none hidden lg:inline-block serch-box"
    //               />
    //               <div
    //                 className={`absolute sm:top-16 top-20 lg:hidden right-10 w-[full]  sm:p-4 p-2 bg-white rounded-lg shadow-lg transition-all duration-300 ${isSearchOpen
    //                   ? "opacity-100 scale-100"
    //                   : "opacity-0 scale-95 pointer-events-none "
    //                   }`}
    //               >
    //                 <input
    //                   type="text"
    //                   placeholder="Search..."
    //                   className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none"
    //                 />
    //               </div>
    //             </button>
    //           </div>
    //         </div>
    //         <div className="flex items-center ms-auto  ">
    //           <div className=" flex items-center">
    //             <button onClick={toggleSearchBar}>
    //               <BiSearchAlt
    //                 className={` w-7 h-7 mx-2  text-gray  bg-grayLight lg:hidden  rounded-lg `}
    //               />
    //             </button>
    //             <SetingIcon></SetingIcon>
    //           </div>
    //           <div>
    //             <PiLineVerticalThin className="h-10 w-9 text-gray" />
    //           </div>
    //           <div className="relative">
    //             <div
    //               className="cursor-pointer "
    //               onClick={toggleNotificationDropdown}
    //             >
    //               <NotificationIcon></NotificationIcon>
    //             </div>
    //             {isNotificationDropdownOpen && (
    //               <div className="absolute right-5   mt-4 w-[300px] bg-white rounded-xl shadow-lg z-20">
    //                 <div className="flex justify-between items-center p-4">
    //                   <h2 className="text-base font-medium font-nunitoSans">
    //                     Notification
    //                   </h2>
    //                   <button onClick={toggleNotificationDropdown}>
    //                     <IoCloseSharp size={20} />
    //                   </button>
    //                 </div>
    //                 <ul className=" divide-gray-200">
    //                   {notifications.map((notification) => (
    //                     <li
    //                       key={notification.id}
    //                       className="p-4 flex items-center"
    //                     >
    //                       <img
    //                         src={require("../../imges/profileImg.png")}
    //                         alt="avatar"
    //                         className="w-10 h-10 rounded-full mr-3"
    //                       />
    //                       <div>
    //                         <h3 className="font-medium text-sm font-nunitoSans ">
    //                           {notification.title}
    //                         </h3>
    //                         <p className="text-gray-500 text-xs font-nunitoSans-normal">
    //                           {notification.message}
    //                         </p>
    //                       </div>
    //                     </li>
    //                   ))}
    //                 </ul>
    //               </div>
    //             )}
    //           </div>
    //           <button

    //             onClick={profileOffcanvas}
    //           >
    //             {/* onClick={openModal} */}
    //             <div className="flex items-center text-nowrap text-start">
    //               <div className=" w-[35px] h-[35px]">
    //                 <img
    //                   className=" w-[full] h-[full]  rounded-full object-cover "
    //                   src={require("../../imges/user.webp")}
    //                   alt="User"
    //                 />
    //               </div>
    //               <div className="ml-2  hidden sm:inline-block overflow-hidden">
    //                 <p className="font-nunitoSans font-medium	text-sm ">
    //                   User Name
    //                 </p>
    //                 <p className="text-gray font-nunitoSans font-normal text-xs ">
    //                   Hospital Admin
    //                 </p>
    //               </div>
    //             </div>

    //           </button>
    //         </div>
    //       </div>
    //     </header>
    //     <main className="comman-desh bg-offwhite px-2 py-4 px-lg-3 px-md-3 px-sm-3 ">
    //       <div className="px-3 ">{children}</div>
    //     </main>
    //   </div>
    //   {isOpen && (
    //     <div className="fixed  inset-0 right-0 top-0  flex justify-end  bg-black bg-opacity-50 z-[999]  ">
    //       <div
    //         className="bg-white  rounded-l-3xl shadow-lg w-[450px] relative overflow-auto xl:overflow-y-hidden z-[999] "
    //         onClick={(e) => e.stopPropagation()}
    //       >
    //         <div
    //           className="profile-header lg:p-6 md:p-4 sm:p-3 p-3 justify-between flex items-center sticky top-0 right-0 z-10 bg-white
    //      "
    //         >
    //           <div className="title-section">
    //             <h2 className="text-2xl font-bold  font-nunitoSans text-start">
    //               Edit Profile
    //             </h2>
    //             <p className="font-base font-nunitoSans font-light text-gray mt-1">
    //               Add patient all details
    //             </p>
    //           </div>
    //           <div>
    //             <button
    //               className=" text-gray-400 hover:text-gray-600"
    //               onClick={closeModal}
    //             >
    //               <Cancelicon></Cancelicon>
    //             </button>
    //           </div>
    //         </div>
    //         <div className="profile-body h-full p-0">
    //           <form action="">
    //             <div className="flex flex-col content-between">
    //               <div className="lg:p-5 md:p-4 sm:p-3 p-3 mb-5 text-start">
    //                 <div className="text-center   ">
    //                   <div className="upload-img   relative ">
    //                     <div className=" mx-auto img-preview w-[100px] h-[100px] p-2">
    //                       <img
    //                         className="  w-[full] h-[full]  rounded-full  object-cover "
    //                         src={require("../../imges/user.webp")}
    //                         alt="User"
    //                       />
    //                     </div>
    //                     <span className=" w-8 h-8 rounded-full border-4 border-white bg-sky absolute bottom-2 sm:right-[162px] md:right-[162px] right-[164px] lg:right-[158px]">
    //                       <input
    //                         type="file"
    //                         className=" p-1 w-5 h-5 rounded-full bg-sky "
    //                       />
    //                       <EditProfileIcon
    //                         className={`absolute   sm:top-[-1px] sm:left-[-6px] top-[-1px] left-[-6px] `}
    //                       ></EditProfileIcon>
    //                     </span>
    //                   </div>
    //                 </div>
    //                 <div className="mb-4">
    //                   <label
    //                     for="text"
    //                     className=" text-sm text-black mb-5 font-nunitoSans ms-1 font-normal "
    //                   >
    //                     Full Name
    //                   </label>
    //                   <div className=" relative mt-2 ">
    //                     <input
    //                       type="text"
    //                       placeholder=" EnterFull Name"
    //                       className="w-full px-11 py-3 bg-whiteLight rounded-xl text-sm "
    //                     />
    //                     <img
    //                       className="size-[20px] top-3 left-2 absolute"
    //                       src={require("../../imges/hospital.png")}
    //                       alt=""
    //                     />
    //                   </div>
    //                 </div>
    //                 <div className="mb-4">
    //                   <label
    //                     for="text"
    //                     className=" text-sm text-black mb-4 font-nunitoSans ms-1 font-normal "
    //                   >
    //                     Email
    //                   </label>
    //                   <div className=" relative mt-2 ">
    //                     <input
    //                       type="text"
    //                       placeholder="Enter Email "
    //                       className="w-full px-11 py-3 bg-whiteLight rounded-xl text-sm "
    //                     />
    //                     <img
    //                       className="size-[20px] top-3 left-2 absolute"
    //                       src={require("../../imges//email.png")}
    //                       alt=""
    //                     />
    //                   </div>
    //                 </div>
    //                 <div className="mb-4">
    //                   <label
    //                     for="text"
    //                     className=" text-sm text-black mb-4 font-nunitoSans ms-1 font-normal "
    //                   >
    //                     Mobile Number
    //                   </label>
    //                   <div className=" relative mt-2">
    //                     <input
    //                       type="text"
    //                       placeholder=" Enter Mobile Number"
    //                       className="w-full px-10 py-3 bg-whiteLight rounded-xl text-sm "
    //                     />
    //                     <img
    //                       className="size-[20px] top-3 left-2 absolute"
    //                       src={require("../../imges//call.png")}
    //                       alt=""
    //                     />
    //                   </div>
    //                 </div>
    //                 <div className="mb-4">
    //                   <label
    //                     for="text"
    //                     className=" text-sm text-black mb-4 font-nunitoSans ms-1 font-normal "
    //                   >
    //                     Role
    //                   </label>
    //                   <div className="">
    //                     <select
    //                       id="lang"
    //                       className="w-full ps-2 pe-5 py-3 mt-2 text-sm  bg-whiteLight text-grayText rounded-xl  "
    //                     >
    //                       <option value="">Hospital / Organisation-0</option>
    //                       <option value="">Hospital / Organisation-1</option>
    //                       <option value="">Hospital / Organisation-2</option>
    //                     </select>
    //                   </div>
    //                 </div>
    //               </div>
    //               <div className="pb-4 px-3 lg:px-5 md:px-4 sm:px-3 right-0 bottom-0 sticky bg-white ">
    //                 <button className="bg-blue-500 text-white w-full rounded-lg transition duration-300 py-3.5">
    //                   Save
    //                 </button>
    //               </div>
    //             </div>
    //           </form>
    //         </div>
    //       </div>
    //     </div>
    //   )}
    // </div>
  );
}

export default demo;
