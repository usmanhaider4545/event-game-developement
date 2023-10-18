import React, { useState, useEffect } from "react";
import { Box, Button, Stack, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import UniqueDevs from "./uniqueDevs";
import TechStack from "./techStack";
import { pushDataToFirestore } from "../utils/firebaseUtils";
import { Chart } from "react-google-charts";
import { delay, motion } from "framer-motion";
import CountUp from "react-countup";
function GaintCharts() {
  const columns = [
    { type: "string", label: "Task ID" },
    { type: "string", label: "Task Name" },
    { type: "string", label: "Resource" },
    { type: "date", label: "Start Date" },
    { type: "date", label: "End Date" },
    { type: "number", label: "Duration" },
    { type: "number", label: "Percent Complete" },
    { type: "string", label: "Dependencies" },
  ];
  const today = new Date();
  let endDate = today;

  const rows = JSON.parse(localStorage.getItem("totalManDays")).map(
    (item, index) => {
      const startDate = endDate;
      endDate = new Date(endDate.getTime() + item.value * 24 * 60 * 60 * 1000);

      return [
        `Task ${index + 1}`,
        item.name,
        item.developers.join(", "),
        startDate,
        endDate,
        item.value,
        100,
        null,
      ];
    },
  );
  const chart_data = [columns, ...rows];

  const options = {
    tooltip: { isHtml: true },
    height: 800,
    gantt: {
      trackHeight: 30,
    },
  };

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
      flex: "1 1 0px",
    },
    chartContainer: {
      borderRadius: "10px",
      border: "2px solid rgba(59, 130, 246, 0.54)",
      background: "rgba(255, 255, 255, 0.09)",
      boxShadow: "0px 0px 53.9px 0px rgba(0, 163, 255, 0.05)",
      backdropFilter: "blur(26.94999885559082px)",
      maxHeight: "340px",
      overflowY: "auto",
    },
    twentyMarginRight: {
      marginRight: "20px",
    },
    twentyPadding: {
      padding: "15px",
    },
    resourcesBg: {
      background: `radial-gradient(101.65% 101.64% at 50% 50%, #532B44 0%, rgba(44, 41, 58, 0.63) 100%)`,
    },
    projectDurationBg: {
      background: `radial-gradient(101.65% 101.64% at 50% 50%, #585B40 0%, rgba(44, 41, 58, 0.71) 100%)`,
    },
    totalManDaysBg: {
      background: `radial-gradient(101.65% 101.64% at 50% 50%, #265874 0%, rgba(44, 41, 58, 0.71) 100%)`,
    },
  };
  const [data, setData] = useState({
    months: "",
    days: "",
    manDays: "",
    resources: "",
    developers: "",
    count: "",
    technology: "",
  });
  useEffect(() => {
    const data = {
      appSoftware: localStorage.getItem("appSoftware"),
      appDesignedFor: localStorage.getItem("appDesignedFor"),
      industry: localStorage.getItem("industry"),
      appCategory: localStorage.getItem("appCategory"),
      userProfile: localStorage.getItem("userProfile"),
      totalManDays: localStorage.getItem("totalManDays"),
    };
    pushDataToFirestore(data);
    const parsedManDays = JSON.parse(localStorage.getItem("totalManDays"));
    let manDays = parsedManDays.reduce((acc, item) => acc + item.value, 0);
    if (manDays > 60) {
      const additionalDays = (manDays - 60) % 30;
      manDays = 60 + additionalDays;
    }
    const months = Math.floor(manDays / 30);
    const days = manDays % 30;
    let resources = parsedManDays.reduce(
      (sum, feature) => sum + feature.resources,
      3,
    );
    const developerCounts = {};

    parsedManDays.forEach((item) => {
      if (typeof item.developers === "string") {
        const developersArray = item.developers.split(", ");
        developersArray.forEach((developer) => {
          developerCounts[developer] = (developerCounts[developer] || 0) + 1; // Increment the count

        });
      } else if (Array.isArray(item.developers)) {
        item.developers.forEach((developer) => {
          developerCounts[developer] = (developerCounts[developer] || 0) + 1; // Increment the count

        });
      }
    });
  const uniqueDeveloper = Object.keys(developerCounts);
  const developerCountsArray = uniqueDeveloper.map((developer) =>
      developerCounts[developer] > 8 ? 2 : Math.min(developerCounts[developer], 1)
  );
      console.log(developerCountsArray);
      const totalDeveloperCounts = developerCountsArray.reduce((acc, count) => acc + count, 0);
  resources=totalDeveloperCounts
  const technology = new Set();

    parsedManDays.forEach((item) => {
      if (typeof item.technologies === "string") {
        const technologiesArray = item.technologies.split(", ");
        technologiesArray.forEach((tech) => {
          technology.add(tech);
        });
      } else if (Array.isArray(item.technologies)) {
        item.technologies.forEach((tech) => {
          technology.add(tech);
        });
      }
    });

    const TechStack = Array.from(technology);

    setData({
      months,
      days,
      manDays,
      resources,
      uniqueDeveloper,
      developerCountsArray,
      TechStack,
    });
  }, []);
  localStorage.setItem("Estimations", JSON.stringify(data));
  const displayText =
    data.months === 0 ? `${data.days} DAYS` : `${data.months} MONTHS`;
  return (
    <Grid container spacing={2}>
      <Grid sx={{ padding: "0" }} item xs={8}>
        <Box>
          <Stack sx={{ flexDirection: "inherit", marginBottom: "20px" }}>
            <motion.div
              initial={{ opacity: 0, y: -100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              style={{
                height: "100px",
                flexShrink: "0",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                flex: "1 1 0px",
                marginRight: "20px",
                borderRadius: "10px",
                border: "2px solid rgba(59, 130, 246, 0.54)",
                background: "rgba(255, 255, 255, 0.09)",
                boxShadow: "0px 0px 53.9px 0px rgba(0, 163, 255, 0.05)",
                backdropFilter: "blur(26.94999885559082px)",
                background: `radial-gradient(101.65% 101.64% at 50% 50%, #532B44 0%, rgba(44, 41, 58, 0.63) 100%)`,
              }}
            >
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                style={{
                  fontFamily: "IBM Plex Mono !important",
                  fontSize: "14px",
                  fontWeight: "300",
                  color: "#fff",
                  textTransform: "uppercase",
                }}
              >
                {" "}
                Total No. Resources{" "}
              </motion.div>
              <Typography
                variant='h6'
                sx={{
                  fontFamily: "IBM Plex Mono !important",
                  fontSize: "30px",
                  fontWeight: "600",
                  color: "#fff",
                }}
              >
                <CountUp end={data.resources} duration={4} />
              </Typography>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: -100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.75, duration: 0.75 }}
              style={{
                height: "100px",
                flexShrink: "0",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                flex: "1 1 0px",
                marginRight: "20px",
                borderRadius: "10px",
                border: "2px solid rgba(59, 130, 246, 0.54)",
                background: "rgba(255, 255, 255, 0.09)",
                boxShadow: "0px 0px 53.9px 0px rgba(0, 163, 255, 0.05)",
                backdropFilter: "blur(26.94999885559082px)",
                background: `radial-gradient(101.65% 101.64% at 50% 50%, #585B40 0%, rgba(44, 41, 58, 0.71) 100%)`,
              }}
            >
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                style={{
                  fontFamily: "IBM Plex Mono !important",
                  fontSize: "14px",
                  fontWeight: "300",
                  color: "#fff",
                  textTransform: "uppercase",
                }}
              >
                {" "}
                Project Duration{" "}
              </motion.div>
              <Typography
                variant='h6'
                sx={{
                  fontFamily: "IBM Plex Mono !important",
                  fontSize: "30px",
                  fontWeight: "600",
                  color: "#fff",
                }}
              >
                {displayText}
                {/* {console.log(displayText)}
                <CountUp end={displayText} duration={4} /> */}
              </Typography>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: -100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 1 }}
              style={{
                height: "100px",
                flexShrink: "0",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                flex: "1 1 0px",
                borderRadius: "10px",
                border: "2px solid rgba(59, 130, 246, 0.54)",
                background: "rgba(255, 255, 255, 0.09)",
                boxShadow: "0px 0px 53.9px 0px rgba(0, 163, 255, 0.05)",
                backdropFilter: "blur(26.94999885559082px)",
                background: `radial-gradient(101.65% 101.64% at 50% 50%, #265874 0%, rgba(44, 41, 58, 0.71) 100%)`,
              }}
            >
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                style={{
                  fontFamily: "IBM Plex Mono !important",
                  fontSize: "14px",
                  fontWeight: "300",
                  color: "#fff",
                  textTransform: "uppercase",
                }}
              >
                {" "}
                Total Man Days{" "}
              </motion.div>
              <Typography
                variant='h6'
                sx={{ fontSize: "30px", fontWeight: "600", color: "#fff" }}
              >
                <CountUp end={data.manDays} duration={8} />
              </Typography>
            </motion.div>
          </Stack>
          <motion.div
            className='gantChart'
            style={{
              borderRadius: "10px",
              border: "2px solid rgba(59, 130, 246, 0.54)",
              background: "rgba(255, 255, 255, 0.09)",
              boxShadow: "0px 0px 53.9px 0px rgba(0, 163, 255, 0.05)",
              backdropFilter: "blur(26.94999885559082px)",
              maxHeight: "340px",
              overflowY: "auto",
              borderRadius: "10px",
              border: "2px solid rgba(59, 130, 246, 0.54)",
              background: "rgba(255, 255, 255, 0.09)",
              boxShadow: "0px 0px 53.9px 0px rgba(0, 163, 255, 0.05)",
              backdropFilter: "blur(26.94999885559082px)",
              padding: "15px",
            }}
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1, duration: 1 }}
          >
            <Chart
              chartType='Gantt'
              width='100%'
              height='100%'
              data={chart_data}
              options={options}
            />
          </motion.div>
        </Box>
      </Grid>
      <Grid item xs={4}>
        <UniqueDevs data={data} />
        <TechStack data={data} />
      </Grid>
    </Grid>
  );
}

export default GaintCharts;
