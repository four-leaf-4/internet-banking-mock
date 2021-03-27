import React, { useState } from "react";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import jaLocale from "date-fns/locale/ja";
import { mystyles } from "~/styles/makestyles";

export const Datepicker = ({ prop }) => {
  const [selectedDate, setSelectedDate] = useState(
    new Date("2014-08-18T21:11:54"),
  );

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  const { value } = prop;
  const { calendarfield } = mystyles();
  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils} locale={jaLocale}>
      <KeyboardDatePicker
        disableToolbar
        variant="inline"
        inputVariant="outlined"
        className={calendarfield}
        format="yyyy/MM/dd"
        margin="normal"
        id={`"date-picker-"${value}`}
        value={selectedDate}
        onChange={handleDateChange}
        KeyboardButtonProps={{
          "aria-label": "change date",
        }}
      />
    </MuiPickersUtilsProvider>
  );
};
