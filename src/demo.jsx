import React from 'react'

function demo() {
  return (
    <div>
      <div className="flex flex-col h-full w-full content-between ">
        <div>
          <div className="flex items-center  mt-8  w-[250px]  justify-center">
            <img
              className="w-[35px] m-1 "
              src={require("../../imges/Vector.png")}
              alt=""
            />
            <h2 className="lato font-bold ms-2 font-lato">CICERO HOSPITAL</h2>
          </div>

          <div className="">
            <div className="Dashboard-option ">
              <div className="w-full mt-5">
                <ul className="p-4 ">
                  <li className="p-3 mt-1 hover:bg-whiteSky ">
                    <a href="" className=" flex items-center">
                      <img
                        src={require("../../imges/category.png")}
                        className="h-[20] w-[20] mr-2 text-grayText"
                        alt=""
                      />

                      <h3 className="font-nunitoSans font-normal text-grayText hover:text-sky ">
                        Dashboard
                      </h3>
                    </a>
                  </li>

                  <li className="p-3 mt-1 hover:bg-whiteSky">
                    <a href="" className="flex items-center">
                      <img
                        src={require("../../imges/ProfileIcon.png")}
                        className="h-[20] w-[20] mr-2"
                        alt=""
                      />

                      <h3 className="font-nunitoSans font-normal text-grayText">
                        Patients
                      </h3>
                    </a>
                  </li>

                  <li className="p-3 mt-1 hover:bg-whiteSky">
                    <a href="" className="flex items-center">
                      <img
                        src={require("../../imges/Tretmenticon.png")}
                        className="h-[20] w-[20] mr-2"
                        alt=""
                      />

                      <h3 className="font-nunitoSans font-normal text-grayText">
                        Running Treatment
                      </h3>
                    </a>
                  </li>

                  <li className="p-3 mt-1 hover:bg-whiteSky">
                    <a href="" className="flex items-center">
                      <img
                        src={require("../../imges/Tretmenticon.png")}
                        className="h-[20] w-[20] mr-2"
                        alt=""
                      />
                      <h3 className="font-nunitoSans font-normal text-grayText">
                        Inspection Request
                      </h3>
                    </a>
                  </li>

                  <li className="p-3 mt-1 hover:bg-whiteSky">
                    <a href="" className="flex items-center">
                      <img
                        src={require("../../imges/EmergencyIcon.png")}
                        className="h-[20] w-[20] mr-2"
                        alt=""
                      />
                      <h3 className="font-nunitoSans font-normal text-grayText">

                        Emergency Patient
                      </h3>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>


        <div className="p-2  lg:mb-auto mt-auto mx-5 ">
          <hr className="border- " />
          <div className="  footer-box flex justify-start flex-col text-gray  relative ">
            <div
              className="bg-white  cursor-pointer flex items-center justify-start bg-transparent mt-3"
              onClick={toggleCountryDropdown}>
              <img
                src={selectedCountry.flag}
                alt={selectedCountry.name}
                className="inline-block w-5 h-5 mr-2" />
              {selectedCountry.name}
            </div>
            {isCountryDropdownOpen && (
              <ul className="absolute z-10 bottom-10 w-[200px] bg-white  rounded shadow-lg">
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
          <div className="mt-5">
            <a href="" className="flex items-center ">
              <img src={require("../../imges/LogoutIcon.png")} alt="" />
              <h3 className=" text-grayText ml-2 font-AlbertSans font-normal"> Logout </h3>
            </a>
          </div>
        </div>

      </div>
    </div>
  )
}

export default demo