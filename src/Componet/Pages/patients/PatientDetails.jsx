import React from "react";
import DashboardView from "../../Dashboard/DashboardView";
import { useParams } from "react-router-dom";
import Breadcrumb from "../../CommonComponet/Breadcrumb";
import { patients } from "../../Helpers/Constant";
import Callicon from "../../../imges/Svg File/Callicon";
import Emailicon from "../../../imges/Svg File/Emailicon";
import Maleicon from "../../../imges/Svg File/Maleicon";
import BdayIcon from "../../../imges/Svg File/BdayIcon";
import Trash from "../../../imges/Svg File/Trash";
import Editicon from "../../../imges/Svg File/Editicon";
import Mapicon from "../../../imges/Svg File/Mapicon";

function PatientDetails({gender, age }) {
  const { id } = useParams();

  const crumbs = [
    { label: "Dashboard", path: "/dashboardmenu" },
    { label: "Patients List", path: "/patients" },
    {
      label: "Patient Details",
      path: "/dashboardmenu/patients/PatientDetails",
    },
  ];
  return (
    <DashboardView>
      <div className="">
        <div className="Title py-2">
          <h1 className="font-AlbertSans font-bold text-2xl ">
            Patient Details
          </h1>
          <Breadcrumb crumbs={crumbs}></Breadcrumb>
        </div>
        <div className="grid-cols-12">
          <div className="patient-details flex items-center mt-3 bg-white shadow-sm rounded-2xl gap-3 p-4">
            <div className="gap-8 flex iteam-center ">
              <div className="inner-pro pe-3 flex items-center flex-col">
                <div className="  img-preview w-[100px] h-[100px] p-2">
                  <img
                    className="  w-[full] h-[full]  rounded-full  object-cover "
                    src={require("../../../imges/user.webp")}
                    alt="User"
                  />
                </div>
                <h3 className="font-nunitoSans font-bold text-base mt-3 text-black lg:text-center md:text-center">
                  Robert Smith
                  <p>Patient ID: {id}</p>
                </h3>
              </div>
              <div className="inner-details justify-start lg:items-center md:items-center pe-3 flex  flex-auto ">
                <ul className="lg:flex md:flex p-0  flex-wrap  gap-y-6">
                  <li className="w-[50%]">
                    <span className=" items-start inline-flex">
                      <div className="pe-2">
                        <Callicon></Callicon>
                      </div>
                      <h6 className="font-nunitoSans font-normal text-black text-base !m-0 mt-1">
                        <p> +48 58798624</p>
                      </h6>
                    </span>
                  </li>
                  <li className="w-[50%]">
                    <span className="flex items-start">
                      <div className="pe-2 text-sky">
                        <Emailicon></Emailicon>
                      </div>
                      <h6 className="font-nunitoSans font-normal text-base !m-0 mt-1">
                        <p>robertsmith@gmail.com</p>
                      </h6>
                    </span>
                  </li>
                  <li className="w-[50%]">
                    <span className="flex items-start">
                      <div className="pe-2">
                        <Maleicon className={`text-sky`} />
                      </div>
                      <h6 className="font-nunitoSans font-normal text-black text-base !m-0 mt-1">
                        <p>{`${patients.id}`}</p>
                      </h6>
                    </span>
                  </li>
                  <li className="w-[50%]">
                    <span className="flex items-start">
                      <div className="pe-2 ">
                        <BdayIcon className={`text-sky`} />
                      </div>
                      <h6 className="font-nunitoSans font-normal text-black text-base !m-0 mt-1">
                        <p> {`${patients.id}`}</p>
                      </h6>
                    </span>
                  </li>
                  <li className="w-full">
                    <span className="flex items-start">
                      <div className="pe-2 ">
                        <Mapicon className={`text-sky`}></Mapicon>
                      </div>
                      <h6 className="font-nunitoSans font-normal text-black text-base !m-0 mt-1">
                        <p>2972 Westheimer Rd. Santa Ana, Illinois 85486</p>
                      </h6>
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            <div className=" ms-auto flex items-start self-start">
              <div className="Edit-btn  flex items-start self-start">
                <div className="flex items-center justify-center w-10 h-10  bg-blue-100 rounded-full me-2 ">
                  <Editicon></Editicon>
                </div>
                <div className="flex items-center justify-center w-10 h-10  bg-offred rounded-full">
                  <Trash></Trash>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardView>
  );
}

export default PatientDetails;
