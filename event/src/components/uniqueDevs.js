import { Box, Typography } from '@mui/material';
import React from 'react';
import DevList from './DevList';
const UniqueDevs = ({data}) => {
    const styles = {
       
        themeBackgroundwithBorder: {
            borderRadius: "10px",
            border: "2px solid rgba(59, 130, 246, 0.54)",
            background: "rgba(255, 255, 255, 0.09)",
            boxShadow: "0px 0px 53.9px 0px rgba(0, 163, 255, 0.05)",
            backdropFilter: "blur(26.94999885559082px)",
            display: "flex",
            flexWrap: "wrap"
        },
        twentyPadding: {
            padding: '15px'
        },
        twentyMarginBottom: {
            marginBottom: '20px'
        }
    }
  return (

<>
<Box sx={[styles.themeBackgroundwithBorder, styles.twentyPadding, styles.twentyMarginBottom ]}>
    <Typography variant='h6' sx={{ fontFamily: 'IBM Plex Mono !important', fontSize: "18px", fontWeight: "700", textTransform: 'uppercase',  color: "#fff" , textAlign : "left", width: "100%", marginBottom:"14px"}}>Recommended team</Typography>
        {data?.uniqueDevelopers?.map((elem) => (
    <DevList heading={elem} key={elem} />
))}
</Box>
            
</>
  )
}

export default UniqueDevs
