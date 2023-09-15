import React, { useState } from 'react';
import { Button, Step, StepLabel, Stepper, Typography, Container, Box } from '@mui/material';
import stepsData from '../steps.json';
import Logo from "../images/logo.png"
import MobileStepper from '@mui/material/MobileStepper';
import { Stack } from '@mui/material';
import Industries from "./industries";
import AppType from "./appType";
import AppDesignedFor from "./appDesignedFor"

function StepperComponent() {
    const [activeStep, setActiveStep] = useState(0);

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };




    return (
        // <Container sx={{ display: "flex", height: "100%", alignItems: "center", justifyContent: "center", flexWrap: "wrap" }}>

        <Container sx={{ transform: "translate(50%,-50%)", right: "50%", top: "50%", position: "absolute" }}>

            {activeStep == 0 ?
                <Box>
                    <Typography variant='h2'>
                        <img src={Logo} />
                    </Typography>

                    <Box sx={{ pt: 5 }}>
                        <Typography sx={{ fontSize: "32px", color: "#fff" }}>Hey there 👋 </Typography>
                        <Typography sx={{ pt: 5, fontSize: "60px", color: "#fff" }}>
                            <strong>Have a product idea? </strong></Typography>
                        <Typography sx={{ fontSize: "60px", color: "#fff" }}> Get time and workforce estimations now!  </Typography>
                    </Box>

                </Box>
                :

                <>
                    {/* <Stepper activeStep={activeStep} alternativeLabel>
                        {stepsData.map((step, index) => (
                            <Step key={index}>
                                <StepLabel>{step.title}</StepLabel>
                            </Step>
                        ))}
                    </Stepper> */}
                    {activeStep !== stepsData.length ?
                        <Stack sx={{ flexDirection: "inherit", alignItems: "center", justifyContent: "center" }}>
                            <Typography variant='p' onClick={handleBack} sx={{ cursor: "pointer" }}>
                                {activeStep == 1 ?
                                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                                        <path d="M7.5 22.5L22.5 7.5M7.5 7.5L22.5 22.5" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                    :
                                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="23" viewBox="0 0 30 23" fill="none">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M9.82159 22.5607L0.432141 13.0147C-0.144042 12.4289 -0.144042 11.4792 0.432141 10.8934L9.82159 1.34745C10.3978 0.761667 11.332 0.761667 11.9081 1.34745C12.4843 1.93324 12.4843 2.88299 11.9081 3.46878L5.03737 10.4541L30 10.4541L30 13.4541L5.03737 13.4541L11.9081 20.4393C12.4843 21.0251 12.4843 21.9749 11.9081 22.5607C11.332 23.1464 10.3978 23.1464 9.82159 22.5607Z" fill="white" />
                                    </svg>
                                }
                            </Typography>
                            <MobileStepper
                                variant="progress"
                                steps={stepsData.length}
                                position="static"
                                activeStep={activeStep}
                                sx={{ width: "80%", background: "transparent" }}

                            />
                        </Stack>
                        : ""}

                    <Box>
                        {activeStep === stepsData.length ? (
                            <div>
                                <Typography variant="h5">All steps completed</Typography>
                            </div>
                        ) : (
                            <Box>
                                {activeStep === 1 ?
                                    <Industries />
                                    :
                                    activeStep === 2 ?
                                        <AppType />
                                        :
                                        activeStep === 3 ?
                                            <AppDesignedFor />
                                            :
                                            ""
                                }
                            </Box>

                            //         <Box sx={{ padding: "25px 0" }}>
                            //             <Typography variant="h5" sx={{ color: "#fff"}}>{stepsData[activeStep].title}</Typography>

                            //             <Box sx={{ padding: "25px 0 0 0" }}>
                            //                 <Stack flexDirection="inherit" justifyContent="center" gap="100px">
                            //                <>
                            //                 <FormControl>
                            //                      <RadioGroup
                            //                         aria-labelledby="demo-radio-buttons-group-label"
                            //                         defaultValue="female"
                            //                         name="radio-buttons-group"
                            //                     >
                            //                         {stepsData[activeStep].leftColumn.map((item, index) => (
                            //                             <FormControlLabel sx={{ color: "#fff" }} value={item} control={<Radio />} label={item} />
                            //                         ))}
                            //                     </RadioGroup>
                            //                 </FormControl>
                            //                     <FormControl>
                            //                         <RadioGroup
                            //                             aria-labelledby="demo-radio-buttons-group-label"
                            //                             defaultValue="female"
                            //                             name="radio-buttons-group"
                            //                         >
                            //                           {stepsData[activeStep].rightColumn.map((item, index) => (
                            //                                 <FormControlLabel sx={{color : "#fff"}} value={item} control={<Radio />} label={item} />
                            //                             ))}
                            //                         </RadioGroup>
                            //                     </FormControl>
                            //                    </>
                            //                  </Stack>

                            //             </Box>

                            //    </Box>
                        )}
                    </Box>
                </>
            }

            <Button onClick={handleNext} sx={{ background: "#3B82F6", width: "100%", maxWidth: "890px", marginTop: "30px", height: "70px", borderRadius: "40px", fontSize: "32px", color: "#fff" }}>
                {activeStep == 0 ? "Get Started" : "Next"}
            </Button>

        </Container>
    );
}

export default StepperComponent;
