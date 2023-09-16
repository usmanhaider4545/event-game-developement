import React, { useState, useEffect } from 'react';
import { Box, Stack, Typography } from '@mui/material';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
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
import { ArtificialInteligence } from "../ArtificialInteligence";
import { MachineLearning } from "../MachineLearning";
import { DeepLearning } from "../DeepLearning";

function Categories(props) {
    const [value, setValue] = useState('');
    const [localStorageCategory, setLocalStorageCategory] = useState(localStorage.getItem("appCategory"));

    const [localStorageIndustry, setLocalStorageIndustry] = useState(localStorage.getItem("industry"));

    const [categories, setCategories] = useState([]);



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
            <Typography variant='h6' sx={{ color: "#fff", padding: "40px 0", fontWeight: "700", fontSize: "32px" }}>
                What type of {localStorageIndustry} product do you want?
            </Typography>
            <Stack className='optionsBlocks' flexDirection="column" justifyContent="center" width="80%" margin="auto">
             <FormControl>
                    <RadioGroup
                        aria-labelledby="demo-radio-buttons-group-label"
                        defaultValue=""
                        name="radio-buttons-group"
                        value={value ? value : localStorageCategory}
                        onChange={handleChange}
                    >
                        <Stack sx={{ overflowX: "auto", paddingLeft: "30px", width: "100%" }} className='optionsBlocks' display="-webkit-inline-box" flexDirection="initial" justifyContent="center" gap="100px">
                            <Box sx={{ width: "40%" }} className={categories.length > 5 ? "largeCatelog" : ""}>

                                {categories.length > 0 ? categories.slice(0, 6).map((c) => (
                                    <FormControlLabel value={c} control={<Radio />} label={c} />
                                ))
                                    : ""
                                }
                            </Box>
                            {categories.length > 6 ?
                                <Box sx={{ width: "40%" }}  className={categories.length > 5 ? "largeCatelog" : ""}>
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