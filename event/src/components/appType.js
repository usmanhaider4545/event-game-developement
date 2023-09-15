import React, { useState, useEffect } from 'react';
import { Button, Stack, StepLabel, Stepper, Typography, Container, Box } from '@mui/material';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';

function AppType(props) {

    const [value, setValue] = useState('');
    const [localStorageValue, setLocalStorageValue] = useState('');

    const handleChange = (event) => {
        setValue(event.target.value);
        localStorage.setItem("appSoftware", event.target.value);
    };

    useEffect(() => {
        setLocalStorageValue(localStorage.getItem("appSoftware"));
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
                                <FormControlLabel value="Mobile App" control={<Radio />} label="Mobile App" />
                                <FormControlLabel value="Web Application" control={<Radio />} label="Web Application" />
                                <FormControlLabel value="Enterprise Software" control={<Radio />} label="Enterprise Software" />
                                <FormControlLabel value="Cloud-based Solution" control={<Radio />} label="Cloud-based Solution" />
                            </Box>
                        </Stack>
                    </RadioGroup>
                </FormControl>
        </Box>

    )


}


export default AppType;