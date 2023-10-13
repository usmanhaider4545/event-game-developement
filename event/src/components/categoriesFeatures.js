import React, { useState, useEffect, useRef } from "react";
import {
  Box,
  Stack,
  Typography,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
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
import { VirtualReality } from "../projectsData/VirtualReality";
import { ArtificialIntelligence } from "../projectsData/ArtificialInteligence";
import { MachineLearning } from "../projectsData/MachineLearning";
import { DeepLearning } from "../projectsData/DeepLearning";
import { useDraggable } from "react-use-draggable-scroll";
import { motion } from "framer-motion";

function CategoriesFeatures(props) {
  const localStorageCategory = localStorage.getItem("appCategory");
  const localStorageIndustry = localStorage.getItem("industry");

  const ref = useRef();

  const { events } = useDraggable(ref);

  const [features, setFeatures] = useState([]);

  const [totalManDays, setTotalManDays] = useState(() => {
    const storedManDays = localStorage.getItem("totalManDays");
    return storedManDays ? JSON.parse(storedManDays) : [];
  });

  const handleChange = (event) => {
    let { checked, value, name, ariaLabel } = event.target;
    let updatedManDays = [...totalManDays];
    value = JSON.parse(value);
    if (checked) {
      const parsedValue = parseInt(value.totalManDays, 10);
      updatedManDays.push({
        name,
        ariaLabel,
        value: parsedValue,
        resources: value.resources,
        developers: value.dev,
        technologies: value.technologies,
      });
    } else {
      updatedManDays = updatedManDays.filter((day) => day.name !== name);
    }

    setTotalManDays(updatedManDays);

    if (updatedManDays.length === 0) {
      props.activeDisabledBtn();
    } else {
      props.removeDisabledButton();
    }

    const totalManDaysStringify = JSON.stringify(updatedManDays);
    localStorage.setItem("totalManDays", totalManDaysStringify);
  };

  useEffect(() => {
    window.onbeforeunload = closeIt;
    getDataCategories();
    if (totalManDays.length === 0) {
      props.activeDisabledBtn();
    } else {
      props.removeDisabledButton();
    }
  }, []);

  function closeIt() {
    localStorage.clear("totalManDays");
  }

  const getDataCategories = () => {
    if (localStorageIndustry === "Digital Signage") {
      let combineCategories = [];
      DigitalSignage.map((item, index) => {
        if (item.category === localStorageCategory) {
          combineCategories = item?.features.map((feature, index) => {
            return {
              name: feature.name ? feature.name : "-",
              manDays: feature.manDays ? feature.manDays : "-",
              totalManDays: feature.totalManDays ? feature.totalManDays : "-",
              resources: feature.numResources ? feature.numResources : "-",
              dev: feature.devRequired ? feature.devRequired : "-",
              technologies: feature.recommendedStack
                ? feature.recommendedStack
                : "-",
            };
          });
        }
        setFeatures(combineCategories);
      });
    } else if (localStorageIndustry === "Fintech") {
      let combineCategories = [];
      Fintech.map((item, index) => {
        if (item.category === localStorageCategory) {
          combineCategories = item?.features.map((feature, index) => {
            return {
              name: feature.name ? feature.name : "-",
              manDays: feature.manDays ? feature.manDays : "-",
              totalManDays: feature.totalManDays ? feature.totalManDays : "-",
              resources: feature.numResources ? feature.numResources : "-",
              dev: feature.devRequired ? feature.devRequired : "-",
              technologies: feature.recommendedStack
                ? feature.recommendedStack
                : "-",
            };
          });
        }
        setFeatures(combineCategories);
      });
    } else if (localStorageIndustry === "Wayfinding") {
      let combineCategories = [];
      WayFinding.map((item, index) => {
        if (item.category === localStorageCategory) {
          combineCategories = item?.features.map((feature, index) => {
            return {
              name: feature.name ? feature.name : "-",
              manDays: feature.manDays ? feature.manDays : "-",
              totalManDays: feature.totalManDays ? feature.totalManDays : "-",
              resources: feature.numResources ? feature.numResources : "-",
              dev: feature.devRequired ? feature.devRequired : "-",
              technologies: feature.recommendedStack
                ? feature.recommendedStack
                : "-",
            };
          });
        }
        setFeatures(combineCategories);
      });
    } else if (localStorageIndustry === "IOT/Embedded") {
      let combineCategories = [];
      EmbeddedSystemsIoT.map((item, index) => {
        if (item.category === localStorageCategory) {
          combineCategories = item?.features.map((feature, index) => {
            return {
              name: feature.name ? feature.name : "-",
              manDays: feature.manDays ? feature.manDays : "-",
              totalManDays: feature.totalManDays ? feature.totalManDays : "-",
              resources: feature.numResources ? feature.numResources : "-",
              dev: feature.devRequired ? feature.devRequired : "-",
              technologies: feature.recommendedStack
                ? feature.recommendedStack
                : "-",
            };
          });
        }
        setFeatures(combineCategories);
      });
    } else if (localStorageIndustry === "Storage - Backup and Recovery") {
      let combineCategories = [];
      BackupRecovery.map((item, index) => {
        if (item.category === localStorageCategory) {
          combineCategories = item?.features.map((feature, index) => {
            return {
              name: feature.name ? feature.name : "-",
              manDays: feature.manDays ? feature.manDays : "-",
              totalManDays: feature.totalManDays ? feature.totalManDays : "-",
              resources: feature.numResources ? feature.numResources : "-",
              dev: feature.devRequired ? feature.devRequired : "-",
              technologies: feature.recommendedStack
                ? feature.recommendedStack
                : "-",
            };
          });
        }
        setFeatures(combineCategories);
      });
    } else if (localStorageIndustry === "Ecommerce and Retail") {
      let combineCategories = [];
      ECommerce.map((item, index) => {
        if (item.category === localStorageCategory) {
          combineCategories = item?.features.map((feature, index) => {
            return {
              name: feature.name ? feature.name : "-",
              manDays: feature.manDays ? feature.manDays : "-",
              totalManDays: feature.totalManDays ? feature.totalManDays : "-",
              resources: feature.numResources ? feature.numResources : "-",
              dev: feature.devRequired ? feature.devRequired : "-",
              technologies: feature.recommendedStack
                ? feature.recommendedStack
                : "-",
            };
          });
        }
        setFeatures(combineCategories);
      });
    } else if (localStorageIndustry === "Real Estate") {
      let combineCategories = [];
      RealEstate.map((item, index) => {
        if (item.category === localStorageCategory) {
          combineCategories = item?.features.map((feature, index) => {
            return {
              name: feature.name ? feature.name : "-",
              manDays: feature.manDays ? feature.manDays : "-",
              totalManDays: feature.totalManDays ? feature.totalManDays : "-",
              resources: feature.numResources ? feature.numResources : "-",
              dev: feature.devRequired ? feature.devRequired : "-",
              technologies: feature.recommendedStack
                ? feature.recommendedStack
                : "-",
            };
          });
        }
        setFeatures(combineCategories);
      });
    } else if (localStorageIndustry === "Industrial Compliance") {
      let combineCategories = [];
      IndustrialCompliance.map((item, index) => {
        if (item.category === localStorageCategory) {
          combineCategories = item?.features.map((feature, index) => {
            return {
              name: feature.name ? feature.name : "-",
              manDays: feature.manDays ? feature.manDays : "-",
              totalManDays: feature.totalManDays ? feature.totalManDays : "-",
              resources: feature.numResources ? feature.numResources : "-",
              dev: feature.devRequired ? feature.devRequired : "-",
              technologies: feature.recommendedStack
                ? feature.recommendedStack
                : "-",
            };
          });
        }
        setFeatures(combineCategories);
      });
    } else if (localStorageIndustry === "Logistics Freight") {
      let combineCategories = [];
      TransportManagementSystem.map((item, index) => {
        if (item.category === localStorageCategory) {
          combineCategories = item?.features.map((feature, index) => {
            return {
              name: feature.name ? feature.name : "-",
              manDays: feature.manDays ? feature.manDays : "-",
              totalManDays: feature.totalManDays ? feature.totalManDays : "-",
              resources: feature.numResources ? feature.numResources : "-",
              dev: feature.devRequired ? feature.devRequired : "-",
              technologies: feature.recommendedStack
                ? feature.recommendedStack
                : "-",
            };
          });
        }
        setFeatures(combineCategories);
      });
    } else if (localStorageIndustry === "Healthcare") {
      let combineCategories = [];
      HealthTech.map((item, index) => {
        if (item.category === localStorageCategory) {
          combineCategories = item?.features.map((feature, index) => {
            return {
              name: feature.name ? feature.name : "-",
              manDays: feature.manDays ? feature.manDays : "-",
              totalManDays: feature.totalManDays ? feature.totalManDays : "-",
              resources: feature.numResources ? feature.numResources : "-",
              dev: feature.devRequired ? feature.devRequired : "-",
              technologies: feature.recommendedStack
                ? feature.recommendedStack
                : "-",
            };
          });
        }
        setFeatures(combineCategories);
      });
    } else if (localStorageIndustry === "Computer Vision") {
      let combineCategories = [];
      ComputerVision.map((item, index) => {
        if (item.category === localStorageCategory) {
          combineCategories = item?.features.map((feature, index) => {
            return {
              name: feature.name ? feature.name : "-",
              manDays: feature.manDays ? feature.manDays : "-",
              totalManDays: feature.totalManDays ? feature.totalManDays : "-",
              resources: feature.numResources ? feature.numResources : "-",
              dev: feature.devRequired ? feature.devRequired : "-",
              technologies: feature.recommendedStack
                ? feature.recommendedStack
                : "-",
            };
          });
        }
        setFeatures(combineCategories);
      });
    } else if (localStorageIndustry === "Virtual Reality") {
      let combineCategories = [];
      VirtualReality.map((item, index) => {
        if (item.category === localStorageCategory) {
          combineCategories = item?.features.map((feature, index) => {
            return {
              name: feature.name ? feature.name : "-",
              manDays: feature.manDays ? feature.manDays : "-",
              totalManDays: feature.totalManDays ? feature.totalManDays : "-",
              resources: feature.numResources ? feature.numResources : "-",
              dev: feature.devRequired ? feature.devRequired : "-",
              technologies: feature.recommendedStack
                ? feature.recommendedStack
                : "-",
            };
          });
        }
        setFeatures(combineCategories);
      });
    } else if (localStorageIndustry === "Artificial Inteligence") {
      let combineCategories = [];
      ArtificialIntelligence.map((item, index) => {
        if (item.category === localStorageCategory) {
          combineCategories = item?.features.map((feature, index) => {
            return {
              name: feature.name ? feature.name : "-",
              manDays: feature.manDays ? feature.manDays : "-",
              totalManDays: feature.totalManDays ? feature.totalManDays : "-",
              resources: feature.numResources ? feature.numResources : "-",
              dev: feature.devRequired ? feature.devRequired : "-",
              technologies: feature.recommendedStack
                ? feature.recommendedStack
                : "-",
            };
          });
        }
        setFeatures(combineCategories);
      });
    } else if (localStorageIndustry === "Machine Learning") {
      let combineCategories = [];
      MachineLearning.map((item, index) => {
        if (item.category === localStorageCategory) {
          combineCategories = item?.features.map((feature, index) => {
            return {
              name: feature.name ? feature.name : "-",
              manDays: feature.manDays ? feature.manDays : "-",
              totalManDays: feature.totalManDays ? feature.totalManDays : "-",
              resources: feature.numResources ? feature.numResources : "-",
              dev: feature.devRequired ? feature.devRequired : "-",
              technologies: feature.recommendedStack
                ? feature.recommendedStack
                : "-",
            };
          });
        }
        setFeatures(combineCategories);
      });
    } else if (localStorageIndustry === "Deep Learning") {
      let combineCategories = [];
      DeepLearning.map((item, index) => {
        if (item.category === localStorageCategory) {
          combineCategories = item?.features.map((feature, index) => {
            return {
              name: feature.name ? feature.name : "-",
              manDays: feature.manDays ? feature.manDays : "-",
              totalManDays: feature.totalManDays ? feature.totalManDays : "-",
              resources: feature.numResources ? feature.numResources : "-",
              dev: feature.devRequired ? feature.devRequired : "-",
              technologies: feature.recommendedStack
                ? feature.recommendedStack
                : "-",
            };
          });
        }
        setFeatures(combineCategories);
      });
    }
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
            padding: "18px 0",
            fontWeight: "700",
            fontSize: { xs: "35px", md: "27px" },
          }}
        >
          What features do you envision for the {localStorageCategory} in{" "}
          {localStorageIndustry}?
        </Typography>
      </motion.div>
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
            paddingRight: `${features.length > 6 ? "80px" : ""}`,
          }}
        >
          {features.length > 0
            ? features.slice(0, 6).map((f, i) => (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    delay: 0.75 + 0.25 * i,
                    duration: 0.5,
                  }}
                >
                  <FormControlLabel
                    control={
                      <Checkbox
                        onChange={handleChange}
                        name={f.name}
                        inputProps={{ "aria-label": f.manDays }}
                        value={JSON.stringify(f)}
                        style={{ color: "#fff" }}
                        defaultChecked={totalManDays.some(
                          (day) => day.name === f.name,
                        )}
                      />
                    }
                    label={f.name}
                  />
                </motion.div>
              ))
            : ""}
        </Box>
        {features.length > 6 ? (
          <Box sx={{ width: "100%", maxWidth: "450px", paddingRight: "80px" }}>
            {features.length > 0
              ? features.slice(6, 12).map((f, i) => (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                      delay: 0.75 + 0.25 * (i + 6),
                      duration: 0.5,
                    }}
                  >
                    <FormControlLabel
                      control={
                        <Checkbox
                          onChange={handleChange}
                          name={f.name}
                          inputProps={{ "aria-label": f.manDays }}
                          value={JSON.stringify(f)}
                          style={{ color: "#fff" }}
                          defaultChecked={totalManDays.some(
                            (day) => day.name === f.name,
                          )}
                        />
                      }
                      label={f.name}
                    />
                  </motion.div>
                ))
              : ""}
          </Box>
        ) : (
          ""
        )}
        {features.length > 12 ? (
          <Box sx={{ width: "100%", maxWidth: "450px", paddingRight: "80px" }}>
            {features.length > 0
              ? features.slice(12, 18).map((f, i) => (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                      delay: 0.75 + 0.25 * (i + 12),
                      duration: 0.5,
                    }}
                  >
                    <FormControlLabel
                      control={
                        <Checkbox
                          onChange={handleChange}
                          name={f.name}
                          inputProps={{ "aria-label": f.manDays }}
                          value={JSON.stringify(f)}
                          style={{ color: "#fff" }}
                          defaultChecked={totalManDays.some(
                            (day) => day.name === f.name,
                          )}
                        />
                      }
                      label={f.name}
                    />
                  </motion.div>
                ))
              : ""}
          </Box>
        ) : (
          ""
        )}
        {features.length > 18 ? (
          <Box sx={{ width: "100%", maxWidth: "450px", paddingRight: "80px" }}>
            {features.length > 0
              ? features.slice(18, 25).map((f, i) => (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                      delay: 0.75 + 0.25 * (i + 18),
                      duration: 0.5,
                    }}
                  >
                    <FormControlLabel
                      control={
                        <Checkbox
                          onChange={handleChange}
                          name={f.name}
                          inputProps={{ "aria-label": f.manDays }}
                          value={JSON.stringify(f)}
                          style={{ color: "#fff" }}
                          defaultChecked={totalManDays.some(
                            (day) => day.name === f.name,
                          )}
                        />
                      }
                      label={f.name}
                    />
                  </motion.div>
                ))
              : ""}
          </Box>
        ) : (
          ""
        )}
      </Stack>
    </Box>
  );
}

export default CategoriesFeatures;
