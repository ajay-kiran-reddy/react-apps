import { useEffect, useState } from "react";
import { Card, CardContent, Typography, Grid, Box } from "@mui/material";
import { formatDateTime } from "../../../utils";
import { GiWinterGloves } from "react-icons/gi";
import { PiBaseballCapDuotone } from "react-icons/pi";
import { useNavigate, useParams } from "react-router-dom";
import { fetchData } from "../../../apiService/service";
import { CRIC_API_END_POINTS } from "../constants";
import Loader from "../Loader";

const ScoreCard = () => {
  const [scorecard, setScoreCard]: any = useState();
  const navigate = useNavigate();
  const params = useParams();
  const [isLoading, setIsLoading] = useState(false);

  const getScoreCardInfo = async () => {
    setIsLoading(true);
    const data = await fetchData(
      `${CRIC_API_END_POINTS.GET_SCORECARD}/${params.id}/scard`
    );
    setScoreCard(data);
    setIsLoading(false);
  };

  useEffect(() => {
    getScoreCardInfo();
  }, []);

  return (
    <div>
      <Loader show={isLoading} />

      <Card>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {scorecard?.matchHeader?.team1?.name} vs{" "}
            {scorecard?.matchHeader?.team2?.name} ,{" "}
            {scorecard?.matchHeader?.matchDescription}{" "}
          </Typography>
          <Grid container spacing={1}>
            <Grid item xs={12} md={4}>
              <Typography
                variant="body2"
                color="text.secondary"
                style={{ textAlign: "left" }}
              >
                Series : {scorecard?.matchHeader?.seriesName}
              </Typography>
            </Grid>
            <Grid item xs={12} md={8}>
              <Typography
                variant="body2"
                color="text.secondary"
                style={{ textAlign: "left" }}
              >
                Date & Time :{" "}
                {formatDateTime(scorecard?.matchHeader?.matchStartTimestamp)}
              </Typography>
            </Grid>

            {scorecard?.scoreCard?.map((card: any, index: number) => {
              return (
                <Grid
                  item
                  xs={12}
                  style={{
                    color: index === 0 ? "grey" : "black",
                    fontWeight: 600,
                    textAlign: "left",
                  }}
                >
                  {card?.batTeamDetails?.batTeamShortName}{" "}
                  {card?.scoreDetails?.runs} / {card?.scoreDetails?.wickets}{" "}
                  {""}
                  {card?.scoreDetails?.overs}
                </Grid>
              );
            })}

            <Grid item xs={4} style={{ textAlign: "left" }}>
              <Typography
                style={{
                  color: "#348feb",
                  marginTop: "0.5rem",
                }}
              >
                {scorecard?.status}
              </Typography>
            </Grid>

            <Grid item xs={8} style={{ textAlign: "left" }}>
              <Typography style={{ color: "grey" }} variant="caption">
                PLAYER OF THE MATCH
              </Typography>
              <Typography>
                {scorecard?.matchHeader?.playersOfTheMatch[0]?.fullName}
              </Typography>
            </Grid>

            <Grid item xs={12} style={{ textAlign: "left" }}>
              {scorecard?.scoreCard?.map((card: any) => {
                return (
                  <>
                    <Box mt={2}>
                      <Grid
                        container
                        style={{
                          border: "1px dashed lightgrey",
                          padding: "5px",
                        }}
                      >
                        <Grid
                          item
                          xs={6}
                          style={{
                            backgroundColor: "#dfede7",
                            padding: "2px",
                          }}
                        >
                          <Typography
                            style={{
                              fontWeight: 600,

                              padding: "5px",
                            }}
                          >
                            {card?.batTeamDetails?.batTeamName} Innings
                          </Typography>
                        </Grid>
                        <Grid
                          item
                          xs={6}
                          style={{
                            textAlign: "right",
                            backgroundColor: "#dfede7",
                            padding: "2px",
                          }}
                        >
                          <Typography
                            style={{
                              //   fontWeight: 600,

                              padding: "5px",
                            }}
                          >
                            {card?.scoreDetails?.runs} {"-"}
                            {card?.scoreDetails?.wickets} (
                            {card?.scoreDetails?.overs}){" "}
                          </Typography>
                        </Grid>

                        <Grid item xs={12}>
                          <Grid container style={{ textAlign: "left" }}>
                            <Grid item xs={6}>
                              Batter
                            </Grid>
                            <Grid item xs={1}>
                              R
                            </Grid>
                            <Grid item xs={1}>
                              B
                            </Grid>
                            <Grid item xs={1}>
                              4s
                            </Grid>
                            <Grid item xs={1}>
                              6s
                            </Grid>
                            <Grid item xs={1}>
                              SR
                            </Grid>
                          </Grid>
                          {Object.keys(card.batTeamDetails?.batsmenData).map(
                            (key) => {
                              return (
                                <Grid
                                  container
                                  style={{
                                    textAlign: "left",
                                    marginTop: "0.5rem",
                                  }}
                                >
                                  <Grid item xs={6}>
                                    <Grid container>
                                      <Grid
                                        item
                                        xs={6}
                                        style={{
                                          cursor: "pointer",
                                          overflow: "hidden",
                                          color: "grey",
                                          fontWeight: 600,
                                        }}
                                        onClick={() =>
                                          navigate(
                                            `/cricket/player/${card?.batTeamDetails?.batsmenData[key]?.batId}`
                                          )
                                        }
                                      >
                                        {
                                          card?.batTeamDetails?.batsmenData[key]
                                            ?.batName
                                        }
                                        {card?.batTeamDetails?.batsmenData[key]
                                          ?.isKeeper && <GiWinterGloves />}

                                        {card?.batTeamDetails?.batsmenData[key]
                                          ?.isCaptain && (
                                          <PiBaseballCapDuotone />
                                        )}
                                      </Grid>
                                      <Grid
                                        item
                                        xs={6}
                                        style={{ textAlign: "left" }}
                                      >
                                        <span
                                          style={{
                                            fontSize: "12px",
                                            // marginLeft: "3rem",
                                          }}
                                        >
                                          {
                                            card?.batTeamDetails?.batsmenData[
                                              key
                                            ]?.outDesc
                                          }
                                        </span>
                                      </Grid>
                                    </Grid>
                                  </Grid>
                                  <Grid item xs={1}>
                                    {
                                      card.batTeamDetails?.batsmenData[key]
                                        ?.runs
                                    }
                                  </Grid>
                                  <Grid item xs={1}>
                                    {
                                      card?.batTeamDetails?.batsmenData[key]
                                        ?.balls
                                    }
                                  </Grid>
                                  <Grid item xs={1}>
                                    {
                                      card?.batTeamDetails?.batsmenData[key]
                                        ?.fours
                                    }
                                  </Grid>
                                  <Grid item xs={1}>
                                    {
                                      card?.batTeamDetails?.batsmenData[key]
                                        ?.sixes
                                    }
                                  </Grid>
                                  <Grid item xs={1}>
                                    {
                                      card?.batTeamDetails?.batsmenData[key]
                                        ?.strikeRate
                                    }
                                  </Grid>
                                </Grid>
                              );
                            }
                          )}
                        </Grid>
                      </Grid>
                    </Box>

                    <Box mt={2}>
                      <Grid
                        container
                        style={{
                          border: "1px dashed lightgrey",
                          padding: "5px",
                        }}
                      >
                        <Grid item xs={6}>
                          <Typography
                            style={{
                              fontWeight: 600,

                              padding: "5px",
                            }}
                          >
                            {card.bowlTeamDetails.bowlTeamName} Bowlers
                          </Typography>
                        </Grid>
                        <Grid item xs={6}></Grid>

                        <Grid item xs={12}>
                          <Grid container style={{ textAlign: "left" }}>
                            <Grid item xs={5}>
                              Bowler
                            </Grid>
                            <Grid item xs={1}>
                              O
                            </Grid>
                            <Grid item xs={1}>
                              M
                            </Grid>
                            <Grid item xs={1}>
                              R
                            </Grid>
                            <Grid item xs={1}>
                              W
                            </Grid>
                            <Grid item xs={1}>
                              NB
                            </Grid>
                            <Grid item xs={1}>
                              WD
                            </Grid>
                            <Grid item xs={1}>
                              ECO
                            </Grid>
                          </Grid>
                          {Object.keys(card.bowlTeamDetails?.bowlersData).map(
                            (key) => {
                              return (
                                <Grid
                                  container
                                  style={{
                                    textAlign: "left",
                                    marginTop: "0.5rem",
                                    cursor: "pointer",
                                  }}
                                  onClick={() =>
                                    navigate(
                                      `/cricket/player/${card?.bowlTeamDetails?.bowlersData[key]?.bowlerId}`
                                    )
                                  }
                                >
                                  <Grid
                                    item
                                    xs={5}
                                    style={{ fontWeight: 600, color: "grey" }}
                                  >
                                    {
                                      card?.bowlTeamDetails?.bowlersData[key]
                                        ?.bowlName
                                    }
                                  </Grid>
                                  <Grid item xs={1}>
                                    {
                                      card?.bowlTeamDetails?.bowlersData[key]
                                        ?.overs
                                    }
                                  </Grid>
                                  <Grid item xs={1}>
                                    {
                                      card?.bowlTeamDetails?.bowlersData[key]
                                        ?.maidens
                                    }
                                  </Grid>
                                  <Grid item xs={1}>
                                    {
                                      card?.bowlTeamDetails?.bowlersData[key]
                                        ?.runs
                                    }
                                  </Grid>
                                  <Grid item xs={1}>
                                    {
                                      card?.bowlTeamDetails?.bowlersData[key]
                                        ?.wickets
                                    }
                                  </Grid>
                                  <Grid item xs={1}>
                                    {
                                      card?.bowlTeamDetails?.bowlersData[key]
                                        ?.no_balls
                                    }
                                  </Grid>

                                  <Grid item xs={1}>
                                    {
                                      card?.bowlTeamDetails?.bowlersData[key]
                                        ?.wides
                                    }
                                  </Grid>
                                  <Grid item xs={1}>
                                    {
                                      card?.bowlTeamDetails?.bowlersData[key]
                                        ?.economy
                                    }
                                  </Grid>
                                </Grid>
                              );
                            }
                          )}
                        </Grid>
                      </Grid>
                    </Box>
                  </>
                );
              })}
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </div>
  );
};

export default ScoreCard;
