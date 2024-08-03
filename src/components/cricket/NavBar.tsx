import { Grid, IconButton, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import SportsCricketIcon from "@mui/icons-material/SportsCricket";

const NavBar = () => {
  const navigate = useNavigate();

  return (
    <Grid container>
      <Grid item xs={2} md={4}>
        <IconButton style={{ backgroundColor: "transparent" }}>
          <SportsCricketIcon
            style={{ fontSize: "5rem", cursor: "pointer" }}
            onClick={() => navigate("/cricket")}
            color="primary"
          />
        </IconButton>
      </Grid>

      <Grid item xs={10} md={8} style={{ textAlign: "left" }}>
        <Typography
          variant="h1"
          color="primary"
          style={{ cursor: "pointer" }}
          onClick={() => navigate("/cricket")}
        >
          𝑪𝒓𝒊𝒄 𝑳𝒊𝒗𝒆
        </Typography>
      </Grid>
    </Grid>
  );
};

export default NavBar;
