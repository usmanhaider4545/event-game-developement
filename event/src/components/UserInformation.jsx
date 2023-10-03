import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import PhoneEnabledIcon from "@mui/icons-material/PhoneEnabled";
import MailIcon from "@mui/icons-material/Mail";
import { useUserProfile } from '../hook/UserProfileHook';
import TextFieldComponent from './TextFieldComponent';
const whiteColorStyle = { color: "#fff" };
function UserInformation({ enableActionButton, disableActionButton }) {
    const { name, setName, email, setEmail, phone, setPhone } = useUserProfile(enableActionButton,disableActionButton);
    const inputChangeHandlers = {
        name: setName,
        email: setEmail,
        phone: setPhone,
    };

    const handleInputChange = (field) => (e) => {
        const handler = inputChangeHandlers[field];
        if (handler) handler(e.target.value);
    };

    return (
        <Box>
            <Typography variant='h6' sx={{ color: "#fff", fontSize: "32px", pb: 1, fontWeight: "700" }}>
                Enter information for final results
            </Typography>
            <Box className="resultBox">
                <Grid container spacing={2}>
                    <Grid sx={{ padding: "0" }} item xs={6}>
                        <TextFieldComponent
                            id="name"
                            label="Name"
                            value={name}
                            onChange={handleInputChange('name')}
                            adornmentIcon={<PersonIcon sx={whiteColorStyle} />}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <TextFieldComponent
                            id="phone"
                            label="Phone"
                            value={phone}
                            onChange={handleInputChange('phone')}
                            adornmentIcon={<PhoneEnabledIcon sx={whiteColorStyle} />}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextFieldComponent
                            id="email"
                            label="Email"
                            value={email}
                            onChange={handleInputChange('email')}
                            adornmentIcon={<MailIcon sx={whiteColorStyle} />}
                        />
                    </Grid>
                </Grid>
            </Box>
        </Box>
    )
}

export default UserInformation;
