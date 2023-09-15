import React, { useState, useEffect } from 'react';
import { Button, Stack, Typography, Stepper, Container, Box } from '@mui/material';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';

function Industries() {

    const [value, setValue] = useState('');
    const [localStorageValue, setLocalStorageValue] = useState('');

    const handleChange = (event) => {
        setValue(event.target.value);
        localStorage.setItem("industry", event.target.value)
    };

    useEffect(() => {
      setLocalStorageValue(localStorage.getItem("industry"));
        window.onbeforeunload = closeIt;
    }, []);


    function closeIt() {
        localStorage.clear("industry");
    }


    return (
        <Box>
            <Typography variant='h6' sx={{ color: "#fff", padding: "20px 0", fontWeight: "700", fontSize: "32px" }}>
                Which industry does your product belong to?
            </Typography>
            <FormControl>
                 <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue=""
                    name="radio-buttons-group"
                        value={value ? value : localStorageValue}
                        onChange={handleChange}
                >
                  <Stack className='optionsBlocks' flexDirection="initial" justifyContent="center" gap="100px">
                    <Box>
                    <FormControlLabel value="Fintech" control={<Radio />} label="Fintech" />
                    <FormControlLabel value="Digital Signage" control={<Radio />} label="Digital Signage" />
                    <FormControlLabel value="Wayfinding" control={<Radio />} label="Wayfinding" />

                    <FormControlLabel value="IOT/Embedded" control={<Radio />} label="IOT/Embedded" />
                    <FormControlLabel value="Storage - Backup and Recovery" control={<Radio />} label="Storage - Backup and Recovery" />
                    <FormControlLabel value="Ecommerce and Retail" control={<Radio />} label="Ecommerce and Retail" />
                    </Box>
                    <Box>
                    <FormControlLabel value="Real Estate" control={<Radio />} label="Real Estate" />
                    <FormControlLabel value="Industrial Compliance" control={<Radio />} label="Industrial Compliance" />
                    <FormControlLabel value="Logistics Freight" control={<Radio />} label="Logistics Freight" />

                    <FormControlLabel value="Healthcare" control={<Radio />} label="Healthcare" />
                    <FormControlLabel value="AI/ML/DL Computer Vision" control={<Radio />} label="AI/ML/DL Computer Vision" />
                    <FormControlLabel value="AR/VR Meta" control={<Radio />} label="AR/VR Meta" />
                            </Box>
                  </Stack>
                </RadioGroup>
            </FormControl>
         </Box>

    )


}


export default Industries;