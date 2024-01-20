import React from "react";
import { DateRange } from "react-date-range";

export default function DateSelect({ value }) {
  return (
    <div className="">
      <DateRange
        rangeColors={["#F43F5E"]}
        direction="vertical"
        ranges={[value]}
        showDateDisplay={false}
      />
    </div>
  );
}
