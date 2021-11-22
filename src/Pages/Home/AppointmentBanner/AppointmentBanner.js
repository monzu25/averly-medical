import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import doctor from '../../../images/doctor.png'
import bg from '../../../images/appointment-bg.png'
import { Container, Typography } from '@mui/material';

const appointmentBg = {
    background: `url(${bg})`,
    backgroundColor: 'rgba(46, 58, 74, 0.5)',
    backgroundBlendMode: " darken, luminosity,"

}

const AppointmentBanner = () => {
    return (
        <Box sx={{ flexGrow: 1, mt: 15 }}>
            <Container>
                <Grid style={appointmentBg} container spacing={2}>
                    <Grid item xs={12} md={5}>
                        <img
                            style={{ width: 400, marginTop: '-110px' }}
                            src={doctor} alt="Doctor" />
                    </Grid>

                    <Grid sx={{ textAlign: 'left', color: '#2E86C1' }} item xs={12} md={7}>
                        <Typography sx={{ mt: 3 }} style={{}} variant="h6">
                            Appointment
                        </Typography>
                        <Typography sx={{ mt: 3 }} style={{ color: 'white' }} variant="h4">
                            Make An Appointment Today
                        </Typography>
                        <Typography sx={{ my: 3 }} style={{ color: 'white' }} variant="h6">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        </Typography>
                        <Button variant="contained">Learn More </Button>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default AppointmentBanner;