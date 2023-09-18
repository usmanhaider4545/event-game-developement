import React, { useState, useEffect } from 'react';
import { Button, Stack, StepLabel, Stepper, Typography, Container, Box } from '@mui/material';
  import FormControlLabel from '@mui/material/FormControlLabel';
 import Checkbox from '@mui/material/Checkbox';

function AppType(props) {

    const [DNC, setDNC] = React.useState({
        MobileApp: false,
        WebApplication: false,
        EnterpriseSoftware: false,
        CloudBasedSolution : false
    });

    const { MobileApp, WebApplication, EnterpriseSoftware, CloudBasedSolution } = DNC;

    const handleChange = (event) => {
        setDNC({ ...DNC, [event.target.name]: event.target.checked });
        props.removeDisabledButton();
    };

    useEffect(() => {
        let stringfyData = JSON.stringify(DNC);
        localStorage.setItem("appSoftware", stringfyData);

        const someTruthy = Object.values(DNC).some(val => val === true);

        if (someTruthy === true) {
            props.removeDisabledButton();
        } else {
            props.activeDisabledBtn();
        }
        
    }, [handleChange]);

    useEffect(() => {
        window.onbeforeunload = closeIt;
    }, []);

    function closeIt() {
        localStorage.clear("appSoftware");
    }

 
    return (

                <Box>
             <Typography variant='h6' sx={{ color: "#fff", padding: "40px 0", fontWeight: "700", fontSize: "32px" }}>
           What type of app are you looking for?
             </Typography>
             <Stack className='optionsBlocks' flexDirection="column" justifyContent="center" width = "50%"  margin = "auto">
                <FormControlLabel
                    control={
                        <Checkbox checked={MobileApp} onChange={handleChange} name="MobileApp" />
                    }
                    label="Mobile App"
                />
                <FormControlLabel
                    control={
                        <Checkbox checked={WebApplication} onChange={handleChange} name="WebApplication" />
                    }
                    label="Web Application"
                />

                <FormControlLabel
                    control={
                        <Checkbox checked={EnterpriseSoftware} onChange={handleChange} name="EnterpriseSoftware" />
                    }
                    label="Enterprise Software"
                />
                <FormControlLabel
                    control={
                        <Checkbox checked={CloudBasedSolution} onChange={handleChange} name="CloudBasedSolution" />
                    }
                    label="Cloud-based Solution"
                />
            </Stack>
        </Box>

    )


}


export default AppType;