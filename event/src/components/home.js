import React, { useState, useEffect } from "react";
import { Button, Typography, Container, Box } from "@mui/material";
import stepsData from "../steps.json";
import Logo from "../images/logo.png";
import MobileStepper from "@mui/material/MobileStepper";
import { Stack } from "@mui/material";
import Industries from "./industries";
import AppType from "./appType";
import AppDesignedFor from "./appDesignedFor";
import Categories from "./categories";
import CategoriesFeatures from "./categoriesFeatures";
import CustomerInfo from "./customerInfo";
import GetFinalEstimates from "./getFinalEstimates";
import GaintCharts from "./gaintChart";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import ActionButton from "./ActionButton";
import AccessRequiredResources from "./accessRequiredResources";
import { motion, AnimatePresence } from "framer-motion";

import icon1 from "../images/29_cognative-services 1.png";
import icon2 from "../images/icon 1.png";
import icon3 from "../images/Microsoft_Azure 1.png";
import icon4 from "../images/image 10.png";
import icon5 from "../images/Microsoft_Defender_2020_Fluent_Design_icon 1.png";
import icon6 from "../images/vecteezy_chatgpt-openai-logo-icon_21495993_427 1.png";
import icon7 from "../images/pngwing 3.png";
import icon8 from "../images/pngaaa 1.png";
import icon9 from "../images/Postgresql_elephant 1.png";
import icon10 from "../images/Group 198.png";
import icon11 from "../images/image 78.png";
import icon12 from "../images/image 14.png";
import icon13 from "../images/image 65.png";
import icon14 from "../images/image 79.png";
import icon15 from "../images/image 83.png";
import icon16 from "../images/java-script 1.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PlayerSubCategoriesFeatures from "./playerSubCategories";

// import icon17 from "../images/";
// import icon18 from "../images/";
// import icon19 from "../images/";
// import icon20 from "../images/";

