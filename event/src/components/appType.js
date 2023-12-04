import React, { useState, useEffect } from "react";

import { motion } from "framer-motion";
import { Stack, Typography, Container, Box } from "@mui/material";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import SelectionTypeCatagory from "./selectionTypeCatagory";

const getDefaultDNC = () => ({
  MobileApp: false,
  WebApplication: false,
});

const getInitialDNC = () => {
  const storedValue = localStorage.getItem("appSoftware");
  return storedValue ? JSON.parse(storedValue) : getDefaultDNC();
};
function AppType(props) {
  const [DNC, setDNC] = useState(getInitialDNC);

  const { MobileApp, WebApplication } = DNC;

  const handleChange = (event) => {
    setDNC({ ...DNC, [event.target.name]: event.target.checked });
    props.removeDisabledButton();
  };
  console.log(DNC);

  useEffect(() => {
    let stringfyData = JSON.stringify(DNC);
    console.log(stringfyData);
    const trueKeysArray = Object.keys(DNC).filter((key) => DNC[key] === true);

    localStorage.setItem("appSoftware", stringfyData);
    const someTruthy = Object.values(DNC).some((val) => val === true);
    console.log(someTruthy);
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
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        <Typography
          variant='h6'
          sx={{
            color: "#fff",
            padding: "40px 0",
            fontWeight: "700",
            fontSize: { xs: "35px", md: "27px" },
          }}
        >
          What type of app are you looking for?
        </Typography>
      </motion.div>
      <Stack
        className='optionsBlocks'
        flexDirection='column'
        justifyContent='center'
        width='100%'
        maxWidth='450px'
        margin='auto'
      >
        <>
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.75, duration: 1 }}
          >
            <FormControlLabel
              control={
                <Checkbox
                  style={{ color: "#fff" }}
                  checked={MobileApp}
                  onChange={handleChange}
                  name='MobileApp'
                />
              }
              label='Mobile App'
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1, duration: 1 }}
          >
            <FormControlLabel
              control={
                <Checkbox
                  style={{ color: "#fff" }}
                  checked={WebApplication}
                  onChange={handleChange}
                  name='WebApplication'
                />
              }
              label='Web Application'
            />
          </motion.div>
        </>
      </Stack>
    </Box>
  );
}

export default AppType;
