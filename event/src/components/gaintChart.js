import React, { useState, useEffect } from 'react';
import { Box, Button, Stack, Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import List from '@mui/material/List';
import UniqueDevs from "./uniqueDevs";
import TechStack from './techStack';
import JavaImage from "../images/java.png";
import { pushDataToFirestore } from '../utils/firebaseUtils';
import { Chart } from "react-google-charts";

function GaintCharts() {
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

      }, []);
      const columns = [
        { type: 'string', label: 'Task ID' },
        { type: 'string', label: 'Task Name' },
        { type: 'string', label: 'Resource' },
        { type: 'date', label: 'Start Date' },
        { type: 'date', label: 'End Date' },
        { type: 'number', label: 'Duration' },
        { type: 'number', label: 'Percent Complete' },
        { type: 'string', label: 'Dependencies' },
      ];
    const today = new Date();
    let endDate = today;

    const rows = JSON.parse(localStorage.getItem("totalManDays")).map((item, index) => {
    const startDate = endDate;
    endDate = new Date(endDate.getTime() + item.value * 24 * 60 * 60 * 1000);

    return [
      `Task ${index + 1}`,
      item.name,
      item.developers.join(', '),
      startDate,
      endDate,
      item.value,
      100,
      null,
    ];
  });
      const chart_data = [columns, ...rows];
    
      const options = {
        height: 400,
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
            flex: '1 1 0px'
        },
        chartContainer: {
            borderRadius: "10px",
            border: "2px solid rgba(59, 130, 246, 0.54)",
            background: "rgba(255, 255, 255, 0.09)",
            boxShadow: "0px 0px 53.9px 0px rgba(0, 163, 255, 0.05)",
            backdropFilter: "blur(26.94999885559082px)",
            minHeight: { xl: "539.166px", lg: "389.166px" },
        },
        twentyMarginRight: {
            marginRight: '20px'
        },
        twentyPadding: {
            padding: '15px'
        },
        resourcesBg : {
            background: `radial-gradient(101.65% 101.64% at 50% 50%, #532B44 0%, rgba(44, 41, 58, 0.63) 100%)`
        },
        projectDurationBg: {
            background: `radial-gradient(101.65% 101.64% at 50% 50%, #585B40 0%, rgba(44, 41, 58, 0.71) 100%)`
        },
        totalManDaysBg: {
            background: `radial-gradient(101.65% 101.64% at 50% 50%, #265874 0%, rgba(44, 41, 58, 0.71) 100%)`
        }
        
    }
    const [data, setData] = useState({ months: "", days: "", manDays: "", resources: "", developers:"", technology:"" });

    useEffect(() => {
      const parsedManDays = JSON.parse(localStorage.getItem("totalManDays"));
      const manDays = parsedManDays.reduce((acc, item) => acc + item.value, 0);
      const months = Math.floor(manDays / 30);
      const days = manDays % 30;
      const resources = parsedManDays.reduce((sum, feature) => sum + feature.resources, 0);
     console.log(parsedManDays)
     const uniqueDevelopersSet = new Set();

    parsedManDays.forEach((item) => {
    if (typeof item.developers === 'string') {
        const developersArray = item.developers.split(', ');
        developersArray.forEach((developer) => {
        uniqueDevelopersSet.add(developer);
        });
    } else if (Array.isArray(item.developers)) {
        item.developers.forEach((developer) => {
        uniqueDevelopersSet.add(developer);
        });
    }
    });
    const uniqueDevelopers = Array.from(uniqueDevelopersSet);    
    const technology = new Set();

parsedManDays.forEach((item) => {
  if (typeof item.technologies === 'string') {
    const technologiesArray = item.technologies.split(', ');
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
console.log(TechStack);

    setData({ months, days, manDays, resources, uniqueDevelopers, TechStack });
    }, []);
    localStorage.setItem("Estimations", JSON.stringify(data));
    const displayText =
      data.months === 0 ? `${data.days} DAYS` : `${data.months} MONTHS`;
    return (
        <Grid container spacing={2}>
        <Grid sx={{ padding: "0" }} item xs={8}>
            <Box>
                <Stack sx={{flexDirection :"inherit" , marginBottom : "20px"}}>
                    <Box sx={[styles.threeBoxes, styles.twentyMarginRight, styles.themeBackgroundwithBorder, styles.resourcesBg]}>
                        <Typography variant='p' sx={{ fontFamily: 'IBM Plex Mono !important' ,fontSize: "14px", fontWeight: "300", color: "#fff", textTransform: 'uppercase'}}> Total No. Resources </Typography>
                        <Typography variant='h6' sx={{ fontFamily: 'IBM Plex Mono !important', fontSize: "30px", fontWeight: "600", color: "#fff" }}> {data.resources} </Typography>
                    </Box>
                    <Box sx={[styles.threeBoxes, styles.twentyMarginRight, styles.themeBackgroundwithBorder, styles.projectDurationBg]}>
                        <Typography variant='p' sx={{ fontFamily: 'IBM Plex Mono !important',fontSize: "14px", fontWeight: "300", color: "#fff", textTransform: 'uppercase' }}> Project Duration </Typography>
                        <Typography variant='h6' sx={{ fontFamily: 'IBM Plex Mono !important', fontSize: "30px", fontWeight: "600", color: "#fff" }}> {displayText}</Typography>
                    </Box>
                    <Box sx={[styles.threeBoxes, styles.themeBackgroundwithBorder, styles.totalManDaysBg]}>
                        <Typography variant='p' sx={{ fontFamily: 'IBM Plex Mono !important', fontFamily: 'IBM Plex Mono !important', fontSize: "14px", fontWeight: "300", color: "#fff", textTransform: 'uppercase' }}> Total Man Days </Typography>
                        <Typography variant='h6' sx={{ fontSize: "30px", fontWeight: "600", color: "#fff" }}>{data.manDays}</Typography>
                    </Box>
                </Stack>
                <Box sx={[styles.chartContainer, styles.themeBackgroundwithBorder, styles.twentyPadding]}>
                <Chart
                        chartType="Gantt"
                        width="100%"
                        height="100%"
                        data={chart_data}
                        options={options}
                    />
                </Box>
            </Box>
        </Grid>
            <Grid   item xs={4}>
                <UniqueDevs data={data}/>
                <TechStack  data={data}/>
            </Grid>
        </Grid>

    );
}

export default GaintCharts;