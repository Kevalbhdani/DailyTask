
import React from 'react'

function EditProfileIcon({ className }) {
  return (
    <div className={`${className}`}>
      <svg
        width="36"
        height="35"
        viewBox="0 0 36 35"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_d_259_12599)">
          <circle cx="17.8207" cy="12.9999" r="11.5385" fill="#1479FF" />
        </g>
        <g clip-path="url(#clip0_259_12599)">
          <rect
            width="10.7692"
            height="10.7692"
            transform="translate(12.4365 7.61621)"
            fill="#1479FF"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M12.4365 16.1119V18.3854H14.71L21.2912 11.7444L19.0177 9.47091L12.4365 16.1119ZM23.0263 10.0094C23.2656 9.77006 23.2656 9.41108 23.0263 9.17177L21.6502 7.7957C21.4109 7.55638 21.0519 7.55638 20.8126 7.7957L19.7357 8.87262L22.0092 11.1461L23.0263 10.0094Z"
            fill="white"
          />
        </g>
        <defs>
          <filter
            id="filter0_d_259_12599"
            x="0.512996"
            y="0.30758"
            width="34.6156"
            height="34.6154"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="4.61538" />
            <feGaussianBlur stdDeviation="2.88462" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_259_12599"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_259_12599"
              result="shape"
            />
          </filter>
          <clipPath id="clip0_259_12599">
            <rect
              width="10.7692"
              height="10.7692"
              fill="white"
              transform="translate(12.4365 7.61621)"
            />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

export default EditProfileIcon