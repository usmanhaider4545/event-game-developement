import React, { useEffect, useState } from "react";
import { Box, Stack, Typography, Button } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import CircularProgress from "@mui/material/CircularProgress";
import DoneIcon from "../images/tick.svg";
import styled from "@emotion/styled";
import { motion } from "framer-motion";
import Lottie from "react-lottie";
import animationData from "../lotties/loadingEstimates.json";

const ButtonWrapper = styled(Box)`
  position: fixed;
  right: 0;
  left: 0;
  z-index: 999;
  margin-top: 40px;
`;

const ButtonStyled = styled(Button)`
  font-weight: 700;
  background: #3b82f6 !important;
  width: 100%;
  max-width: 890px;
  height: 70px;
  border-radius: 40px;
  font-size: 32px;
  color: #fff;
  &:disabled {
    opacity: 0.5;
    pointer-events: none;
  }
`;
const AccessRequiredResources = ({ setActiveStep }) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const totalRequiredResources = [
    { id: 1, name: "Required Resources" },
    { id: 2, name: "Project Duration" },
    { id: 3, name: "Total Man Days" },
    { id: 4, name: "Recommended team" },
    { id: 5, name: "Recommended technology" },
    { id: 6, name: "Preparing Timeline" },
  ];

  const [loading, setLoading] = useState(true);
  const [currentRow, setCurrentRow] = useState(1);
  const [showButton, setShowButton] = useState(false);
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    if (currentRow <= 6) {
      const randomDelay = Math.floor(Math.random() * 2000) + 1000;
      const timer = setTimeout(() => {
        setLoading(false);
        const nextRow = currentRow + 1;
        setCurrentRow(nextRow);
        setLoading(true);
      }, randomDelay);

      return () => clearTimeout(timer);
    }
    if (currentRow >= 6) {
      setShowButton(true);
      setShowLoader(false);
    }
  }, [currentRow]);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  return (
    <>
      <Box className='requiredResourcesTable gradientBg'>
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div>
            {showLoader ? (
              <Lottie options={defaultOptions} height={100} width={100} />
            ) : (
              ""
            )}
          </div>
          <Typography
            variant='h6'
            sx={{
              color: "#fff",
              fontWeight: "400",
              fontSize: "23px",
              textAlign: "center",
            }}
          >
            {currentRow > 6 ? "" : "Please wait while we are"}
          </Typography>

          <Typography
            variant='h6'
            sx={{
              color: "#fff",
              fontWeight: "700",
              fontSize: "32px",
              textAlign: "center",
            }}
            style={currentRow > 6 ? { marginTop: "20px" } : {}}
          >
            {currentRow === 1
              ? "Assessing Required Resources"
              : currentRow === 2
              ? "Calculating Project Duration"
              : currentRow === 3
              ? "Calculating Total Man Days"
              : currentRow === 4
              ? "Analyzing Recommended Team"
              : currentRow === 5
              ? "Analyzing Recommended Technology"
              : currentRow === 6
              ? "Preparing Timeline"
              : "Processing Done"}
          </Typography>
        </motion.div>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <TableContainer
            component={Paper}
            sx={{
              background: "transparent",
              boxShadow: "none",
              maxHeight: 440,
              width: "70%",
              marginTop: "30px",
              marginBottom: "50px",
            }}
          >
            <Table sx={{ minWidth: 650 }} aria-label='simple table'>
              <TableBody>
                {totalRequiredResources.map((rresources, index) => {
                  return (
                    <motion.tr
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{
                        delay: 0.5 * index,
                        duration: 0.5,
                      }}
                      key={rresources.id}
                      sx={{
                        "&:last-child td, &:last-child th": {
                          borderBottom:
                            "1px solid var(--Stroke, rgba(59, 130, 246, 0.54))",
                        },
                      }}
                      style={{ height: "70px" }}
                    >
                      <TableCell
                        sx={{
                          borderBottom:
                            "1px solid var(--Stroke, rgba(59, 130, 246, 0.54))",
                        }}
                        align='left'
                        fontWeight='400'
                        fontSize='16px'
                      >
                        {rresources.name}
                      </TableCell>
                      <TableCell
                        sx={{
                          borderBottom:
                            "1px solid var(--Stroke, rgba(59, 130, 246, 0.54))",
                        }}
                        align='right'
                      >
                        {currentRow === index + 1 && loading ? (
                          <CircularProgress size={30} />
                        ) : currentRow > index + 1 ? (
                          <img
                            src={DoneIcon}
                            alt='folder'
                            style={{ width: "30px", height: "30px" }}
                          />
                        ) : null}
                      </TableCell>
                    </motion.tr>
                  );
                })}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </Box>
      {showButton && (
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <ButtonWrapper>
            <ButtonStyled onClick={handleNext}>
              Get Final Estimates
            </ButtonStyled>
          </ButtonWrapper>
        </motion.div>
      )}
    </>
  );
};

export default AccessRequiredResources;
