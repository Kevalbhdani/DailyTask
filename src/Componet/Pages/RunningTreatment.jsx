import React, { useState } from "react";
import DashboardView from "../Dashboard/DashboardView";
import Breadcrumb from "../CommonComponet/Breadcrumb";
import { Link, useParams } from "react-router-dom";
import Eyeicon from "../../imges/Svg File/Eyeicon";
import Dateicon from "../../imges/Svg File/Dateicon";
import Cancelicon from "../../imges/Svg File/Cancelicon";
import EditProfileIcon from "../../imges/Svg File/EditProfileIcon";
import PatientProfile from "../../imges/Svg File/PatientProfile";
import Emailicon from "../../imges/Svg File/Emailicon";
import Maleicon from "../../imges/Svg File/Maleicon";
import Femaleicon from "../../imges/Svg File/Femaleicon";
import BdayIcon from "../../imges/Svg File/BdayIcon";
import Mapicon from "../../imges/Svg File/Mapicon";
import { Runningdata } from "../Helpers/Constant";


function RunningTreatment() {

   const [isOpen, setIsOpen] = useState(false);
   const [selectedGender, setSelectedGender] = useState("");

   // ### profile models
   const openModal = () => {
     setIsOpen(true);
   };

   const closeModal = () => {
     console.log("Closing modal");
     setIsOpen(false);
     console.log("isOpen after close:", isOpen);
   };

   // ### selecte gender ###
   const handleSelectGender = (gender) => {
     setSelectedGender(gender);
   };
 
  //  ### one to next ###

  const handleNext = () => {
    setIsOpen(isOpen + 1);
  };

  const crumbs = [
    { label: "Dashboard", path: "/dashboardmenu" },
    { label: "Running-treatment", path: "/dashboardmenu/Treatment" },
  ];
  return (
    <DashboardView>
      <div>
        <div className="flex flex-row justify-between items-center w-full">
          <div className="Title py-2">
            <h1 className="font-nunitoSans font-bold text-2xl ">
              Running Treatment
            </h1>
            <Breadcrumb crumbs={crumbs}></Breadcrumb>
          </div>
          <div className="Add Treatment" onClick={openModal}>
            <button className="px-4 py-3 text-white bg-sky rounded-2xl">
              <span className="  font-nunitoSans font-bold text-base text-md">
                + Add Patient
              </span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1  sm:grid-cols-1 md:grid-cols-2 lg:grid-3 xl:grid-cols-3 gap-x-6 gap-y-2">
          {/* {Runningdata((item) => { */}
          <div className="mt-3 p-3 bg-white shadow-sm rounded-xl">
            <Link to={`/PatientDetails`}>
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
                <div className="text-sky ">
                  <Dateicon> </Dateicon>
                </div>
                <h3 className="ms-2">02 Sep, 2024</h3>
              </div>
            </Link>
          </div>
          <div className="mt-3 p-3 bg-white shadow-sm rounded-xl">
            <Link to={`/PatientDetails`}>
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
                <div className="text-sky ">
                  <Dateicon> </Dateicon>
                </div>
                <h3 className="ms-2">02 Sep, 2024</h3>
              </div>
            </Link>
          </div>
          <div className="mt-3 p-3 bg-white shadow-sm rounded-xl">
            <Link to={`/PatientDetails`}>
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
                <div className="text-sky ">
                  <Dateicon> </Dateicon>
                </div>
                <h3 className="ms-2">02 Sep, 2024</h3>
              </div>
            </Link>
          </div>
          <div className="mt-3 p-3 bg-white shadow-sm rounded-xl">
            <Link to={`/PatientDetails`}>
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
                <div className="text-sky ">
                  <Dateicon> </Dateicon>
                </div>
                <h3 className="ms-2">02 Sep, 2024</h3>
              </div>
            </Link>
          </div>
          <div className="mt-3 p-3 bg-white shadow-sm rounded-xl">
            <Link to={`/PatientDetails`}>
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
                <div className="text-sky ">
                  <Dateicon> </Dateicon>
                </div>
                <h3 className="ms-2">02 Sep, 2024</h3>
              </div>
            </Link>
          </div>
          <div className="mt-3 p-3 bg-white shadow-sm rounded-xl">
            <Link to={`/PatientDetails`}>
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
                <div className="text-sky ">
                  <Dateicon> </Dateicon>
                </div>
                <h3 className="ms-2">02 Sep, 2024</h3>
              </div>
            </Link>
          </div>
          <div className="mt-3 p-3 bg-white shadow-sm rounded-xl">
            <Link to={`/PatientDetails`}>
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
                <div className="text-sky ">
                  <Dateicon> </Dateicon>
                </div>
                <h3 className="ms-2">02 Sep, 2024</h3>
              </div>
            </Link>
          </div>
          <div className="mt-3 p-3 bg-white shadow-sm rounded-xl">
            <Link to={`/PatientDetails`}>
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
                <div className="text-sky ">
                  <Dateicon> </Dateicon>
                </div>
                <h3 className="ms-2">02 Sep, 2024</h3>
              </div>
            </Link>
          </div>
          <div className="mt-3 p-3 bg-white shadow-sm rounded-xl">
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
                <div className="text-sky ">
                  <Dateicon> </Dateicon>
                </div>
                <h3 className="ms-2">02 Sep, 2024</h3>
              </div>
            </Link>
          </div>
          {/* })} */}
        </div>

        {isOpen && (
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
                <div className=" ">
                  <form action="">
                    <div className="flex flex-col content-between">
                      <div className="lg:p-5 md:p-4 sm:p-3 p-3 mb-5 text-start">
                        <div className="text-center   ">
                          <div className="upload-img   relative ">
                            <div className=" mx-auto img-preview w-[100px] h-[100px] p-2">
                              <img
                                className="  w-[full] h-[full]  rounded-full  object-cover "
                                src={require("../../imges/user.webp")}
                                alt="User"
                              />
                            </div>
                            <span className=" w-8 h-8 rounded-full border-4 border-white bg-sky absolute bottom-2 sm:right-[162px] md:right-[162px] right-[164px] lg:right-[158px]">
                              <input
                                type="file"
                                className=" p-1 w-5 h-5 rounded-full bg-sky required:border-red-500"
                              />
                              <EditProfileIcon
                                className={`absolute   sm:top-[-1px] sm:left-[-6px] top-[-1px] left-[-6px] `}
                              ></EditProfileIcon>
                            </span>
                          </div>
                        </div>
                        <div className="mb-4">
                          <label
                            for="text"
                            className=" text-sm text-black mb-5 font-nunitoSans ms-1 font-normal"
                          >
                            Full Name
                          </label>
                          <div className=" relative mt-2 ">
                            <input
                              type="text"
                              placeholder=" EnterFull Name"
                              className="w-full px-11 py-3 bg-whiteLight rounded-xl text-sm required:border-red-500"
                            />
                            <div className=" size-[20px] top-3 left-2 absolute">
                              <PatientProfile></PatientProfile>
                            </div>
                          </div>
                        </div>

                        <div className="mb-4">
                          <label
                            for="text"
                            className=" text-sm text-black mb-4 font-nunitoSans ms-1 font-normal "
                          >
                            Email
                          </label>
                          <div className=" relative mt-2 ">
                            <input
                              type="text"
                              placeholder="Enter Email "
                              className="w-full px-11 py-3 bg-whiteLight rounded-xl text-sm required:border-red-500"
                            />
                            <div className="size-[20px] top-3 left-2 absolute ">
                              <Emailicon className={`text-black`}></Emailicon>
                            </div>
                          </div>
                        </div>

                        <div className="mb-4">
                          <label
                            for="text"
                            className=" text-sm text-black mb-4 font-nunitoSans ms-1 font-normal "
                          >
                            Mobile Number
                          </label>
                          <div className=" relative mt-2">
                            <input
                              type="text"
                              placeholder=" Enter Mobile Number"
                              className="w-full px-10 py-3 bg-whiteLight rounded-xl text-sm "
                            />
                            <img
                              className="size-[20px] top-3 left-2 absolute"
                              src={require("../../imges//call.png")}
                              alt=""
                            />
                          </div>
                        </div>

                        <div className="mb-4">
                          <label
                            htmlFor="text"
                            className="text-sm mb-4 font-nunitoSans ms-1 font-normal"
                          >
                            Gender
                          </label>
                          <div className="flex items-center gap-2">
                            {/* Male Option */}
                            <div
                              className={`flex items-center cursor-pointer ${
                                selectedGender === "male" ? "checked-text" : ""
                              }`}
                              onClick={() => handleSelectGender("male")}
                            >
                              <input
                                type="radio"
                                name="gender"
                                className="hidden"
                                checked={selectedGender === "male"}
                                readOnly
                              />
                              <label className="flex items-center py-[12px] px-[15px] rounded-xl bg-whiteLight male ">
                                <div className="mr-2">
                                  <Maleicon className="text-black" />
                                </div>
                                <div className="font-nunitoSans font-normal capitalize">
                                  <p>Male</p>
                                </div>
                              </label>
                            </div>

                            {/* Female Option */}
                            <div
                              className={`flex items-center cursor-pointer ${
                                selectedGender === "female"
                                  ? "checked-text"
                                  : ""
                              }`}
                              onClick={() => handleSelectGender("female")}
                            >
                              <input
                                type="radio"
                                name="gender"
                                className="hidden"
                                checked={selectedGender === "female"}
                                readOnly
                              />
                              <label className="flex items-center py-[12px] px-[15px] rounded-xl bg-whiteLight female">
                                <div className="mr-2">
                                  <Femaleicon className="text-black" />
                                </div>
                                <div className="font-nunitoSans font-normal capitalize">
                                  <p>Female</p>
                                </div>
                              </label>
                            </div>
                          </div>
                        </div>

                        <div className="mb-4">
                          <label
                            for="text"
                            className=" text-sm text-black mb-4 font-nunitoSans ms-1 font-normal "
                          >
                            Age
                          </label>
                          <div className=" relative mt-2">
                            <input
                              type="text"
                              placeholder=" Enter your age"
                              className="w-full px-10 py-3 bg-whiteLight rounded-xl text-sm required:border-red-500"
                            />
                            <div className="size-[20px] top-3 left-2 absolute">
                              <BdayIcon></BdayIcon>
                            </div>
                          </div>
                        </div>

                        <div className="mb-4">
                          <label
                            for="text"
                            className=" text-sm text-black mb-4 font-nunitoSans ms-1 font-normal "
                          >
                            Address
                          </label>
                          <div className=" relative mt-2">
                            <input
                              type="text"
                              placeholder=" Enter your Address"
                              className="w-full px-10 py-3 bg-whiteLight rounded-xl text-sm  required:border-red-500"
                            />

                            <div className="absolute left-[8px] top-[10px]">
                              <Mapicon className={`text-black`}></Mapicon>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="pb-4 px-3 lg:px-5 md:px-4 sm:px-3 right-0 bottom-0 sticky bg-white ">
                        <button className="bg-blue-500 text-white w-full rounded-lg transition duration-300 py-3.5">
                          Save
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </DashboardView>
  );
}

export default RunningTreatment;
