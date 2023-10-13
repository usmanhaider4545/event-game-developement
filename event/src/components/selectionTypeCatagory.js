import React from 'react';
import { Typography, Box, Popover } from '@mui/material';
import { useState } from 'react';

const SelectionTypeCategory = ({ heading, selection }) => {
  const localStorageIndustry = localStorage.getItem("industry");
  const styles = {
    CategorySelected:{borderRadius: "10px",
    backgroundColor: "rgba(255, 255, 255, 0.09)",
    boxShadow: "0px 0px 53.9px 0px rgba(0, 163, 255, 0.05)",
    backdropFilter: "blur(26.94999885559082px)",
    padding: "11px"
},
    popUp:{ 
    background: "rgba(255, 255, 255, 0.09)",
    backdropFilter: "blur(26.94999885559082px)",
    }  
};

  const [anchorEl, setAnchorEl] = useState(null);
  const [countVisible, setCountVisible] = useState(selection && selection.length > 1);

  const handlePopoverOpen = (event) => {
    if (selection && selection.length > 1) {
      setAnchorEl(event.currentTarget);
      setCountVisible(false);
    }
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
    setCountVisible(selection && selection.length > 1);
  };
    const renderAbc = () => {
        if (countVisible) {
            return <>{firstOption}{(selection.length > 1 ? <span className="Circle">+{selection.length - 1}</span> : '')}</>
        } else {
            return <>{firstOption}</>
        }
    }

  const firstOption = selection ? selection[0] : '';
  const remainingSelection = selection ? selection.slice(1) : [];

  return (
    <>
      <Typography variant='h6' sx={{ color: "#fff", fontWeight: "700", fontSize: { xs: "35px", md: "27px" } }}>
        {heading}
      </Typography>
      <Typography variant='h6' sx={{
        display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", gap: "16px", color: "#fff", padding: "11px 0px 30px", fontWeight: "700", fontSize: { xs: "1.5rem", md: "1.25rem" }
      }}>
        <Box display="flex" justifyContent="center" alignItems="center" sx={[styles.CategorySelected]}>
          {localStorageIndustry}
        </Box>
        {selection && (
          <Box display="flex" justifyContent="center" alignItems="center" sx={[styles.CategorySelected]} onClick={handlePopoverOpen}>
            {renderAbc()}
          </Box>
        )}
        <Popover
        sx={{backgroundColor:"none", boxShadow:"none", top:"0.2rem", left:"2.4rem" }}
          open={Boolean(anchorEl)}
          anchorEl={anchorEl}
          onClose={handlePopoverClose}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'center',
          }}
        >
          {remainingSelection.map((item, index) => (
          
            <Box   sx={[styles.popUp]} display= "flex"
            padding=" 8px 18px"
            flexDirection= "column"
            alignItems= "flex-start"
            gap= "16px">
             <Typography  key={index} background= "none" color= "#FFF" fontFamily= "Nunito" fontSize= "20px" fontStyle= "normal" fontWeight= "400" lineHight= "normal">{item}</Typography>
            </Box>
          ))}
        </Popover>
      </Typography>
    </>
  )
}

export default SelectionTypeCategory;
