import React from 'react'
import { Link } from 'react-router-dom';

function SidebarItem({ label, path, icon, isActive }) {
  return (
    <div>
      <li
        className={`${
          isActive
            ? "text-white bg-sky  hover:bg-sky hover:text-white"
            : "text-gray-400"
        } flex items-center px-4 py-4 mt-2 rounded-lg hover:bg-whiteSky group   text-gray cursor-pointer`}
      >
        <Link to={path} className="flex items-center w-full">
          <span  className={` ${
               isActive === "/dashboardmenu" && " bg-sky"
             }h-[20] w-[20] mr-4  group-hover:text-sky`}>
            {icon}
          </span>
          <span  className={`${
           isActive === "/dashboardmenu" && "  group-hover:text-sky "
          } font-nunitoSans font-normal  group-hover:text-sky  dashboars-text`}>{label}</span>
        </Link>
      </li>
    </div>
  );
}

export default SidebarItem