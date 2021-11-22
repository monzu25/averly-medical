import React, { useState } from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import useAuth from '../../../Hooks/UseAuth'
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    borderRadious: '10px'
};

const BookingModal = ({ openBooking, handleBookingClose, booking, date, setBookingSuccess }) => {


    const { name, time } = booking
    const { user } = useAuth()

    const initialInfo = {
        patientName: user.displayName,
        email: user.email,
        phone: ''
    };
    const [bookingInfo, setBookingInfo] = useState(initialInfo)



    const handleOnBlur = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        const newInfo = { ...bookingInfo };
        newInfo[field] = value;
        setBookingInfo(newInfo);

    }


    const handleBookingSubmit = e => {
        const appointment = {
            ...bookingInfo,
            time,
            serviceName: name,
            date: date.toLocaleDateString()

        }
        fetch('https://evening-earth-40162.herokuapp.com/appointments', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(appointment)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    setBookingSuccess(true);
                    handleBookingClose();
                }
            })
        e.preventDefault();
        // handleBookingClose();
    }


    return (
        <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={openBooking}
            onClose={handleBookingClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
                timeout: 500,
            }}

        >
            <Fade in={openBooking} >
                <Box sx={style} >
                    <Typography id="transition-modal-title" variant="h5" component="h2">
                        Service Name: <span style={{ fontWeight: 'bold', color: '#1976D2' }}>{name}</span>
                    </Typography>


                    <form onSubmit={handleBookingSubmit} style={{ borderRadious: "5px" }}>
                        <TextField
                            disabled
                            sx={{ width: '100%', m: 1, color: 'black' }}
                            id="outlined-size-small"
                            defaultValue={time}
                            size="small"

                        />
                        <TextField
                            sx={{ width: '100%', m: 1 }}
                            id="outlined-size-small"
                            name="patientName"
                            size="small"
                            onBlur={handleOnBlur}
                            defaultValue={user.displayName}
                        />
                        <TextField
                            sx={{ width: '100%', m: 1 }}
                            id="outlined-size-small"
                            name="email"
                            onBlur={handleOnBlur}
                            defaultValue={user.email}
                            size="small"
                        />
                        <TextField
                            sx={{ width: '100%', m: 1 }}
                            id="outlined-size-small"
                            name="phone"
                            onBlur={handleOnBlur}
                            placeholder="Phone Number"
                            size="small"
                        />
                        <TextField
                            disabled
                            sx={{ width: '100%', m: 1, color: 'black' }}
                            id="outlined-size-small"
                            defaultValue={date.toDateString()}
                            size="small"
                        />
                        <Button sx={{ width: '100%', m: 1 }} type="submit" variant="contained">Submit</Button>
                    </form>
                </Box>
            </Fade>
        </Modal>
    );
};

export default BookingModal;