import React from 'react';
import Technologies from './technologies';
import { Box, Typography, List } from '@mui/material';

const TechStack = ({ data }) => {
  const styles = {
    themeBackgroundwithBorder: {
      borderRadius: "10px",
      border: "2px solid rgba(59, 130, 246, 0.54)",
      background: "rgba(255, 255, 255, 0.09)",
      boxShadow: "0px 0px 53.9px 0px rgba(0, 163, 255, 0.05)",
      backdropFilter: "blur(26.94999885559082px)",
    },
    twentyPadding: {
      padding: '15px'
    },
    listItem:{
      display: "flex",
      alignItems: "flex-start",
      alignContent: "flex-start",
      gap: "0.5rem",
      flexWrap: "wrap",
      overflowY : "auto",
      maxHeight : "180px",
      padding: "0 15px 0 0px"

    }
  };

  return (
    <Box sx={[styles.themeBackgroundwithBorder, styles.twentyPadding]}>
      <Typography variant='h6' sx={{ fontFamily: 'IBM Plex Mono !important', color: "#fff", textAlign: "left", fontSize: "18px", fontWeight: "700", textTransform: 'uppercase', paddingBottom: "10px"}}>Recommended technology</Typography>
      <List sx={[styles.listItem]}>
        {data?.TechStack?.map((technology) => (
          <Technologies heading={technology}/>
        ))}
      </List>
    </Box>
  );
}

export default TechStack;
