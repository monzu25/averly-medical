import { Button, CircularProgress, Container, Grid, TextField, Typography, Alert } from '@mui/material';
import React, { useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import useAuth from '../../../Hooks/UseAuth';
import register from '../../../images/login.png'


const Register = () => {


    let history = useHistory();

    const [registerData, setRegisterData] = useState({})

    const { user, registerUser, isLoading, authError } = useAuth();




    // const [loginData, setLoginData]=useState({})
    const handleOnBlur = e => {
        e.preventDefault();
        const field = e.target.name;
        const value = e.target.value;

        const newRegisterData = { ...registerData };
        newRegisterData[field] = value;
        setRegisterData(newRegisterData);
        // console.log(registerData);

    }

    const handleRegisterSubmit = e => {

        if (registerData.password !== registerData.password2) {
            alert('Your Password Doesnot Mathched');
            return;
        }
        registerUser(registerData.email, registerData.password, registerData.name, history)
        e.preventDefault();
    }

    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item xs={12} sx={{ mt: 8 }} md={6}>
                    <Typography variant="body1" gutterBottom>
                        Please Register
                    </Typography>

                    {!isLoading && <form onSubmit={handleRegisterSubmit}>
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            onBlur={handleOnBlur}
                            id="standard-basic"
                            label="Your Full Name"
                            type="name"
                            name='name'
                            variant="standard" />
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            onBlur={handleOnBlur}
                            id="standard-basic"
                            label="Your Email"
                            type="email"
                            name='email'
                            variant="standard" />

                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            onBlur={handleOnBlur}
                            id="standard-basic"
                            label="Password"
                            type="password"
                            name="password"
                            variant="standard" />
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            onBlur={handleOnBlur}
                            id="standard-basic"
                            label="Re-type Password"
                            type="password"
                            name="password2"
                            variant="standard" />

                        <Button sx={{ width: '75%', m: 1 }} variant='contained' type="submit">Register</Button>
                        <NavLink style={{ textDecoration: 'none' }} to='/login'>
                            <Button variant="text">Already Register?| Please Login</Button>
                        </NavLink>

                    </form>}

                    {isLoading && <CircularProgress />}
                    {user?.email && <Alert severity="success">You Are Successfully Registered</Alert>}
                    {authError && <Alert severity="error">{authError}</Alert>}
                </Grid>
                <Grid item xs={12} md={6}>
                    <img style={{ width: '100%' }} src={register} alt="LoginImage" />

                </Grid>

            </Grid>
        </Container >
    );
};

export default Register;