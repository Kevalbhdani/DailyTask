import React, { useState } from "react";
import DashboardView from "../../Dashboard/DashboardView";
// import { useParams } from "react-router-dom";
import Breadcrumb from "../../CommonComponet/Breadcrumb";
import { patients } from "../../Helpers/Constant";
import Callicon from "../../../imges/Svg File/Callicon";
import Emailicon from "../../../imges/Svg File/Emailicon";
import Maleicon from "../../../imges/Svg File/Maleicon";
import BdayIcon from "../../../imges/Svg File/BdayIcon";
import Trash from "../../../imges/Svg File/Trash";
import Editicon from "../../../imges/Svg File/Editicon";
import Mapicon from "../../../imges/Svg File/Mapicon";
import { Link } from "react-router-dom";
import Dateicon from "../../../imges/Svg File/Dateicon";
import RunningLine from "../../../imges/Svg File/RunningLine";
import Tethline from "../../../imges/Svg File/Tethline";
import Tethlist from "../../../imges/Svg File/Tethlist";
import Cancelicon from "../../../imges/Svg File/Cancelicon";
import { Sidebar } from "primereact/sidebar";
function PatientDetails({ gender, age }) {
  // const { id } = useParams();
  const [isOpen, setIsOpen] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const handleNext = () => {
    setCurrentStep(currentStep + 1);
  };
  const crumbs = [
    { label: "Dashboard", path: "/dashboardmenu" },
    { label: "Patients List", path: "/patients" },
    {
      label: "Patient Details",
      path: "/dashboardmenu/patients/PatientDetails",
    },
  ];
   const [visibleRight, setVisibleRight] = useState();
   const openModal = () => {
     setIsOpen(true);
   };

   const closeModal = () => {
     console.log("Closing modal");
     setIsOpen(false);
     console.log("isOpen after close:", isOpen);
   };

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
            <div className="gap-5 flex iteam-center ">
              <div className="inner-pro  flex items-center flex-col borderl">
                <div className="  img-preview w-[100px] h-[100px] p-2">
                  <img
                    className="  w-[full] h-[full]  rounded-full  object-cover "
                    src={require("../../../imges/user.webp")}
                    alt="User"
                  />
                </div>
                <h3 className="font-nunitoSans font-bold text-base mt-3 text-black lg:text-center md:text-center">
                  Robert Smith
                  {/* <p>Patient ID: {id}</p> */}
                </h3>
              </div>
              <RunningLine></RunningLine>
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

        <div className="flex justify-between iteam-center py-4 col-span-12">
          <div className="Title py-2">
            <h1 className="font-nunitoSans font-bold text-2xl ">Treatment</h1>
          </div>
          <div className="Add Treatment">
            <button
              className="px-4 py-3 text-white bg-sky rounded-2xl"
              onClick={openModal}
            >
              <span className="  font-nunitoSans font-bold text-base text-md">
                + Add Treatment
              </span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8 md:gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-3 xl:grid-cols-3">
          <div className="Treatment-box-1">
            <Link to={`/TreatmentList`}>
              <div className={"flex bg-white shadow-sm rounded-xl"}>
                <div className={"w-[140px] h-[140px]"}>
                  <img
                    className="rounded-l-xl h-full   object-cover"
                    src={require("../../../imges/user.webp")}
                    alt="User"
                  />
                </div>
                <div className=" p-2 md:p-4 lg:p-6 ">
                  <h6 className="font-semibold font-nunitoSans text-base text-black mb-2">
                    Completion 35,36,
                  </h6>
                  <div className="text-base font-normal">
                    <div className="bg-orange-100 text-orange bg-offorange inline-block px-4 rounded-full h-8 mb-2">
                      <span>Runnning</span>
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
                </div>
              </div>
            </Link>
          </div>

          <div className="Treatment-box-2">
            <Link to={`/TreatmentList`}>
              <div className={"flex bg-white shadow-sm rounded-xl"}>
                <div className={"w-[140px] h-[140px]"}>
                  <img
                    className="rounded-l-xl h-full   object-cover"
                    src={require("../../../imges/user.webp")}
                    alt="User"
                  />
                </div>
                <div className=" p-2 md:p-4 lg:p-6 ">
                  <h6 className="font-semibold font-nunitoSans text-base text-black mb-2">
                    Completion 35,36,
                  </h6>
                  <div className="text-base font-normal">
                    <div className="bg-orange-100 text-orange bg-offorange inline-block px-4 rounded-full h-8 mb-2">
                      <span>Runnning</span>
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
                </div>
              </div>
            </Link>
          </div>

          <div className="Treatment-box-3">
            <Link to={`/TreatmentList`}>
              <div className={"flex bg-white shadow-sm rounded-xl"}>
                <div className={"w-[140px] h-[140px]"}>
                  <img
                    className="rounded-l-xl h-full   object-cover"
                    src={require("../../../imges/user.webp")}
                    alt="User"
                  />
                </div>
                <div className=" p-2 md:p-4 lg:p-6 ">
                  <h6 className="font-semibold font-nunitoSans text-base text-black mb-2">
                    Completion 35,36,
                  </h6>
                  <div className="text-base font-normal">
                    <div className="bg-orange-100 text-orange bg-offorange inline-block px-4 rounded-full h-8 mb-2">
                      <span>Runnning</span>
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
                </div>
              </div>
            </Link>
          </div>

          <div className="Treatment-box-4">
            <Link to={`/TreatmentList`}>
              <div className={"flex bg-white shadow-sm rounded-xl"}>
                <div className={"w-[140px] h-[140px]"}>
                  <img
                    className="rounded-l-xl h-full   object-cover"
                    src={require("../../../imges/user.webp")}
                    alt="User"
                  />
                </div>
                <div className=" p-2 md:p-4 lg:p-6 ">
                  <h6 className="font-semibold font-nunitoSans text-base text-black mb-2">
                    Completion 35,36,
                  </h6>
                  <div className="text-base font-normal">
                    <div className="bg-orange-100 text-orange bg-offorange inline-block px-4 rounded-full h-8 mb-2">
                      <span>Runnning</span>
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
                </div>
              </div>
            </Link>
          </div>

          <div className="Treatment-box-5">
            <Link to={`/TreatmentList`}>
              <div className={"flex bg-white shadow-sm rounded-xl"}>
                <div className={"w-[140px] h-[140px]"}>
                  <img
                    className="rounded-l-xl h-full   object-cover"
                    src={require("../../../imges/user.webp")}
                    alt="User"
                  />
                </div>
                <div className=" p-2 md:p-4 lg:p-6 ">
                  <h6 className="font-semibold font-nunitoSans text-base text-black mb-2">
                    Completion 35,36,
                  </h6>
                  <div className="text-base font-normal">
                    <div className="bg-orange-100 text-orange bg-offorange inline-block px-4 rounded-full h-8 mb-2">
                      <span>Runnning</span>
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
                </div>
              </div>
            </Link>
          </div>

          <div className="Treatment-box-6">
            <Link to={`/TreatmentList`}>
              <div className={"flex bg-white shadow-sm rounded-xl"}>
                <div className={"w-[140px] h-[140px]"}>
                  <img
                    className="rounded-l-xl h-full   object-cover"
                    src={require("../../../imges/user.webp")}
                    alt="User"
                  />
                </div>
                <div className=" p-2 md:p-4 lg:p-6 ">
                  <h6 className="font-semibold font-nunitoSans text-base text-black mb-2">
                    Completion 35,36,
                  </h6>
                  <div className="text-base font-normal">
                    <div className="bg-orange-100 text-orange bg-offorange inline-block px-4 rounded-full h-8 mb-2">
                      <span>Runnning</span>
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
                </div>
              </div>
            </Link>
          </div>

          <div className="Treatment-box-7">
            <Link to={`/TreatmentList`}>
              <div className={"flex bg-white shadow-sm rounded-xl"}>
                <div className={"w-[140px] h-[140px]"}>
                  <img
                    className="rounded-l-xl h-full   object-cover"
                    src={require("../../../imges/user.webp")}
                    alt="User"
                  />
                </div>
                <div className=" p-2 md:p-4 lg:p-6 ">
                  <h6 className="font-semibold font-nunitoSans text-base text-black mb-2">
                    Completion 35,36,
                  </h6>
                  <div className="text-base font-normal">
                    <div className="bg-orange-100 text-orange bg-offorange inline-block px-4 rounded-full h-8 mb-2">
                      <span>Runnning</span>
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
                </div>
              </div>
            </Link>
          </div>

          <div className="Treatment-box-8">
            <Link to={`/TreatmentList`}>
              <div className={"flex bg-white shadow-sm rounded-xl"}>
                <div className={"w-[140px] h-[140px]"}>
                  <img
                    className="rounded-l-xl h-full   object-cover"
                    src={require("../../../imges/user.webp")}
                    alt="User"
                  />
                </div>
                <div className=" p-2 md:p-4 lg:p-6 ">
                  <h6 className="font-semibold font-nunitoSans text-base text-black mb-2">
                    Completion 35,36,
                  </h6>
                  <div className="text-base font-normal">
                    <div className="bg-orange-100 text-orange bg-offorange inline-block px-4 rounded-full h-8 mb-2">
                      <span>Runnning</span>
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
                </div>
              </div>
            </Link>
          </div>

          <div className="Treatment-box-9">
            <Link to={`/TreatmentList`}>
              <div className={"flex bg-white shadow-sm rounded-xl"}>
                <div className={"w-[140px] h-[140px]"}>
                  <img
                    className="rounded-l-xl h-full   object-cover"
                    src={require("../../../imges/user.webp")}
                    alt="User"
                  />
                </div>
                <div className=" p-2 md:p-4 lg:p-6 ">
                  <h6 className="font-semibold font-nunitoSans text-base text-black mb-2">
                    Completion 35,36,
                  </h6>
                  <div className="text-base font-normal">
                    <div className="bg-orange-100 text-orange bg-offorange inline-block px-4 rounded-full h-8 mb-2">
                      <span>Runnning</span>
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
                </div>
              </div>
            </Link>
          </div>
        </div>
        <div>
          {
            isOpen && (
              <div>
                {currentStep === 1 && (
                  <div className="fixed  inset-0 right-0 top-0  flex justify-end  bg-black bg-opacity-50 z-[999]  ">
                    <div
                      className="bg-white  rounded-l-3xl shadow-lg w-[450px] relative overflow-auto xl:overflow-y-hidden z-[999] "
                    // onClick={(e) => e.stopPropagation()}
                    >
                      <div
                        className="profile-header lg:p-6 md:p-4 sm:p-3 p-3 justify-between flex items-center sticky top-0 right-0 z-10 bg-white
                        "
                      >
                        <div className="title-section">
                          <h2 className="text-2xl font-bold  font-nunitoSans text-start">
                            Add Treatment
                          </h2>
                          <p className="font-base font-nunitoSans font-light text-gray mt-1">
                            Select the Tooth Where patient Feels the Most<br></br>
                            Pain
                          </p>
                        </div>
                        <div>
                          <button
                            className=" text-gray-600  rounded-full hover:text-gray-600"
                            onClick={closeModal}
                          >
                            <Cancelicon></Cancelicon>
                          </button>
                        </div>
                      </div>
                      <div className="profile-body h-full p-0">
                        <div className=" ">
                          <form action="">
                            <div className="flex flex-col content-between">
                              <div className="lg:p-5 md:p-4 sm:p-3 p-3 mb-5 flex items-center justify-center relative">
                                <div>
                                  <Tethlist></Tethlist>
                                </div>
                                <div className="absolute  ">
                                  <Tethline></Tethline>
                                </div>
                              </div>
                              <div className="pb-4 px-3 lg:px-5 md:px-4 sm:px-3 right-0 bottom-0 sticky bg-white">
                                <button
                                  className="bg-blue-500 text-white w-full rounded-lg transition duration-300 py-3.5"
                                  onClick={handleNext}
                                >
                                  Next
                                </button>
                              </div>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                {currentStep === 2 && (
                  <div className="fixed  inset-0 right-0 top-0  flex justify-end  bg-black bg-opacity-50 z-[999]  ">
                    <div
                      className="bg-white  rounded-l-3xl shadow-lg w-[450px] relative overflow-auto xl:overflow-y-hidden z-[999] "
                      onClick={(e) => e.stopPropagation()}
                    >
                      <div
                        className="profile-header lg:p-6 md:p-4 sm:p-3 p-3 justify-between flex items-center sticky top-0 right-0 z-10 bg-white
                        "
                      >
                        <div className="title-section">
                          <h2 className="text-2xl font-bold  font-nunitoSans text-start">
                            Add Patient
                          </h2>
                          <p className="font-base font-nunitoSans font-light text-gray mt-1">
                            Add patient all details
                          </p>
                        </div>
                        <div>
                          <button
                            className=" text-gray-400 hover:text-gray-600"
                            onClick={closeModal}
                          >
                            <Cancelicon></Cancelicon>
                          </button>
                        </div>
                      </div>
                      <div className="profile-body h-full p-0">
                        <div className="flex flex-col content-between">
                          <div className="lg:p-5 md:p-4 sm:p-3 p-3 mb-5 text-start">
                            <div className="h-full p-0 ">
                              <ul className="  m-0 py-0">
                                <li className="font-normal font-nunitoSans my-1.5 p-2.5 rounded-lg">
                                  Sinus + Impala
                                </li>
                                <li className="font-normal font-nunitoSans my-1.5 p-2.5 rounded-lg">
                                  Completion 35,36
                                </li>
                                <li className="font-normal font-nunitoSans my-1.5 p-2.5 rounded-lg">
                                  Resection 14
                                </li>
                                <li className="font-normal font-nunitoSans my-1.5 p-2.5 rounded-lg">
                                  Sinus + Impala
                                </li>
                                <li className="font-normal font-nunitoSans my-1.5 p-2.5 rounded-lg">
                                  ex 14
                                </li>
                                <li className="font-normal  font-nunitoSans my-1.5 p-2.5 rounded-lg">
                                  Sinus + Impala
                                </li>
                                <li className="font-normal  font-nunitoSans my-1.5 p-2.5 rounded-lg">
                                  Sinus + Impala
                                </li>
                                <li className="font-normal font-nunitoSans my-1.5 p-2.5 rounded-lg">
                                  Completion 35,36
                                </li>
                                <li className="font-normal font-nunitoSans my-1.5 p-2.5 rounded-lg">
                                  Other
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="pb-5 px-3 lg:px-5 md:px-4 sm:px-3 right-0 bottom-0 sticky bg-white ">
                            <div className=" mb-4">
                              <lable className="font-semibold mb-2 bg-white"></lable>
                              <input
                                type="text"
                                placeholder="Enter Treatment"
                                className=" gap-y-2 w-full px-3 py-3.5 bg-whiteLight rounded-xl text-sm required:border-red-500"
                              />
                            </div>
                            <button className="bg-blue-500 text-white w-full rounded-lg transition duration-300 py-3.5">
                              Save
                            </button>
                          </div>
                        </div>


                      </div>
                    </div>
                  </div>
                )}
              </div>
            )
          }
        </div>

        
      </div>
    </DashboardView>
  );
}

export default PatientDetails;
