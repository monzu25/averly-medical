import { Container, Grid, TextField, Button, CircularProgress, Alert } from '@mui/material';
import Typography from '@mui/material/Typography';
import React, { useState } from 'react';
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../Hooks/UseAuth';
import login from '../../../images/login.png'

const Login = () => {

    const [loginData, setLoginData] = useState({})
    const { user, loginUser, isLoading, authError, signInWithGoogle } = useAuth();

    const location = useLocation();
    const history = useHistory();


    const handelOnBlur = e => {
        e.preventDefault();
        const field = e.target.name;
        const value = e.target.value;

        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);


    }

    const handleSignWithGoogle = () => {
        signInWithGoogle(location, history)

    }


    const handleLoginSubmit = e => {

        loginUser(loginData.email, loginData.password, location, history);
        e.preventDefault();
    }
    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item xs={12} sx={{ mt: 8 }} md={6}>
                    <Typography variant="body1" gutterBottom>
                        Please Login
                    </Typography>
                    <form onSubmit={handleLoginSubmit}>
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            onBlur={handelOnBlur}
                            id="standard-basic"
                            label="Your Email"
                            type="email"
                            name='email'
                            variant="standard" />
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            onBlur={handelOnBlur}
                            id="standard-basic"
                            label="Password"
                            type="password"
                            name="password"
                            variant="standard" />

                        <Button sx={{ width: '75%', m: 1 }} variant='contained' type="submit">Login</Button>
                        <p>-----------OR-----------</p>
                        <Button onClick={handleSignWithGoogle} sx={{ width: '75%', m: 1, backgroundColor: '#DB4437' }} variant='contained' >Sign In With Google</Button>

                        <NavLink style={{ textDecoration: 'none' }} to='/register'>
                            <Button variant="text">New User?| Please Register</Button>
                        </NavLink>
                        {isLoading && <CircularProgress />}
                        {user?.email && <Alert severity="success">Your Are Logedin</Alert>}
                        {authError && <Alert severity="error">{authError}</Alert>}
                    </form>


                </Grid>
                <Grid item xs={12} md={6}>
                    <img style={{ width: '100%' }} src={login} alt="LoginImage" />

                </Grid>

            </Grid>
        </Container >
    );
};

export default Login;