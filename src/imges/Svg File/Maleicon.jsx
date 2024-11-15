import React from 'react'

function Maleicon({className}) {
  return (
    <div className={`${className}`}>
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8.54232 17.9167C12.1092 17.9167 15.0007 15.0252 15.0007 11.4583C15.0007 7.89149 12.1092 5 8.54232 5C4.97548 5 2.08398 7.89149 2.08398 11.4583C2.08398 15.0252 4.97548 17.9167 8.54232 17.9167Z"
          stroke="currentColor"
          stroke-width="1.25"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M17.9173 2.08325L13.334 6.66658"
          stroke="currentColor"
          stroke-width="1.25"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M12.5 2.08325H17.9167V7.49992"
          stroke="currentColor"
          stroke-width="1.25"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </div>
  );
}

export default Maleicon