import React, { useState } from "react";
import DashboardView from "../Dashboard/DashboardView";
import Breadcrumb from "../CommonComponet/Breadcrumb";
import { Link } from "react-router-dom";
import Eyeicon from "../../imges/Svg File/Eyeicon";
import Dateicon from "../../imges/Svg File/Dateicon";
import Cancelicon from "../../imges/Svg File/Cancelicon";
import Inspection from "../../imges/Svg File/Inspection";
import Tethline from "../../imges/Svg File/Tethline";
import Tethlist from "../../imges/Svg File/Tethlist";

function InspectionRequest() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);

  const crumbs = [
    { label: "Dashboard", path: "/dashboardmenu" },
    { label: "Inspection- Request", path: "/dashboardmenu/InspectionRequest" },
  ];

  // ### tethbar   ###
  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    console.log("Closing modal");
    setIsOpen(false);
    console.log("isOpen after close:", isOpen);
  };

  // ### one to next ###

  const handleNext = () => {
    setCurrentStep(currentStep + 1);
  };


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
              <p className="font-normal  text-gray-800  ">Dianne Russell</p>
              <div className="mx-4">
                <Inspection></Inspection>
              </div>
              <div
                className={
                  "font-nunitoSans font-normal text-sm flex items-center text-sky"
                }
              >
                <Dateicon></Dateicon>
                <h3 className="ms-2 text-black">02 Sep, 2024</h3>
              </div>
              <div className="mx-4">
                <Inspection></Inspection>
              </div>
              <span onClick={openModal}>
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
              <p className="font-normal  text-gray-800  ">Dianne Russell</p>
              <div className="mx-4">
                <Inspection></Inspection>
              </div>
              <div
                className={
                  "font-nunitoSans font-normal text-sm flex items-center text-sky"
                }
              >
                <Dateicon></Dateicon>
                <h3 className="ms-2 text-black">02 Sep, 2024</h3>
              </div>
              <div className="mx-4">
                <Inspection></Inspection>
              </div>
              <span onClick={openModal}>
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
              <p className="font-normal  text-gray-800  ">Dianne Russell</p>
              <div className="mx-4">
                <Inspection></Inspection>
              </div>
              <div
                className={
                  "font-nunitoSans font-normal text-sm flex items-center text-sky"
                }
              >
                <Dateicon></Dateicon>
                <h3 className="ms-2 text-black">02 Sep, 2024</h3>
              </div>
              <div className="mx-4">
                <Inspection></Inspection>
              </div>
              <span onClick={openModal}>
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
              <p className="font-normal  text-gray-800  ">Dianne Russell</p>
              <div className="mx-4">
                <Inspection></Inspection>
              </div>
              <div
                className={
                  "font-nunitoSans font-normal text-sm flex items-center text-sky"
                }
              >
                <Dateicon></Dateicon>
                <h3 className="ms-2 text-black">02 Sep, 2024</h3>
              </div>
              <div className="mx-4">
                <Inspection></Inspection>
              </div>
              <span onClick={openModal}>
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
              <p className="font-normal  text-gray-800  ">Dianne Russell</p>
              <div className="mx-4">
                <Inspection></Inspection>
              </div>
              <div
                className={
                  "font-nunitoSans font-normal text-sm flex items-center text-sky"
                }
              >
                <Dateicon></Dateicon>
                <h3 className="ms-2 text-black">02 Sep, 2024</h3>
              </div>
              <div className="mx-4">
                <Inspection></Inspection>
              </div>
              <span onClick={openModal}>
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
              <p className="font-normal  text-gray-800  ">Dianne Russell</p>
              <div className="mx-4">
                <Inspection></Inspection>
              </div>
              <div
                className={
                  "font-nunitoSans font-normal text-sm flex items-center text-sky"
                }
              >
                <Dateicon></Dateicon>
                <h3 className="ms-2 text-black">02 Sep, 2024</h3>
              </div>
              <div className="mx-4">
                <Inspection></Inspection>
              </div>
              <span onClick={openModal}>
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

export default InspectionRequest;
