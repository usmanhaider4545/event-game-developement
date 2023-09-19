import React, { useState, useEffect, useRef } from 'react';
import { Box, Stack, Typography } from '@mui/material';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { DigitalSignage } from "../projectsData/DigitalSignage";
import { Fintech } from "../projectsData/Fintech";
import { WayFinding } from "../projectsData/WayFinding";
import { EmbeddedSystemsIoT } from "../projectsData/EmbeddedSystemsIot";
import { BackupRecovery } from "../projectsData/BackupandRecovery";
import { Ecommerce } from "../projectsData/eCommerce";
import { RealEstate } from "../projectsData/RealEstate";
import { IndustrialCompliance } from "../projectsData/IndustrialCompliance";
import { TransportManagementSystem } from "../projectsData/TransportManagement";
import { HealthTech } from "../projectsData/HealthCare";
import { ComputerVision } from "../projectsData/ComputerVision";
import { VirtualReality } from "../projectsData/VirtualReality";
import { ArtificialInteligence } from "../projectsData/ArtificialInteligence";
import { MachineLearning } from "../projectsData/MachineLearning";
import { DeepLearning } from "../projectsData/DeepLearning";
import { useDraggable } from "react-use-draggable-scroll";

function CategoriesFeatures(props) {
    
    const [localStorageCategory, setLocalStorageCategory] = useState(localStorage.getItem("appCategory"));

    const [localStorageIndustry, setLocalStorageIndustry] = useState(localStorage.getItem("industry"));

    const ref = useRef();

    const { events } = useDraggable(ref);

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
            <Stack {...events} ref={ref} sx={{ overflowX: "auto" , width: "100%"}} className='optionsBlocks' display="-webkit-inline-box" flexDirection="initial" justifyContent="center">
                <Box sx={{ width: "100%", maxWidth: "450px", paddingRight: `${features.length > 6 ? "80px" : ""}` }}> 
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
                    <Box sx={{ width: "100%", maxWidth: "450px", paddingRight: "80px" }}>
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
                    <Box sx={{ width: "100%", maxWidth: "450px", paddingRight: "80px" }}>
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
                    <Box sx={{ width: "100%", maxWidth: "450px", paddingRight: "80px" }}>
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