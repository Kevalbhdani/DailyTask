import { patients } from "../../Helpers/Constant";
import Trash from "../../../imges/Svg File/Trash";
import Maleicon from "../../../imges/Svg File/Maleicon";
import Callicon from "../../../imges/Svg File/Callicon";
import BdayIcon from "../../../imges/Svg File/BdayIcon";
import { Link } from "react-router-dom";
import { Pagination } from "../../Helpers/Pagination";
import { useState } from "react";
;

function PatientsList() {
  // const [isOn, setIsOn] = useState(false);
  // const toggleSwitch = () => {
  //   setIsOn(!isOn);
  // };

 
  return (
    <div className=" bg-gray-100  ">
      <div className=" grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 lg:gap-4 md:gap-4 sm:gap-2 mx-auto ">
        {patients.map((patient) => (
          <Link
            to={`/PatientDetails/${patient.id}`}
            key={patient.id}
            className="bg-white shadow-sm rounded-2xl p-4 flex flex-col"
          >
            <div className=" lg:pb-4 md:pb-2 pb-2 flex flex-row items-center gap-3 borderline">
              <div className="flex items-center ">
                <img
                  src={patient.avatarUrl}
                  alt="Patient avatar"
                  className="w-11 h-11 rounded-full"
                />
              </div>
              <div className="title">
                <h2 className="text-lg font-normal font-nunitoSans capitalize">
                  {patient.name}
                </h2>
              </div>
              <button className="text-red-500 ms-auto">
                <Trash></Trash>
              </button>
            </div>

            <div className="flex lg:my-3 md:my-2 my-2 items-center space-x-2">
              <div>
                <Callicon></Callicon>
              </div>
              <span className="font-nunitoSans font-normal text-black text-base !m-0 ps-2 ">
                {patient.phone}
              </span>
            </div>

            <div className="flex items-center gap-4">
              <div className="gender flex items-center">
                <span>
                  <Maleicon className={`text-sky`} />
                </span>
                <h6 className="text-black text-base mb-0 ps-2 font-nunitoSans font-normal capitalize ">
                  {patient.gender}
                </h6>
              </div>
              <div className="Age flex items-center">
                <span>
                  <BdayIcon className={`text-sky`} />
                </span>
                <h6 className="text-black text-base mb-0 ps-2 font-nunitoSans font-normal ">
                  {patient.age}
                </h6>
              </div>
            </div>

            <div className="lg:mt-4 md:mt-2 mt-2">
              <div className="flex items-center flex-row gap-3">
                <h6 className="text-black text-base font-medium mb-0 capitalize font-nunitoSans">
                  Status
                </h6>
                <div className="ms-auto">
                  <label className="relative flex items-center justify-end border rounded-full  cursor-pointer ">
                    <input type="checkbox" className="sr-only peer" />
                    <div
                      className="w-8 h-4 bg-gray-200  peer-focus:ring-2 rounded-full
                           peer-checked:bg-gray peer-checked:after:translate-x-full peer-checked:after:border-white
                             after:absolute after:top-0.5 after:left-[4px]  after:bg-white after:border-gray-300 after:border
                             after:rounded-full after:h-3 after:w-3 after:transition-all dark:border-gray-600"
                    ></div>
                  </label>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default PatientsList;
