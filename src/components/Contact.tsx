import { Grid, IconButton, Typography } from "@mui/material";
import React from "react";
import "../App.css";
import { FaPhone } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div className="contact-container">
      <Grid container>
        <Grid item xs={4}></Grid>

        <Grid item xs={4}>
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: -100 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <Typography variant="h5" color="primary" gutterBottom>
              Get in Touch
            </Typography>
          </motion.div>

          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <Typography variant="subtitle2" color="primary" gutterBottom>
              <IconButton>
                <FaPhone style={{ color: "#037ffc", fontSize: 12 }} />
              </IconButton>
              +91 7702566961
            </Typography>
          </motion.div>

          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <Typography
              color="primary"
              variant="subtitle2"
              style={{ cursor: "pointer" }}
              // href="mailto:ajaykiranreddy999@gmail.com"
            >
              <IconButton>
                <SiGmail style={{ color: "red", fontSize: 12 }} />
              </IconButton>
              <a
                href="mailto:ajaykiranreddy999@gmail.com"
                target="_blank"
                style={{ color: "#fff" }}
              >
                ajaykiranreddy999@gmail.com
              </a>
            </Typography>
          </motion.div>
        </Grid>
        <Grid item xs={4}></Grid>
      </Grid>
    </div>
  );
};

export default Contact;
