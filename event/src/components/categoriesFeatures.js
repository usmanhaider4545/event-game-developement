import React, { useState, useEffect } from 'react';
import { Box, Stack, Typography } from '@mui/material';
import FormControlLabel from '@mui/material/FormControlLabel';
import { DigitalSignage } from "../DigitalSignage";
import { Fintech } from "../Fintech";
import { WayFinding } from "../WayFinding";
import { EmbeddedSystemsIoT } from "../EmbeddedSystemsIot";
import { BackupRecovery } from "../BackupandRecovery";
import { Ecommerce } from "../eCommerce";
import { RealEstate } from "../RealEstate";
import { IndustrialCompliance } from "../IndustrialCompliance";
import { TransportManagementSystem } from "../TransportManagement";
import { HealthTech } from "../HealthCare";
import { ComputerVision } from "../ComputerVision";
import { VirtualReality } from "../VirtualReality";
import Checkbox from '@mui/material/Checkbox';
import { ArtificialInteligence } from "../ArtificialInteligence";
import { MachineLearning } from "../MachineLearning";
import { DeepLearning } from "../DeepLearning";

function CategoriesFeatures(props) {
    const [localStorageCategory, setLocalStorageCategory] = useState(localStorage.getItem("appCategory"));
    const [localStorageIndustry, setLocalStorageIndustry] = useState(localStorage.getItem("industry"));

    const [features, setFeatures] = useState([]);

    const [totalManDays, setTotalManDays] = useState([]);

    const handleChange = (event) => {
         if (event.target.checked){
             let parsValue = parseInt(event.target.value);
        totalManDays.push([
            event.target.name,
            event.target.ariaLabel,
            parsValue
        ]);
         } else {
             totalManDays.map((array , index) => {
                 for (var i = array.length - 1; i >= 0; i--) {
                     if (array[i] == event.target.name) {
                         totalManDays.splice(index, 1);
                     }
                 }
             })
         }
        if (totalManDays.length === 0) {
            props.activeDisabledBtn();
        }else{
            props.removeDisabledButton();
        }
        let totalManDaysStringfy = JSON.stringify(totalManDays);
        localStorage.setItem("totalManDays", totalManDaysStringfy);
    };

    useEffect(() => {
         window.onbeforeunload = closeIt;
        getDataCategories();
    }, []);


    function closeIt() {
        localStorage.clear("totalManDays");
    }

    const getDataCategories = () => {
 
        if (localStorageIndustry === "Digital Signage") {
            let combineCategories = []
             DigitalSignage.map((item, index) => {
                 if (item.category === localStorageCategory) {
                 combineCategories = item?.features.map((feature, index) => {
                    return {
                        "name" : feature.name ? feature.name : "-",
                        "manDays": feature.manDays ? feature.manDays : "-",
                        "totalManDays": feature.totalManDays ? feature.totalManDays : "-",

                    }
                })
            }
                 setFeatures(combineCategories);
            })
        } else if (localStorageIndustry === "Fintech") {
            let combineCategories = []
            Fintech.map((item, index) => {
                if (item.category === localStorageCategory) {
                    combineCategories = item?.features.map((feature, index) => {
                        return {
                            "name": feature.name ? feature.name : "-",
                            "manDays": feature.manDays ? feature.manDays : "-",
                            "totalManDays": feature.totalManDays ? feature.totalManDays : "-",
                        }
                    })
                }
                setFeatures(combineCategories);
            })
        } else if (localStorageIndustry === "Wayfinding") {
            let combineCategories = []
            WayFinding.map((item, index) => {
                if (item.category === localStorageCategory) {
                    combineCategories = item?.features.map((feature, index) => {
                        return {
                            "name": feature.name ? feature.name : "-",
                            "manDays": feature.manDays ? feature.manDays : "-",
                            "totalManDays": feature.totalManDays ? feature.totalManDays : "-",
                        }
                    })
                }
                setFeatures(combineCategories);
            })
        } else if (localStorageIndustry === "IOT/Embedded") {
            let combineCategories = []
            EmbeddedSystemsIoT.map((item, index) => {
                if (item.category === localStorageCategory) {
                    combineCategories = item?.features.map((feature, index) => {
                        return {
                            "name": feature.name ? feature.name : "-",
                            "manDays": feature.manDays ? feature.manDays : "-",
                            "totalManDays": feature.totalManDays ? feature.totalManDays : "-",
                        }
                    })
                }
                setFeatures(combineCategories);
            })
        } else if (localStorageIndustry === "Storage - Backup and Recovery") {
            let combineCategories = []
            BackupRecovery.map((item, index) => {
                if (item.category === localStorageCategory) {
                    combineCategories = item?.features.map((feature, index) => {
                        return {
                            "name": feature.name ? feature.name : "-",
                            "manDays": feature.manDays ? feature.manDays : "-",
                            "totalManDays": feature.totalManDays ? feature.totalManDays : "-",
                        }
                    })
                }
                setFeatures(combineCategories);
            })
        } else if (localStorageIndustry === "Ecommerce and Retail") {
            let combineCategories = []
            Ecommerce.map((item, index) => {
                if (item.category === localStorageCategory) {
                    combineCategories = item?.features.map((feature, index) => {
                        return {
                            "name": feature.name ? feature.name : "-",
                            "manDays": feature.manDays ? feature.manDays : "-",
                            "totalManDays": feature.totalManDays ? feature.totalManDays : "-",
                        }
                    })
                }
                setFeatures(combineCategories);
            })
        } else if (localStorageIndustry === "Real Estate") {
            let combineCategories = []
            RealEstate.map((item, index) => {
                if (item.category === localStorageCategory) {
                    combineCategories = item?.features.map((feature, index) => {
                        return {
                            "name": feature.name ? feature.name : "-",
                            "manDays": feature.manDays ? feature.manDays : "-",
                            "totalManDays": feature.totalManDays ? feature.totalManDays : "-",
                        }
                    })
                }
                setFeatures(combineCategories);
            })
        } else if (localStorageIndustry === "Industrial Compliance") {
            let combineCategories = []
            IndustrialCompliance.map((item, index) => {
                if (item.category === localStorageCategory) {
                    combineCategories = item?.features.map((feature, index) => {
                        return {
                            "name": feature.name ? feature.name : "-",
                            "manDays": feature.manDays ? feature.manDays : "-",
                            "totalManDays": feature.totalManDays ? feature.totalManDays : "-",
                        }
                    })
                }
                setFeatures(combineCategories);
            })
        } else if (localStorageIndustry === "Logistics Freight") {
            let combineCategories = []
            TransportManagementSystem.map((item, index) => {
                if (item.category === localStorageCategory) {
                    combineCategories = item?.features.map((feature, index) => {
                        return {
                            "name": feature.name ? feature.name : "-",
                            "manDays": feature.manDays ? feature.manDays : "-",
                            "totalManDays": feature.totalManDays ? feature.totalManDays : "-",
                        }
                    })
                }
                setFeatures(combineCategories);
            })
        } else if (localStorageIndustry === "Healthcare") {
            let combineCategories = []
            HealthTech.map((item, index) => {
                if (item.category === localStorageCategory) {
                    combineCategories = item?.features.map((feature, index) => {
                        return {
                            "name": feature.name ? feature.name : "-",
                            "manDays": feature.manDays ? feature.manDays : "-",
                            "totalManDays": feature.totalManDays ? feature.totalManDays : "-",
                        }
                    })
                }
                setFeatures(combineCategories);
            })
        } else if (localStorageIndustry === "Computer Vision") {
            let combineCategories = []
            ComputerVision.map((item, index) => {
                if (item.category === localStorageCategory) {
                    combineCategories = item?.features.map((feature, index) => {
                        return {
                            "name": feature.name ? feature.name : "-",
                            "manDays": feature.manDays ? feature.manDays : "-",
                            "totalManDays": feature.totalManDays ? feature.totalManDays : "-",
                        }
                    })
                }
                setFeatures(combineCategories);
            })
        } else if (localStorageIndustry === "Virtual Reality") {
            let combineCategories = []
            VirtualReality.map((item, index) => {
                if (item.category === localStorageCategory) {
                    combineCategories = item?.features.map((feature, index) => {
                        return {
                            "name": feature.name ? feature.name : "-",
                            "manDays": feature.manDays ? feature.manDays : "-",
                            "totalManDays": feature.totalManDays ? feature.totalManDays : "-",
                        }
                    })
                }
                setFeatures(combineCategories);
            })
        } else if (localStorageIndustry === "Artificial Inteligence") {
            let combineCategories = []
            ArtificialInteligence.map((item, index) => {
                if (item.category === localStorageCategory) {
                    combineCategories = item?.features.map((feature, index) => {
                        return {
                            "name": feature.name ? feature.name : "-",
                            "manDays": feature.manDays ? feature.manDays : "-",
                            "totalManDays": feature.totalManDays ? feature.totalManDays : "-",
                        }
                    })
                }
                setFeatures(combineCategories);
            })
        } else if (localStorageIndustry === "Machine Learning") {
            let combineCategories = []
            MachineLearning.map((item, index) => {
                if (item.category === localStorageCategory) {
                    combineCategories = item?.features.map((feature, index) => {
                        return {
                            "name": feature.name ? feature.name : "-",
                            "manDays": feature.manDays ? feature.manDays : "-",
                            "totalManDays": feature.totalManDays ? feature.totalManDays : "-",
                        }
                    })
                }
                setFeatures(combineCategories);
            })
        } else if (localStorageIndustry === "Deep Learning") {
            let combineCategories = []
            DeepLearning.map((item, index) => {
                if (item.category === localStorageCategory) {
                    combineCategories = item?.features.map((feature, index) => {
                        return {
                            "name": feature.name ? feature.name : "-",
                            "manDays": feature.manDays ? feature.manDays : "-",
                            "totalManDays": feature.totalManDays ? feature.totalManDays : "-",
                        }
                    })
                }
                setFeatures(combineCategories);
            })
        }
    }




    return (
        <Box>
            <Typography variant='h6' sx={{ color: "#fff", padding: "18px 0", fontWeight: "700", fontSize: "32px" }}>
                What features do you envision for the {localStorageCategory} in {localStorageIndustry}?
            </Typography>
            <Stack sx={{ overflowX: "auto", paddingLeft : "30px" , width: "100%"}} className='optionsBlocks' display="-webkit-inline-box" flexDirection="initial" justifyContent="center" gap="100px">
                <Box sx={{width : "40%"}}> 
                {features.length > 0 ? features.slice(0, 6).map((f , i) => (
                  <FormControlLabel
                        control={
                          <Checkbox 
                            onChange={handleChange} 
                            name={f.name} 
                            inputProps={{ 'aria-label': f.manDays }}
                            value={f.totalManDays} 
                            />
                        }
                        label={f.name}
                    />  
                   ))
                    : ""
                }
                </Box>
                {features.length > 6 ?
                    <Box sx={{ width: "40%" }}>
                    {features.length > 0 ? features.slice(6, 12).map((f, i) => (
                        <FormControlLabel
                            control={
                                <Checkbox
                                    onChange={handleChange}
                                    name={f.name}
                                    inputProps={{ 'aria-label': f.manDays }}
                                    value={f.totalManDays}
                                />
                            }
                            label={f.name}
                        />
                    ))
                        : ""
                    }

                </Box>
                : "" }
                {features.length > 12 ?
                    <Box sx={{ width: "40%" }}>
                        {features.length > 0 ? features.slice(12, 18).map((f, i) => (
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        onChange={handleChange}
                                        name={f.name}
                                        inputProps={{ 'aria-label': f.manDays }}
                                        value={f.totalManDays}
                                    />
                                }
                                label={f.name}
                            />
                        ))
                            : ""
                        }

                    </Box>
                    : ""}
                {features.length > 18 ?
                    <Box sx={{ width: "40%" }}>
                        {features.length > 0 ? features.slice(18, 25).map((f, i) => (
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        onChange={handleChange}
                                        name={f.name}
                                        inputProps={{ 'aria-label': f.manDays }}
                                        value={f.totalManDays}
                                    />
                                }
                                label={f.name}
                            />
                        ))
                            : ""
                        }

                    </Box>
                    : ""}
             </Stack>
        </Box>

    )


}


export default CategoriesFeatures;