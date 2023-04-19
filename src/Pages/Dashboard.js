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
  },
  headertext: {
    fontSize: 30,
    color: "black",
    paddingLeft: 30,
    paddingTop: 30,
    textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
  },
  textField1: {
    backgroundColor: "#fff",
    width: 500,
    position: "absolute",
    "& .MuiOutlinedInput-notchedOutline": {
      borderColor: "#0077B6",
    },
  },
  textField2: {
    backgroundColor: "#fff",
    width: 500,
    position: "absolute",
    top: 10,
    "& .MuiOutlinedInput-notchedOutline": {
      borderColor: "#0077B6",
    },
  },
  textField3: {
    backgroundColor: "#fff",
    width: 500,
    position: "absolute",
    top: 20,
    "& .MuiOutlinedInput-notchedOutline": {
      borderColor: "#0077B6",
    },
  },
  textField4: {
    backgroundColor: "#fff",
    width: 500,
    position: "absolute",
    top: 30,

    "& .MuiOutlinedInput-notchedOutline": {
      borderColor: "#0077B6",
    },
  },
  textField5: {
    backgroundColor: "#fff",
    width: 500,
    position: "absolute",
    top: 40,
    "& .MuiOutlinedInput-notchedOutline": {
      borderColor: "#0077B6",
    },
  },
  textField6: {
    backgroundColor: "#fff",
    width: 500,
    position: "absolute",
    top: 50,
    "& .MuiOutlinedInput-notchedOutline": {
      borderColor: "#0077B6",
    },
  },
  textField7: {
    backgroundColor: "#fff",
    width: 500,
    position: "absolute",
    top: 60,
    "& .MuiOutlinedInput-notchedOutline": {
      borderColor: "#0077B6",
    },
  },
  button: {
    backgroundColor: "white",
    width: 400,
    top: 620,
    right: 200,
    position: "absolute",
    fontSize: 20,
    fontWeight: 5,
    boxShadow: "0 3px 5px 2px rgba(16, 197, 165, 1)",
    border: "none",
    padding: 10,
    color: "black",
    fontFamily: "Raleway",
    "&:hover": {
      backgroundColor: "yellow",
    },
  },
  formcontainer: {
    display: "flex",
    marginTop: 34,
    flexDirection: "column",
    alignItems: "flex-start",
    paddingLeft: 30,
    top: 180,
    zIndex: 1,
  },
});

function Dashboard() {
  const classes = useStyles();
  const navigate = useNavigate();

  return (
    <div>
      <div className={classes.containerngayellow}>
        <h1>Dashboard</h1>
      </div>
    </div>
  );
}

export default Dashboard;
