import React, { useContext } from "react";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import jaLocale from "date-fns/locale/ja";
import { AccountOpeningContext } from "../accountopeningContext";
import { mystyles } from "~/styles/makestyles";

export const BirthDay = () => {
  const { registerinfo, isConfirmMode } = useContext(AccountOpeningContext);
  const birthday = registerinfo.personalinfo.birthday;

  const handleDateChange = (e) => {
    console.log(e);
  };
  const { calendarfield } = mystyles();

  return (
    <form>
      <MuiPickersUtilsProvider utils={DateFnsUtils} locale={jaLocale}>
        <KeyboardDatePicker
          disableToolbar
          openTo="year"
          views={["year", "month", "date"]}
          inputVariant="outlined"
          className={calendarfield}
          format="yyyy/MM/dd"
          margin="normal"
          id="date-picker-inline"
          label="生年月日"
          value={birthday}
          onChange={handleDateChange}
          KeyboardButtonProps={{
            "aria-label": "change date",
          }}
          disabled={isConfirmMode}
        />
      </MuiPickersUtilsProvider>
    </form>
  );
};
