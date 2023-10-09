import React from 'react';
import ListItem from '@mui/material/ListItem';
import { Box, Typography } from '@mui/material';

const Technologies = ({ heading }) => {
  // Generate the image file name based on the heading (assuming it matches)
  const imageName = `svgs/${heading}.svg`;

  return (
    <ListItem sx={{ width: '20%', paddingLeft: "0", paddingRight: "0", justifyContent: "center" }}>
      <Box>
        {/* Use the dynamically generated image file name */}
        <img src={imageName} style={{ width: '20px', height: '20px' }} />
        <Typography sx={{ color: "#fff", fontSize: "14px", fontFamily: 'IBM Plex Mono !important', fontWeight: "400", textTransform: 'uppercase' }}>{heading}</Typography>
      </Box>
    </ListItem>
  );
}

export default Technologies;
