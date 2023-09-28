import React, { useState, useEffect, useRef } from 'react';
import { Box, Stack, Typography } from '@mui/material';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
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

function Categories(props) {

    const [value, setValue] = useState('');

    const [localStorageCategory, setLocalStorageCategory] = useState(localStorage.getItem("appCategory"));

    const [localStorageIndustry, setLocalStorageIndustry] = useState(localStorage.getItem("industry"));

    const [categories, setCategories] = useState([]);

    const ref = useRef();

    const { events } = useDraggable(ref);

    const handleChange = (event) => {
        setValue(event.target.value);
        localStorage.setItem("appCategory", event.target.value);
        props.removeDisabledButton();
    };

    useEffect(() => {
        window.onbeforeunload = closeIt;
        getDataCategories();
        if (localStorageCategory){
            props.removeDisabledButton();
        }
    }, []);


    function closeIt() {
        localStorage.clear("appCategory");
    }

    const getDataCategories = () => {
        let checkSelectedProjects = localStorage.getItem("industry");

        if (checkSelectedProjects === "Digital Signage") {
            let combineCategories = DigitalSignage.map((item, index) => {
                return item.category ? item.category : "-"
            })
            setCategories(combineCategories);
        } else if (checkSelectedProjects === "Fintech") {
            let combineCategories = Fintech.map((item, index) => {
                return item.category ? item.category : "-"
            })
            setCategories(combineCategories);
        }
        else if (checkSelectedProjects === "Wayfinding") {
            let combineCategories = WayFinding.map((item, index) => {
                return item.category ? item.category : "-"
            })
            setCategories(combineCategories);
        }
        else if (checkSelectedProjects === "IOT/Embedded") {
            let combineCategories = EmbeddedSystemsIoT.map((item, index) => {
                return item.category ? item.category : "-"
            })
            setCategories(combineCategories);
        }
        else if (checkSelectedProjects === "Storage - Backup and Recovery") {
            let combineCategories = BackupRecovery.map((item, index) => {
                return item.category ? item.category : "-"
            })
            setCategories(combineCategories);
        }
        else if (checkSelectedProjects === "Ecommerce and Retail") {
            let combineCategories = Ecommerce.map((item, index) => {
                return item.category ? item.category : "-"
            })
            setCategories(combineCategories);
        }
        else if (checkSelectedProjects === "Real Estate") {
            let combineCategories = RealEstate.map((item, index) => {
                return item.category ? item.category : "-"
            })
            setCategories(combineCategories);
        }
        else if (checkSelectedProjects === "Industrial Compliance") {
            let combineCategories = IndustrialCompliance.map((item, index) => {
                return item.category ? item.category : "-"
            })
            setCategories(combineCategories);
        }
        else if (checkSelectedProjects === "Logistics Freight") {
            let combineCategories = TransportManagementSystem.map((item, index) => {
                return item.category ? item.category : "-"
            })
            setCategories(combineCategories);
        }
        else if (checkSelectedProjects === "Healthcare") {
            let combineCategories = HealthTech.map((item, index) => {
                return item.category ? item.category : "-"
            })
            setCategories(combineCategories);
        }
        else if (checkSelectedProjects === "Computer Vision") {
            let combineCategories = ComputerVision.map((item, index) => {
                return item.category ? item.category : "-"
            })
            setCategories(combineCategories);
        }
        else if (checkSelectedProjects === "Virtual Reality") {
            let combineCategories = VirtualReality.map((item, index) => {
                return item.category ? item.category : "-"
            })
            setCategories(combineCategories);
        }
        else if (checkSelectedProjects === "Artificial Inteligence") {
            let combineCategories = ArtificialInteligence.map((item, index) => {
                return item.category ? item.category : "-"
            })
            setCategories(combineCategories);
        }
        else if (checkSelectedProjects === "Machine Learning") {
            let combineCategories = MachineLearning.map((item, index) => {
                return item.category ? item.category : "-"
            })
            setCategories(combineCategories);
        }
        else if (checkSelectedProjects === "Deep Learning") {
            let combineCategories = DeepLearning.map((item, index) => {
                return item.category ? item.category : "-"
            })
            setCategories(combineCategories);
        }
    }




    return (
        <Box>
            <Typography variant='h6' sx={{ color: "#fff", padding: "40px 0", fontWeight: "700", fontSize: "1.8vw" }}>
                What type of {localStorageIndustry} product do you want?
            </Typography>
            <Stack className='optionsBlocks' flexDirection="column" justifyContent="center" width="100%" margin="auto">
             <FormControl>
                    <RadioGroup
                        aria-labelledby="demo-radio-buttons-group-label"
                        defaultValue=""
                        name="radio-buttons-group"
                        value={value ? value : localStorageCategory}
                        onChange={handleChange}
                    >
                        <Stack {...events} ref={ref} sx={{ overflowX: "auto", width: "100%" }} className='optionsBlocks' display="-webkit-inline-box" flexDirection="initial" justifyContent="center">
                            <Box sx={{ width: "100%", maxWidth: "450px", paddingRight: `${categories.length > 6 ? "80px" : ""}` }} className={categories.length > 5 ? "largeCatelog" : ""}>

                                {categories.length > 0 ? categories.slice(0, 6).map((c) => (
                                    <FormControlLabel value={c} control={<Radio />} label={c} />
                                ))
                                    : ""
                                }
                            </Box>
                            {categories.length > 6 ?
                                <Box sx={{ width: "100%", maxWidth: "450px", paddingRight: "80px" }}  className={categories.length > 5 ? "largeCatelog" : ""}>
                                {categories.length > 0 ? categories.slice(6, 12).map((c) => (
                                    <FormControlLabel value={c} control={<Radio />} label={c} />
                                ))
                                    : ""
                                }
                            </Box>
                            : 
                            ""}
                            {categories.length > 12 ?
                                <Box sx={{ width: "40%" }}  className={categories.length > 5 ? "largeCatelog" : ""}>
                                    {categories.length > 0 ? categories.slice(12, 18).map((c) => (
                                        <FormControlLabel value={c} control={<Radio />} label={c} />
                                    ))
                                        : ""
                                    }
                                </Box>
                                :
                                ""}
                        </Stack>
                    </RadioGroup>
                </FormControl>
            </Stack>
        </Box>

    )


}


export default Categories;