import { createMuiTheme } from "@material-ui/core/styles";

export const theme = createMuiTheme({
  palette: {
    primary: {
      light: "#eeeeee", //e6f0e6
      main: "#BDBDBD",
      dark: "#707070",
      contrastText: "#707070",
      base: "#ffffff",
    },
    secondary: {
      light: "#efffec",
      main: "#14a56e",
      dark: "#004C25",
      contrastText: "#ffffff",
    },
    inherit: {
      light: "#e57373",
      main: "#f44336",
      dark: "#d32f2f",
    },
  },
  overrides: {
    MuiButton: {
      root: {
        display: "block",
        margin: "auto",
      },
      textPrimary: {
        color: "#14a56e",
      },
    },
    MuiIconButton: {
      root: {
        padding: "inherit",
      },
    },
    MuiContainer: {
      root: {
        backgroundColor: "#ffffff",
      },
    },
    MuiOutlinedInput: {
      multiline: {
        backgroundColor: "#eefff6",
      },
      input: {
        background: "#eefff6",
        textAlign: "inherit",
        minHeight: "inherit",
        margin: "inherit",
      },
    },
    MuiInputAdornment: {
      root: {
        backgroundColor: "#eefff6",
      },
    },
    MuiInputBase: {
      input: {
        background: "#eefff6",
        textAlign: "inherit",
        minHeight: "inherit",
      },
    },
    MuiFormControl: {
      root: {
        margin: "inherit",
      },
    },
    MuiDrawer: {
      paper: {
        width: "60%",
        maxWidth: "300px",
      },
    },
    MuiSelect: {
      root: {
        backgroundColor: "none",
      },
    },
    MuiTableCell: {
      root: {
        fontSize: "inherit",
        padding: ".4rem",
        textAlign: "center",
      },
    },
    MuiPickersYear: {
      yearSelected: {
        color: "#14a56e",
      },
    },
    MuiPickersMonth: {
      monthSelected: {
        color: "#14a56e",
        "&:focus": {
          color: "#14a56e",
        },
      },
    },
    MuiPickersDay: {
      daySelected: {
        color: "#ffffff",
        backgroundColor: "#14a56e",
        "&:hover": {
          backgroundColor: "#14a56e",
        },
      },
    },
    MuiStepper: {
      root: {
        padding: "1rem 0 0 0",
      },
      horizontal: {
        alignItems: "inherit",
      },
    },
    MuiStepLabel: {
      root: {
        flexDirection: "column",
        alignItems: "center",
        display: "flex",
      },
    },
    MuiStepIcon: {
      root: {
        color: "#14a56e",
      },
      text: {
        fill: "#ffffff",
      },
    },
  },
});
