import React, { Profiler, useEffect, useState } from "react";
import { BiSearchAlt } from "react-icons/bi";
import { PiKey, PiLineVerticalThin } from "react-icons/pi";
import { IoMenu } from "react-icons/io5";
import { notifications } from "../Helpers/Constant";
import { IoCloseSharp } from "react-icons/io5"; // For the close button
import { countries } from "../Helpers/Constant";
import Dashboard from "../../imges/Svg File/Dashboard";
import ProfileIcon from "../../imges/Svg File/ProfileIcon";
import Treatment from "../../imges/Svg File/Treatment";
import Emergncy from "../../imges/Svg File/Emergncy";
import { Link, useLocation } from "react-router-dom";
import SidebarItem from "./SidebarItem";
import { Cancelicon, EditProfileIcon, NotificationIcon, SetingIcon,} from "../../imges/Svg File/Index";
import { RiEyeLine, RiEyeOffLine } from "react-icons/ri";
import Drawer from "react-modern-drawer";

function DashboardView({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isCountryDropdownOpen, setIsCountryDropdownOpen] = useState(false);
  const [isNotificationDropdownOpen, setIsNotificationDropdownOpen] =
    useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState(countries[0]);
  const [active, setactive] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const  [isdiv, setisdiv] = useState(false)
  const { pathname } = useLocation();
  console.log("path", pathname);

  // ### countries flg ###
  const toggleCountryDropdown = () => {
    setIsCountryDropdownOpen(!isCountryDropdownOpen);
    setIsNotificationDropdownOpen(false); // Close the other dropdown if it's open
  };

  const toggleNotificationDropdown = () => {
    setIsNotificationDropdownOpen(!isNotificationDropdownOpen);
    setIsCountryDropdownOpen(false); // Close the other dropdown if it's open
  };

  const handleCountrySelect = (country) => {
    setSelectedCountry(country);
    setIsCountryDropdownOpen(false);
  };

  // ## sidebar open /close ##
  const Class = () => {
    setactive(!active);
  };

  // #searchbar
  const toggleSearchBar = () => setIsSearchOpen(!isSearchOpen);

  // ### profile models
  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    console.log("Closing modal");
    setIsOpen(false);
    console.log("isOpen after close:", isOpen);
  };

  const profileOffcanvas =()=>{
        setIsOpen(!isOpen)
  }
  



  return (
    <div className="flex ">
      {/* Sidebar */}
      <aside
        width="250px"
        className={` min-h-screen  bg-white shadow z-[980] ${
          active ? "AddClass" : ""
        }`}
      >
        <div
          className={`ps-sidebar-container flex flex-col  justify-between min-h-screen w-[250px] sticky top-0 left-0 overflow-hidden`}
        >
          <div className="Upper-sidebar relative h-full overflow-y-auto overflow-x-hidden z-3">
            <div className="logo-images" onClick={() => setisdiv(!isdiv)}>
              <Link
                className="flex items-center  img-class mt-6 mx-auto  justify-center cursor-pointer "
                onClick={Class}
              >
                <img
                  className="w-8 h-7 m-2  object-cover "
                  src={require("../../imges/Vector.png")}
                  alt=""
                />
                <h3 className="lato font-bold ms-2 font-lato dashboars-text ">
                  CICERO HOSPITAL
                </h3>
              </Link>
            </div>
            <nav className="dashboard-menu  p-3.5 ">
              <ul>
                <SidebarItem
                  label="Dashboard"
                  path="/dashboardmenu"
                  icon={<Dashboard />}
                  isActive={pathname === "/dashboardmenu"}
                />
                <SidebarItem
                  label="Patients"
                  path="/patients"
                  icon={<ProfileIcon />}
                  isActive={pathname === "/patients"}
                />
                <SidebarItem
                  label="Running Treatment"
                  path="/Treatment"
                  icon={<Treatment />}
                  isActive={pathname === "/Treatment"}
                />
                <SidebarItem
                  label="Inspection Request"
                  path="/InspectionRequest"
                  icon={<Treatment />}
                  isActive={pathname === "/InspectionRequest"}
                />
                <SidebarItem
                  label="Emergency Patient"
                  path="/EmergencyPatient"
                  icon={<Emergncy />}
                  isActive={pathname === "/EmergencyPatient"}
                />
              </ul>
            </nav>
          </div>
          <div>
            <div className="sidebar-footer   relative hidden lg:inline">
              <div className="footer-box  ">
                <div className=" bordertop p-3 ">
                  <div
                    className="bg-white  cursor-pointer flex items-center justify-start bg-transparent mt-3  text-grayText font-AlbertSans font-normal text-xs "
                    onClick={toggleCountryDropdown}
                  >
                    <img
                      src={selectedCountry.flag}
                      alt={selectedCountry.name}
                      className="w-8 h-8 mr-3 "
                    />
                    {selectedCountry.name}
                  </div>
                  {isCountryDropdownOpen && (
                    <ul className="absolute z-10 bottom-28 w-[200px] bg-white  rounded shadow-lg ">
                      {countries.map((country) => (
                        <li
                          key={country.code}
                          onClick={() => handleCountrySelect(country)}
                          className="flex items-center px-4  cursor-pointer hover:bg-grayLight text-grayText  "
                        >
                          <img
                            src={country.flag}
                            alt={country.name}
                            className="inline-block  mr-2 h-[20px] w-[20px]  "
                          />
                          <p className="dashboars-text"> {country.name}</p>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
                <Link to={""}>
                  <div className="flex items-center mb-5 mt-5">
                    <img
                      src={require("../../imges/LogoutIcon.png")}
                      className="h-[20px] w-[20px] mx-4 "
                      alt=""
                    />
                    <h3 className="font-AlbertSans font-normal text-grayText text-xs dashboars-text ">
                      Logout
                    </h3>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </aside>

      {/* Header and Main Content */}
      <div className={`sidebar-layout  w-full bg-offwhite  `}>
        <header className=" header  shadow-md space-x-4  sticky top-0 right-0 px-4 p-4 w-full  bg-white z-[9] ">
          <div className="flex items-center w-full relative  ">
            <div className={`flex items-center rounded-lg  w-full`}>
              <button className={`sidebar serch-box `} onClick={Class}>
                <IoMenu className={` w-8 h-8  m-2 text-gray lg:hidden `} />
              </button>

              <div className=" flex items-center bg-grayLight rounded-lg ">
                <button
                  className="flex items-center  serch-box"
                  onClick={toggleSearchBar}
                >
                  <BiSearchAlt className="w-5 h-5  m-2 text-gray lg:inline-block hidden" />
                  <input
                    type="text"
                    placeholder="Search"
                    className="px-1 py-2 text-md rounded-md font-nunitoSans font-normal  bg-grayLight focus:outline-none hidden lg:inline-block serch-box"
                  />

                  <div
                    className={`absolute sm:top-16 top-20 lg:hidden right-10 w-[full]  sm:p-4 p-2 bg-white rounded-lg shadow-lg transition-all duration-300 ${
                      isSearchOpen
                        ? "opacity-100 scale-100"
                        : "opacity-0 scale-95 pointer-events-none "
                    }`}
                  >
                    <input
                      type="text"
                      placeholder="Search..."
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none"
                    />
                  </div>
                </button>
              </div>
            </div>

            <div className="flex items-center ms-auto  ">
              <div className=" flex items-center">
                <button onClick={toggleSearchBar}>
                  <BiSearchAlt
                    className={` w-7 h-7 mx-2  text-gray  bg-grayLight lg:hidden  rounded-lg `}
                  />
                </button>
                <SetingIcon></SetingIcon>
              </div>
              <div>
                <PiLineVerticalThin className="h-10 w-9 text-gray" />
              </div>
              <div className="relative">
                <div
                  className="cursor-pointer "
                  onClick={toggleNotificationDropdown}
                >
                  <NotificationIcon></NotificationIcon>
                </div>
                {isNotificationDropdownOpen && (
                  <div className="absolute right-5   mt-4 w-[300px] bg-white rounded-xl shadow-lg z-20">
                    <div className="flex justify-between items-center p-4">
                      <h2 className="text-base font-medium font-nunitoSans">
                        Notification
                      </h2>
                      <button onClick={toggleNotificationDropdown}>
                        <IoCloseSharp size={20} />
                      </button>
                    </div>
                    <ul className=" divide-gray-200">
                      {notifications.map((notification) => (
                        <li
                          key={notification.id}
                          className="p-4 flex items-center"
                        >
                          <img
                            src={require("../../imges/profileImg.png")}
                            alt="avatar"
                            className="w-10 h-10 rounded-full mr-3"
                          />
                          <div>
                            <h3 className="font-medium text-sm font-nunitoSans ">
                              {notification.title}
                            </h3>
                            <p className="text-gray-500 text-xs font-nunitoSans-normal">
                              {notification.message}
                            </p>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              <button
                className={` px-2  ${
                  isOpen ? "profile-offcanvas" : "profile-offcanvas-off"
                } `}
                onClick={profileOffcanvas}
              >
                {/* onClick={openModal} */}
                <div className="flex items-center text-nowrap text-start">
                  <div className=" w-[35px] h-[35px]">
                    <img
                      className=" w-[full] h-[full]  rounded-full object-cover "
                      src={require("../../imges/user.webp")}
                      alt="User"
                    />
                  </div>
                  <div
                    className="ml-2  hidden sm:inline-block overflow-hidden"
                    // onClick={Class}
                  >
                    <p className="font-nunitoSans font-medium	text-sm ">
                      User Name
                    </p>
                    <p className="text-gray font-nunitoSans font-normal text-xs ">
                      Hospital Admin
                    </p>
                  </div>
                </div>
                {/* <div>
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
                              Edit Profile
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
                                          className=" p-1 w-5 h-5 rounded-full bg-sky "
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
                                      className=" text-sm text-black mb-5 font-nunitoSans ms-1 font-normal "
                                    >
                                      Full Name
                                    </label>
                                    <div className=" relative mt-2 ">
                                      <input
                                        type="text"
                                        placeholder=" EnterFull Name"
                                        className="w-full px-11 py-3 bg-whiteLight rounded-xl text-sm "
                                      />
                                      <img
                                        className="size-[20px] top-3 left-2 absolute"
                                        src={require("../../imges/hospital.png")}
                                        alt=""
                                      />
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
                                        className="w-full px-11 py-3 bg-whiteLight rounded-xl text-sm "
                                      />
                                      <img
                                        className="size-[20px] top-3 left-2 absolute"
                                        src={require("../../imges//email.png")}
                                        alt=""
                                      />
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
                                      for="text"
                                      className=" text-sm text-black mb-4 font-nunitoSans ms-1 font-normal "
                                    >
                                      Role
                                    </label>
                                    <div className="">
                                      <select
                                        id="lang"
                                        className="w-full ps-2 pe-5 py-3 mt-2 text-sm  bg-whiteLight text-grayText rounded-xl  "
                                      >
                                        <option value="">
                                          Hospital / Organisation-0
                                        </option>
                                        <option value="">
                                          Hospital / Organisation-1
                                        </option>
                                        <option value="">
                                          Hospital / Organisation-2
                                        </option>
                                      </select>
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
                </div> */}
              </button>
            </div>
          </div>
        </header>
        <main className="comman-desh bg-offwhite px-2 py-4 px-lg-3 px-md-3 px-sm-3 ">
          <div className="px-3 ">{children}</div>
        </main>
      </div>
      {/* <div>
        <div className="fixed  inset-0 right-0 top-0  flex justify-end bg-overlap z-[999]  ">
          <div className="bg-white  rounded-l-3xl shadow-lg w-[0px] relative overflow-auto xl:overflow-y-hidden  profile-offcanvas">
            <div className="profile-header lg:p-6 md:p-4 sm:p-3 p-3 justify-between flex items-center sticky top-0 right-0 z-10 bg-white">
              <div className="title-section">
                <h2 className="text-2xl font-bold  font-nunitoSans text-start">
                  Edit Profile
                </h2>
                <p className="font-base font-nunitoSans font-light text-gray mt-1">
                  Add patient all details
                </p>
              </div>
              <div>
                <button className=" text-gray-400 hover:text-gray-600 profile-offcanvas-off">
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
                              className=" p-1 w-5 h-5 rounded-full bg-sky "
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
                          className=" text-sm text-black mb-5 font-nunitoSans ms-1 font-normal "
                        >
                          Full Name
                        </label>
                        <div className=" relative mt-2 ">
                          <input
                            type="text"
                            placeholder=" EnterFull Name"
                            className="w-full px-11 py-3 bg-whiteLight rounded-xl text-sm "
                          />
                          <img
                            className="size-[20px] top-3 left-2 absolute"
                            src={require("../../imges/hospital.png")}
                            alt=""
                          />
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
                            className="w-full px-11 py-3 bg-whiteLight rounded-xl text-sm "
                          />
                          <img
                            className="size-[20px] top-3 left-2 absolute"
                            src={require("../../imges//email.png")}
                            alt=""
                          />
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
                          for="text"
                          className=" text-sm text-black mb-4 font-nunitoSans ms-1 font-normal "
                        >
                          Role
                        </label>
                        <div className="">
                          <select
                            id="lang"
                            className="w-full ps-2 pe-5 py-3 mt-2 text-sm  bg-whiteLight text-grayText rounded-xl  "
                          >
                            <option value="">Hospital / Organisation-0</option>
                            <option value="">Hospital / Organisation-1</option>
                            <option value="">Hospital / Organisation-2</option>
                          </select>
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
      </div> */}
      {/* <div className="bg-overlay z-[990]"></div> */}
    </div>
  );
}

export default DashboardView;
