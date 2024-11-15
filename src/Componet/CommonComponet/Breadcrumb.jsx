import React from 'react'

import { Link, useLocation } from "react-router-dom";
import { HiOutlineChevronRight } from "react-icons/hi2";


function Breadcrumb({ crumbs }) {
  return (
    <nav
    
      aria-label="Breadcrumb"
    >
      <ol className="inline-flex items-center space-x-1 tracking-wide ">
        {crumbs.map((crumb, index) => (
          <li
            key={index}
            className="inline-flex items-center  text-bgwrape text-sm font-nunitoSans font-normal "
          >
            {index !== crumbs.length - 1 ? (
              <Link to={crumb.path} className="text-gray-500 px-[4px] ">
                {crumb.label}
              </Link>
            ) : (
              <span className="text-black text-sm font-nunitoSans font-normal 	">
                {crumb.label}
              </span>
            )}
            {index !== crumbs.length - 1 && (
              <span className="mx-2 text-gray-400">
                <HiOutlineChevronRight />
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

export default Breadcrumb