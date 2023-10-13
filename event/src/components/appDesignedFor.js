import React, { useState, useEffect } from 'react';
import { Box, Stack, Typography } from '@mui/material';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import SelectionTypeCatagory from './selectionTypeCatagory';

const getDefaultDNC = () => ({
    Consumer: false,
    Business: false,
    NotYet: false
});

const getInitialDNC = () => {
    const storedValue = localStorage.getItem("appDesignedFor");
    return storedValue ? JSON.parse(storedValue) : getDefaultDNC();
};
function AppDesignedFor(props) {
     const [DNC, setDNC] = useState(getInitialDNC);

    const { Consumer, Business, NotYet } = DNC;
    const appSoftware = localStorage.getItem("appSoftware");
    const test = JSON. parse(appSoftware)
    const trueKeysArray = Object.keys(test).filter((key) => test[key] === true);

    const handleChange = (event) => {
        setDNC({ ...DNC, [event.target.name]: event.target.checked });
        props.removeDisabledButton();
    };

    useEffect(() => {
    let stringfyData = JSON.stringify(DNC);
    localStorage.setItem("appDesignedFor", stringfyData);
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
        localStorage.clear("appDesignedFor");
    }

     return (
        <Box>
             <SelectionTypeCatagory heading= {"Who's your app designed for?"} selection={trueKeysArray} />
             <Stack className='optionsBlocks' flexDirection="column" justifyContent="center" width="100%" maxWidth="450px" margin = "auto">
                <FormControlLabel
                    control={
                         <Checkbox style={{ color: '#fff' }} checked={Consumer} onChange={handleChange} name="Consumer" />
                    }
                    label="Consumer Use"
                />
                <FormControlLabel
                    control={
                         <Checkbox style={{ color: '#fff' }} checked={Business} onChange={handleChange} name="Business" />
                    }
                    label="Business Use"
                />

                <FormControlLabel
                    control={
                         <Checkbox style={{ color: '#fff' }} checked={NotYet} onChange={handleChange} name="NotYet" />
                    }
                    label="Not sure yet"
                />
            </Stack>
        </Box>

    )


}


export default AppDesignedFor;