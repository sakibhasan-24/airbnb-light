import React from "react";
import { DateRange } from "react-date-range";

export default function DateSelect({ value }) {
  console.log(value);
  return (
    <div className="">
      <DateRange
        rangeColors={["red"]}
        direction="vertical"
        ranges={[value]}
        showDateDisplay={false}
      />
    </div>
  );
}
