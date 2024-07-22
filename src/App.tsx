import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import CodeIcon from "@mui/icons-material/Code";
import Hero from "./components/Hero";
import About from "./components/About";
import Technologies from "./components/Technologies";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import { Grid } from "@mui/material";

export default function PrimarySearchAppBar() {
  return (
    <Box>
      <AppBar position="static" style={{ backgroundColor: "transparent" }}>
        <Toolbar>
          <Grid container spacing={0}>
            <Grid item xs={6} style={{ textAlign: "left" }}>
              <Typography
                variant="h5"
                style={{ cursor: "pointer" }}
                noWrap
                color="primary"
                component="div"
              >
                <IconButton>
                  <CodeIcon color="secondary" fontSize="large" />
                </IconButton>
                AJAY KIRAN REDDY
              </Typography>
            </Grid>

            <Grid item xs={6} style={{ textAlign: "right" }}>
              <Box>
                <IconButton
                  size="large"
                  aria-label="show 4 new mails"
                  color="inherit"
                >
                  <LinkedInIcon color="primary" />
                </IconButton>
                <IconButton
                  size="large"
                  aria-label="show 17 new notifications"
                  color="inherit"
                >
                  <GitHubIcon color="primary" />
                </IconButton>
              </Box>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>

      <div style={{ padding: "0 2rem" }}>
        <Hero />
        <About />
        <Technologies />
        <Experience />
        <Projects />
      </div>
    </Box>
  );
}
