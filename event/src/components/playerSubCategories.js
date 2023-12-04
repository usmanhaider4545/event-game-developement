import React from "react";
import {
  Box,
  Checkbox,
  FormControlLabel,
  Stack,
  Typography,
} from "@mui/material";

import { motion } from "framer-motion";

function PlayerSubCategoriesFeatures() {
  const data = JSON.parse(localStorage.getItem("totalManDays"));
  const featureNames = data.map((subn) => subn.name);
  const subFeatures = data.map((subf) => subf.subFeatures);
  console.log(data);

  return (
    <Box>
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        <Typography
          variant='h6'
          sx={{
            color: "#fff",
            padding: "18px 0",
            fontWeight: "700",
            fontSize: { xs: "35px", md: "27px" },
          }}
        >
          What features will we provide for the options you previously choose ?
        </Typography>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.75, duration: 0.75 }}
        style={{
          height: "600px",
          width: "100%",
          overflowX: "auto",
          whiteSpace: "nowrap",
        }}
      >
        {data?.map((selectedNames) => (
          <div
            key={selectedNames?.name}
            style={{
              display: "inline-block",
              margin: "0 20px",
              verticalAlign: "top",
            }}
          >
            <h3
              style={{
                textAlign: "left",
                color: "#fff",
                fontWeight: "700",
              }}
            >
              {selectedNames?.name}
            </h3>
            <div>
              {selectedNames?.subFeatures?.map((subNames, index) => (
                <div
                  key={index}
                  style={{
                    width: "250px",
                    whiteSpace: "normal",
                    color: "#fff",
                  }}
                  className='subOptions'
                >
                  {subNames}
                </div>
              ))}
            </div>
          </div>
        ))}
      </motion.div>
    </Box>
  );
}

export default PlayerSubCategoriesFeatures;
