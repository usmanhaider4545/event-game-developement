import React, { useState, useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import UserInformation from "./UserInformation";


function TotalManDays({removeDisabledButton,activeDisabledBtn}) {
        const localStorageManDays = localStorage.getItem("totalManDays");

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

        const enableActionButton = () => {
                removeDisabledButton();
        };
        const disableActionButton = () => {
                activeDisabledBtn()
        }


        return (
                <Box>
                        <UserInformation enableActionButton={enableActionButton} disableActionButton={disableActionButton} />

                        <Box>
                                <Typography sx={{ fontSize: { xs: "32px", md: "27px" }, color: "#fff", fontWeight: "700" }}>
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