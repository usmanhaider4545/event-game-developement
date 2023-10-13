import { Box, Typography } from "@mui/material";
import React from "react";
import DevList from "./DevList";
import { motion } from "framer-motion";
const UniqueDevs = ({ data }) => {
  const styles = {
    themeBackgroundwithBorder: {
      borderRadius: "10px",
      border: "2px solid rgba(59, 130, 246, 0.54)",
      background: "rgba(255, 255, 255, 0.09)",
      boxShadow: "0px 0px 53.9px 0px rgba(0, 163, 255, 0.05)",
      backdropFilter: "blur(26.94999885559082px)",
      display: "flex",
      flexDirection: "column",
    },
    twentyPadding: {
      padding: "15px",
    },
    twentyMarginBottom: {
      marginBottom: "20px",
    },
  };
  return (
    <>
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.25, duration: 1.25 }}
        style={{
          borderRadius: "10px",
          border: "2px solid rgba(59, 130, 246, 0.54)",
          background: "rgba(255, 255, 255, 0.09)",
          boxShadow: "0px 0px 53.9px 0px rgba(0, 163, 255, 0.05)",
          backdropFilter: "blur(26.94999885559082px)",
          display: "flex",
          flexDirection: "column",
          padding: "15px",
          marginBottom: "20px",
        }}
      >
        <Typography
          variant='h6'
          sx={{
            fontFamily: "IBM Plex Mono !important",
            fontSize: "18px",
            fontWeight: "700",
            textTransform: "uppercase",
            color: "#fff",
            textAlign: "left",
            width: "100%",
            marginBottom: "14px",
          }}
        >
          Recommended team
        </Typography>
        <Box sx={{ overflowY: "auto", maxHeight: "260px" }}>
          {data.uniqueDeveloper?.map((developer, index) => (
            <DevList
              heading={developer}
              count={data.developerCountsArray[index]}
              key={index}
            />
          ))}
        </Box>
      </motion.div>
    </>
  );
};

export default UniqueDevs;
