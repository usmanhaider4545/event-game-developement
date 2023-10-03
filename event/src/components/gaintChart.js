import React, { useState, useEffect } from 'react';
import { Box, Button, Stack, Typography } from '@mui/material';
import Grid from '@mui/material/Grid';

function GaintCharts() {

    const totalExpStyle = { 
        borderRadius: "10px", 
        border: "2px solid rgba(59, 130, 246, 0.54)" ,
        background: "rgba(255, 255, 255, 0.09)",
        boxShadow: "0px 0px 53.9px 0px rgba(0, 163, 255, 0.05)",
        backdropFilter: "blur(26.94999885559082px)",
        height: "100px",
        flexShrink: "0"
    };

    return (
        <Grid container>
            <Grid sx={{ padding: "0" }} item xs={6}>
            <Box>
                <Stack>
                        <Box sx={totalExpStyle}>
                            <Typography variant='p'> Total No. Resources </Typography>
                            <Typography variant='h6'> 6 </Typography>
                    </Box>
                        <Box>
                            <Typography variant='p'> Total No. Resources </Typography>
                            <Typography variant='h6'> 6 </Typography>
                        </Box>
                        <Box>
                            <Typography variant='p'> Total No. Resources </Typography>
                            <Typography variant='h6'> 6 </Typography>
                        </Box>
                    </Stack>
            </Box>
          </Grid>
            <Grid sx={{ padding: "0" }} item xs={6}>

            </Grid>
        </Grid>

    );
}

export default GaintCharts;