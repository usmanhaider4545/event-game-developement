import React, { useState, useEffect } from 'react';
import {  Stack, Typography, Container, Box } from '@mui/material';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
const getDefaultDNC = () => ({
    MobileApp: false,
    WebApplication: false,
    EnterpriseSoftware: false,
    CloudBasedSolution: false
});

const getInitialDNC = () => {
    const storedValue = localStorage.getItem("appSoftware");
    return storedValue ? JSON.parse(storedValue) : getDefaultDNC();
};
function AppType(props) {
    const localStorageIndustry = localStorage.getItem("industry");
    const [DNC, setDNC] = useState(getInitialDNC);

    const { MobileApp, WebApplication, EnterpriseSoftware, CloudBasedSolution } = DNC;

    const handleChange = (event) => {
        setDNC({ ...DNC, [event.target.name]: event.target.checked });
        props.removeDisabledButton();
    };

    useEffect(() => {
        let stringfyData = JSON.stringify(DNC);
        console.log(stringfyData)
        const trueKeysArray = Object.keys(DNC).filter((key) => DNC[key] === true);

        console.log(trueKeysArray);
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
            <Typography variant='h6' sx={{ color: "#fff", fontWeight: "700", fontSize: { xs: "35px", md: "27px" } }}>
                What type of app are you looking for?
            </Typography>
            <Typography variant='h6' sx={{ color: "#fff", padding: "11px 0px 30px", fontWeight: "700", fontSize: { xs: "1.5rem", md: "1.25rem" } }}>
                {localStorageIndustry}
            </Typography>
            <Stack className='optionsBlocks' flexDirection="column" justifyContent="center" width="100%" maxWidth ="450px" margin="auto">
                <FormControlLabel
                    control={
                        <Checkbox
                            style={{ color: '#fff' }}
                            checked={MobileApp}
                            onChange={handleChange}
                            name="MobileApp" />
                    }
                    label="Mobile App"
                />
                <FormControlLabel
                    control={
                        <Checkbox style={{ color: '#fff' }} checked={WebApplication} onChange={handleChange} name="WebApplication" />
                    }
                    label="Web Application"
                />

                <FormControlLabel
                    control={
                        <Checkbox style={{ color: '#fff' }} checked={EnterpriseSoftware} onChange={handleChange} name="EnterpriseSoftware" />
                    }
                    label="Enterprise Software"
                />
                <FormControlLabel
                    control={
                        <Checkbox style={{ color: '#fff' }} checked={CloudBasedSolution} onChange={handleChange} name="CloudBasedSolution" />
                    }
                    label="Cloud-based Solution"
                />
            </Stack>
        </Box>

    )


}


export default AppType;