import React, { useState } from 'react';

/*import axios from 'axios';*/
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import EmailIcon from '@mui/icons-material/Email';
import TextField from '@material-ui/core/TextField';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const useStyles = makeStyles({
    container: {
        height: '100vh', // Set the height to 50% of the viewport height
        width: '100vw',

    },
    container1: {
        backgroundColor: '#F6DF67', // Add your own styling to container 1
        flex: 1,
        position: 'relative'

    },

    container2: {
        backgroundColor: '#E5E5E5', // Add your own styling to container 2

    },

    label1: {
        top: 380,
        left: 50,
        color: 'rgba(0, 0, 0, 0.4)',
        width: '100%',
        alignItems: 'center',
        position: 'relative',

        '& .MuiInputBase-root': {
            opacity: 0.5,
            width: '58ch',
            display: 'flex'
        },
        '& .MuiSvgIcon-root': {
            marginRight: 10,




        },
    },


    button: {
        position: 'relative',
        top: 800,
        left: 50,
        fontFamily: 'Raleway',
        fontStyle: 'normal',
        fontDisplay: 'swap',
        border: 'none',
        padding: 10,
        fontSize: 20,
        fontWeight: 5,
        boxShadow: '0 3px 5px 2px rgba(0, 119, 182, 1.0)',
        width: '88%',
        backgroundColor: '#F6DF67',
        color: 'black',
        '&:hover': {
            backgroundColor: '#black',

        }
    },
});





function Login() {

    const classes = useStyles();
    const navigate = useNavigate();

    const [accessKey, setAccessKey] = useState('');
    const [email, setEmail] = useState('');
    const [loginError, setLoginError] = useState();
    const [value, setValue] = useState("");
    const handleSubmit = async (event) => {
        event.preventDefault();
        if (value === 'valid-access-key') {
            setLoginError(false)
            setAccessKey('')
        } else {
            setLoginError(true)
            setAccessKey('Incorrect Password')
        }
    };


    return (


        <Grid container spacing={0} className={classes.container}>
            <Grid item xs={12} md={6} className={classes.container1}>

            </Grid>
            <Grid item xs={12} md={6} className={classes.container2}>
                <form onSubmit={handleSubmit}>
                    <div className={classes.label1}>
                        <Grid container spacing={1} alignItems="flex-end">
                            <Grid item>
                                <EmailIcon />
                            </Grid>
                            <TextField
                                id='Email'
                                label='Email'
                                required
                                value={email}
                                type="email"
                                onChange={(e) => setEmail(e.target.value)}
                            />

                            <Grid container spacing={1} alignItems="flex-end">
                                <Grid item>
                                    <LockOpenIcon />
                                </Grid>
                                <TextField
                                    id='Key'
                                    label='Password'
                                    required
                                    value={value}
                                    type="text"
                                    onChange={(e) => setValue(e.target.value)}
                                    error={loginError}
                                    helperText={accessKey}
                                />
                                 <Grid container spacing={3} alignItems="flex-end"></Grid>
                                <Grid item>

                                    <p>
                                        Don't have an account? <Link to='/registration'>sign up</Link>
                                    </p>      
                            </Grid>
                            </Grid>
                            
                        </Grid>
                    </div>
                    <button className={classes.button} type="submit"> Login </button>


                </form>
            </Grid>
        </Grid>
    );
}





export default Login;
