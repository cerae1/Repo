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

function Registration() {
  const classes = useStyles();
  const navigate = useNavigate();
  const [data, setData] = useState({
    first_name: "",
    last_name: "",
    middle_name: "",
    email: "",
    password: "",
    confirm_password: "",
    phone_number: "",
    username: "",
  });

  const {
    first_name,
    middle_name,
    last_name,
    email,
    password,
    confirm_password,
    phone_number,
  } = data;

  const handleSubmit = () => {
    console.log(data);
    axios
      .post("http://localhost:8000/api/v1/accounts/users/", data, {})
      .then((response) => {
        console.log(response.data);
        alert(
          "Successfully Registered!\nPlease check your email\nfor activation"
        );
      })
      .catch((error) => {
        alert("Registration Failed!");
        console.log(error);
      });
  };

  return (
    <div>
      <div className={classes.containerngayellow}>
        <h1 className={classes.headertext}>CREATE ACCOUNT</h1>

        <div className={classes.formcontainer}>
          <TextField
            id="outlined-textarea"
            label="First Name"
            placeholder="Enter Your First Name"
            multiline
            className={classes.textField1}
            onChange={(event) => {
              setData({ ...data, first_name: event.target.value });
            }}
            value={first_name}
          />

          <TextField
            id="outlined-textarea"
            label="Last Name"
            placeholder="Enter Your Last Name"
            multiline
            className={classes.textField2}
            onChange={(event) => {
              setData({ ...data, last_name: event.target.value });
            }}
            value={last_name}
          />
          <TextField
            id="outlined-textarea"
            label="Middle Name"
            placeholder="Enter Your Middle Name"
            multiline
            className={classes.textField3}
            onChange={(event) => {
              setData({ ...data, middle_name: event.target.value });
            }}
            value={middle_name}
          />
          <TextField
            id="outlined-textarea"
            label="Email"
            placeholder=" Enter Your Email"
            multiline
            className={classes.textField4}
            onChange={(event) => {
              setData({
                ...data,
                username: event.target.value,
                email: event.target.value,
              });
            }}
            value={email}
          />

          <TextField
            id="outlined-textarea"
            label="Phone Number"
            placeholder=" Enter Your Phone Number"
            multiline
            className={classes.textField5}
            onChange={(event) => {
              setData({ ...data, phone_number: event.target.value });
            }}
            value={phone_number}
          />
          <TextField
            id="outlined-textarea"
            label="Password"
            placeholder=" Enter Your password"
            multiline
            className={classes.textField6}
            onChange={(event) => {
              setData({ ...data, password: event.target.value });
            }}
            value={password}
            inputProps={{ type: "password" }}
          />
          <TextField
            id="outlined-textarea"
            label="Confirmed Password"
            placeholder=" Enter Your Confirmed Password"
            multiline
            className={classes.textField7}
            onChange={(event) => {
              setData({ ...data, confirm_password: event.target.value });
            }}
            inputProps={{ type: "password" }}
            value={confirm_password}
          />
          <button
            className={classes.button}
            onClick={handleSubmit}
            type="submit"
          >
            <Link to="/address">Next</Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Registration;
