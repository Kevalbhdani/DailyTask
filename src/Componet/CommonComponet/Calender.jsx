import React from 'react'

function Calender(eventInfo) {
  return (
    <div>
      {/* <b>{eventInfo.timeText}</b> */}
      <i>{eventInfo.event.title}</i>
    </div>
  );
}

export default Calender