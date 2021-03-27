import React, { useState } from "react";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import jaLocale from "date-fns/locale/ja";
import { mystyles } from "~/styles/makestyles";

export const Yearmonth = () => {
  const [selectedDate, setSelectedDate] = useState(
    new Date("2014-08-18T21:11:54"),
  );

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  const { calendarfield } = mystyles();

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils} locale={jaLocale}>
      <KeyboardDatePicker
        disableToolbar
        openTo="year"
        views={["year", "month"]}
        inputVariant="outlined"
        className={calendarfield}
        format="yyyy/MM"
        margin="normal"
        id={`"date-picker-transfer-date"`}
        // label="振込指定日"
        value={selectedDate}
        onChange={handleDateChange}
        KeyboardButtonProps={{
          "aria-label": "change date",
        }}
      />
    </MuiPickersUtilsProvider>
  );
};
