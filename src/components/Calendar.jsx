import React, { useState } from 'react';
import DatePicker from 'react-date-picker';

function Calendar() {
  const [value, onChange] = useState(new Date());

  return (
    <div className="calendar">
      <DatePicker onChange={onChange} value={value} />
    </div>
  );
}


export default Calendar;