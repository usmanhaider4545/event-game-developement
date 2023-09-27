import React, { useState, useEffect, useRef } from 'react';
import { Button, Stack, Typography, Stepper, Container, Box } from '@mui/material';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import { useDraggable } from "react-use-draggable-scroll";

function Industries(props) {

    const ref = useRef();  

    const { events } = useDraggable(ref);

    const [value, setValue] = useState('');
    
    const [localStorageValue, setLocalStorageValue] = useState(localStorage.getItem("industry"));

    const handleChange = (event) => {
        setValue(event.target.value);
        localStorage.setItem("industry", event.target.value);
        if(localStorage.getItem("totalManDays")) {
            localStorage.removeItem("totalManDays");
        }
        props.removeDisabledButton();
    };

    useEffect(() => {
         window.onbeforeunload = closeIt;
        if (localStorageValue){
            props.removeDisabledButton();
        }
    }, []);


    function closeIt() {
        localStorage.clear("industry");
    }


    return (
        <Box>
            <Typography variant='h6' sx={{ color: "#fff", padding: "20px 0", fontWeight: "700", fontSize: "32px" }}>
                Which industry does your product belong to?
            </Typography>
            <Stack className='optionsBlocks' flexDirection="inherit" justifyContent="center" gap="100px">
            <FormControl>
                 <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue=""
                    name="radio-buttons-group"
                        value={value ? value : localStorageValue}
                        onChange={handleChange}
                >
                        <Stack {...events} ref={ref} sx={{ overflowX: "auto", width: "100%" }} className='optionsBlocks' display="-webkit-inline-box" flexDirection="initial" justifyContent="center">
                <Box sx={{ width: "100%", maxWidth: "450px", paddingRight: "80px" }}>
                    <FormControlLabel value="Fintech" control={<Radio />} label="Fintech" />
                    <FormControlLabel value="Digital Signage" control={<Radio />} label="Digital Signage" />
                    <FormControlLabel value="Wayfinding" control={<Radio />} label="Wayfinding" />

                    <FormControlLabel value="IOT/Embedded" control={<Radio />} label="IOT/Embedded" />
                    <FormControlLabel value="Storage - Backup and Recovery" control={<Radio />} label="Storage - Backup and Recovery" />
                    <FormControlLabel value="Ecommerce and Retail" control={<Radio />} label="Ecommerce and Retail" />
                    </Box>
                            <Box sx={{ width: "100%", maxWidth: "450px", paddingRight: "80px" }}>
                    <FormControlLabel value="Real Estate" control={<Radio />} label="Real Estate" />
                    <FormControlLabel value="Industrial Compliance" control={<Radio />} label="Industrial Compliance" />
                    <FormControlLabel value="Logistics Freight" control={<Radio />} label="Logistics Freight" />

                    <FormControlLabel value="Healthcare" control={<Radio />} label="Healthcare" />
                    <FormControlLabel value="Computer Vision" control={<Radio />} label="Computer Vision" />
                                <FormControlLabel value="Virtual Reality" control={<Radio />} label="Virtual Reality" />
                   </Box>
                            <Box sx={{ width: "100%", maxWidth: "450px", paddingRight: "80px" }}>
                                <FormControlLabel value="Artificial Inteligence" control={<Radio />} label="Artificial Inteligence" />
                                <FormControlLabel value="Machine Learning" control={<Radio />} label="Machine Learning" />
                                <FormControlLabel value="Deep Learning" control={<Radio />} label="Deep Learning" />
                            </Box>
                  </Stack>
                </RadioGroup>
            </FormControl>
 

            </Stack>
         </Box>

    )


}


export default Industries;