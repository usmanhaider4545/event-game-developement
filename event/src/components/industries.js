import React, { useState, useEffect, useRef } from "react";
import {
  Button,
  Stack,
  Typography,
  Stepper,
  Container,
  Box,
} from "@mui/material";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import { useDraggable } from "react-use-draggable-scroll";
import { motion } from "framer-motion";

function Industries(props) {
  const ref = useRef();

  const { events } = useDraggable(ref);

  const [value, setValue] = useState("");

  const [localStorageValue, setLocalStorageValue] = useState(
    localStorage.getItem("industry"),
  );

  const handleChange = (event) => {
    setValue(event.target.value);
    localStorage.setItem("industry", event.target.value);
    if (localStorage.getItem("totalManDays")) {
      localStorage.removeItem("totalManDays");
    }
    props.removeDisabledButton();
  };

  useEffect(() => {
    window.onbeforeunload = closeIt;
    if (localStorageValue) {
      props.removeDisabledButton();
    }
  }, []);

  function closeIt() {
    localStorage.clear("industry");
  }

  const digitalSignageValue = "Digital Signage";

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
            padding: "20px 0",
            fontWeight: "700",
            fontSize: { xs: "35px", md: "27px" },
          }}
        >
          Which industry does your product belong to?
        </Typography>
      </motion.div>

      <Stack
        className='optionsBlocks'
        flexDirection='inherit'
        justifyContent='center'
        gap='100px'
      >
        <FormControl>
          <RadioGroup
            aria-labelledby='demo-radio-buttons-group-label'
            defaultValue=''
            name='radio-buttons-group'
            value={value ? value : localStorageValue}
            onChange={handleChange}
          >
            <Stack
              {...events}
              ref={ref}
              sx={{ overflowX: "auto", width: "100%" }}
              className='optionsBlocks'
              display='-webkit-inline-box'
              flexDirection='initial'
              justifyContent='center'
            >
              <Box
                sx={{
                  width: "100%",
                  maxWidth: "450px",
                  paddingRight: "80px",
                }}
              >
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    delay: 1,
                    duration: 1,
                  }}
                >
                  <FormControlLabel
                    value='Fintech'
                    control={<Radio />}
                    label='Fintech'
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    delay: 1.25,
                    duration: 1,
                  }}
                  className={
                    digitalSignageValue === "Digital Signage" &&
                    "digitalSignageBlock"
                  }
                >
                  <FormControlLabel
                    value={digitalSignageValue}
                    control={<Radio />}
                    label='Digital Signage'
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    delay: 1.5,
                    duration: 1,
                  }}
                >
                  <FormControlLabel
                    value='Wayfinding'
                    control={<Radio />}
                    label='Wayfinding'
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    delay: 1.75,
                    duration: 1,
                  }}
                >
                  <FormControlLabel
                    value='IOT/Embedded'
                    control={<Radio />}
                    label='IOT/Embedded'
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    delay: 2,
                    duration: 1,
                  }}
                >
                  <FormControlLabel
                    value='Storage - Backup and Recovery'
                    control={<Radio />}
                    label='Storage - Backup and Recovery'
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    delay: 2.25,
                    duration: 1,
                  }}
                >
                  <FormControlLabel
                    value='Ecommerce and Retail'
                    control={<Radio />}
                    label='Ecommerce and Retail'
                  />
                </motion.div>
              </Box>
              <Box
                sx={{
                  width: "100%",
                  maxWidth: "450px",
                  paddingRight: "80px",
                }}
              >
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    delay: 2.75,
                    duration: 1,
                  }}
                >
                  <FormControlLabel
                    value='Real Estate'
                    control={<Radio />}
                    label='Real Estate'
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    delay: 3,
                    duration: 1,
                  }}
                >
                  <FormControlLabel
                    value='Industrial Compliance'
                    control={<Radio />}
                    label='Industrial Compliance'
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    delay: 3.25,
                    duration: 1,
                  }}
                >
                  <FormControlLabel
                    value='Logistics Freight'
                    control={<Radio />}
                    label='Logistics Freight'
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    delay: 3.5,
                    duration: 1,
                  }}
                >
                  <FormControlLabel
                    value='Healthcare'
                    control={<Radio />}
                    label='Healthcare'
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    delay: 3.75,
                    duration: 1,
                  }}
                >
                  <FormControlLabel
                    value='Computer Vision'
                    control={<Radio />}
                    label='Computer Vision'
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    delay: 4,
                    duration: 1,
                  }}
                >
                  <FormControlLabel
                    value='Virtual Reality'
                    control={<Radio />}
                    label='Virtual Reality'
                  />
                </motion.div>
              </Box>
              <Box
                sx={{
                  width: "100%",
                  maxWidth: "450px",
                  paddingRight: "80px",
                }}
              >
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    delay: 4.25,
                    duration: 1,
                  }}
                >
                  <FormControlLabel
                    value='Artificial Inteligence'
                    control={<Radio />}
                    label='Artificial Inteligence'
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    delay: 4.5,
                    duration: 1,
                  }}
                >
                  <FormControlLabel
                    value='Machine Learning'
                    control={<Radio />}
                    label='Machine Learning'
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    delay: 4.75,
                    duration: 1,
                  }}
                >
                  <FormControlLabel
                    value='Deep Learning'
                    control={<Radio />}
                    label='Deep Learning'
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    delay: 4.75,
                    duration: 1,
                  }}
                >
                  <FormControlLabel
                    value='Augmented Reality'
                    control={<Radio />}
                    label='Augmented Reality'
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    delay: 4.75,
                    duration: 1,
                  }}
                >
                  <FormControlLabel
                    value='Hospitality'
                    control={<Radio />}
                    label='Hospitality'
                  />
                </motion.div>
              </Box>
            </Stack>
          </RadioGroup>
        </FormControl>
      </Stack>
    </Box>
  );
}

export default Industries;
