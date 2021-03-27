import { makeStyles } from "@material-ui/core/styles";

export const mystyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#ffffff",
    minHeight: "100vh",
    position: "relative",
    display: "flex",
    flexDirection: "column",
  },
  wrapper: {
    [theme.breakpoints.up("md")]: {
      padding: "0",
    },
  },
  headerarea: {
    position: "sticky",
    top: "0",
    verticalAlign: "middle",
    padding: "0.5rem 1rem",
    background: "#eeeeee",
    [theme.breakpoints.up("sm")]: {
      minHeight: "80px",
      position: "relative",
    },
  },
  headerlogo: {
    maxHeight: "64px",
    [theme.breakpoints.down("md")]: {
      maxWidth: "100px",
    },
  },
  headerinner: {
    maxWidth: "960px",
    width: "100%",
    margin: "auto",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  footerarea: {
    display: "block",
    width: "100%",
    marginTop: "auto",
    bottom: 0,
    zIndex: 1000,
    textAlign: "center",
  },
  footerinner: {},
  titlearea: {
    position: "relative",
    padding: "0.65rem",
    margin: "1rem 0",
  },
  maincolumn: {
    width: "100%",
    [theme.breakpoints.up("md")]: {
      maxWidth: "700px",
    },
  },
  mainarea: {
    padding: "1rem",
    [theme.breakpoints.up("md")]: {
      minHeight: "628px",
    },
  },
  maininner: {
    padding: "1rem",
    margin: "auto",
    maxWidth: "480px",
    textAlign: "center",
  },
  gnaviitem: {
    color: "inherit",
    "&:hover": {
      opacity: ".7",
    },
  },
  innerbox: {
    maxWidth: "640px",
    margin: "auto",
  },
  emergencystoparea: {
    display: "flex",
    flexDirection: "row",
    [theme.breakpoints.down("sm")]: {
      display: "block",
      margin: "1rem 0",
      padding: "1rem",
    },
  },
  listlinksarea: {
    maxWidth: "240px",
    width: "100%",
    margin: "0",
    [theme.breakpoints.down("sm")]: {
      maxWidth: "100%",
      marginLeft: "0",
    },
  },
  messagearea: {
    padding: "1rem",
  },
  topicsarea: {
    padding: "1rem",
    marginTop: "1rem",
    backgroundColor: "#ffffff",
  },
  campaignarea: {
    marginBottom: "2rem",
  },
  responsivebox: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
  },
  globalnavigation: {
    maxWidth: "240px",
    padding: "1rem",
    width: "100%",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  informationarea: {
    margin: "1rem",
  },
  normaltextlink: {
    textShadow: "none",
    backgroundImage: "none",
    textDecoration: "none",
  },
  linkitem: {
    width: "100%",
    listStyle: "none",
    textDecoration: "none",
  },
  linkitem2: {
    "&:hover": {
      backgroundColor: "#e5e5e5",
    },
  },
  textfield: {
    margin: "0 0 1rem 0",
    width: "100%",
    backgroundColor: "#eefff6",
  },
  calendarfield: {
    margin: "0",
    width: "100%",
    backgroundColor: "#eefff6",
  },
  linkbutton: {
    width: "100%",
  },
  submitbutton: {
    margin: "auto",
    backgroundColor: "#f44336",
    color: "white",
    "&:hover": {
      backgroundColor: "#d32f2f",
    },
  },
  logoutbutton: {
    padding: "0",
    margin: "0 auto",
    fontSize: "0.65rem",
    border: "solid",
    borderWidth: "1px",
    borderColor: "#707070",
  },
  drawericon: {
    display: "block",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  slider: {
    width: "100%",
  },
  pinkey: {
    textAlign: "center",
    minHeight: "3rem",
    backgroundColor: "#ffffff",
    margin: "0.2rem",
    maxWidth: "2.2rem",
    [theme.breakpoints.up("md")]: {
      margin: "1rem",
      maxWidth: "3rem",
    },
  },
  subtitle: {
    backgroundColor: "#707070",
    color: "#ffffff",
    padding: "0.4rem",
    marginBottom: "1rem",
  },
  subtitle2: {
    backgroundColor: "#707070",
    color: "#ffffff",
    fontSize: "0.765rem",
    width: "100%",
    margin: "1rem 0 0.5rem",
    padding: ".2rem",
    textAlign: "center",
  },
  subtitle3: {
    fontSize: "0.765rem",
    width: "100%",
    margin: "1rem 0 0.5rem",
    padding: ".2rem",
  },
  pagenation: {
    width: "max-content",
    textAlign: "center",
    margin: "1rem auto",
  },
  table: {
    [theme.breakpoints.down("xs")]: {
      fontSize: ".7rem",
      padding: ".5rem",
    },
  },
  submenu: {
    backgroundColor: "#ffffff",
    fontWeight: "bold",
    color: "#707070",
    borderColor: "#707070",
    borderWidth: 1,
  },
  submenu2: {
    backgroundColor: "#ffffff",
    fontWeight: "bold",
    color: "#707070",
    borderColor: "#eeeeee",
    borderWidth: 2,
    textAlign: "center",
    height: "100%",
  },
  priceinput: {
    backgroundColor: "#eefff6",
  },
  transaction: {
    fontWeight: "bold",
    marginBottom: ".654rem",
  },
  transaction2: {
    fontWeight: "bold",
    marginBottom: ".654rem",
    [theme.breakpoints.down("xs")]: {
      textAlign: "center",
      backgroundColor: "#eeeeee",
      padding: ".5rem",
    },
  },
  status: {
    marginBottom: ".654rem",
  },
  bold: {
    fontWeight: "bold",
  },
  steplabel: {
    fontSize: "10px",
  },
  stepwrapper: {
    alignItems: "center",
    [theme.breakpoints.down("xs")]: {
      alignItems: "baseline",
    },
  },
  selectarea: {
    display: "flex",
  },
  noticesitem: {
    borderBottom: "solid",
    borderBottomColor: "#FFFFFF",
    "&:hover": {
      textDecoration: "none",
      borderBottomColor: "#eeeeee",
      opacity: ".7",
    },
    [theme.breakpoints.up("sm")]: {
      width: "100%",
    },
  },
  tableheadlabel: {
    fontWeight: "bold",
    [theme.breakpoints.down("xs")]: {
      fontSize: ".4rem",
    },
  },
  passwordinput: {
    padding: ".2rem",
    borderRadius: "1rem",
  },
  bordertable: {
    "&:nth-of-type(odd)": {
      background: "#f9f9f9",
    },
  },
  backbtn: {
    minWidth: "10rem",
    fontWeight: "bold",
  },
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: "#fff",
  },
}));
