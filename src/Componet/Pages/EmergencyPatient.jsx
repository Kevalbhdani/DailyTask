import React from "react";
import DashboardView from "../Dashboard/DashboardView";
import Eyeicon from "../../imges/Svg File/Eyeicon";
import  Breadcrumb  from "../CommonComponet/Breadcrumb";
import { patients } from "../Helpers/Constant";
import { Link } from "react-router-dom";
import Trash from "../../imges/Svg File/Trash";
import Callicon from "../../imges/Svg File/Callicon";
import Maleicon from "../../imges/Svg File/Maleicon";
import BdayIcon from "../../imges/Svg File/BdayIcon";

function EmergencyPatient() {
  const crumbs = [
    { label: "Dashboard", path: "/dashboardmenu" },
    { label: "Emergency Patient", path: "/dashboardmenu/EmergencyPatient" },
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
        <div className=" grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 lg:gap-4 md:gap-4 sm:gap-2 mx-auto ">
          <div className="">
            <Link
              // to={`/${patient.id}`}
              // key={patient.id}
              className="bg-white shadow-sm rounded-2xl p-4 flex flex-col"
            >
              <div className=" lg:pb-4 md:pb-2 pb-2 flex flex-row items-center gap-3 borderline">
                <div className="flex items-center ">
                  <img
                    src={require("../../imges/user.webp")}
                    alt="Patient avatar"
                    className="w-11 h-11 rounded-full"
                  />
                </div>
                <div className="title">
                  <h2 className="text-lg font-normal font-nunitoSans capitalize">
                    Dianne Russell
                  </h2>
                </div>
                <button className="text-red-500 ms-auto">
                  <Trash></Trash>
                </button>
              </div>

              <div className="flex lg:my-3 md:my-2 my-2 items-center space-x-2">
                <div>
                  <Callicon></Callicon>
                </div>
                <span className="font-nunitoSans font-normal text-black text-base !m-0 ps-2 ">
                  +48 58798624
                </span>
              </div>

              <div className="flex items-center gap-4">
                <div className="gender flex items-center">
                  <span>
                    <Maleicon className={`text-sky`} />
                  </span>
                  <h6 className="text-black text-base mb-0 ps-2 font-nunitoSans font-normal capitalize ">
                    Male
                  </h6>
                </div>
                <div className="Age flex items-center">
                  <span>
                    <BdayIcon className={`text-sky`} />
                  </span>
                  <h6 className="text-black text-base mb-0 ps-2 font-nunitoSans font-normal ">
                    36
                  </h6>
                </div>
              </div>
            </Link>
          </div>
          <div className="">
            <Link
              // to={`/${patient.id}`}
              // key={patient.id}
              className="bg-white shadow-sm rounded-2xl p-4 flex flex-col"
            >
              <div className=" lg:pb-4 md:pb-2 pb-2 flex flex-row items-center gap-3 borderline">
                <div className="flex items-center ">
                  <img
                    src={require("../../imges/user.webp")}
                    alt="Patient avatar"
                    className="w-11 h-11 rounded-full"
                  />
                </div>
                <div className="title">
                  <h2 className="text-lg font-normal font-nunitoSans capitalize">
                    Dianne Russell
                  </h2>
                </div>
                <button className="text-red-500 ms-auto">
                  <Trash></Trash>
                </button>
              </div>

              <div className="flex lg:my-3 md:my-2 my-2 items-center space-x-2">
                <div>
                  <Callicon></Callicon>
                </div>
                <span className="font-nunitoSans font-normal text-black text-base !m-0 ps-2 ">
                  +48 58798624
                </span>
              </div>

              <div className="flex items-center gap-4">
                <div className="gender flex items-center">
                  <span>
                    <Maleicon className={`text-sky`} />
                  </span>
                  <h6 className="text-black text-base mb-0 ps-2 font-nunitoSans font-normal capitalize ">
                    Male
                  </h6>
                </div>
                <div className="Age flex items-center">
                  <span>
                    <BdayIcon className={`text-sky`} />
                  </span>
                  <h6 className="text-black text-base mb-0 ps-2 font-nunitoSans font-normal ">
                    36
                  </h6>
                </div>
              </div>
            </Link>
          </div>
          <div className="">
            <Link
              // to={`/${patient.id}`}
              // key={patient.id}
              className="bg-white shadow-sm rounded-2xl p-4 flex flex-col"
            >
              <div className=" lg:pb-4 md:pb-2 pb-2 flex flex-row items-center gap-3 borderline">
                <div className="flex items-center ">
                  <img
                    src={require("../../imges/user.webp")}
                    alt="Patient avatar"
                    className="w-11 h-11 rounded-full"
                  />
                </div>
                <div className="title">
                  <h2 className="text-lg font-normal font-nunitoSans capitalize">
                    Dianne Russell
                  </h2>
                </div>
                <button className="text-red-500 ms-auto">
                  <Trash></Trash>
                </button>
              </div>

              <div className="flex lg:my-3 md:my-2 my-2 items-center space-x-2">
                <div>
                  <Callicon></Callicon>
                </div>
                <span className="font-nunitoSans font-normal text-black text-base !m-0 ps-2 ">
                  +48 58798624
                </span>
              </div>

              <div className="flex items-center gap-4">
                <div className="gender flex items-center">
                  <span>
                    <Maleicon className={`text-sky`} />
                  </span>
                  <h6 className="text-black text-base mb-0 ps-2 font-nunitoSans font-normal capitalize ">
                    Male
                  </h6>
                </div>
                <div className="Age flex items-center">
                  <span>
                    <BdayIcon className={`text-sky`} />
                  </span>
                  <h6 className="text-black text-base mb-0 ps-2 font-nunitoSans font-normal ">
                    36
                  </h6>
                </div>
              </div>
            </Link>
          </div>
          <div className="">
            <Link
              // to={`/${patient.id}`}
              // key={patient.id}
              className="bg-white shadow-sm rounded-2xl p-4 flex flex-col"
            >
              <div className=" lg:pb-4 md:pb-2 pb-2 flex flex-row items-center gap-3 borderline">
                <div className="flex items-center ">
                  <img
                    src={require("../../imges/user.webp")}
                    alt="Patient avatar"
                    className="w-11 h-11 rounded-full"
                  />
                </div>
                <div className="title">
                  <h2 className="text-lg font-normal font-nunitoSans capitalize">
                    Dianne Russell
                  </h2>
                </div>
                <button className="text-red-500 ms-auto">
                  <Trash></Trash>
                </button>
              </div>

              <div className="flex lg:my-3 md:my-2 my-2 items-center space-x-2">
                <div>
                  <Callicon></Callicon>
                </div>
                <span className="font-nunitoSans font-normal text-black text-base !m-0 ps-2 ">
                  +48 58798624
                </span>
              </div>

              <div className="flex items-center gap-4">
                <div className="gender flex items-center">
                  <span>
                    <Maleicon className={`text-sky`} />
                  </span>
                  <h6 className="text-black text-base mb-0 ps-2 font-nunitoSans font-normal capitalize ">
                    Male
                  </h6>
                </div>
                <div className="Age flex items-center">
                  <span>
                    <BdayIcon className={`text-sky`} />
                  </span>
                  <h6 className="text-black text-base mb-0 ps-2 font-nunitoSans font-normal ">
                    36
                  </h6>
                </div>
              </div>
            </Link>
          </div>
          <div className="">
            <Link
              // to={`/${patient.id}`}
              // key={patient.id}
              className="bg-white shadow-sm rounded-2xl p-4 flex flex-col"
            >
              <div className=" lg:pb-4 md:pb-2 pb-2 flex flex-row items-center gap-3 borderline">
                <div className="flex items-center ">
                  <img
                    src={require("../../imges/user.webp")}
                    alt="Patient avatar"
                    className="w-11 h-11 rounded-full"
                  />
                </div>
                <div className="title">
                  <h2 className="text-lg font-normal font-nunitoSans capitalize">
                    Dianne Russell
                  </h2>
                </div>
                <button className="text-red-500 ms-auto">
                  <Trash></Trash>
                </button>
              </div>

              <div className="flex lg:my-3 md:my-2 my-2 items-center space-x-2">
                <div>
                  <Callicon></Callicon>
                </div>
                <span className="font-nunitoSans font-normal text-black text-base !m-0 ps-2 ">
                  +48 58798624
                </span>
              </div>

              <div className="flex items-center gap-4">
                <div className="gender flex items-center">
                  <span>
                    <Maleicon className={`text-sky`} />
                  </span>
                  <h6 className="text-black text-base mb-0 ps-2 font-nunitoSans font-normal capitalize ">
                    Male
                  </h6>
                </div>
                <div className="Age flex items-center">
                  <span>
                    <BdayIcon className={`text-sky`} />
                  </span>
                  <h6 className="text-black text-base mb-0 ps-2 font-nunitoSans font-normal ">
                    36
                  </h6>
                </div>
              </div>
            </Link>
          </div>
          <div className="">
            <Link
              // to={`/${patient.id}`}
              // key={patient.id}
              className="bg-white shadow-sm rounded-2xl p-4 flex flex-col"
            >
              <div className=" lg:pb-4 md:pb-2 pb-2 flex flex-row items-center gap-3 borderline">
                <div className="flex items-center ">
                  <img
                    src={require("../../imges/user.webp")}
                    alt="Patient avatar"
                    className="w-11 h-11 rounded-full"
                  />
                </div>
                <div className="title">
                  <h2 className="text-lg font-normal font-nunitoSans capitalize">
                    Dianne Russell
                  </h2>
                </div>
                <button className="text-red-500 ms-auto">
                  <Trash></Trash>
                </button>
              </div>

              <div className="flex lg:my-3 md:my-2 my-2 items-center space-x-2">
                <div>
                  <Callicon></Callicon>
                </div>
                <span className="font-nunitoSans font-normal text-black text-base !m-0 ps-2 ">
                  +48 58798624
                </span>
              </div>

              <div className="flex items-center gap-4">
                <div className="gender flex items-center">
                  <span>
                    <Maleicon className={`text-sky`} />
                  </span>
                  <h6 className="text-black text-base mb-0 ps-2 font-nunitoSans font-normal capitalize ">
                    Male
                  </h6>
                </div>
                <div className="Age flex items-center">
                  <span>
                    <BdayIcon className={`text-sky`} />
                  </span>
                  <h6 className="text-black text-base mb-0 ps-2 font-nunitoSans font-normal ">
                    36
                  </h6>
                </div>
              </div>
            </Link>
          </div>
          <div className="">
            <Link
              // to={`/${patient.id}`}
              // key={patient.id}
              className="bg-white shadow-sm rounded-2xl p-4 flex flex-col"
            >
              <div className=" lg:pb-4 md:pb-2 pb-2 flex flex-row items-center gap-3 borderline">
                <div className="flex items-center ">
                  <img
                    src={require("../../imges/user.webp")}
                    alt="Patient avatar"
                    className="w-11 h-11 rounded-full"
                  />
                </div>
                <div className="title">
                  <h2 className="text-lg font-normal font-nunitoSans capitalize">
                    Dianne Russell
                  </h2>
                </div>
                <button className="text-red-500 ms-auto">
                  <Trash></Trash>
                </button>
              </div>

              <div className="flex lg:my-3 md:my-2 my-2 items-center space-x-2">
                <div>
                  <Callicon></Callicon>
                </div>
                <span className="font-nunitoSans font-normal text-black text-base !m-0 ps-2 ">
                  +48 58798624
                </span>
              </div>

              <div className="flex items-center gap-4">
                <div className="gender flex items-center">
                  <span>
                    <Maleicon className={`text-sky`} />
                  </span>
                  <h6 className="text-black text-base mb-0 ps-2 font-nunitoSans font-normal capitalize ">
                    Male
                  </h6>
                </div>
                <div className="Age flex items-center">
                  <span>
                    <BdayIcon className={`text-sky`} />
                  </span>
                  <h6 className="text-black text-base mb-0 ps-2 font-nunitoSans font-normal ">
                    36
                  </h6>
                </div>
              </div>
            </Link>
          </div>
          <div className="">
            <Link
              // to={`/${patient.id}`}
              // key={patient.id}
              className="bg-white shadow-sm rounded-2xl p-4 flex flex-col"
            >
              <div className=" lg:pb-4 md:pb-2 pb-2 flex flex-row items-center gap-3 borderline">
                <div className="flex items-center ">
                  <img
                    src={require("../../imges/user.webp")}
                    alt="Patient avatar"
                    className="w-11 h-11 rounded-full"
                  />
                </div>
                <div className="title">
                  <h2 className="text-lg font-normal font-nunitoSans capitalize">
                    Dianne Russell
                  </h2>
                </div>
                <button className="text-red-500 ms-auto">
                  <Trash></Trash>
                </button>
              </div>

              <div className="flex lg:my-3 md:my-2 my-2 items-center space-x-2">
                <div>
                  <Callicon></Callicon>
                </div>
                <span className="font-nunitoSans font-normal text-black text-base !m-0 ps-2 ">
                  +48 58798624
                </span>
              </div>

              <div className="flex items-center gap-4">
                <div className="gender flex items-center">
                  <span>
                    <Maleicon className={`text-sky`} />
                  </span>
                  <h6 className="text-black text-base mb-0 ps-2 font-nunitoSans font-normal capitalize ">
                    Male
                  </h6>
                </div>
                <div className="Age flex items-center">
                  <span>
                    <BdayIcon className={`text-sky`} />
                  </span>
                  <h6 className="text-black text-base mb-0 ps-2 font-nunitoSans font-normal ">
                    36
                  </h6>
                </div>
              </div>
            </Link>
          </div>
          <div className="">
            <Link
              // to={`/${patient.id}`}
              // key={patient.id}
              className="bg-white shadow-sm rounded-2xl p-4 flex flex-col"
            >
              <div className=" lg:pb-4 md:pb-2 pb-2 flex flex-row items-center gap-3 borderline">
                <div className="flex items-center ">
                  <img
                    src={require("../../imges/user.webp")}
                    alt="Patient avatar"
                    className="w-11 h-11 rounded-full"
                  />
                </div>
                <div className="title">
                  <h2 className="text-lg font-normal font-nunitoSans capitalize">
                    Dianne Russell
                  </h2>
                </div>
                <button className="text-red-500 ms-auto">
                  <Trash></Trash>
                </button>
              </div>

              <div className="flex lg:my-3 md:my-2 my-2 items-center space-x-2">
                <div>
                  <Callicon></Callicon>
                </div>
                <span className="font-nunitoSans font-normal text-black text-base !m-0 ps-2 ">
                  +48 58798624
                </span>
              </div>

              <div className="flex items-center gap-4">
                <div className="gender flex items-center">
                  <span>
                    <Maleicon className={`text-sky`} />
                  </span>
                  <h6 className="text-black text-base mb-0 ps-2 font-nunitoSans font-normal capitalize ">
                    Male
                  </h6>
                </div>
                <div className="Age flex items-center">
                  <span>
                    <BdayIcon className={`text-sky`} />
                  </span>
                  <h6 className="text-black text-base mb-0 ps-2 font-nunitoSans font-normal ">
                    36
                  </h6>
                </div>
              </div>
            </Link>
          </div>

        </div>
      </div>
    </DashboardView>
  );
}

export default EmergencyPatient;
