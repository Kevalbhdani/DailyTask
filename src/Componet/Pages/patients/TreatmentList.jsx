import React from "react";
import DashboardView from "../../Dashboard/DashboardView";
import Breadcrumb from "../../CommonComponet/Breadcrumb";
import { HiOutlineChevronRight } from "react-icons/hi2";
import { HiOutlineChevronLeft } from "react-icons/hi2";
import { Link } from "react-router-dom";
function TreatmentList() {
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
   const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
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
          <ul className="my-4 bg-white rounded-lg flex">
            <li className="mx-2.5 list-none">
              <button className="font-nunitoSans font-medium text-lg">
                Calendar
              </button>
            </li>
            <li className="mx-2.5 list-none">
              <button className="font-nunitoSans font-medium text-lg">
                Statistics
              </button>
            </li>
          </ul>
          <div className="tab-contend bg-white rounded-xl p-4">
            <div className="demo-app-main">
              <div className="flex flex-col ">
                <div className="mb-6 flex items-center justify-between">
                  <div className="totalbar-chunk">
                    <button>Today</button>
                  </div>
                  <div className="totalbar-chunk">
                    <div className="month-button flex items-center ">
                      <button className=" w-8 h-8 p-0 bg-sky  rounded-full text-gray ">
                        <span>
                          <HiOutlineChevronLeft />
                        </span>
                      </button>
                      <h2 className="text-center font-semibold text-lg min-w-56">
                        Januray 2024
                      </h2>
                      <button className="w-8 h-8 p-0 bg-sky  rounded-full text-gray">
                        <span>
                          <HiOutlineChevronRight />
                        </span>
                      </button>
                    </div>
                  </div>
                  <div className="totalbar-chunk"></div>
                </div>
                <div className="grow relative">
                  <div className="absolute inset-0">
                    <table className="h-full w-full">
                      <thead className="">
                        <tr className="bg-tabcolor">
                          <th className=" text-center ">
                            <div className="relative">
                              <div className="grid grid-cols-7  text-center font-medium border-tabboder2 ">
                                {daysOfWeek.map((day) => (
                                  <div key={day} className="text-gray-500 p-4">
                                    {day}
                                  </div>
                                ))}
                              </div>
                            </div>
                          </th>
                        </tr>
                      </thead>
                      <tbody></tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            {/* <div>statistics section</div> */}
          </div>
        </div>
      </div>
    </DashboardView>
  );
}

export default TreatmentList;
