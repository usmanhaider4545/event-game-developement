import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import MailIcon from "@mui/icons-material/Mail";
import { useUserProfile } from '../hook/UserProfileHook';
import { useState } from 'react';
import TextFieldComponent from './TextFieldComponent';
const whiteColorStyle = { color: "#fff" };
function UserInformation({ enableActionButton, disableActionButton }) {
    const { name, setName, email, setEmail } = useUserProfile(enableActionButton,disableActionButton);
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
            <Typography variant='h6' sx={{ color: "#fff", fontSize: "32px", pb: 1, fontWeight: "700" }}>
                Enter information for final results
            </Typography>
            <Box className="resultBox">
                <Grid container spacing={2}>
                    <Grid sx={{ padding: "0" }} item xs={12}>
                        <TextFieldComponent
                            id="name"
                            label="Name"
                            value={name}
                            onChange={handleInputChange('name')}
                            adornmentIcon={<PersonIcon sx={whiteColorStyle} />}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextFieldComponent
                            id="email"
                            label="Email"
                            value={email}
                            onChange={handleInputChange('email')}
                            error={Boolean(emailError)}
                            helperText={emailError}
                            adornmentIcon={<MailIcon sx={whiteColorStyle} />}
                        />
                    </Grid>
                </Grid>
            </Box>
        </Box>
    )
}

export default UserInformation;
