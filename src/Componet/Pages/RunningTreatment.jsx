import React, { useState } from "react";
import DashboardView from "../Dashboard/DashboardView";
import Breadcrumb from "../CommonComponet/Breadcrumb";
import { Link } from "react-router-dom";
import Eyeicon from "../../imges/Svg File/Eyeicon";
import Dateicon from "../../imges/Svg File/Dateicon";

function RunningTreatment() {
  const crumbs = [
    { label: "Dashboard", path: "/dashboardmenu" },
    { label: "Running-treatment", path: "/dashboardmenu/Treatment" },
  ];
  return (
    <DashboardView>
      <div>
        <div className="flex justify-between iteam-center  col-span-12">
          <div className="Title py-2">
            <h1 className="font-nunitoSans font-bold text-2xl ">Treatment</h1>
            <Breadcrumb crumbs={crumbs}></Breadcrumb>
          </div>
          <div className="Add Treatment">
            <button className="px-4 py-3 text-white bg-sky rounded-2xl">
              <span className="  font-nunitoSans font-bold text-base text-md">
                + Add Patient
              </span>
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-8 md:gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-3 xl:grid-cols-3 ">
          <div className="mt-3 p-3 bg-white shadow-md rounded-xl">
            <Link to={""}>
              <div className="pb-4 gap-2 flex items-center flex-row borderline">
                <div className="font-normal text-black font-nunitoSans justify-between   text-base">
                  Completion 35,36,
                </div>
                <div className="ms-auto">
                  <Eyeicon></Eyeicon>
                </div>
              </div>
              <div className="py-3.5 flex items-center flex-row gap-2">
                <div className="img-section">
                  <div className={"w-[40px] h-[40px]"}>
                    <img
                      className="rounded-full h-full   object-cover"
                      src={require("../../imges/user.webp")}
                      alt="User"
                    />
                  </div>
                </div>
                <div className="font-normal text-black font-nunitoSans text-base">
                  Dianne Russell
                </div>
              </div>
              <div
                className={
                  "font-nunitoSans font-normal text-sm flex items-center "
                }
              >
                <Dateicon> </Dateicon>
                <h3 className="ms-2">02 Sep, 2024</h3>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </DashboardView>
  );
}

export default RunningTreatment;
