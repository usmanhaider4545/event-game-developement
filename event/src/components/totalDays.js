import React, { useState, useEffect } from 'react';
import { Box, Button, Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import PersonIcon from '@mui/icons-material/Person';
import PhoneEnabledIcon from '@mui/icons-material/PhoneEnabled';
import MailIcon from '@mui/icons-material/Mail';

function TotalManDays() {

        const [localStorageManDays, setLocalStorageManDays] = useState(localStorage.getItem("totalManDays"));

        const [selectedTotalManDays, setSelectedTotalManDays] = useState();

        useEffect(() => {
                let parsManDays = JSON.parse(localStorageManDays);
                let getNumberFromArray = [];
                parsManDays.map((item, index) => {
                        getNumberFromArray.push(item[2]);
                })
                const daysSum = getNumberFromArray.reduce((partialSum, a) => partialSum + a, 0);
                setSelectedTotalManDays(daysSum);
        }, []);

        


        return (
                <Box>
                        <Box>
                                <Typography variant='h6' sx={{ color: "#fff", fontSize: "32px", pb: 1 , fontWeight : "700"  }}>
                                        Enter information for final results
                                </Typography>
                                <Box className="resultBox" >
                                        <Grid container spacing={2}>
                                                <Grid sx={{ padding: "0" }} item xs={6}>
                                                        <TextField 
                                                          id="name" 
                                                          label="Name"
                                                          variant="standard"
                                                                fullWidth
                                                        sx={{
                                                                "& .MuiInputLabel-root": { color: "#fff" },
                                                                borderBottom: "1px solid #fff",
                                                          }} 
                                                                InputProps={{ 
                                                                        disableUnderline: true, 
                                                                        style: { color: "#fff" },
                                                                        endAdornment: (
                                                                                 <InputAdornment position="end">
                                                                                        <PersonIcon sx={{color : "#fff"}} />
                                                                                </InputAdornment>
                                                                        )
                                                                 }}
                                                                />
                                                </Grid>
                                                <Grid item xs={6}>
                                                        <TextField fullWidth id="phone" label="Phone" variant="standard" sx={{
                                                                "& .MuiInputLabel-root": { color: "#fff" },
                                                                borderBottom: "1px solid #fff",
                                                         }}
                                                                InputProps={{ disableUnderline: true,
                                                                 style: { color: "#fff" },
                                                                        endAdornment: (
                                                                                <InputAdornment position="end">
                                                                                        <PhoneEnabledIcon sx={{ color: "#fff" }} />
                                                                                </InputAdornment>
                                                                        )
                                                                  }} />
                                                </Grid>
                                                <Grid item xs={12}>
                                                        <TextField fullWidth id="email" label="Email" variant="standard" sx={{
                                                                "& .MuiInputLabel-root": { color: "#fff" },
                                                                borderBottom: "1px solid #fff",
                                                         }}
                                                                InputProps={{ disableUnderline: true,
                                                                 style: { color: "#fff" },
                                                                        endAdornment: (
                                                                                <InputAdornment position="end">
                                                                                        <MailIcon sx={{ color: "#fff" }} />
                                                                                </InputAdornment>
                                                                        )
                                                                 }} />
                                                </Grid>
                                        </Grid>
                                </Box>
                        </Box>

                        <Box>
                                <Typography sx={{ fontSize: { xs: "32px", md: "27px" }, color: "#fff", fontWeight: "700" }}>
                                        Why you should choose intagleo
                                </Typography>

                                <Box className="whyChoose">
                                        <ul>
                                                <li>Free Project Manager</li>
                                                <li>No Hiring Costs</li>
                                                <li>Niche Experts</li>
                                                <li>No Equipment Management</li>
                                                <li>No Resource Management</li>
                                        </ul>
                                        <ul>
                                                <li>Timely Deliveries</li>
                                                <li>Greater Control</li>
                                                <li>No Bonus Benefits Management</li>
                                                <li>No Unpredictable Costs</li>
                                        </ul>
                                        <ul>
                                                <li>Budget Friendly</li>
                                                <li>Easy Scalability</li>
                                                <li>No HR Responsibilities</li>
                                                <li>No Work Delays</li>
                                        </ul>
                                </Box>
                        </Box>


                </Box>

        )

}


export default TotalManDays;