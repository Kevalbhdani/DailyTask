import React, { useState } from "react";
import DashboardView from "../../Dashboard/DashboardView";
import Breadcrumb from "../../CommonComponet/Breadcrumb";
import { HiOutlineChevronRight } from "react-icons/hi2";
import { HiOutlineChevronLeft } from "react-icons/hi2";
import { Link } from "react-router-dom";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import Calender from "../../CommonComponet/Calender";
import Linechart from "../../CommonComponet/Linechart";





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
              onClick={() => handleSelectactive("Calendar")}
            >
              <input
                type="radio"
                name="gender"
                className="hidden"
                checked={Selectedactive === "Calendar"}
                readOnly
              />
              <label
                className={`flex items-center py-[12px] px-[15px]  bg-whiteLight Calendar
                   ${active ? "show" : ""}
                `}
                onClick={Class}
              >
                <div>
                  <p className="font-nunitoSans font-thin text-lg">Calendar</p>
                </div>
              </label>
            </div>

            <div
              className={`flex items-center cursor-pointer ${
                Selectedactive === "Statistics" ? "checked-text " : ""
              }`}
              onClick={() => handleSelectactive("Statistics")}
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
                  active ? "show" : ""
                }`}
                onClick={Class}
              >
                <div>
                  <p className="font-nunitoSans font-thin text-lg">
                    Statistics
                  </p>
                </div>
              </label>
            </div>
          </div>
          <div className="tab-contend bg-white  p-4 ">
            <div className="hide show">
              <FullCalendar
                plugins={[dayGridPlugin]}
                initialView="dayGridMonth"
                weekends={true}
                events={events}
                eventContent={Calender}
                eventBackgroundColor="#858E9A"
              />
            </div>
            <div className="hide show">
              <Linechart />
            </div>
          </div>
        </div>
      </div>
    </DashboardView>
  );
}

export default TreatmentList;
