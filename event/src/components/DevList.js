import { Box, Typography } from '@mui/material'
import React from 'react'
import folder from '../images/folder.svg'
const DevList = ({heading}) => {
  return (
    
     <Box sx={{flexBasis: "50%", height: "50%", boxSizing: "border-box", display: "flex", flexDirection: "row", flexWrap: "nowrap", lineHeight:"2", padding:"12px", justifyContent:"space-between", borderBottom:"1px solid #3B82F6;"}}>
        <Box>
      <img src={folder} alt="folder"/>
        </Box>
        <Box>
        <Typography sx={{color:"white", fontWeight:"400px", fontSize:"14px", fontFamily:" IBM Plex Mono !important"}}>{heading}</Typography>
        </Box>
           
         </Box>

   
  )
}

export default DevList
