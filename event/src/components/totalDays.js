import React, { useState, useEffect } from 'react';
import { Box, Button, Typography } from '@mui/material';
import ResultsBG from "../images/Result-Page.png";
 
function TotalManDays() {

   const [localStorageManDays, setLocalStorageManDays] = useState(localStorage.getItem("totalManDays"));

        const [selectedTotalManDays, setSelectedTotalManDays] = useState();

        useEffect(() => {
                let parsManDays = JSON.parse(localStorageManDays);
                let getNumberFromArray = [];
                parsManDays.map((item, index) => {
                        getNumberFromArray.push(item[2]);
                 })
                const daysSum = getNumberFromArray.reduce((partialSum, a) => partialSum + a, 0);
                setSelectedTotalManDays(daysSum);
        }, []);

 
        return (
                <Box>
                        <Box className="resultBox" style={{ backgroundImage: `url(${ResultsBG})`, backgroundRepeat: "no-repeat", backgroundSize: "cover" }}>
                                <Typography variant='p' sx={{ color: "#fff", fontSize: "1.3vw" , pb: 1 }}>
                                        <b> Choose Intagleo </b> for a fast delivery in
                                </Typography>
                                <Typography className="manDays" variant='h4' sx={{ color: "#fff", fontSize: "3vw", fontWeight: "700" }}>
                                        {selectedTotalManDays ? selectedTotalManDays : ""} Man Days
                                </Typography>
                        </Box>

                        <Box>
                                <Typography sx={{ fontSize: "1.8vw", color: "#fff", fontWeight: "700" }}>
                                        Why you should choose intagleo
                                </Typography>

                                <Box className="whyChoose">
                                        <ul>
                                                <li>Free Project Manager</li>
                                                <li>No Hiring Costs</li>
                                                <li>Niche Experts</li>
                                                <li>No Equipment Management</li>
                                                <li>No Resource Management</li>
                                        </ul>
                                        <ul>
                                                <li>Timely Deliveries</li>
                                                <li>Greater Control</li>
                                                <li>No Bonus Benefits Management</li>
                                                <li>No Unpredictable Costs</li>
                                        </ul>
                                        <ul>
                                                <li>Budget Friendly</li>
                                                <li>Easy Scalability</li>
                                                <li>No HR Responsibilities</li>
                                                <li>No Work Delays</li>
                                        </ul>
                                </Box>
                        </Box>


                </Box>

        )

}


export default TotalManDays;