import { Grid, Typography } from "@mui/material";
import React from "react";
import { ABOUT_TEXT } from "../constants/constants";
import "../App.css";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div>
      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <Typography className="about-me">About Me</Typography>
      </motion.div>
      <Grid container spacing={3} style={{ textAlign: "center" }}>
        <Grid item xs={12} md={6}>
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <img
              src="https://react-portfolio-kevin.vercel.app/assets/about-Cs4bjHyo.jpg"
              alt="about_pic"
              style={{ width: "100%", maxHeight: "500px" }}
            />
          </motion.div>
        </Grid>
        <Grid item xs={12} md={6}>
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <Typography style={{ textAlign: "left" }} color="primary">
              {ABOUT_TEXT}
            </Typography>
          </motion.div>
        </Grid>
      </Grid>
    </div>
  );
};

export default About;
