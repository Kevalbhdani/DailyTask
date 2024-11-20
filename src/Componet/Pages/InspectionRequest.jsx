import React, { useState } from "react";
import DashboardView from "../Dashboard/DashboardView";

function InspectionRequest() {
  //  const [currentDate, setCurrentDate] = useState(new Date());

  //  // Helper functions
  //  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  //  const months = [
  //    "January",
  //    "February",
  //    "March",
  //    "April",
  //    "May",
  //    "June",
  //    "July",
  //    "August",
  //    "September",
  //    "October",
  //    "November",
  //    "December",
  //  ];

  //  const getDaysInMonth = (year, month) => {
  //    return new Date(year, month + 1, 0).getDate();
  //  };

  //  const handlePrevMonth = () => {
  //    setCurrentDate(
  //      new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1)
  //    );
  //  };

  //  const handleNextMonth = () => {
  //    setCurrentDate(
  //      new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1)
  //    );
  //  };

  //  // Generate calendar days
  //  const generateCalendar = () => {
  //    const year = currentDate.getFullYear();
  //    const month = currentDate.getMonth();
  //    const firstDayOfMonth = new Date(year, month, 1).getDay();
  //    const daysInMonth = getDaysInMonth(year, month);

  //    const days = [];

  //    // Add empty slots for the previous month's days
  //    for (let i = 0; i < firstDayOfMonth; i++) {
  //      days.push("");
  //    }

  //    // Add current month's days
  //    for (let i = 1; i <= daysInMonth; i++) {
  //      days.push(i);
  //    }

  //    return days;
  //  };

  //  const days = generateCalendar();
  const [currentDate, setCurrentDate] = useState(new Date());

  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const getDaysInMonth = (year, month) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (year, month) => {
    return new Date(year, month, 1).getDay();
  };

  const handlePrevMonth = () => {
    const prevDate = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth() - 1
    );
    setCurrentDate(prevDate);
  };

  const handleNextMonth = () => {
    const nextDate = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth() + 1
    );
    setCurrentDate(nextDate);
  };

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();
  const daysInMonth = getDaysInMonth(year, month);
  const firstDay = getFirstDayOfMonth(year, month);

  return (
    // <DashboardView>
    //   {/* {isOpen && (
    //     <div className="fixed  inset-0 right-0 top-0  flex justify-end bg-overlap z-[999] profile-offcanvas ">
    //       <div
    //         className="bg-white  rounded-l-3xl shadow-lg w-[450px] relative overflow-auto xl:overflow-y-hidden z-[999] "
    //         onClick={(e) => e.stopPropagation()}
    //       >
    //         <div
    //           className="profile-header lg:p-6 md:p-4 sm:p-3 p-3 justify-between flex items-center sticky top-0 right-0 z-10 bg-white
    //                     "
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
    //           <div className=" ">
    //             <form action="">
    //               <div className="flex flex-col content-between">
    //                 <div className="lg:p-5 md:p-4 sm:p-3 p-3 mb-5 text-start">
    //                   <div className="text-center   ">
    //                     <div className="upload-img   relative ">
    //                       <div className=" mx-auto img-preview w-[100px] h-[100px] p-2">
    //                         <img
    //                           className="  w-[full] h-[full]  rounded-full  object-cover "
    //                           src={require("../../imges/user.webp")}
    //                           alt="User"
    //                         />
    //                       </div>
    //                       <span className=" w-8 h-8 rounded-full border-4 border-white bg-sky absolute bottom-2 sm:right-[162px] md:right-[162px] right-[164px] lg:right-[158px]">
    //                         <input
    //                           type="file"
    //                           className=" p-1 w-5 h-5 rounded-full bg-sky "
    //                         />
    //                         <EditProfileIcon
    //                           className={`absolute   sm:top-[-1px] sm:left-[-6px] top-[-1px] left-[-6px] `}
    //                         ></EditProfileIcon>
    //                       </span>
    //                     </div>
    //                   </div>
    //                   <div className="mb-4">
    //                     <label
    //                       for="text"
    //                       className=" text-sm text-black mb-5 font-nunitoSans ms-1 font-normal "
    //                     >
    //                       Full Name
    //                     </label>
    //                     <div className=" relative mt-2 ">
    //                       <input
    //                         type="text"
    //                         placeholder=" EnterFull Name"
    //                         className="w-full px-11 py-3 bg-whiteLight rounded-xl text-sm "
    //                       />
    //                       <img
    //                         className="size-[20px] top-3 left-2 absolute"
    //                         src={require("../../imges/hospital.png")}
    //                         alt=""
    //                       />
    //                     </div>
    //                   </div>

    //                   <div className="mb-4">
    //                     <label
    //                       for="text"
    //                       className=" text-sm text-black mb-4 font-nunitoSans ms-1 font-normal "
    //                     >
    //                       Email
    //                     </label>
    //                     <div className=" relative mt-2 ">
    //                       <input
    //                         type="text"
    //                         placeholder="Enter Email "
    //                         className="w-full px-11 py-3 bg-whiteLight rounded-xl text-sm "
    //                       />
    //                       <img
    //                         className="size-[20px] top-3 left-2 absolute"
    //                         src={require("../../imges//email.png")}
    //                         alt=""
    //                       />
    //                     </div>
    //                   </div>

    //                   <div className="mb-4">
    //                     <label
    //                       for="text"
    //                       className=" text-sm text-black mb-4 font-nunitoSans ms-1 font-normal "
    //                     >
    //                       Mobile Number
    //                     </label>
    //                     <div className=" relative mt-2">
    //                       <input
    //                         type="text"
    //                         placeholder=" Enter Mobile Number"
    //                         className="w-full px-10 py-3 bg-whiteLight rounded-xl text-sm "
    //                       />
    //                       <img
    //                         className="size-[20px] top-3 left-2 absolute"
    //                         src={require("../../imges//call.png")}
    //                         alt=""
    //                       />
    //                     </div>
    //                   </div>

    //                   <div className="mb-4">
    //                     <label
    //                       for="text"
    //                       className=" text-sm text-black mb-4 font-nunitoSans ms-1 font-normal "
    //                     >
    //                       Role
    //                     </label>
    //                     <div className="">
    //                       <select
    //                         id="lang"
    //                         className="w-full ps-2 pe-5 py-3 mt-2 text-sm  bg-whiteLight text-grayText rounded-xl  "
    //                       >
    //                         <option value="">Hospital / Organisation-0</option>
    //                         <option value="">Hospital / Organisation-1</option>
    //                         <option value="">Hospital / Organisation-2</option>
    //                       </select>
    //                     </div>
    //                   </div>
    //                 </div>
    //                 <div className="pb-4 px-3 lg:px-5 md:px-4 sm:px-3 right-0 bottom-0 sticky bg-white ">
    //                   <button className="bg-blue-500 text-white w-full rounded-lg transition duration-300 py-3.5">
    //                     Save
    //                   </button>
    //                 </div>
    //               </div>
    //             </form>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   )} */}
    // </DashboardView>
    <DashboardView>
      {/* <div className="bg-white shadow-md rounded-lg p-4  lg:grid-cols-12 min-h-s">
  
        <div className="flex justify-between items-center mb-4">
          <button
            onClick={handlePrevMonth}
            className="text-gray-500 hover:text-gray-700"
          >
            &larr;
          </button>
          <h2 className="text-lg font-semibold text-gray-700">
            {months[currentDate.getMonth()]} {currentDate.getFullYear()}
          </h2>
          <button
            onClick={handleNextMonth}
            className="text-gray-500 hover:text-gray-700"
          >
            &rarr;
          </button>
        </div>

     
        <div className="grid grid-cols-7 text-center font-semibold text-gray-600">
          {daysOfWeek.map((day) => (
            <div key={day} className="p-2">
              {day}
            </div>
          ))}
        </div>

       
        <div className="grid grid-cols-7 text-center">
          {days.map((day, index) => (
            <div
              key={index}
              className={`p-2 h-16 flex items-center justify-center border ${
                day === new Date().getDate() &&
                currentDate.getMonth() === new Date().getMonth() &&
                currentDate.getFullYear() === new Date().getFullYear()
                  ? "bg-blue-100 text-blue-500"
                  : "text-gray-700"
              }`}
            >
              {day}
            </div>
          ))}
        </div>
      </div> */}
      {/* <div class="bg-white shadow-md rounded-lg p-4  lg:grid-cols-12 h-full ">
        <div class="flex justify-between items-center mb-4">
          <button class="text-gray-500 hover:text-gray-700 font-bold">
            &larr;
          </button>
          <h2 class="text-lg font-semibold text-gray-700">September 2024</h2>
          <button class="text-gray-500 hover:text-gray-700 font-bold">
            &rarr;
          </button>
        </div>

        <div class="grid grid-cols-7 text-center font-semibold text-gray-600 mb-2">
          <div>Sun</div>
          <div>Mon</div>
          <div>Tue</div>
          <div>Wed</div>
          <div>Thu</div>
          <div>Fri</div>
          <div>Sat</div>
        </div>

        <div class="grid grid-cols-7 gap-1 text-center">
          <div></div>
          <div></div>
          <div></div>

          <div class="p-2 border rounded-md text-gray-700">1</div>
          <div class="p-2 border rounded-md text-gray-700">2</div>
          <div class="p-2 border rounded-md text-gray-700">3</div>
          <div class="p-2 border rounded-md text-gray-700 bg-blue-100 text-blue-500 font-bold">
            4
          </div>
          <div class="p-2 border rounded-md text-gray-700">5</div>
          <div class="p-2 border rounded-md text-gray-700">6</div>
          <div class="p-2 border rounded-md text-gray-700">7</div>
          <div class="p-2 border rounded-md text-gray-700">8</div>
          <div class="p-2 border rounded-md text-gray-700">9</div>
          <div class="p-2 border rounded-md text-gray-700">10</div>
          <div class="p-2 border rounded-md text-gray-700">11</div>
          <div class="p-2 border rounded-md text-gray-700">12</div>
          <div class="p-2 border rounded-md text-gray-700">13</div>
          <div class="p-2 border rounded-md text-gray-700">14</div>
          <div class="p-2 border rounded-md text-gray-700">15</div>
          <div class="p-2 border rounded-md text-gray-700">16</div>
          <div class="p-2 border rounded-md text-gray-700">17</div>
          <div class="p-2 border rounded-md text-gray-700">18</div>
          <div class="p-2 border rounded-md text-gray-700">19</div>
          <div class="p-2 border rounded-md text-gray-700">20</div>
          <div class="p-2 border rounded-md text-gray-700">21</div>
          <div class="p-2 border rounded-md text-gray-700">22</div>
          <div class="p-2 border rounded-md text-gray-700">23</div>
          <div class="p-2 border rounded-md text-gray-700">24</div>
          <div class="p-2 border rounded-md text-gray-700">25</div>
          <div class="p-2 border rounded-md text-gray-700">26</div>
          <div class="p-2 border rounded-md text-gray-700">27</div>
          <div class="p-2 border rounded-md text-gray-700">28</div>
          <div class="p-2 border rounded-md text-gray-700">29</div>
          <div class="p-2 border rounded-md text-gray-700">30</div>
        </div>
      </div> */}
      <div className=" mx-auto bg-white shadow-lg rounded-lg p-4">
        <div className="flex justify-between items-center mb-4">
          <button
            onClick={handlePrevMonth}
            className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
          >
            Prev
          </button>
          <h2 className="text-lg font-bold">
            {currentDate.toLocaleString("default", {
              month: "long",
            })}{" "}
            {year}
          </h2>
          <button
            onClick={handleNextMonth}
            className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
          >
            Next
          </button>
        </div>
        <div className="grid grid-cols-7  text-center font-medium ">
          {daysOfWeek.map((day) => (
            <div key={day} className="text-gray-500 ">
              {day}
            </div>
          ))}
        </div>
        <div className="grid grid-cols-7 gap-1 mt-2 ">
          {Array.from({ length: firstDay }).map((_, idx) => (
            <div key={idx}></div>
          ))}
          {Array.from({ length: daysInMonth }).map((_, idx) => (
            <div
              key={idx}
              className="p-2 bg-gray-100 hover:bg-blue-200 rounded text-right cursor-pointer grid-cols-1 grid-rows-1"
            >
              {idx + 1}
            </div>
          ))}
        </div>
      </div>
    </DashboardView>
  );
}

export default InspectionRequest;
