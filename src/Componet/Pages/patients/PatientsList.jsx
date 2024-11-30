import { patients } from "../../Helpers/Constant";
import Trash from "../../../imges/Svg File/Trash";
import Maleicon from "../../../imges/Svg File/Maleicon";
import Callicon from "../../../imges/Svg File/Callicon";
import BdayIcon from "../../../imges/Svg File/BdayIcon";
import { Link } from "react-router-dom";
import { useState } from "react";

function PatientsList() {
  // const [isOn, setIsOn] = useState(false);
  // const toggleSwitch = () => {
  //   setIsOn(!isOn);
  // };
     const handleClick = (event) => {
       event.stopPropagation();
       console.log("Button clicked");
     };
     

  return (
    <div className="bg-gray-100 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 lg:gap-4 md:gap-4 sm:gap-2 mx-auto ">
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
              <div className="ms-auto" onClick={handleClick}>
                <label class="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" class="sr-only peer" value="" />
                  <div class="group peer bg-swithoff peer-checked:bg-white rounded-full duration-300 w-8 h-4 after:duration-300 after:bg-white peer-checked:after:bg-swithon peer-checked:ring-swithon peer-checked:ring-1 after:rounded-full after:absolute after:h-2.5 after:w-2.5 after:top-[3px] after:right-1 after:flex after:justify-center after:items-center peer-checked:after:-translate-x-4 peer-hover:after:scale-95"></div>
                </label>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default PatientsList;
