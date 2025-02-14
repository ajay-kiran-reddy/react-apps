import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { Grid } from "@mui/material";
import NavBar from "../NavBar";
import Commentary from "./Commentary";
import ScoreCard from "./ScoreCard";
import Sqauds from "./Sqauds";
import SeriesPage from "./SeriesPage";
import { useParams } from "react-router-dom";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 0 }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function MatchDetailsTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    console.log(event);
    setValue(newValue);
  };

  const params = useParams();

  React.useEffect(() => {
    setValue(0);
  }, [params]);

  return (
    <Box sx={{ width: "100%" }}>
      <Grid item xs={12} style={{ textAlign: "left" }}>
        <NavBar />
      </Grid>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Commentary" {...a11yProps(0)} />
          <Tab label=" Score Card" {...a11yProps(1)} />
          <Tab label="Series Page" {...a11yProps(2)} />
          <Tab label="Squads" {...a11yProps(3)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <Commentary />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <ScoreCard />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <SeriesPage />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={3}>
        <Sqauds />
      </CustomTabPanel>
    </Box>
  );
}
