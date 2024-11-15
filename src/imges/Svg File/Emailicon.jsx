import React from 'react'

function Emailicon({clasName}) {
  return (
    <div className={`${clasName}`}>
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1.66699 7.08341C1.66699 4.16675 3.33366 2.91675 5.83366 2.91675H14.167C16.667 2.91675 18.3337 4.16675 18.3337 7.08341V12.9167C18.3337 15.8334 16.667 17.0834 14.167 17.0834H5.83366"
          stroke="currentColor"
          stroke-width="1.25"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M14.1663 7.5L11.558 9.58333C10.6997 10.2667 9.29134 10.2667 8.433 9.58333L5.83301 7.5"
          stroke="currentColor"
          stroke-width="1.25"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1.66699 13.75H6.66699"
          stroke="currentColor"
          stroke-width="1.25"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1.66699 10.4167H4.16699"
          stroke="currentColor"
          stroke-width="1.25"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </div>
  );
}

export default Emailicon