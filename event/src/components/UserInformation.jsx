import React from "react";
import { Box, Typography, Grid, Checkbox } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import MailIcon from "@mui/icons-material/Mail";
import { useUserProfile } from "../hook/UserProfileHook";
import { useState } from "react";
import TextFieldComponent from "./TextFieldComponent";
import { motion } from "framer-motion";
const whiteColorStyle = { color: "#fff" };
function UserInformation({ enableActionButton, disableActionButton }) {
  const { name, setName, email, setEmail } = useUserProfile(
    enableActionButton,
    disableActionButton,
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
  return (
    <Box>
      <motion.h6
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.25, delay: 0.5 }}
        style={{ color: "#fff", fontSize: "32px", fontWeight: "700" }}
      >
        Enter information for final results
      </motion.h6>
      <motion.div
        initial={{ opacity: 0, x: -200 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.75 }}
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
            }}
          >
            <Checkbox defaultChecked style={{ color: "#fff" }}></Checkbox>We
            will send this result to you on this email address
          </motion.p>
        </Grid>
      </motion.div>
    </Box>
  );
}

export default UserInformation;
