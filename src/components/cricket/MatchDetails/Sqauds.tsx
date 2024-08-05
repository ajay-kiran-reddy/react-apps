import { useEffect, useState } from "react";
import { Grid, Typography } from "@mui/material";
import countryData from "../mock.json";
import image from "../../../../assets/picture.png";
import { useParams } from "react-router-dom";
import { fetchData } from "../../../apiService/service";
import { CRIC_API_END_POINTS } from "../constants";
import Loader from "../Loader";

const Sqauds = () => {
  const [squad1, setSquad1]: any = useState();
  const [squad2, setSquad2]: any = useState();

  const { id, team1Id, team2Id, team1Name, team2Name } = useParams();
  const [isLoading, setIsLoading] = useState(false);

  const getScoreCardInfo = async () => {
    setIsLoading(true);
    const sq1Data = await fetchData(
      `${CRIC_API_END_POINTS.GET_SCORECARD}/${id}/team/${team1Id}`
    );
    setSquad1(sq1Data);

    const sq2Data = await fetchData(
      `${CRIC_API_END_POINTS.GET_SCORECARD}/${id}/team/${team2Id}`
    );
    setSquad2(sq2Data);
    setIsLoading(false);
  };

  useEffect(() => {
    getScoreCardInfo();
  }, []);

  return (
    <div>
      <Loader show={isLoading} />
      <Grid container>
        <Grid
          item
          xs={6}
          style={{ textAlign: "left", backgroundColor: "#DAF1EB" }}
        >
          <img
            height={"50px"}
            width={"50px"}
            src={
              countryData?.find((cou: any) => team1Name?.includes(cou.name))
                ?.image || image
            }
          />
          <Typography>{team1Name}</Typography>
        </Grid>
        <Grid
          item
          xs={6}
          style={{ textAlign: "right", backgroundColor: "#DAF1EB" }}
        >
          <img
            height={"50px"}
            width={"50px"}
            src={
              countryData?.find((cou: any) => team2Name?.includes(cou.name))
                ?.image || image
            }
          />
          <Typography>{team2Name}</Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography style={{ fontWeight: 600 }}>Playing XI</Typography>
        </Grid>

        <Grid item xs={12}>
          <Grid container>
            <Grid item xs={6}>
              {squad1?.players?.["playing XI"].map((player: any) => {
                return (
                  <Grid
                    item
                    xs={12}
                    style={{
                      borderRight: "1px solid grey",
                      borderBottom: "1px dashed lightgrey",
                      padding: "0.5rem",
                    }}
                  >
                    <Typography>{player.fullName}</Typography>
                    <Typography variant="caption">{player.role}</Typography>
                  </Grid>
                );
              })}
            </Grid>

            <Grid item xs={6}>
              {squad2?.players?.["playing XI"].map((player: any) => {
                return (
                  <Grid
                    item
                    xs={12}
                    style={{
                      borderRight: "1px solid grey",
                      borderBottom: "1px dashed lightgrey",
                      padding: "0.5rem",
                    }}
                  >
                    <Typography>{player.fullName}</Typography>
                    <Typography variant="caption">{player.role}</Typography>
                  </Grid>
                );
              })}
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={12} style={{ marginTop: "1rem" }}>
          <Typography style={{ fontWeight: 600 }}>Bench</Typography>
        </Grid>

        <Grid item xs={12}>
          <Grid container>
            <Grid item xs={6}>
              {squad1?.players?.bench?.map((player: any) => {
                return (
                  <Grid
                    item
                    xs={12}
                    style={{
                      borderRight: "1px solid grey",
                      borderBottom: "1px dashed lightgrey",
                      padding: "0.5rem",
                    }}
                  >
                    <Typography>{player.fullName}</Typography>
                    <Typography variant="caption">{player.role}</Typography>
                  </Grid>
                );
              })}
            </Grid>

            <Grid item xs={6}>
              {squad2?.players?.bench?.map((player: any) => {
                return (
                  <Grid
                    item
                    xs={12}
                    style={{
                      borderRight: "1px solid grey",
                      borderBottom: "1px dashed lightgrey",
                      padding: "0.5rem",
                    }}
                  >
                    <Typography>{player.fullName}</Typography>
                    <Typography variant="caption">{player.role}</Typography>
                  </Grid>
                );
              })}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default Sqauds;
