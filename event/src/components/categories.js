import React, { useState, useEffect, useRef } from "react";
import { Box, Stack, Typography } from "@mui/material";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import { DigitalSignage } from "../projectsData/DigitalSignage";
import { Fintech } from "../projectsData/Fintech";
import { WayFinding } from "../projectsData/WayFinding";
import { EmbeddedSystemsIoT } from "../projectsData/EmbeddedSystemsIot";
import { BackupRecovery } from "../projectsData/BackupandRecovery";
import { ECommerce } from "../projectsData/eCommerce";
import { RealEstate } from "../projectsData/RealEstate";
import { IndustrialCompliance } from "../projectsData/IndustrialCompliance";
import { TransportManagementSystem } from "../projectsData/TransportManagement";
import { HealthTech } from "../projectsData/HealthCare";
import { ComputerVision } from "../projectsData/ComputerVision";
import { augmentedReality } from "../projectsData/AugmentedReality";
import { hospitality } from "../projectsData/Hospitality";
import { VirtualReality } from "../projectsData/VirtualReality";
import { ArtificialIntelligence } from "../projectsData/ArtificialInteligence";
import { MachineLearning } from "../projectsData/MachineLearning";
import { DeepLearning } from "../projectsData/DeepLearning";
import { useDraggable } from "react-use-draggable-scroll";
import { motion } from "framer-motion";

