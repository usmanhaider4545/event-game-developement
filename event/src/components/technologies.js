import React from 'react';
import ListItem from '@mui/material/ListItem';
import { Box, Typography } from '@mui/material';

const Technologies = ({ heading }) => {
  const imageName = `heroIcon.svg`;
  return (
    <ListItem sx={{ padding: "0.375rem 0.5rem", alignItems: "center",gap: "0.375rem",borderRadius: "0.3125rem",background: "rgba(255, 255, 255, 0.10)",width:"auto"}}>
      <Box style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
        <img src={imageName} style={{ width: '30px', height: '30px' }} />
        <Typography sx={{ color: "#fff", lineHeight: "normal",fontSize: " 0.875rem", padding:"7px",fontFamily: 'IBM Plex Mono !important', fontWeight: "400",fontStyle: "normal", textTransform: 'uppercase'}}>{heading}</Typography>
      </Box>
    </ListItem>
  );
}

export default Technologies;
