import { Box, Typography } from "@mui/material";
import React from "react";
import folder from "../images/folder.svg";
const DevList = ({ heading, count }) => {
  return (
    <Box
      sx={{
        alignItems: "center",
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "row",
        lineHeight: "2",
        padding: "6px",
        justifyContent: "flex-start",
        borderBottom: "1px solid #3B82F6;",
      }}
    >
      <Box sx={{ marginTop: "5px" }}>
        <img
          src={folder}
          alt='folder'
          style={{ width: "2.5rem", height: "2.4295rem" }}
        />
        <Typography
          style={{
            display: "inline-flex",
            fontSize: "1.125rem",
            transform: "translate(-30px, -12px",
            fontWeight: "700",
          }}
        >
          {" "}
          {count}x
        </Typography>
      </Box>
      <Box sx={{ paddingLeft: "11px" }}>
        <Typography
          sx={{
            color: "white",
            fontWeight: "400",
            fontSize: "14px",
            fontFamily: " IBM Plex Mono !important",
          }}
        >
          {heading}
        </Typography>
      </Box>
    </Box>
  );
};

export default DevList;
