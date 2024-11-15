import React from 'react'

function Cancelicon() {
  return (
    <div>
      <svg
        width="30"
        height="30"
        viewBox="0 0 30 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="14.999" cy="15" r="15" fill="#858E9A" fill-opacity="0.08" />
        <path
          d="M10.5 19.5005L19.5 10.5005"
          stroke="#858E9A"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M19.5 19.5005L10.5 10.5005"
          stroke="#858E9A"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </div>
  );
}

export default Cancelicon