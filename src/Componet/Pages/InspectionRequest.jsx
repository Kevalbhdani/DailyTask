import React, { useState } from "react";
import DashboardView from "../Dashboard/DashboardView";
import Breadcrumb from "../CommonComponet/Breadcrumb";
import { Link } from "react-router-dom";
import Eyeicon from "../../imges/Svg File/Eyeicon";
import Dateicon from "../../imges/Svg File/Dateicon";

function InspectionRequest() {
  const crumbs = [
    { label: "Dashboard", path: "/dashboardmenu" },
    { label: "Inspection Request", path: "/dashboardmenu/InspectionRequest" },
  ];

  return (
    <DashboardView>
      <div>
        <div className="Title py-2">
          <h1 className="font-AlbertSans font-bold text-2xl ">
            Inspection Request
          </h1>
          <Breadcrumb crumbs={crumbs}></Breadcrumb>
        </div>

        <div className="lg:grid-cols-12 md:grid-col-12 sm:grid-col-12 ">
          <h3 className=" text-sky font-light font-nunitoSans text-sm my-2">
            Today
          </h3>
        </div>

        <div className="flex items-center justify-between bg-gray-50 shadow-sm rounded-lg p-3.5  bg-white mt-4">
          <div className="flex items-center relative">
            <div className="pe-2">
              <img
                src={require("../../imges/user.webp")}
                alt={` profile`}
                className="w-10 h-10 rounded-full "
              />
            </div>
            <div className="flex items-center ">
              <p className="font-normal  text-gray-800 pe-4 ">Dianne Russell</p>
              <div class="w-px h-7 bg-black mx-4"></div>
              <div
                className={
                  "font-nunitoSans font-normal text-sm flex items-center text-sky"
                }
              >
                <Dateicon></Dateicon>
                <h3 className="ms-2 text-black">02 Sep, 2024</h3>
              </div>
              <div class="w-px h-7 bg-black mx-4"></div>
              <span>
                <Eyeicon></Eyeicon>
              </span>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <button className="bg-green-100 text-green-600 px-4 py-2 rounded-lg hover:bg-green-200">
              Accept
            </button>

            <button className="bg-red-100 text-red-600 px-4 py-2 rounded-lg hover:bg-red-200">
              Decline
            </button>
          </div>
        </div>
        <div className="flex items-center justify-between bg-gray-50 shadow-sm rounded-lg p-3.5  bg-white mt-4">
          <div className="flex items-center relative">
            <div className="pe-2">
              <img
                src={require("../../imges/user.webp")}
                alt={` profile`}
                className="w-10 h-10 rounded-full "
              />
            </div>
            <div className="flex items-center ">
              <p className="font-normal  text-gray-800 pe-4 ">Dianne Russell</p>
              <div class="w-px h-7 bg-black mx-4"></div>
              <div
                className={
                  "font-nunitoSans font-normal text-sm flex items-center text-sky"
                }
              >
                <Dateicon></Dateicon>
                <h3 className="ms-2 text-black">02 Sep, 2024</h3>
              </div>
              <div class="w-px h-7 bg-black mx-4"></div>
              <span>
                <Eyeicon></Eyeicon>
              </span>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <button className="bg-green-100 text-green-600 px-4 py-2 rounded-lg hover:bg-green-200">
              Accept
            </button>

            <button className="bg-red-100 text-red-600 px-4 py-2 rounded-lg hover:bg-red-200">
              Decline
            </button>
          </div>
        </div>
        <div className="flex items-center justify-between bg-gray-50 shadow-sm rounded-lg p-3.5  bg-white mt-4">
          <div className="flex items-center relative">
            <div className="pe-2">
              <img
                src={require("../../imges/user.webp")}
                alt={` profile`}
                className="w-10 h-10 rounded-full "
              />
            </div>
            <div className="flex items-center ">
              <p className="font-normal  text-gray-800 pe-4 ">Dianne Russell</p>
              <div class="w-px h-7 bg-black mx-4"></div>
              <div
                className={
                  "font-nunitoSans font-normal text-sm flex items-center text-sky"
                }
              >
                <Dateicon></Dateicon>
                <h3 className="ms-2 text-black">02 Sep, 2024</h3>
              </div>
              <div class="w-px h-7 bg-black mx-4"></div>
              <span>
                <Eyeicon></Eyeicon>
              </span>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <button className="bg-green-100 text-green-600 px-4 py-2 rounded-lg hover:bg-green-200">
              Accept
            </button>

            <button className="bg-red-100 text-red-600 px-4 py-2 rounded-lg hover:bg-red-200">
              Decline
            </button>
          </div>
        </div>
        <div className="flex items-center justify-between bg-gray-50 shadow-sm rounded-lg p-3.5  bg-white mt-4">
          <div className="flex items-center relative">
            <div className="pe-2">
              <img
                src={require("../../imges/user.webp")}
                alt={` profile`}
                className="w-10 h-10 rounded-full "
              />
            </div>
            <div className="flex items-center ">
              <p className="font-normal  text-gray-800 pe-4 ">Dianne Russell</p>
              <div class="w-px h-7 bg-black mx-4"></div>
              <div
                className={
                  "font-nunitoSans font-normal text-sm flex items-center text-sky"
                }
              >
                <Dateicon></Dateicon>
                <h3 className="ms-2 text-black">02 Sep, 2024</h3>
              </div>
              <div class="w-px h-7 bg-black mx-4"></div>
              <span>
                <Eyeicon></Eyeicon>
              </span>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <button className="bg-green-100 text-green-600 px-4 py-2 rounded-lg hover:bg-green-200">
              Accept
            </button>

            <button className="bg-red-100 text-red-600 px-4 py-2 rounded-lg hover:bg-red-200">
              Decline
            </button>
          </div>
        </div>
        <div className="flex items-center justify-between bg-gray-50 shadow-sm rounded-lg p-3.5  bg-white mt-4">
          <div className="flex items-center relative">
            <div className="pe-2">
              <img
                src={require("../../imges/user.webp")}
                alt={` profile`}
                className="w-10 h-10 rounded-full "
              />
            </div>
            <div className="flex items-center ">
              <p className="font-normal  text-gray-800 pe-4 ">Dianne Russell</p>
              <div class="w-px h-7 bg-black mx-4"></div>
              <div
                className={
                  "font-nunitoSans font-normal text-sm flex items-center text-sky"
                }
              >
                <Dateicon></Dateicon>
                <h3 className="ms-2 text-black">02 Sep, 2024</h3>
              </div>
              <div class="w-px h-7 bg-black mx-4"></div>
              <span>
                <Eyeicon></Eyeicon>
              </span>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <button className="bg-green-100 text-green-600 px-4 py-2 rounded-lg hover:bg-green-200">
              Accept
            </button>

            <button className="bg-red-100 text-red-600 px-4 py-2 rounded-lg hover:bg-red-200">
              Decline
            </button>
          </div>
        </div>
        <div className="flex items-center justify-between bg-gray-50 shadow-sm rounded-lg p-3.5  bg-white mt-4">
          <div className="flex items-center relative">
            <div className="pe-2">
              <img
                src={require("../../imges/user.webp")}
                alt={` profile`}
                className="w-10 h-10 rounded-full "
              />
            </div>
            <div className="flex items-center ">
              <p className="font-normal  text-gray-800 pe-4 ">Dianne Russell</p>
              <div class="w-px h-7 bg-black mx-4"></div>
              <div
                className={
                  "font-nunitoSans font-normal text-sm flex items-center text-sky"
                }
              >
                <Dateicon></Dateicon>
                <h3 className="ms-2 text-black">02 Sep, 2024</h3>
              </div>
              <div class="w-px h-7 bg-black mx-4"></div>
              <span>
                <Eyeicon></Eyeicon>
              </span>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <button className="bg-green-100 text-green-600 px-4 py-2 rounded-lg hover:bg-green-200">
              Accept
            </button>

            <button className="bg-red-100 text-red-600 px-4 py-2 rounded-lg hover:bg-red-200">
              Decline
            </button>
          </div>
        </div>
      </div>
    </DashboardView>
  );
}

export default InspectionRequest;
