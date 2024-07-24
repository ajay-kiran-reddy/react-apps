import { Grid, Typography } from "@mui/material";
import "../App.css";
import { HERO_CONTENT } from "../constants/constants";
import { motion } from "framer-motion";
import Ajay from "../assets/ajay_profile_2.jpg";

const Hero = () => {
  return (
    <div style={{ marginBottom: "5rem" }}>
      <Grid container spacing={3} style={{ textAlign: "center" }}>
        <Grid item xs={12} md={6}>
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <Typography color="primary" className="developer-name">
              Ajay Kiran Reddy
            </Typography>
          </motion.div>

          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5, delay: 1 }}
          >
            <Typography className="developer-role">
              Full Stack Developer
            </Typography>
          </motion.div>
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5, delay: 1.5 }}
          >
            <Typography style={{ textAlign: "left" }} color="primary">
              {HERO_CONTENT}
            </Typography>
          </motion.div>
        </Grid>
        <Grid item xs={12} md={6}>
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 1, delay: 1.5 }}
          >
            <img src={Ajay} alt="about_pic" style={{ maxHeight: "400px" }} />
          </motion.div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Hero;
