import { useEffect, useState } from "react";
import { Badge, Divider, Grid, Typography } from "@mui/material";
import { isMobileView } from "../../../utils";
import { getBadgeThemeByEvent } from "../utils";
import { fetchData } from "../../../apiService/service";
import { CRIC_API_END_POINTS } from "../constants";
import { useParams } from "react-router-dom";
import Loader from "../Loader";

const Commentary = () => {
  const [commentary, setCommentary]: any = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const { id } = useParams();

  const getCommentaryInfo = async () => {
    setIsLoading(true);
    const data = await fetchData(
      `${CRIC_API_END_POINTS.GET_COMMENTORY}/${id}/comm`
    );
    setCommentary(data);
    setIsLoading(false);
  };

  useEffect(() => {
    getCommentaryInfo();
  }, []);

  return (
    <>
      <Loader show={isLoading} />
      {commentary?.commentaryList?.map((com: any, i: number) => {
        return (
          <Grid key={i} container spacing={2}>
            {com?.overSeparator && (
              <Grid
                item
                xs={12}
                style={{
                  backgroundColor: "#dfebe8",
                  padding: "2px",
                  borderRadius: "10px",
                }}
              >
                <Grid container spacing={2}>
                  <Grid item xs={2} md={1}>
                    <Typography style={{ fontWeight: 600 }} variant="h6">
                      {com?.overSeparator?.overNum}
                    </Typography>
                  </Grid>
                  <Grid xs={10} item md={3}>
                    <Typography variant="overline">
                      Runs Scored :{" "}
                      <span style={{ fontWeight: 600 }}>
                        {com?.overSeparator?.runs}
                      </span>
                    </Typography>
                    <Typography style={{ fontWeight: 600 }}>
                      {com?.overSeparator?.o_summary}
                    </Typography>
                  </Grid>

                  {isMobileView() && <Divider style={{ width: "100%" }} />}
                  <Grid item xs={3} md={3}>
                    {!isMobileView() && (
                      <Typography variant="overline">
                        Score After :{com?.overNumber}
                      </Typography>
                    )}

                    <Typography style={{ fontWeight: 600 }}>
                      {com?.overSeparator?.batTeamName}{" "}
                      {com?.overSeparator?.score} /{" "}
                      {com?.overSeparator?.wickets}
                    </Typography>
                  </Grid>
                  <Grid item xs={9} md={3}>
                    <Typography variant="body2">
                      {com?.overSeparator?.batStrikerNames[0]} {"   "}{" "}
                      {com?.overSeparator?.batStrikerRuns}
                      {" ("}
                      {com?.overSeparator?.batStrikerBalls}
                      {")"}
                    </Typography>
                    <Typography variant="body2">
                      {com?.overSeparator?.batNonStrikerNames[0]} {"   "}{" "}
                      {com?.overSeparator?.batNonStrikerRuns}
                      {" ("}
                      {com?.overSeparator?.batNonStrikerBalls}
                      {")"}
                    </Typography>
                  </Grid>
                  {isMobileView() && (
                    <Grid item xs={3} md={0}>
                      {" "}
                    </Grid>
                  )}

                  <Grid item xs={9} md={2}>
                    <Typography variant="body2">
                      {com?.overSeparator?.bowlNames[0]}{" "}
                    </Typography>
                    <Typography variant="body2">
                      {com?.overSeparator?.bowlOvers} {"-"}
                      {com?.overSeparator?.bowlMaidens} {"-"}
                      {com?.overSeparator?.bowlRuns} {"-"}
                      {com?.overSeparator?.bowlWickets}
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            )}
            <Grid item xs={2}>
              <Badge
                color={getBadgeThemeByEvent(com.event)}
                badgeContent={com.overNumber}
              ></Badge>
            </Grid>
            <Grid
              item
              xs={10}
              style={{ textAlign: "left", marginBottom: "0.5rem" }}
            >
              <Typography
                gutterBottom
                style={{ fontWeight: i === 0 ? 600 : 500 }}
                color={i === 0 ? "primary" : ""}
              >
                {com?.commText
                  .replace(
                    com?.commentaryFormats?.bold?.formatId &&
                      com?.commentaryFormats?.bold?.formatId[0],
                    com?.commentaryFormats?.bold?.formatValue &&
                      com?.commentaryFormats?.bold?.formatValue[0]
                  )
                  .replace(
                    com?.commentaryFormats?.bold?.formatId[1],
                    com?.commentaryFormats?.bold?.formatValue[1]
                  )}
              </Typography>
            </Grid>
          </Grid>
        );
      })}
    </>
  );
};

export default Commentary;
