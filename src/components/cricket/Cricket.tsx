import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Chip,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { fetchData } from "../../apiService/service";
import { CRIC_API_END_POINTS } from "./constants";
import data from "./mock.json";
import { getChipByCat } from "./utils";
import MatchesCarousel from "./CarouselCard";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SportsCricketIcon from "@mui/icons-material/SportsCricket";
import { useNavigate } from "react-router-dom";

const Cricket = () => {
  const [matches, setMatches]: any = useState([]);
  const navigate = useNavigate();

  const getMatchesList = async () => {
    // const data = await fetchData(CRIC_API_END_POINTS.RECENT_MATCHES);
    setMatches(data.recent);
  };

  useEffect(() => {
    getMatchesList();
  }, []);

  console.log(matches, "[matches]");
  return (
    <Grid container>
      <Grid item xs={12} style={{ textAlign: "left" }}>
        <SportsCricketIcon
          style={{ fontSize: 60, cursor: "pointer" }}
          onClick={() => navigate("/cricket")}
          color="primary"
        />
      </Grid>

      <Grid item xs={12}>
        <Grid container spacing={3}>
          {matches?.filters?.matchType?.map((type: string) => {
            return (
              <Grid item xs={12}>
                <Accordion defaultExpanded>
                  <AccordionSummary
                    expandIcon={<KeyboardArrowDownIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                  >
                    <Chip
                      label={type}
                      style={{
                        backgroundColor: getChipByCat(type),
                        color: "#ffffff",
                        fontWeight: 600,
                      }}
                    />
                  </AccordionSummary>
                  <AccordionDetails>
                    {matches?.typeMatches
                      .filter((data: any) => data.matchType === type)[0]
                      ?.seriesMatches?.map((match: any) => {
                        return (
                          <MatchesCarousel
                            type={type}
                            content={match.seriesAdWrapper}
                          />
                        );
                      })}
                  </AccordionDetails>
                </Accordion>
              </Grid>
            );
          })}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Cricket;
