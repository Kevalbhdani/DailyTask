import React, { useState } from "react";
import DashboardView from "../../Dashboard/DashboardView";
import Breadcrumb from "../../CommonComponet/Breadcrumb";
import { HiOutlineChevronRight } from "react-icons/hi2";
import { HiOutlineChevronLeft } from "react-icons/hi2";
import { Link } from "react-router-dom";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import Calender from "../../CommonComponet/Calender";
function TreatmentList() {
  const [Selectedactive, setSelectedactive] = useState("");
  const [active, setactive] = useState(false);
   const Class = () => {
     setactive(!active);
   };
  const handleSelectactive = (gender) => {
    setSelectedactive(gender);
  };
  const crumbs = [
    { label: "Dashboard", path: "/dashboardmenu" },
    { label: "Patients List", path: "/patients" },
    {
      label: "Patient Details",
      path: "/dashboardmenu/patients/PatientDetails",
    },
    {
      label: "Treatment List",
      path: "/dashboardmenu/patients/PatientDetails/TreatmentList",
    },
  ];
  const events = [{ title: "+ 1 more", start: new Date() }];

  return (
    <DashboardView>
      <div className="TreatmentList">
        <div className="Title py-2">
          <h1 className="font-AlbertSans font-bold text-2xl ">
            Treatment List
          </h1>
          <Breadcrumb crumbs={crumbs}></Breadcrumb>
        </div>
        <div className=" lg:grid-cols-12 md:grid-cols-12">
          <div className="flex items-center gap-2 my-4 bg-white ">
            <div
              className={`flex items-center cursor-pointer ${
                Selectedactive === "Calendar" ? "checked-text show" : ""
              }`}
              onClick={Class}
            >
              <input
                type="radio"
                name="gender"
                className="hidden"
                checked={Selectedactive === "Calendar"}
                readOnly
              />
              <label
                className={`flex items-center py-[12px] px-[15px]  bg-whiteLight Calendar ${
                  active ? "show" : "hide"
                }`}
                onClick={() => handleSelectactive("Calendar")}
              >
                <div className="font-nunitoSans font-medium text-base ">
                  <p>Calendar</p>
                </div>
              </label>
            </div>

            <div
              className={`flex items-center cursor-pointer ${
                Selectedactive === "Statistics" ? "checked-text " : ""
              }`}
              onClick={Class}
            >
              <input
                type="radio"
                name="gender"
                className="hidden"
                checked={Selectedactive === "Statistics"}
                readOnly
              />
              <label
                className={`flex items-center py-[12px] px-[15px]  bg-whiteLight Calendar${
                  active ? "show" : "hide"
                }`}
              >
                <div className="font-nunitoSans font-medium text-base  ">
                  <p>Statistics</p>
                </div>
              </label>
            </div>
          </div>
          <div className="tab-contend bg-white rounded-xl p-4">
            <FullCalendar
              plugins={[dayGridPlugin]}
              initialView="dayGridMonth"
              weekends={true}
              events={events}
              eventContent={Calender}
              eventBackgroundColor="#858E9A"
            />
          </div>
        </div>
        <div>Statistics</div>
      </div>
    </DashboardView>
  );
}

export default TreatmentList;
