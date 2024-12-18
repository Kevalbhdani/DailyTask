import React from 'react'

function RunningLine() {
  return (
    <div>
      <svg
        width="3"
        height="141"
        viewBox="0 0 1 141"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          width="1"
          height="141"
          rx="0.5"
          fill="url(#paint0_linear_232_3051)"
        />
        <defs>
          <linearGradient
            id="paint0_linear_232_3051"
            x1="0.5"
            y1="0"
            x2="0.5"
            y2="141"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#1479FF" stop-opacity="0" />
            <stop offset="0.525" stop-color="#1479FF" />
            <stop offset="1" stop-color="#1479FF" stop-opacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

export default RunningLine