function StepperComponent() {
  const icons = [
    icon1,
    icon2,
    icon3,
    icon4,
    icon5,
    icon6,
    icon7,
    icon8,
    icon9,
    icon10,
    icon11,
    icon12,
    icon13,
    icon14,
    icon15,
    icon16,
  ];

  const [activeStep, setActiveStep] = useState(0);
  const [checked, setChecked] = useState(false);
  const [disabledButton, setDisabledButton] = useState(true);
  const [playerSubCategories, setPlayerSubCategories] = useState(false);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setDisabledButton(true);
  };

  const handleBack = () => {
    if (activeStep === 9) {
      setActiveStep((prevActiveStep) => prevActiveStep - 8);
      setDisabledButton(true);
    } else if (activeStep === 7) {
      setActiveStep((prevActiveStep) => prevActiveStep - 1);
    } else {
      setActiveStep((prevActiveStep) => prevActiveStep - 1);
      setDisabledButton(true);
    }
  };

  const removeDisabledButton = () => {
    setDisabledButton(false);
  };

  const activeDisabledBtn = () => {
    if (activeStep === 7 && !checked) {
      setDisabledButton(false);
    } else {
      setDisabledButton(true);
    }
  };

  const resetAction = () => {
    setActiveStep(0);
    setChecked(false);
    localStorage.clear();
  };

  const settings = {
    infinite: true,
    slidesToShow: 10,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };

  const currentAppCategory = localStorage.getItem("appCategory");

  if (currentAppCategory === "Player") {
    const appSoftwareObject = {
      MobileApp: true,
      WebApplication: true,
    };

    localStorage.setItem("appSoftware", JSON.stringify(appSoftwareObject));
  }

  return (
    <>
      {activeStep !== stepsData.length && activeStep !== 0 ? (
        <motion.div
          initial={{ opacity: 0, x: -150 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <Stack
            className='progressBar'
            sx={{
              position: "fixed",
              top: "17px",
              right: "0",
              left: "0",
              zIndex: "999",
              margin: "auto",
              maxWidth: "1030px",
              flexDirection: "inherit",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography
              variant='p'
              onClick={handleBack}
              sx={{ cursor: "pointer" }}
            >
              {activeStep === 1 ? (
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='30'
                  height='30'
                  viewBox='0 0 30 30'
                  fill='none'
                >
                  <path
                    d='M7.5 22.5L22.5 7.5M7.5 7.5L22.5 22.5'
                    stroke='white'
                    stroke-width='4'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                  />
                </svg>
              ) : (
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='30'
                  height='23'
                  viewBox='0 0 30 23'
                  fill='none'
                >
                  <path
                    fill-rule='evenodd'
                    clip-rule='evenodd'
                    d='M9.82159 22.5607L0.432141 13.0147C-0.144042 12.4289 -0.144042 11.4792 0.432141 10.8934L9.82159 1.34745C10.3978 0.761667 11.332 0.761667 11.9081 1.34745C12.4843 1.93324 12.4843 2.88299 11.9081 3.46878L5.03737 10.4541L30 10.4541L30 13.4541L5.03737 13.4541L11.9081 20.4393C12.4843 21.0251 12.4843 21.9749 11.9081 22.5607C11.332 23.1464 10.3978 23.1464 9.82159 22.5607Z'
                    fill='white'
                  />
                </svg>
              )}
            </Typography>
            <MobileStepper
              variant='progress'
              steps={stepsData.length}
              position='static'
              activeStep={activeStep}
              sx={{ width: "80%", background: "transparent" }}
            />
            <RestartAltIcon
              onClick={resetAction}
              sx={{ color: "#fff", fontSize: "34px", cursor: "pointer" }}
            />
          </Stack>
        </motion.div>
      ) : (
        ""
      )}

      {activeStep == 0 ? (
        <Container
          sx={{ height: "100%", zIndex: "123" }}
          style={{ overflowY: "auto", overflowX: "hidden" }}
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
          >
            <Box
              sx={{
                transform: "translate(50%,-50%)",
                right: "50%",
                top: "42%",
                position: "absolute",
                width: "100%",
              }}
            >
              <img src={Logo} alt='Logo' style={{ position: "relative" }} />

              <Box sx={{ pt: 5 }}>
                <Typography
                  sx={{ fontSize: "32px", color: "#fff" }}
                  style={{ marginBottom: "20px" }}
                >
                  Hey there 👋{" "}
                </Typography>
                <Typography sx={{ pt: 5, fontSize: "60px", color: "#fff" }}>
                  <strong>Have a Product Idea? </strong>
                </Typography>

                <Typography
                  style={{
                    display: "flex",
                    gap: "2.5rem",
                    justifyContent: "center ",
                  }}
                  sx={{ fontSize: "60px", color: "#fff" }}
                >
                  {" "}
                  Get Time and{" "}
                  <motion.div
                    initial={{ scale: 1, opacity: 0.6 }}
                    animate={{ scale: 1.1, opacity: 1 }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity, // Infinite animation
                      repeatType: "reverse",
                    }} // Reverse animation on repeat
                  >
                    <span style={{ color: "#3b82f6" }}>
                      Workforce Estimations
                    </span>
                  </motion.div>{" "}
                  Now!{" "}
                </Typography>
              </Box>
              <Slider style={{ marginTop: "6rem" }} {...settings}>
                <div>
                  <img style={{ height: "50px", width: "50px" }} src={icon1} />
                </div>
                <div>
                  <img style={{ height: "50px", width: "50px" }} src={icon2} />
                </div>
                <div>
                  <img style={{ height: "50px", width: "50px" }} src={icon3} />
                </div>
                <div>
                  <img style={{ height: "50px", width: "50px" }} src={icon4} />
                </div>
                <div>
                  <img style={{ height: "50px", width: "50px" }} src={icon5} />
                </div>
                <div>
                  <img style={{ height: "50px", width: "50px" }} src={icon6} />
                </div>
                <div>
                  <img style={{ height: "50px", width: "50px" }} src={icon7} />
                </div>
                <div>
                  <img style={{ height: "50px", width: "50px" }} src={icon8} />
                </div>
                <div>
                  <img style={{ height: "50px", width: "50px" }} src={icon9} />
                </div>
                <div>
                  <img style={{ height: "50px", width: "50px" }} src={icon10} />
                </div>
                <div>
                  <img style={{ height: "50px", width: "50px" }} src={icon11} />
                </div>
                <div>
                  <img style={{ height: "50px", width: "50px" }} src={icon12} />
                </div>
                <div>
                  <img style={{ height: "50px", width: "50px" }} src={icon13} />
                </div>
                <div>
                  <img style={{ height: "50px", width: "50px" }} src={icon14} />
                </div>
                <div>
                  <img style={{ height: "50px", width: "50px" }} src={icon15} />
                </div>
                <div>
                  <img style={{ height: "50px", width: "50px" }} src={icon16} />
                </div>
              </Slider>
            </Box>
          </motion.div>
        </Container>
      ) : (
        <>
          <Container
            sx={{ height: "100%", zIndex: "123", position: "relative" }}
          >
            <Box
              sx={{
                transform: "translate(50%,-50%)",
                right: "50%",
                top: "50%",
                position: "absolute",
                width: "100%",
              }}
            >
              {activeStep === stepsData.length ? (
                <div>
                  <Typography variant='h5'>All steps completed</Typography>
                </div>
              ) : (
                <>
                  {activeStep === 1 ? (
                    <Industries removeDisabledButton={removeDisabledButton} />
                  ) : activeStep === 2 ? (
                    <Categories
                      activeDisabledBtn={activeDisabledBtn}
                      removeDisabledButton={removeDisabledButton}
                    />
                  ) : activeStep === 3 &&
                    localStorage?.getItem("appCategory") &&
                    localStorage?.getItem("appCategory") === "Player" ? (
                    (() => {
                      setActiveStep(activeStep + 1);
                      return null;
                    })()
                  ) : activeStep === 3 ? (
                    <AppType
                      activeDisabledBtn={activeDisabledBtn}
                      removeDisabledButton={removeDisabledButton}
                    />
                  ) : activeStep === 4 ? (
                    <AppDesignedFor
                      activeDisabledBtn={activeDisabledBtn}
                      removeDisabledButton={removeDisabledButton}
                    />
                  ) : activeStep === 5 ? (
                    <CategoriesFeatures
                      activeDisabledBtn={activeDisabledBtn}
                      removeDisabledButton={removeDisabledButton}
                    />
                  ) : activeStep === 6 ? (
                    localStorage.getItem("industry") === "Digital Signage" &&
                    localStorage.getItem("appCategory") === "Player" ? (
                      <PlayerSubCategoriesFeatures resetAction={resetAction} />
                    ) : (
                      setActiveStep(activeStep + 1)
                    )
                  ) : activeStep === 7 ? (
                    <CustomerInfo
                      resetAction={resetAction}
                      removeDisabledButton={removeDisabledButton}
                      activeDisabledBtn={activeDisabledBtn}
                      checked={checked}
                      setChecked={setChecked}
                    />
                  ) : activeStep === 8 ? (
                    <AccessRequiredResources setActiveStep={setActiveStep} />
                  ) : activeStep === 9 ? (
                    <GaintCharts resetAction={resetAction} />
                  ) : (
                    ""
                  )}
                </>
              )}
            </Box>
          </Container>
        </>
      )}

      <ActionButton
        activeStep={activeStep}
        handleNext={handleNext}
        disabledButton={activeStep !== 6 ? disabledButton : ""}
        checked={checked}
        setChecked={setChecked}
      />
    </>
  );
}

export default StepperComponent;
