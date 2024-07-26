import { Box, Button, Grid, Typography } from "@mui/material";
import "../App.css";
import { PROJECTS } from "../constants/constants";
import { motion } from "framer-motion";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
const Projects = () => {
  const handleLaunchProject = (url: string) => {
    window.open(url, "_blank");
  };
  return (
    <div>
      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <Typography className="experience">Projects</Typography>
      </motion.div>

      <Grid container>
        <Grid xs={12} item md={2}></Grid>

        <Grid item xs={12} md={8}>
          <Grid container spacing={3}>
            {PROJECTS.map((item) => {
              return (
                <>
                  <Grid container spacing={3} className="project-container">
                    <Grid item xs={12} md={5} style={{ marginTop: "1rem" }}>
                      <motion.div
                        whileInView={{ opacity: 1, x: 0 }}
                        initial={{ opacity: 0, x: -100 }}
                        transition={{ duration: 1, delay: 0.5 }}
                      >
                        <img
                          src={item.image}
                          style={{ height: "100%", width: "100%" }}
                        />

                        <Box mt={2} style={{ textAlign: "center" }}>
                          <Button
                            style={{ maxWidth: "100px" }}
                            size="small"
                            onClick={() => handleLaunchProject(item.link)}
                            startIcon={
                              <motion.div
                                animate={{ y: [-5, 5] }}
                                transition={{
                                  duration: 4,
                                  ease: "easeOut",
                                  repeat: Infinity,
                                  repeatType: "reverse",
                                  x: { type: "spring", bounce: 20 },
                                  bounce: 5,
                                }}
                              >
                                <ArrowOutwardIcon />
                              </motion.div>
                            }
                            variant="outlined"
                          >
                            Launch
                          </Button>
                        </Box>
                      </motion.div>
                    </Grid>
                    <Grid item xs={12} md={1}></Grid>
                    <Grid item xs={12} md={6}>
                      <motion.div
                        whileInView={{ opacity: 1, x: 0 }}
                        initial={{ opacity: 0, x: 100 }}
                        transition={{ duration: 1, delay: 0.5 }}
                      >
                        <Box>
                          <Typography
                            color="primary"
                            style={{ fontWeight: 600 }}
                          >
                            {item.title}
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
                </>
              );
            })}
          </Grid>
        </Grid>

        <Grid item xs={12} md={2}></Grid>
      </Grid>
    </div>
  );
};

export default Projects;
