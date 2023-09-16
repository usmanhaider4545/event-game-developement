import React, { useState, useEffect } from 'react';
import { Box, Stack, Typography } from '@mui/material';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

 
function AppDesignedFor(props) {
     const [DNC, setDNC] = React.useState({
        Consumer: false,
        Business: false,
        NotYet: false
    });

    const { Consumer, Business, NotYet } = DNC;

    const handleChange = (event) => {
        setDNC({ ...DNC, [event.target.name]: event.target.checked });
        props.removeDisabledButton();
    };

    useEffect(() => {
        let stringfyData = JSON.stringify(DNC);
        localStorage.setItem("appDesignedFor", stringfyData)
    }, [handleChange]);

    useEffect(() => {
        let checkBoxData = localStorage.getItem("appDesignedFor");

        setDNC(JSON.parse(checkBoxData));
        window.onbeforeunload = closeIt;
    }, []);

    function closeIt() {
        localStorage.clear("appDesignedFor");
    }

     return (
        <Box>
             <Typography variant='h6' sx={{ color: "#fff", padding: "40px 0", fontWeight: "700", fontSize: "32px" }}>
                 Who's your app designed for? 
             </Typography>
             <Stack className='optionsBlocks' flexDirection="column" justifyContent="center" width = "50%"  margin = "auto">
                <FormControlLabel
                    control={
                        <Checkbox checked={Consumer} onChange={handleChange} name="Consumer" />
                    }
                    label="Consumer Use"
                />
                <FormControlLabel
                    control={
                        <Checkbox checked={Business} onChange={handleChange} name="Business" />
                    }
                    label="Business Use"
                />

                <FormControlLabel
                    control={
                        <Checkbox checked={NotYet} onChange={handleChange} name="NotYet" />
                    }
                    label="Not sure yet"
                />
            </Stack>
        </Box>

    )


}


export default AppDesignedFor;