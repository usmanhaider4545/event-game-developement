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

function CategoriesFeatures() {
    const [localStorageCategory, setLocalStorageCategory] = useState(localStorage.getItem("appCategory"));
    const [localStorageIndustry, setLocalStorageIndustry] = useState(localStorage.getItem("industry"));

    const [features, setFeatures] = useState([]);

    const [totalManDays, setTotalManDays] = useState([]);

    const handleChange = (event) => {
         if (event.target.checked){
        totalManDays.push([
           event.target.name,
            event.target.value
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
        let totalManDaysStringfy = JSON.stringify(totalManDays);
        localStorage.setItem("totalManDays", totalManDaysStringfy);
    };

    useEffect(() => {
         window.onbeforeunload = closeIt;
        getDataCategories();
    }, []);


    function closeIt() {
        localStorage.clear("appType");
    }

    const getDataCategories = () => {
 
        if (localStorageIndustry === "Digital Signage") {
            let combineCategories = []
             DigitalSignage.map((item, index) => {
                debugger
                 if (item.category === localStorageCategory) {
                 combineCategories = item?.features.map((feature, index) => {
                    return {
                        "name" : feature.name ? feature.name : "-",
                        "days" : feature.totalManDays ? feature.totalManDays : "-"
                    }
                })
            }
                 setFeatures(combineCategories);
            })
        } 
    }




    return (
        <Box>
            <Typography variant='h6' sx={{ color: "#fff", padding: "40px 0", fontWeight: "700", fontSize: "32px" }}>
                What features do you envision for the {localStorageCategory} in {localStorageIndustry}?
            </Typography>
            <Stack className='optionsBlocks' flexDirection="initial" justifyContent="center" gap="100px">
                <Box sx={{width : "50%"}}> 
                {features.length > 0 ? features.slice(0, 6).map((f , i) => (
                  <FormControlLabel
                        control={
                            <Checkbox onChange={handleChange} name={f.name} value={f.days}/>
                        }
                        label={f.name}
                    />  
                   ))
                    : ""
                }
                </Box>
                {features.length > 6 ?
                    <Box sx={{ width: "50%" }}>
                    {features.length > 0 ? features.slice(7, 13).map((f, i) => (
                        <FormControlLabel
                            control={
                                <Checkbox onChange={handleChange} name={f.name} value={f.days} />
                            }
                            label={f.name}
                        />
                    ))
                        : ""
                    }

                </Box>
                : "" }
             </Stack>
        </Box>

    )


}


export default CategoriesFeatures;