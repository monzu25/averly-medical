import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid'
import { Container } from '@mui/material';
import chair from '../../../images/chair.png'
import bg from '../../../images/bg.png'
import { Button, Typography } from '@mui/material';
import './Banner.css'

const bannerBg = {
    background: `url(${bg})`,
    backgroundColor: 'rgba(93, 109, 126, 1.9)',
    backgroundBlendMode: " darken, luminosity,",


}

const Banner = () => {



    return (

        <div style={bannerBg}>
            <Container className="banner-top" sx={{ p: 10 }}>
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={2}>
                        <Grid sx={{ textAlign: 'left' }} item xs={12} md={5}>
                            <Typography sx={{ color: 'white', my: 3 }} variant="h3" >
                                Your New Smile <br />
                                Starts Here
                            </Typography >
                            <Typography sx={{ mb: 3, color: "#E5E7E9 " }} varinat="h6" styel={{ fontSize: 14, fontWeight: 300 }}>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            </Typography>
                            <Button sx={{ my: 2 }} variant="contained" >Get Appointment</Button>
                        </Grid>
                        <Grid item xs={12} md={7}>
                            <img width="100%" src={chair} alt="" />

                        </Grid>

                    </Grid>
                </Box>
            </Container>
        </div>

    );
};

export default Banner;