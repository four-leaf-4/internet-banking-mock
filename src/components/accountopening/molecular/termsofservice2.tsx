import React, { useContext, useState } from "react";
import {
  Typography,
  Box,
  Button,
  FormControlLabel,
  Checkbox,
  Dialog,
  Grid,
  Paper,
} from "@material-ui/core";
import { AccountOpeningContext } from "../accountopeningContext";
import { mystyles } from "~/styles/makestyles";

const ModalTerm = (prop) => {
  const { open, onClose, title } = prop;
  console.log(title);
  const handleClose = () => {
    onClose();
  };

  return (
    <Dialog onClose={handleClose} open={open}>
      <Typography>{title}</Typography>
      <Typography>ここにPDFデータが入ります。</Typography>
    </Dialog>
  );
};

export const TermsofService = () => {
  const { subtitle, backbtn } = mystyles();
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState("");

  const handleClickOpen = (t) => (e) => {
    console.log(t);
    setTitle(t);
    setOpen(true);
  };
  const handleClickClose = () => {
    setOpen(false);
  };

  const { nextStep } = useContext(AccountOpeningContext);
  const { prevStep } = useContext(AccountOpeningContext);

  const [state, setState] = useState([
    { title: "termA", flag: false },
    { title: "termB", flag: false },
    { title: "termC", flag: false },
    { title: "termD", flag: false },
  ]);
  const handleChange = (event) => {
    const target = state.find((elm) => elm.title === event.target.name);
    setState([...state]);
  };

  const agrees = state.map(({ title, flag }) => (
    <Box key={title} mb={2}>
      <Typography className={subtitle}>{title}</Typography>
      <Box component={Paper} mb={3} p={3}>
        <Grid container spacing={3} justify="center">
          <Grid item>
            <Button
              value={title}
              onClick={handleClickOpen(title)}
              variant="contained"
            >
              pdf
            </Button>
          </Grid>
          <Grid item>
            <FormControlLabel
              control={
                <Checkbox checked={flag} onChange={handleChange} name={title} />
              }
              label="内容を確認しました"
            />
          </Grid>
        </Grid>
      </Box>
    </Box>
  ));

  return (
    <Box>
      {agrees}
      <ModalTerm open={open} onClose={handleClickClose} title={title} />
      <Grid container direction="column" spacing={3}>
        <Grid item>
          <Button variant="contained" color="secondary" onClick={nextStep}>
            上記全ての内容を確認し、同意します
          </Button>
        </Grid>
        <Grid item>
          <Button variant="contained" onClick={prevStep} className={backbtn}>
            戻る
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};