function Categories(props) {
  const [value, setValue] = useState("");

  const [localStorageCategory, setLocalStorageCategory] = useState(
    localStorage.getItem("appCategory"),
  );

  const [localStorageIndustry, setLocalStorageIndustry] = useState(
    localStorage.getItem("industry"),
  );

  const [categories, setCategories] = useState([]);
  console.log(categories);
  const ref = useRef();

  const { events } = useDraggable(ref);

  const handleChange = (event) => {
    setValue(event.target.value);
    localStorage.setItem("appCategory", event.target.value);
    if (localStorage.getItem("totalManDays")) {
      localStorage.removeItem("totalManDays");
    }
    props.removeDisabledButton();
  };
  console.log(value);
  useEffect(() => {
    window.onbeforeunload = closeIt;
    const categoriesLocal = getDataCategories();
    const localStorageData = localStorage.getItem("appCategory");
    const exist = categoriesLocal.find((cat) => cat === localStorageData);
    if (!exist) {
      props.activeDisabledBtn();
    } else {
      props.removeDisabledButton();
    }
  }, []);

  function closeIt() {
    localStorage.clear("appCategory");
  }

  const getDataCategories = () => {
    let checkSelectedProjects = localStorage.getItem("industry");
    let combineCategories = [];
    if (checkSelectedProjects === "Digital Signage") {
      combineCategories = DigitalSignage.map((item, index) => {
        return item.category ? item.category : "-";
      });
    } else if (checkSelectedProjects === "Fintech") {
      combineCategories = Fintech.map((item, index) => {
        return item.category ? item.category : "-";
      });
    } else if (checkSelectedProjects === "Wayfinding") {
      combineCategories = WayFinding.map((item, index) => {
        return item.category ? item.category : "-";
      });
    } else if (checkSelectedProjects === "IOT/Embedded") {
      combineCategories = EmbeddedSystemsIoT.map((item, index) => {
        return item.category ? item.category : "-";
      });
    } else if (checkSelectedProjects === "Storage - Backup and Recovery") {
      combineCategories = BackupRecovery.map((item, index) => {
        return item.category ? item.category : "-";
      });
    } else if (checkSelectedProjects === "Ecommerce and Retail") {
      combineCategories = ECommerce.map((item, index) => {
        return item.category ? item.category : "-";
      });
    } else if (checkSelectedProjects === "Real Estate") {
      combineCategories = RealEstate.map((item, index) => {
        return item.category ? item.category : "-";
      });
    } else if (checkSelectedProjects === "Industrial Compliance") {
      combineCategories = IndustrialCompliance.map((item, index) => {
        return item.category ? item.category : "-";
      });
    } else if (checkSelectedProjects === "Logistics Freight") {
      combineCategories = TransportManagementSystem.map((item, index) => {
        return item.category ? item.category : "-";
      });
    } else if (checkSelectedProjects === "Healthcare") {
      combineCategories = HealthTech.map((item, index) => {
        return item.category ? item.category : "-";
      });
    } else if (checkSelectedProjects === "Hospitality") {
      combineCategories = hospitality.map((item, index) => {
        return item.category ? item.category : "-";
      });
    } else if (checkSelectedProjects === "Augmented Reality") {
      combineCategories = augmentedReality.map((item, index) => {
        return item.category ? item.category : "-";
      });
    } else if (checkSelectedProjects === "Computer Vision") {
      combineCategories = ComputerVision.map((item, index) => {
        return item.category ? item.category : "-";
      });
    } else if (checkSelectedProjects === "Virtual Reality") {
      combineCategories = VirtualReality.map((item, index) => {
        return item.category ? item.category : "-";
      });
    } else if (checkSelectedProjects === "Artificial Inteligence") {
      combineCategories = ArtificialIntelligence.map((item, index) => {
        return item.category ? item.category : "-";
      });
    } else if (checkSelectedProjects === "Machine Learning") {
      combineCategories = MachineLearning.map((item, index) => {
        return item.category ? item.category : "-";
      });
    } else if (checkSelectedProjects === "Deep Learning") {
      combineCategories = DeepLearning.map((item, index) => {
        return item.category ? item.category : "-";
      });
    } else if (checkSelectedProjects === "Augmented Reality") {
      combineCategories = augmentedReality.map((item, index) => {
        return item.category ? item.category : "-";
      });
    } else if (checkSelectedProjects === "Hospitality") {
      combineCategories = hospitality.map((item, index) => {
        return item.category ? item.category : "-";
      });
    }

    setCategories(combineCategories);
    return combineCategories;
  };

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
            padding: "40px 0",
            fontWeight: "700",
            fontSize: { xs: "35px", md: "27px" },
          }}
        >
          What type of {localStorageIndustry} product do you want?
        </Typography>
      </motion.div>
      <Stack
        className='optionsBlocks'
        flexDirection='column'
        justifyContent='center'
        width='100%'
        margin='auto'
      >
        <FormControl>
          <RadioGroup
            aria-labelledby='demo-radio-buttons-group-label'
            defaultValue=''
            name='radio-buttons-group'
            value={value ? value : localStorageCategory}
            onChange={handleChange}
          >
            <Stack
              {...events}
              ref={ref}
              sx={{ overflowX: "auto", width: "100%" }}
              className='optionsBlocks'
              display='-webkit-inline-box'
              flexDirection='initial'
              justifyContent='center'
            >
              <Box
                sx={{
                  width: "100%",
                  maxWidth: "450px",
                  paddingRight: `${categories.length > 6 ? "80px" : ""}`,
                }}
                className={categories.length > 5 ? "largeCatelog" : ""}
              >
                {categories.length > 0
                  ? categories.slice(0, 6).map((c, index) => (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{
                          delay: 0.75 + 0.25 * index,
                          duration: 1,
                        }}
                      >
                        <FormControlLabel
                          value={c}
                          control={<Radio />}
                          label={c}
                        />
                      </motion.div>
                    ))
                  : ""}
              </Box>
              {categories.length > 6 ? (
                <Box
                  sx={{
                    width: "100%",
                    maxWidth: "450px",
                    paddingRight: "80px",
                  }}
                  className={categories.length > 5 ? "largeCatelog" : ""}
                >
                  {categories.length > 0
                    ? categories.slice(6, 12).map((c, index) => (
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{
                            delay: 0.75 + 0.25 * (index + 6),
                            duration: 1,
                          }}
                        >
                          <FormControlLabel
                            value={c}
                            control={<Radio />}
                            label={c}
                          />
                        </motion.div>
                      ))
                    : ""}
                </Box>
              ) : (
                ""
              )}
              {categories.length > 12 ? (
                <Box
                  sx={{ width: "40%" }}
                  className={categories.length > 5 ? "largeCatelog" : ""}
                >
                  {categories.length > 0
                    ? categories.slice(12, 18).map((c, index) => (
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{
                            delay: 0.75 + 0.25 * (index + 12),
                            duration: 1,
                          }}
                        >
                          <FormControlLabel
                            value={c}
                            control={<Radio />}
                            label={c}
                          />
                        </motion.div>
                      ))
                    : ""}
                </Box>
              ) : (
                ""
              )}
            </Stack>
          </RadioGroup>
        </FormControl>
      </Stack>
    </Box>
  );
}

export default Categories;
