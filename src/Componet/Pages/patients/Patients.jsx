import React, { useState } from "react";
import DashboardView from "../../Dashboard/DashboardView";
import PatientsList from "../patients/PatientsList";
import {
  BdayIcon,
  Cancelicon,
  EditProfileIcon,
  Emailicon,
  Femaleicon,
  Maleicon,
  PatientProfile,
} from "../../../imges/Svg File/Index";
import Breadcrumb from "../../CommonComponet/Breadcrumb";
import Mapicon from "../../../imges/Svg File/Mapicon";

function Patients() {
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

  
  const crumbs = [
    { label: "Dashboard", path: "/dashboardmenu" },
    { label: "Patients List", path: "/dashboardmenu/patients" },
  ];

  return (
    <DashboardView>
      <div className="flex flex-row justify-between items-center w-full ">
        <div className="Title py-2">
          <h1 className="font-AlbertSans font-bold text-2xl ">Patients</h1>
          <Breadcrumb crumbs={crumbs}></Breadcrumb>
        </div>
        <div className="Add-patients">
          <button
            className="px-4 py-3 text-white bg-sky rounded-2xl"
            onClick={openModal}
          >
            <span className=" font-bold text-md">+ Add patients</span>
          </button>

          <div>
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
                                    src={require("../../../imges/user.webp")}
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
                                  <Emailicon
                                    className={`text-black`}
                                  ></Emailicon>
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
                                  src={require("../../../imges//call.png")}
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
                                    selectedGender === "male"
                                      ? "checked-text"
                                      : ""
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
        </div>
      </div>

      <PatientsList></PatientsList>
    </DashboardView>
  );
}

export default Patients;
