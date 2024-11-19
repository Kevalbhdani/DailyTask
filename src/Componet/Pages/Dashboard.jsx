import React from "react";
import DashboardView from "../Dashboard/DashboardView";
import {
  ActiveTreatmenticon,
  InactiveTreatmenticon,
  TotalPatients,
  TotalTreatmenticon,
} from "../../imges/Svg File/Index";
import TotalPatientsicon from "../../imges/Svg File/TotalPatientsicon";

function Dashboard() {
  return (
    <DashboardView>
      <div class=" mx-auto bg-offwhite  ">
        <div className="title py-2">
          <h3 className="font-AlbertSans font-bold text-2xl mb-2">Dashboard</h3>
        </div>
        <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4  ">
          <div class="bg-white rounded-2xl shadow-sm  flex items-center justify-between  lg:p-6 sm:p-4 py-3 p-6 mt-3 h-[100px]  ">
            <div className="">
              <p className="text-gray font-nunitoSans font-normal mt-2 mb-1 ">
                Total Patients
              </p>
              <p class="text-[28px] font-bold font-AlbertSans text-start">
                120
              </p>
            </div>
            <div class="flex items-center justify-center w-12 h-12  bg-blue-100 rounded-2xl ">
              <TotalPatients></TotalPatients>
            </div>
          </div>
          <div class="bg-white rounded-2xl shadow-sm  text-center flex items-center justify-between lg:p-6 sm:p-4 py-3 p-6 h-[100px] mt-3">
            <div className="">
              <p class="text-gray mt-2 mb-1 ">Total Treatment</p>
              <p class="text-[28px] font-bold text-start">20</p>
            </div>
            <div class="flex items-center justify-center w-12 h-12  bg-offyellow rounded-2xl ">
              <TotalTreatmenticon></TotalTreatmenticon>
            </div>
          </div>
          <div class="bg-white rounded-2xl shadow-sm  text-center flex items-center justify-between lg:p-6 sm:p-4 py-3 p-6 h-[100px] mt-3 ">
            <div className="">
              <p class="text-gray mt-2 mb-1 ">Active Treatment</p>
              <p class="text-[28px] font-bold text-start">12</p>
            </div>
            <div class="flex items-center justify-center w-12 h-12  bg-offgreen rounded-2xl ">
              <ActiveTreatmenticon></ActiveTreatmenticon>
            </div>
          </div>

          <div class="bg-white rounded-2xl shadow-sm  text-center flex items-center justify-between lg:p-6 sm:p-4 py-3 p-6 h-[100px] mt-3 ">
            <div className="">
              <p class="text-gray mt-2 mb-1 ">Inactive Treatment</p>
              <p class="text-[28px] font-bold text-start">12</p>
            </div>
            <div class="flex items-center justify-center w-12 h-12  bg-offred rounded-2xl ">
              <InactiveTreatmenticon></InactiveTreatmenticon>
            </div>
          </div>
        </div>
      </div>
    </DashboardView>
  );
}

export default Dashboard;
