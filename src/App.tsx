import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import CodeIcon from "@mui/icons-material/Code";
import Hero from "./components/Hero";

export default function PrimarySearchAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{ backgroundColor: "transparent" }}>
        <Toolbar>
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
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
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
        </Toolbar>
      </AppBar>

      <Hero />
    </Box>
  );
}
