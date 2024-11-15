import React, { useState } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import Slider from 'react-slick';
import { RiEyeLine } from "react-icons/ri";
import { RiEyeOffLine } from "react-icons/ri";
import { countries } from "../../Helpers/Constant"
import { PiKey } from "react-icons/pi";


function RegisterPage() {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState(countries[0]);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  // Toggle password visibility
  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const toggleConfirmPasswordVisibility = () => {
    setConfirmPasswordVisible(!confirmPasswordVisible);
  };

  const handleCountrySelect = (country) => {
    setSelectedCountry(country);
    setDropdownOpen(false);
  };
  return (
    
    <div>
      <div className="min-h-screen relative mx-auto ">
        <div className="bg-overlay lg:hidden absolute  w-full h-full "></div>
        <div className=" w-full h-full mx-auto ">
          <div className="grid  grid-cols-2 h-full ">
            <div className="col-span-1 p-3 h-full lg:block hidden ">
              <div className="card auth-img-card relative">
                <Swiper
                  spaceBetween={30}
                  pagination={{
                    clickable: true,
                  }}
                  modules={[Pagination]}
                  className="mySwiper sm:text-2xl xl:text-3xl font-nunitoSans font-bold h-full"
                >
                  <SwiperSlide>
                    <div className="main">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                      do.{" "}
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="main">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                      do.
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="main">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                      do.
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
        
            </div>
            <div className="lg:col-span-1 col-span-2 h-full z-10 p-3 ">
              <div className=" auth-img-right-card ">
                <div className="card mb-0   ">
                  <div className="w-full mx-auto ">
                    <div className=" col-span-2  justify-center h-full  full-div">
                      <div className="    h-full sm:p-2 overflow-hidden  lg:mx-auto   ">
                        <div className=" overflow-y-hidden  w-[95%] sm:w-[70%] lg:w-full h-full mx-auto  xl:w-[70%] bg-white rounded-xl sm:py-4 sm:px-4 py-4 px-4 ">
                
                          <div className="flex justify-end  text-gray p-2">
                            <div
                              className="bg-white rounded cursor-pointer flex items-center justify-end bg-transparent "
                              onClick={() => setDropdownOpen(!dropdownOpen)}
                            >
                              <img
                                src={selectedCountry.flag}
                                alt={selectedCountry.name}
                                className="inline-block w-5 h-5 mr-2"
                              />
                              {selectedCountry.name}
                            </div>

                            {dropdownOpen && (
                              <ul className="absolute z-10 mt-1 w-[200px] bg-white  rounded shadow-lg">
                                {countries.map((country) => (
                                  <li
                                    key={country.code}
                                    onClick={() => handleCountrySelect(country)}
                                    className="flex items-center px-4 py-2 cursor-pointer hover:bg-gray-100"
                                  >
                                    <img
                                      src={country.flag}
                                      alt={country.name}
                                      className="inline-block w-5 h-5 mr-2"
                                    />
                                    {country.name}
                                  </li>
                                ))}
                              </ul>
                            )}
                          </div>  
                          <div className="h-full w-full px-5 ">
                            <div className="flex justify-center items-center mx-auto mt-10  ">
                              <img
                                className="w-[20px] m-1 "
                                src={require("../../../imges/Vector.png")}
                                alt=""
                              />
                              <h2 className="lato font-bold text-xs">
                                CICERO HOSPITAL
                              </h2>
                            </div>

                            <div className="mt-5 mb-5 sm:mb-5 sm:text-left text-center text-2xl ">

                              <h2 className='font-nunitoSans font-bold'>
                                Register Account
                              </h2>
                              <p className="text-gray mt-3  text-sm sm:text-base  font-nunitoSans font-normal">
                                Register Now to Manage Your Appointments with Ease!                              </p>
                            </div>
                            <div className="relative font-nunitoSans font-normal">
                              <form action="">
                                <div className="mt-5  ">
                                  <label
                                    for="text"
                                    className=" text-sm text-black mb-4 font-nunitoSans ms-1 font-normal "
                                  >
                                    Full Name
                                  </label>
                                  <input
                                    type="text"
                                    placeholder=" EnterFull Name"
                                    className="w-full px-11 py-3 bg-whiteLight rounded-xl text-sm "
                                  />
                                  <div className="size-[20px] absolute top-9 ms-3">
                                    <img
                                      src={require("../../../imges/hospital.png")}
                                      alt=""
                                    />
                                  </div>
                                </div>

                                <div className="mt-5 ">
                                  <label
                                    for="email"
                                    class=" text-sm text-black mb-4 font-nunitoSans ms-1 font-normal "
                                  >
                                    Email
                                  </label>
                                  <input
                                    type="email"
                                    placeholder="Enter Email"
                                    className="w-full px-11 py-3 bg-whiteLight rounded-xl text-sm "
                                  />
                                  <div className="size-[20px] absolute top-[120px] ms-3">
                                    <img
                                      src={require("../../../imges//email.png")}
                                      alt=""
                                    />
                                  </div>
                                </div>

                                <div className="mt-5">
                                  <label
                                    for="name"
                                    className="block font-nunitoSans text-black text-sm mb-2 ms-1 font-normal"
                                  >
                                    Mobile Number
                                  </label>
                                  <input
                                    type="text"
                                    placeholder="Mobile Number"
                                    className="w-full px-12 py-3   bg-whiteLight rounded-xl text-sm"
                                  />
                                  <img
                                    className="absolute  size-[20px]  h-[21px]  top-[215px] left-3"
                                    src={require("../../../imges//call.png")}
                                    alt=""
                                  />
                                </div>


                                <div className="mt-5 ">
                                  <label
                                    for="name"
                                    className="block font-nunitoSans text-black mb-2 ms-1 font-normal text-sm"
                                  >
                                    Role
                                  </label>

                                  <select id="lang" className="w-full ps-5 pe-5 py-3 text-sm  bg-whiteLight rounded-xl  ">
                                    <option value="">Hospital / Organisation-0</option>
                                    <option value="">Hospital / Organisation-1</option>
                                    <option value="">Hospital / Organisation-2</option>
                                  </select>
                                </div>

                              
                                <div className="mt-5 ">
                                  <label className="text-sm text-black mb-2 font-normal">Password</label>
                                  <div className="relative">
                                    <input
                                      type={passwordVisible ? "text" : "password"} 
                                      placeholder="Password"
                                      className="w-full px-11 py-3 bg-whiteLight rounded-xl text-sm"
                                    />
                                    <button
                                      type="button"
                                      onClick={togglePasswordVisibility} 
                                      className="absolute top-[10px] right-5 text-gray-500 cursor-pointer"
                                    >
                                      {passwordVisible ? <RiEyeLine fontSize={20} /> : <RiEyeOffLine fontSize={20} />} 
                                    </button>
                                    <button className='absolute top-[12px] left-3'><PiKey fontSize={20} /></button>
                                  </div>
                                </div>

                                <div className="mt-5 ">
                                  <label className="text-sm text-black mb-2 font-normal">Confirm Password</label>
                                  <div className="relative">
                                    <input
                                      type={confirmPasswordVisible ? "text" : "password"} 
                                      placeholder="Confirm Password"
                                      className="w-full px-11 py-3 bg-whiteLight rounded-xl text-sm"
                                    />
                                    <button
                                      type="button"
                                      onClick={toggleConfirmPasswordVisibility} 
                                      className="absolute top-[10px] right-5 text-gray-500 cursor-pointer"
                                    >
                                      {confirmPasswordVisible ? <RiEyeLine fontSize={20} /> : <RiEyeOffLine fontSize={20} />} 
                                    </button>

                                    <button className='absolute top-[10px] left-3'><PiKey fontSize={20} /></button>
                                  </div>
                                  </div>


                              </form>
                            </div>
                            <div className="sm:mt-10 mt-10  sm:px-5">
                              <button className="w-full px-11 py-3  bg-sky rounded-xl font-AlbertSans font-semibold text-white ">
                                Submit Application
                              </button>
                             <a href="/">
                                <button className="w-full mt-3 px-3 py-3  bg-whiteSky rounded-xl font-AlbertSans font-normal text-sm">
                                  Back to login
                                </button>
                             </a>
                              <p className="text-center mt-4 font-semibold AlbertSans text-gray text-xs">
                                By continuing you are agree with Terms & Conditions and Privacy Policy
                              </p>
                            </div>

                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RegisterPage


  // < RiEyeOffLine />