import React, { useState, useEffect } from "react";
import { Box, Stack, Typography } from "@mui/material";
import FormControlLabel from "@mui/material/FormControlLabel";
import { motion } from "framer-motion";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import SelectionTypeCatagory from "./selectionTypeCatagory";

const getDefaultDNC = () => ({
  Consumer: false,
  Business: false,
  NotYet: false,
});

const getInitialDNC = () => {
  const storedValue = localStorage.getItem("appDesignedFor");
  return storedValue ? JSON.parse(storedValue) : getDefaultDNC();
};
function AppDesignedFor(props) {
  const [DNC, setDNC] = useState(getInitialDNC);

  const { Consumer, Business, NotYet } = DNC;
  const appSoftware = localStorage.getItem("appSoftware");
  const test = JSON.parse(appSoftware);
  const trueKeysArray = Object.keys(test).filter((key) => test[key] === true);

  const handleChange = (event) => {
    setDNC({ ...DNC, [event.target.name]: event.target.checked });
    props.removeDisabledButton();
  };

  useEffect(() => {
    let stringfyData = JSON.stringify(DNC);
    localStorage.setItem("appDesignedFor", stringfyData);
    const someTruthy = Object.values(DNC).some((val) => val === true);

    if (someTruthy === true) {
      props.removeDisabledButton();
    } else {
      props.activeDisabledBtn();
    }
  }, [handleChange]);

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
          Who's your app designed for?
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
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1, duration: 1 }}
        >
          <FormControlLabel
            control={
              <Checkbox
                style={{ color: "#fff" }}
                checked={Consumer}
                onChange={handleChange}
                name='Consumer'
              />
            }
            label='Consumer Use'
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.25, duration: 1 }}
        >
          <FormControlLabel
            control={
              <Checkbox
                style={{ color: "#fff" }}
                checked={Business}
                onChange={handleChange}
                name='Business'
              />
            }
            label='Business Use'
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.5, duration: 1 }}
        >
          <FormControlLabel
            control={
              <Checkbox
                style={{ color: "#fff" }}
                checked={NotYet}
                onChange={handleChange}
                name='NotYet'
              />
            }
            label='Not sure yet'
          />
        </motion.div>
      </Stack>
    </Box>
  );
}

export default AppDesignedFor;
