import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Chip,
  Grid,
} from "@mui/material";
import { useEffect, useState } from "react";
import { fetchData } from "../../apiService/service";
import { CRIC_API_END_POINTS } from "./constants";
import { getChipByCat } from "./utils";
import MatchesCarousel from "./CarouselCard";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import NavBar from "./NavBar";
import Loader from "./Loader";

const Cricket = () => {
  const [matches, setMatches]: any = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getMatchesList = async () => {
    setIsLoading(true);
    const data = await fetchData(CRIC_API_END_POINTS.RECENT_MATCHES);
    setMatches(data);
    setIsLoading(false);
  };

  useEffect(() => {
    getMatchesList();
  }, []);

  return (
    <Grid container>
      <Loader show={isLoading} />
      <Grid item xs={12} style={{ textAlign: "left" }}>
        <NavBar />
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
