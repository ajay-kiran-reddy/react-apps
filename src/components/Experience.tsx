import { Box, Grid, Typography } from "@mui/material";
import "../App.css";
import { EXPERIENCES } from "../constants/constants";
import { motion } from "framer-motion";

const Experience = () => {
  return (
    <div>
      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <Typography className="experience">Experience</Typography>
      </motion.div>

      <Grid container spacing={3}>
        <Grid xs={12} item md={2}></Grid>

        <Grid item xs={12} md={8}>
          <Grid container spacing={3}>
            {EXPERIENCES.map((item) => {
              return (
                <Grid container spacing={3} className="project-container">
                  <Grid item xs={12} md={4} style={{ marginTop: "1rem" }}>
                    <motion.div
                      whileInView={{ opacity: 1, x: 0 }}
                      initial={{ opacity: 0, x: -100 }}
                      transition={{ duration: 1, delay: 0.5 }}
                    >
                      <Typography color="primary" className="exp-year">
                        {item.year}
                      </Typography>
                    </motion.div>
                  </Grid>

                  <Grid item xs={12} md={8} style={{ marginTop: "1rem" }}>
                    <motion.div
                      whileInView={{ opacity: 1, x: 0 }}
                      initial={{ opacity: 0, x: 100 }}
                      transition={{ duration: 1, delay: 0.5 }}
                    >
                      <Box>
                        <Typography color="primary" style={{ fontWeight: 600 }}>
                          {`${item.role} - ${item.company}`}
                        </Typography>

                        <Typography color="primary" className="exp-desc">
                          {item.description}
                        </Typography>

                        <Grid container>
                          {item.technologies.map((tech) => {
                            return (
                              <Grid
                                item
                                className="skill"
                                style={{ marginTop: "1rem" }}
                              >
                                <span className="skill-label">{tech}</span>
                              </Grid>
                            );
                          })}
                        </Grid>
                      </Box>
                    </motion.div>
                  </Grid>
                </Grid>
              );
            })}
          </Grid>
        </Grid>

        <Grid item xs={12} md={2}></Grid>
      </Grid>
    </div>
  );
};

export default Experience;
