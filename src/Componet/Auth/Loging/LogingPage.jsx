import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { RiEyeLine } from "react-icons/ri";
import { RiEyeOffLine } from "react-icons/ri";
import { countries } from "../../Helpers/Constant"
 function LogingPage() {

   const [passwordVisible, setPasswordVisible] = useState(false);
   const [selectedCountry, setSelectedCountry] = useState(countries[0]);
   const [dropdownOpen, setDropdownOpen] = useState(false);

   const togglePasswordVisibility = () => {
     setPasswordVisible(!passwordVisible);
   };

   const handleCountrySelect = (country) => {
     setSelectedCountry(country);
     setDropdownOpen(false);
   };

  return (
    <div className="min-h-screen relative mx-auto ">
      <div className="bg-overlay lg:hidden absolute  w-full h-full "></div>
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
        <div className="lg:col-span-1 col-span-2 h-full z-10 p-3 relative ">
          <div className=" auth-img-right-card   bg-white rounded-xl   mx-auto  ">
        
            <div className="card py-5 ">
              <div className=" col-span-2   rounded-xl px-0 xs:px-2 sm:px-5 md:px-5 lg:px-0 ">
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
                <div className="md:px-5 bg-white rounded-xl  " >
                          <div className="flex justify-center items-center mx-auto mt-10 sm:mt-10">
                            <img
                              className="w-[20px] m-1 "
                              src={require("../../../imges/Vector.png")}
                              alt=""
                            />
                            <h2 className="lato font-bold text-xs">
                              CICERO HOSPITAL
                            </h2>
                          </div>

                  <div className="mt-5 sm:mb-5 sm:text-left text-center text-2xl mx-10  ">
                            <h2 className="font-nunitoSans font-bold sm:text-3xl lg:text-4xl text-black">
                              Welcome back 👋
                            </h2>
                            <p className="text-gray mt-1.5 text-sm sm:text-base font-nunitoSans font-normal">
                              Please enter details to login your account
                            </p>
                          </div>

                  <div className="relative mx-10 ">
                            <form action="">
                              <div className="mt-5  ">
                                <label
                                  for="email"
                                  class="leading-7 text-sm text-black mb-4 font-nunitoSans ms-1 font-normal ">
                                  Email
                                </label>
                                <input
                                  type="email"
                                  placeholder="Enter Email"
                                  className="w-full px-11 py-3 bg-whiteLight rounded-xl "
                                />
                                <div className="size-[20px] absolute top-11 ms-3">
                                  <img
                                    src={require("../../../imges//email.png")}
                                    alt=""
                                  />
                                </div>
                              </div>
                              <div className="mt-5">
                                <label className="text-sm text-black mb-2 font-normal">Password</label>
                                <div className="relative">
                                  <input
                                    type={passwordVisible ? "text" : "password"} // 
                                    placeholder="Password"
                                    className="w-full px-11 py-3 bg-whiteLight rounded-xl text-sm"
                                  />
                                  <button
                                    type="button"
                                    onClick={togglePasswordVisibility} // 
                                    className="absolute top-[15px] right-3 text-gray-500 cursor-pointer"
                                  >
                                    {passwordVisible ? <RiEyeLine fontSize={20} /> : <RiEyeOffLine fontSize={20} />} 
                                  </button>
                                </div>
                              </div>
                              <div className="flex justify-between items-center ">
                                <img
                                  className="absolute  size-[20px]  h-[21px] sm:top-[135px] top-[138px] left-3"
                                  src={require("../../../imges//key.png")}
                                  alt=""
                                />
                              </div>
                            </form>
                            <div className="  flex mt-3  sm:flex-row flex-col sm:flex sm:justify-between items-center sm:mt-5 justify-center text-center ">
                              <div className=" flex items-center">
                                <input
                                  type="checkbox"
                          className=" bg-black  w-[20px] h-[20px] mt-3"
                                />
                        <label className="ms-2 nunitoSans font-medium mt-3 ">
                                  Keep me logged in
                                </label>
                              </div>
                              <a href="/forgot">
                        <h2 className="text-sky nunitoSans font-medium mt-3">
                                  Forget Password?
                                </h2>
                             </a>
                            </div>
                          </div>
                  <div className="sm:mt-20 mt-3  px-10  ">
                            <button className="w-full px-3 py-3  bg-sky rounded-xl font-nunitoSans font-semibold text-white ">
                              Continue
                            </button>
                            <a href="/register">
                              <button className="w-full mt-3 px-3 py-3  bg-whiteSky rounded-xl font-nunitoSans font-semibold text-sm">
                                Back to Sign up
                              </button>
                           </a>
                            <p className="text-center mt-4 font-semibold AlbertSans text-gray text-xs ">
                              Terms & Conditions and Privacy Policy
                            </p>
                          </div>                        
                        </div>
                    </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LogingPage;
