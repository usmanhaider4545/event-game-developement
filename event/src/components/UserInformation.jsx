import React, { useEffect } from "react";
import { Box, Typography, Grid, Checkbox } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import MailIcon from "@mui/icons-material/Mail";
import { useUserProfile } from "../hook/UserProfileHook";
import { useState } from "react";
import TextFieldComponent from "./TextFieldComponent";
import { motion } from "framer-motion";
const whiteColorStyle = { color: "#fff" };
function UserInformation({
  enableActionButton,
  disableActionButton,
  checked,
  setChecked,
}) {
  const { name, setName, email, setEmail } = useUserProfile(
    enableActionButton,
    disableActionButton,
    checked,
  );
  const [emailError, setEmailError] = useState("");
  const inputChangeHandlers = {
    name: setName,
    email: setEmail,
  };
  const handleInputChange = (field) => (e) => {
    const handler = inputChangeHandlers[field];
    if (handler) {
      if (field === "email") {
        // Validate email using a regular expression
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        const isValidEmail = emailPattern.test(e.target.value);
        if (!isValidEmail) {
          setEmailError("Invalid email address");
        } else {
          setEmailError("");
        }
      }
      handler(e.target.value);
    }
  };

  useEffect(() => {
    const localStorageValue = localStorage.getItem("checkboxValue");

    if (localStorageValue === "true") {
      setChecked(true);
    }
  }, []);

  const handleCheckboxChange = (event) => {
    setChecked(event.target.checked);
    localStorage.setItem("checkboxValue", event.target.checked);
  };

  return (
    <Box>
      <motion.h6
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.25, delay: 0.5 }}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "0.5rem",
        }}
      >
        <Checkbox
          checked={checked}
          onChange={handleCheckboxChange}
          style={{ color: "#fff" }}
        ></Checkbox>
        <Typography
          sx={{
            fontSize: {
              xs: "32px",
              md: "27px",
              color: "#fff",
              fontWeight: "700",
            },
          }}
        >
          Want us to be able to reach you out in future ?
        </Typography>
      </motion.h6>
      {checked && (
        <motion.div
          initial={{ opacity: 0, y: -200 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className='resultBox'
        >
          <Grid container spacing={2}>
            <Grid sx={{ padding: "0" }} item xs={12}>
              <TextFieldComponent
                id='name'
                label='Name'
                value={name}
                onChange={handleInputChange("name")}
                adornmentIcon={<PersonIcon sx={whiteColorStyle} />}
              />
            </Grid>
            <Grid item xs={12}>
              <TextFieldComponent
                id='email'
                label='Email'
                value={email}
                onChange={handleInputChange("email")}
                error={Boolean(emailError)}
                helperText={emailError}
                adornmentIcon={<MailIcon sx={whiteColorStyle} />}
              />
            </Grid>
            <motion.p
              initial={{ opacity: 0, y: -100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.75 }}
              style={{
                display: "flex",
                alignItems: "center",
                color: "#fff",
                fontSize: "16px",
                fontWeight: "500",
                paddingLeft: "15px",
              }}
            >
              We will use this email to reach you out.
            </motion.p>
          </Grid>
        </motion.div>
      )}
    </Box>
  );
}

export default UserInformation;
