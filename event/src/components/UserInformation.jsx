import React, {useState, useEffect} from "react";
import {Box, Typography} from "@mui/material";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import PersonIcon from "@mui/icons-material/Person";
import PhoneEnabledIcon from "@mui/icons-material/PhoneEnabled";
import MailIcon from "@mui/icons-material/Mail";





function  UserInformation (props)  {
    const {enableActionButton} = this.props;
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    useEffect(() => {
        const userProfile = JSON.parse(localStorage.getItem('userProfile')) || {};

        if (userProfile.name) setName(userProfile.name);
        if (userProfile.email) setEmail(userProfile.email);
        if (userProfile.phone) setPhone(userProfile.phone);
    }, []);
    useEffect(() => {
        const isAnyFieldEmpty = !name || !email || !phone;
        if (!isAnyFieldEmpty) {
            localStorage.setItem('userProfile', JSON.stringify({ name, email, phone }));
            enableActionButton();
        }
    }, [name,email,phone]);
    return (
        <Box>
            <Typography variant='h6' sx={{ color: "#fff", fontSize: "32px", pb: 1 , fontWeight : "700"  }}>
                Enter information for final results
            </Typography>
            <Box className="resultBox" >
                <Grid container spacing={2}>
                    <Grid sx={{ padding: "0" }} item xs={6}>
                        <TextField
                            id="name"
                            label="Name"
                            variant="standard"
                            fullWidth
                            sx={{
                                "& .MuiInputLabel-root": { color: "#fff" },
                                borderBottom: "1px solid #fff",
                            }}
                            InputProps={{
                                disableUnderline: true,
                                style: { color: "#fff" },
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <PersonIcon sx={{color : "#fff"}} />
                                    </InputAdornment>
                                )
                            }}
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField fullWidth id="phone" label="Phone" variant="standard" sx={{
                            "& .MuiInputLabel-root": { color: "#fff" },
                            borderBottom: "1px solid #fff",
                        }}
                                   InputProps={{ disableUnderline: true,
                                       style: { color: "#fff" },
                                       endAdornment: (
                                           <InputAdornment position="end">
                                               <PhoneEnabledIcon sx={{ color: "#fff" }} />
                                           </InputAdornment>
                                       )
                                   }}
                                   value={phone}
                                   onChange={(e) => setPhone(e.target.value)}/>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField fullWidth id="email" label="Email" variant="standard" sx={{
                            "& .MuiInputLabel-root": { color: "#fff" },
                            borderBottom: "1px solid #fff",
                        }}
                                   InputProps={{ disableUnderline: true,
                                       style: { color: "#fff" },
                                       endAdornment: (
                                           <InputAdornment position="end">
                                               <MailIcon sx={{ color: "#fff" }} />
                                           </InputAdornment>
                                       )
                                   }}
                                   onChange={(e) => setEmail(e.target.value)}/>

                        />
                    </Grid>
                </Grid>
            </Box>
        </Box>
    )
}

export default  UserInformation;