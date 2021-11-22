import { Alert, Button, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import useAuth from '../../../Hooks/UseAuth';



const MakeAdmin = () => {


    const [email, setEmail] = useState('')
    const [success, setSuccess] = useState(false)
    const { token } = useAuth();

    const handleOnBlur = e => {
        setEmail(e.target.value)
    }
    const handleAdminSubmit = e => {
        const user = { email };
        fetch('https://evening-earth-40162.herokuapp.com/users/admin', {
            method: 'PUT',
            headers: {
                'authorization': `Bearer ${token}`,
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    console.log(data);

                    setSuccess(true);
                }
            })
        e.preventDefault();
    }




    return (
        <div>
            <h2>Make An Admin</h2>

            <Typography sx={{ alignItems: 'center' }} variant="body1" gutterBottom>
                {success && <Alert severity="success">You Are Successfully Registered As Admin</Alert>}
            </Typography>
            <form onSubmit={handleAdminSubmit}>
                <TextField
                    sx={{ width: { xs: "95%", md: "75%", lg: "25%" }, my: 3 }}
                    onBlur={handleOnBlur}
                    type="email"
                    name='email'
                    id="outlined-basic"
                    label="Email"
                    variant="outlined" />
                <br />
                <Button sx={{ width: { xs: "95%", md: "75%", lg: "25%" } }} type="submit" variant="contained">Make Admin</Button>
            </form>
        </div>
    );
};

export default MakeAdmin;