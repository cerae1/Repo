import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const useStyles = makeStyles({
  container: {
    alignItems: "center",
    height: "100vh",
    width: "100%",
  },
  containerngayellow: {
    position: "absolute",
    width: "85%",
    height: "80vh",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "#F6DF67",
    borderRadius: 33,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
  },
});

function Activated() {
  const classes = useStyles();
  const navigate = useNavigate();

  return (
    <div>
      <div className={classes.containerngayellow}>
        <h1>
          Your account has been activated<br></br>
          You can now log in
        </h1>
      </div>
    </div>
  );
}

export default Activated;
