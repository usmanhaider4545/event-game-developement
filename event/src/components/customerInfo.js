import React, { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import UserInformation from "./UserInformation";
import { motion } from "framer-motion";

function TotalManDays({
  removeDisabledButton,
  activeDisabledBtn,
  checked,
  setChecked,
}) {
  const localStorageManDays = localStorage.getItem("totalManDays");

  const [selectedTotalManDays, setSelectedTotalManDays] = useState();

  useEffect(() => {
    let parsManDays = JSON.parse(localStorageManDays);
    let getNumberFromArray = [];
    parsManDays?.map((item, index) => {
      getNumberFromArray?.push(item[2]);
    });
    const daysSum = getNumberFromArray.reduce(
      (partialSum, a) => partialSum + a,
      0,
    );
    setSelectedTotalManDays(daysSum);
  }, []);

  const enableActionButton = () => {
    removeDisabledButton();
  };
  const disableActionButton = () => {
    activeDisabledBtn();
  };

  return (
    <Box>
      <UserInformation
        enableActionButton={enableActionButton}
        disableActionButton={disableActionButton}
        checked={checked}
        setChecked={setChecked}
      />

      <Box>
        <Typography
          sx={{
            fontSize: { xs: "32px", md: "27px" },
            color: "#fff",
            fontWeight: "700",
            // display: "flex",
          }}
        >
          <motion.p
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 1 }}
          >
            Why you should choose intagleo
          </motion.p>
        </Typography>

        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.25 }}
          className='whyChoose'
        >
          <ul>
            <motion.li
              initial={{ opacity: 0, y: -100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.5 }}
            >
              Free Project Manager
            </motion.li>
            <motion.li
              initial={{ opacity: 0, y: -100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.25, delay: 1.5 }}
            >
              No Hiring Costs
            </motion.li>
            <motion.li
              initial={{ opacity: 0, y: -100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5, delay: 1.5 }}
            >
              Niche Experts
            </motion.li>
            <motion.li
              initial={{ opacity: 0, y: -100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.75, delay: 1.5 }}
            >
              No Equipment Management
            </motion.li>
            <motion.li
              initial={{ opacity: 0, y: -100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 2, delay: 1.5 }}
            >
              No Resource Management
            </motion.li>
          </ul>
          <ul>
            <motion.li
              initial={{ opacity: 0, y: -100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 2.25, delay: 1.5 }}
            >
              Timely Deliveries
            </motion.li>
            <motion.li
              initial={{ opacity: 0, y: -100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 2.5, delay: 1.5 }}
            >
              Greater Control
            </motion.li>
            <motion.li
              initial={{ opacity: 0, y: -100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 2.75, delay: 1.5 }}
            >
              No Bonus Benefits Management
            </motion.li>
            <motion.li
              initial={{ opacity: 0, y: -100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 3, delay: 1.5 }}
            >
              No Unpredictable Costs
            </motion.li>
          </ul>
          <ul>
            <motion.li
              initial={{ opacity: 0, y: -100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 3.25, delay: 1.5 }}
            >
              Budget Friendly
            </motion.li>
            <motion.li
              initial={{ opacity: 0, y: -100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 3.5, delay: 1.5 }}
            >
              Easy Scalability
            </motion.li>
            <motion.li
              initial={{ opacity: 0, y: -100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 3.75, delay: 1.5 }}
            >
              No HR Responsibilities
            </motion.li>
            <motion.li
              initial={{ opacity: 0, y: -100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 4, delay: 1.5 }}
            >
              No Work Delays
            </motion.li>
          </ul>
        </motion.div>
      </Box>
    </Box>
  );
}

export default TotalManDays;
