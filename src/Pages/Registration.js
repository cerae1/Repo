import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';



const useStyles = makeStyles({
    container: {
        alignItems: 'center',
        height: '100vh',
        width: '100%'
    },
    containerngayellow: {
        position: 'absolute',
        width: '85%',
        height: '80vh',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        backgroundColor: '#F6DF67',
        borderRadius: 33,
    },
    headertext: {
        fontSize: 30,
        color: 'black',
        paddingLeft: 30,
        paddingTop: 30,
        textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)'



    },
    textField1: {
        backgroundColor: '#fff',
        width: 500,
        position: 'absolute',
        '& .MuiOutlinedInput-notchedOutline': {
            borderColor: '#0077B6'
        }
    },
    textField2: {
        backgroundColor: '#fff',
        width: 500,
        position: 'absolute',
        top: 30,
        '& .MuiOutlinedInput-notchedOutline': {
            borderColor: '#0077B6'
        }
    },
    textField3: {
        backgroundColor: '#fff',
        width: 500,
        position: 'absolute',
        top: 60,
        '& .MuiOutlinedInput-notchedOutline': {
            borderColor: '#0077B6'
        }
    },
    textField4: {
        backgroundColor: '#fff',
        width: 500,
        position: 'absolute',
        top: 90,

        '& .MuiOutlinedInput-notchedOutline': {
            borderColor: '#0077B6'
        }
    },
    textField5: {
        backgroundColor: '#fff',
        width: 500,
        position: 'absolute',
        top: 120,
        '& .MuiOutlinedInput-notchedOutline': {
            borderColor: '#0077B6'
        }
    },
    button: {
        backgroundColor: 'white',
        width: 400,
        top: 620,
        right: 200,
        position: 'absolute',
        fontSize: 20,
        fontWeight: 5,
        boxShadow: '0 3px 5px 2px rgba(16, 197, 165, 1)',
        border: 'none',
        padding: 10,
        color: 'black',
        fontFamily: 'Raleway',
        '&:hover': {
            backgroundColor: 'yellow',

        },
    },
    formcontainer: {
        display: 'flex',
        marginTop: 34,
        flexDirection: 'column',
        alignItems: 'flex-start',
        paddingLeft: 30,
        top: 180,
        zIndex: 1,


    }




});

function Registration() {
    const classes = useStyles();
     const navigate = useNavigate();
    const [firstName, setFirstName] = useState(null);
    const [lastName, setLastName] = useState(null);
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [confirmPassword, setConfirmPassword] = useState(null);
    const handleInputChange = (e) => {
        const { id, value } = e.target;
        if (id === "firstName") {
            setFirstName(value);
        }
        if (id === "lastName") {
            setLastName(value);
        }
        if (id === "email") {
            setEmail(value);
        }
        if (id === "password") {
            setPassword(value);
        }
        if (id === "confirmPassword") {
            setConfirmPassword(value);
        }
        }

    const handleSubmit = () => {
        console.log(firstName, lastName, email, password, confirmPassword);
    }


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
                    />

                    <TextField
                        id="outlined-textarea"
                        label="Last Name"
                        placeholder="Enter Your Last Name"
                        multiline
                        className={classes.textField2}
                    />
                    <TextField
                        id="outlined-textarea"
                        label="Middle Name"
                        placeholder="Enter Your Middle Name"
                        multiline
                        className={classes.textField3}
                    />
                    <TextField
                        id="outlined-textarea"
                        label="Email"
                        placeholder=" Enter Your Email"
                        multiline
                        className={classes.textField4}
                    />
                    <TextField
                        id="outlined-textarea"
                        label="Phone Number"
                        placeholder=" Enter Your Phone Number"
                        multiline
                        className={classes.textField5}
                    />
                    <button className={classes.button} type="submit"><Link to='/address'>Next</Link></button>


                </div>

            </div>





        </div>

    );
}

export default Registration;
