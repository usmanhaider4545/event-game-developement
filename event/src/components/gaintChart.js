import React, { useState, useEffect } from 'react';
import { Box, Button, Stack, Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import List from '@mui/material/List';
import JavaImage from "../images/java.png"; 
 

function GaintCharts() {

    const styles = {

        themeBackgroundwithBorder: {
            borderRadius: "10px",
            border: "2px solid rgba(59, 130, 246, 0.54)",
            background: "rgba(255, 255, 255, 0.09)",
            boxShadow: "0px 0px 53.9px 0px rgba(0, 163, 255, 0.05)",
            backdropFilter: "blur(26.94999885559082px)",
        },

        threeBoxes: {
            height: "100px",
            flexShrink: "0",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            flex: '1 1 0px'
        },
        chartContainer: {
            borderRadius: "10px",
            border: "2px solid rgba(59, 130, 246, 0.54)",
            background: "rgba(255, 255, 255, 0.09)",
            boxShadow: "0px 0px 53.9px 0px rgba(0, 163, 255, 0.05)",
            backdropFilter: "blur(26.94999885559082px)",
            minHeight: { xs: "539.166px", md: "389.166px" },
        },
        twentyMarginRight: {
            marginRight: '20px'
        },
        twentyPadding: {
            padding: '15px'
        },
        twentyMarginBottom: {
            marginBottom: '20px'
        },
        teamBoxs : {
            display: 'flex',
            alignItems: 'center',
            textAlign: 'center',
            margin: 'auto',
            borderBottom: '1px solid rgba(59, 130, 246, 1)',
            padding: "0px 13px 15px 13px"
        },
        resourcesBg : {
            background: `radial-gradient(101.65% 101.64% at 50% 50%, #532B44 0%, rgba(44, 41, 58, 0.63) 100%)`
        },
        projectDurationBg: {
            background: `radial-gradient(101.65% 101.64% at 50% 50%, #585B40 0%, rgba(44, 41, 58, 0.71) 100%)`
        },
        totalManDaysBg: {
            background: `radial-gradient(101.65% 101.64% at 50% 50%, #265874 0%, rgba(44, 41, 58, 0.71) 100%)`
        }
        
    }

    return (
        <Grid container spacing={2}>
            <Grid sx={{ padding: "0" }} item xs={8}>
                <Box>
                    <Stack sx={{flexDirection :"inherit" , marginBottom : "20px"}}>
                        <Box sx={[styles.threeBoxes, styles.twentyMarginRight, styles.themeBackgroundwithBorder, styles.resourcesBg]}>
                            <Typography variant='p' sx={{fontSize : "14px" , fontWeight : "300", color : "#fff"}}> Total No. Resources </Typography>
                            <Typography variant='h6' sx={{ fontSize: "30px", fontWeight: "600", color: "#fff" }}> 6 </Typography>
                        </Box>
                        <Box sx={[styles.threeBoxes, styles.twentyMarginRight, styles.themeBackgroundwithBorder, styles.projectDurationBg]}>
                            <Typography variant='p' sx={{ fontSize: "14px", fontWeight: "300", color: "#fff" }}> Project Duration </Typography>
                            <Typography variant='h6' sx={{ fontSize: "30px", fontWeight: "600", color: "#fff" }}> 2 months</Typography>
                        </Box>
                        <Box sx={[styles.threeBoxes, styles.themeBackgroundwithBorder, styles.totalManDaysBg]}>
                            <Typography variant='p' sx={{ fontSize: "14px", fontWeight: "300", color: "#fff" }}> Total Man Days </Typography>
                            <Typography variant='h6' sx={{ fontSize: "30px", fontWeight: "600", color: "#fff" }}> 72 </Typography>
                        </Box>
                    </Stack>
                    <Box sx={[styles.chartContainer, styles.themeBackgroundwithBorder]}>

                    </Box>
                </Box>
            </Grid>
            <Grid   item xs={4}>
                <Box sx={[styles.themeBackgroundwithBorder, styles.twentyPadding, styles.twentyMarginBottom ]}>
                    <Typography variant='h6' sx={{ color: "#fff" , textAlign : "left" }}>Recommended team</Typography>
                <Box>
                        <List sx={{ flexDirection: "inherit", justifyContent: "center", display: "flex", flexWrap: "wrap" }}>
                            <ListItem sx={{ maxWidth: '50%', paddingLeft : "0" , paddingRight : "0"}}>
                                <Box sx={[styles.teamBoxs ]}>                                    <ListItemIcon>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                                            <path d="M39.9998 39.7377H2.97949V0.865326H25.1917L28.5325 4.15658H39.9095V39.7377H39.9998ZM3.88243 38.8482H39.0969V5.04611H28.1714L24.8305 1.75485H3.88243V38.8482Z" fill="#3B82F6" />
                                            <path d="M6.41113 36.3574V4.24539H23.8378L27.1786 7.53665H36.5691V36.3574H6.41113Z" fill="#3B82F6" />
                                            <path d="M36.8399 36.6242H6.23047V3.97858H23.928L27.2688 7.26983H36.8399V36.6242ZM6.68194 36.1795H36.3885V7.80355H27.0883L23.7474 4.42334H6.68194V36.1795Z" fill="#3B82F6" />
                                            <path d="M0 30.5756L3.79232 31.9989V31.0204L0 29.5971V30.5756Z" fill="#3B82F6" />
                                            <path d="M0 27.1953L3.79232 28.6185V27.64L0 26.2168V27.1953Z" fill="#3B82F6" />
                                            <path d="M0 19.4566V20.4351L3.79232 21.8584V20.8799L0 19.4566Z" fill="#3B82F6" />
                                            <path d="M0 23.8152L3.79232 25.2385V24.26L0 22.8367V23.8152Z" fill="#3B82F6" />
                                        </svg>
                                    </ListItemIcon>
                                    <ListItemText
                                        primary="front end Developer"
                                        secondary={null}
                                        sx={{ color: "#fff" }}
                                    />
                                </Box>

                                </ListItem> 
                            <ListItem sx={{ maxWidth: '50%', paddingLeft: "0", paddingRight: "0" }}>
                                <Box sx={[styles.teamBoxs]}>  
                                    <ListItemIcon>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                                            <path d="M39.9998 39.7377H2.97949V0.865326H25.1917L28.5325 4.15658H39.9095V39.7377H39.9998ZM3.88243 38.8482H39.0969V5.04611H28.1714L24.8305 1.75485H3.88243V38.8482Z" fill="#3B82F6" />
                                            <path d="M6.41113 36.3574V4.24539H23.8378L27.1786 7.53665H36.5691V36.3574H6.41113Z" fill="#3B82F6" />
                                            <path d="M36.8399 36.6242H6.23047V3.97858H23.928L27.2688 7.26983H36.8399V36.6242ZM6.68194 36.1795H36.3885V7.80355H27.0883L23.7474 4.42334H6.68194V36.1795Z" fill="#3B82F6" />
                                            <path d="M0 30.5756L3.79232 31.9989V31.0204L0 29.5971V30.5756Z" fill="#3B82F6" />
                                            <path d="M0 27.1953L3.79232 28.6185V27.64L0 26.2168V27.1953Z" fill="#3B82F6" />
                                            <path d="M0 19.4566V20.4351L3.79232 21.8584V20.8799L0 19.4566Z" fill="#3B82F6" />
                                            <path d="M0 23.8152L3.79232 25.2385V24.26L0 22.8367V23.8152Z" fill="#3B82F6" />
                                        </svg>
                                    </ListItemIcon>
                                    <ListItemText
                                        primary="front end Developer"
                                        secondary={null}
                                        sx={{ color: "#fff" }}
                                    />
                                    </Box>
                                </ListItem> 
                            <ListItem sx={{ maxWidth: '50%', paddingLeft: "0", paddingRight: "0" }}>
                                <Box sx={[styles.teamBoxs]}>  
                                    <ListItemIcon>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                                            <path d="M39.9998 39.7377H2.97949V0.865326H25.1917L28.5325 4.15658H39.9095V39.7377H39.9998ZM3.88243 38.8482H39.0969V5.04611H28.1714L24.8305 1.75485H3.88243V38.8482Z" fill="#3B82F6" />
                                            <path d="M6.41113 36.3574V4.24539H23.8378L27.1786 7.53665H36.5691V36.3574H6.41113Z" fill="#3B82F6" />
                                            <path d="M36.8399 36.6242H6.23047V3.97858H23.928L27.2688 7.26983H36.8399V36.6242ZM6.68194 36.1795H36.3885V7.80355H27.0883L23.7474 4.42334H6.68194V36.1795Z" fill="#3B82F6" />
                                            <path d="M0 30.5756L3.79232 31.9989V31.0204L0 29.5971V30.5756Z" fill="#3B82F6" />
                                            <path d="M0 27.1953L3.79232 28.6185V27.64L0 26.2168V27.1953Z" fill="#3B82F6" />
                                            <path d="M0 19.4566V20.4351L3.79232 21.8584V20.8799L0 19.4566Z" fill="#3B82F6" />
                                            <path d="M0 23.8152L3.79232 25.2385V24.26L0 22.8367V23.8152Z" fill="#3B82F6" />
                                        </svg>
                                    </ListItemIcon>
                                    <ListItemText
                                        primary="front end Developer"
                                        secondary={null}
                                        sx={{ color: "#fff" }}
                                    />
                                    </Box>
                                </ListItem> 
                            <ListItem sx={{ maxWidth: '50%', paddingLeft: "0", paddingRight: "0" }}>
                                <Box sx={[styles.teamBoxs]}>  
                                <ListItemIcon>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                                        <path d="M39.9998 39.7377H2.97949V0.865326H25.1917L28.5325 4.15658H39.9095V39.7377H39.9998ZM3.88243 38.8482H39.0969V5.04611H28.1714L24.8305 1.75485H3.88243V38.8482Z" fill="#3B82F6" />
                                        <path d="M6.41113 36.3574V4.24539H23.8378L27.1786 7.53665H36.5691V36.3574H6.41113Z" fill="#3B82F6" />
                                        <path d="M36.8399 36.6242H6.23047V3.97858H23.928L27.2688 7.26983H36.8399V36.6242ZM6.68194 36.1795H36.3885V7.80355H27.0883L23.7474 4.42334H6.68194V36.1795Z" fill="#3B82F6" />
                                        <path d="M0 30.5756L3.79232 31.9989V31.0204L0 29.5971V30.5756Z" fill="#3B82F6" />
                                        <path d="M0 27.1953L3.79232 28.6185V27.64L0 26.2168V27.1953Z" fill="#3B82F6" />
                                        <path d="M0 19.4566V20.4351L3.79232 21.8584V20.8799L0 19.4566Z" fill="#3B82F6" />
                                        <path d="M0 23.8152L3.79232 25.2385V24.26L0 22.8367V23.8152Z" fill="#3B82F6" />
                                    </svg>
                                </ListItemIcon>
                                <ListItemText
                                    primary="front end Developer"
                                    secondary={null}
                                    sx={{ color: "#fff" }}
                                />
                                </Box>
                            </ListItem> 
                         </List>
 
                   </Box>
                </Box>
                <Box sx={[styles.themeBackgroundwithBorder, styles.twentyPadding]}>
                    <Typography variant='h6' sx={{ color: "#fff", textAlign: "left" }}>Recommended technology</Typography>
                <Box>
                        <List sx={{ flexDirection: "inherit", justifyContent: "center", display: "flex", flexWrap: "wrap" }}>
                            <ListItem sx={{ width: '20%', paddingLeft: "0", paddingRight: "0" , justifyContent : "center" }}>
                        <Box>
                                <img src={JavaImage} />
                                <Typography sx={{color : "#fff", fontSize : "14px"}}>Python</Typography>
                        </Box>
                        </ListItem> 
                            <ListItem sx={{ width: '20%', paddingLeft: "0", paddingRight: "0", justifyContent: "center" }}>
                                <Box>
                                    <img src={JavaImage} />
                                    <Typography sx={{ color: "#fff", fontSize: "14px" }}>Python</Typography>
                                </Box>
                            </ListItem> 
                            <ListItem sx={{ width: '20%', paddingLeft: "0", paddingRight: "0", justifyContent: "center" }}>
                                <Box>
                                    <img src={JavaImage} />
                                    <Typography sx={{ color: "#fff", fontSize: "14px" }}>Python</Typography>
                                </Box>
                            </ListItem> 
                            <ListItem sx={{ width: '20%', paddingLeft: "0", paddingRight: "0", justifyContent: "center" }}>
                                <Box>
                                    <img src={JavaImage} />
                                    <Typography sx={{ color: "#fff", fontSize: "14px" }}>Python</Typography>
                                </Box>
                            </ListItem> 
                            <ListItem sx={{ width: '20%', paddingLeft: "0", paddingRight: "0", justifyContent: "center" }}>
                                <Box>
                                    <img src={JavaImage} />
                                    <Typography sx={{ color: "#fff", fontSize: "14px" }}>Python</Typography>
                                </Box>
                            </ListItem> 
 
                    </List>
                </Box>
              </Box>
            </Grid>
        </Grid>

    );
}

export default GaintCharts;