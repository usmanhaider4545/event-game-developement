import { Box, Typography } from "@mui/material";
import React from "react";
import DevList from "./DevList";
import { motion } from "framer-motion";
const UniqueDevs = ({ data, digitalSignageResources, playerResources }) => {
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
        {localStorage?.getItem("industry") === "Digital Signage" &&
        localStorage?.getItem("appCategory") === "CMS" ? (
          <Box sx={{ overflowY: "auto", maxHeight: "260px" }}>
            {data?.manDays <= 110 ? (
              <>
                <DevList heading={"Frontend Developer"} count={1} />
                <DevList heading={"Backend Developer"} count={1} />
              </>
            ) : data?.manDays > 110 && data?.manDays <= 170 ? (
              <>
                <DevList heading={"Frontend Developer"} count={2} />
                <DevList heading={"Backend Developer"} count={1} />
              </>
            ) : (
              <>
                <DevList heading={"Frontend Developer"} count={2} />
                <DevList heading={"Backend Developer"} count={2} />
              </>
            )}

            <DevList heading={"Project Manager"} count={1} />
            <DevList heading={"QA Engineer"} count={1} />

            <Typography
              variant='h6'
              sx={{
                fontFamily: "IBM Plex Mono !important",
                fontSize: "14px",
                fontWeight: "500",
                textTransform: "uppercase",
                color: "#fff",
                textAlign: "left",
                width: "80%",
                marginBottom: "14px",
                marginTop: "14px",
              }}
            >
              <i>
                Project Manager and QA Engineer is not reflected in Total No. of
                Resources
              </i>
            </Typography>
          </Box>
        ) : localStorage?.getItem("industry") === "Digital Signage" &&
          localStorage?.getItem("appCategory") === "Player" ? (
          <Box sx={{ overflowY: "auto", maxHeight: "260px" }}>
            <DevList
              heading={"Frontend Developer"}
              count={playerResources.length}
            />
            <DevList heading={"Project Manager"} count={1} />
            <DevList heading={"QA Engineer"} count={1} />
            <Typography
              variant='h6'
              sx={{
                fontFamily: "IBM Plex Mono !important",
                fontSize: "14px",
                fontWeight: "500",
                textTransform: "uppercase",
                color: "#fff",
                textAlign: "left",
                width: "80%",
                marginBottom: "14px",
                marginTop: "14px",
              }}
            >
              <i>
                Project Manager and QA Engineer is not reflected in Total No. of
                Resources
              </i>
            </Typography>
          </Box>
        ) : (
          <Box sx={{ overflowY: "auto", maxHeight: "260px" }}>
            {data.uniqueDeveloper?.map((developer, index) => (
              <DevList
                heading={developer}
                count={data.developerCountsArray[index]}
                key={index}
              />
            ))}
            <DevList heading={"Project Manager"} count={1} />
            <DevList heading={"QA Engineer"} count={1} />

            <Typography
              variant='h6'
              sx={{
                fontFamily: "IBM Plex Mono !important",
                fontSize: "14px",
                fontWeight: "500",
                textTransform: "uppercase",
                color: "#fff",
                textAlign: "left",
                width: "80%",
                marginBottom: "14px",
                marginTop: "14px",
              }}
            >
              <i>
                Project Manager and QA Engineer is not reflected in Total No. of
                Resources
              </i>
            </Typography>
          </Box>
        )}
      </motion.div>
    </>
  );
};

export default UniqueDevs;
