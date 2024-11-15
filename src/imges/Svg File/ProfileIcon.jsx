import React from 'react'

function ProfileIcon({className}) {
  return (
    <div className={` ${className}`}>
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10.1341 9.05817C10.0508 9.04984 9.95078 9.04984 9.85911 9.05817C7.87578 8.9915 6.30078 7.3665 6.30078 5.3665C6.30078 3.32484 7.95078 1.6665 10.0008 1.6665C12.0424 1.6665 13.7008 3.32484 13.7008 5.3665C13.6924 7.3665 12.1174 8.9915 10.1341 9.05817Z" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M5.96758 12.1333C3.95091 13.4833 3.95091 15.6833 5.96758 17.0249C8.25924 18.5583 12.0176 18.5583 14.3092 17.0249C16.3259 15.6749 16.3259 13.4749 14.3092 12.1333C12.0259 10.6083 8.26758 10.6083 5.96758 12.1333Z" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
      </svg>

    </div>
  )
}

export default ProfileIcon