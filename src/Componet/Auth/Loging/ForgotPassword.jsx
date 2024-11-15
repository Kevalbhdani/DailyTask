import React from "react";
import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { countries } from "../../Helpers/Constant"
function ForgotPassword() {

  const [selectedCountry, setSelectedCountry] = useState(countries[0]);
  const [dropdownOpen, setDropdownOpen] = useState(false);

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
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do.{" "}
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="main">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do.
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="main">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do.
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
            <div className="lg:col-span-1 col-span-2 h-full z-10 p-3 ">
              <div className=" auth-img-right-card ">
                <div className="xl:block sm:hidden hidden ">
                  
                </div>
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
                          <div className="h-full w-full  ">
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
                            <div className="mt-10 sm:mb-5 sm:text-left text-center text-2xl px-5">
                              <h2 className="font-nunitoSans font-bold sm:text-3xl lg:text-3xl text-black">
                                Forgot Password
                              </h2>
                              <p className="text-gray mt-5  text-lg sm:text-sm  font-nunitoSans font-normal">
                                No worries, we’ll send you reset instructions.
                              </p>
                            </div>
                            <div className="relative font-nunitoSans font-normal">
                              <form action="">
                                <div className="mt-4 px-5 ">
                                  <label
                                    for="email"
                                    class=" text-sm text-black  font-nunitoSans ms-1 font-normal "
                                  >
                                    Email
                                  </label>
                                  <input
                                    type="email"
                                    placeholder="Enter Email"
                                    className="w-full mt-3 px-11 py-3 bg-whiteLight rounded-xl font-normal text-sm font-nunitoSans"
                                  />
                                  <div className="size-[20px] absolute top-[47px] ms-3">
                                    <img
                                      src={require("../../../imges//email.png")}
                                      alt=""
                                    />
                                  </div>
                                </div>
                              </form>
                            </div>
                            <div className="sm:mt-16  sm:px-5">
                              <button className="w-full px-11 py-3    bg-sky rounded-xl font-AlbertSans font-semibold text-white text-base ">
                                Submit Application
                              </button>
                           <a href="/">
                                <button className="w-full mt-4 px-3 py-3 bg-whiteSky rounded-xl font-medium  font-nunitoSans">
                                  Back to login
                                </button>
                           </a>
                              <p className="text-center mt-1 font-semibold AlbertSans text-gray text-xs">
                                By continuing you are agree with Terms &
                                Conditions and Privacy Policy
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
  );
}

export default ForgotPassword;
