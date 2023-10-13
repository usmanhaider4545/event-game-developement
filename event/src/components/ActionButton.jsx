import React from "react";
import { Box, Button } from "@mui/material";
import styled from "@emotion/styled";
import { motion } from "framer-motion";

const ButtonWrapper = styled(Box)`
  position: fixed;
  bottom: 27px;
  right: 0;
  left: 0;
  z-index: 999;
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

const ActionButton = ({ activeStep, handleNext, disabledButton }) => {
  if (activeStep === 8) return null;

  let buttonText = "Next";
  if (activeStep === 0) buttonText = "Get Started";

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1, duration: 2 }}
    >
      {activeStep !== 7 && (
        <ButtonWrapper>
          <ButtonStyled
            disabled={disabledButton && activeStep !== 0}
            onClick={handleNext}
          >
            {buttonText}
          </ButtonStyled>
        </ButtonWrapper>
      )}
    </motion.div>
  );
};

export default ActionButton;
