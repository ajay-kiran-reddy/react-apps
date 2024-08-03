import { Grid, IconButton, Tooltip, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import PlayerStats from "./PlayerStats";
import NavBar from "../NavBar";
import { useNavigate, useParams } from "react-router-dom";
import { fetchData } from "../../../apiService/service";
import { CRIC_API_END_POINTS } from "../constants";
import { BiLeftArrow } from "react-icons/bi";
import Loader from "../Loader";

const PlayerInfo = () => {
  const [playerInfo, setPlayerInfo]: any = useState();
  const [batStats, setBatStats] = useState();
  const [bowlStats, setBowlStats] = useState();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const params = useParams();

  const getPlayerInfo = async () => {
    setIsLoading(true);
    const data = await fetchData(
      `${CRIC_API_END_POINTS.GET_PLAYER_INFO}/${params.id}`
    );
    setPlayerInfo(data);

    const batInfo = await fetchData(
      `${CRIC_API_END_POINTS.GET_PLAYER_INFO}/${params.id}/batting`
    );
    setBatStats(batInfo);

    const bowlInfo = await fetchData(
      `${CRIC_API_END_POINTS.GET_PLAYER_INFO}/${params.id}/bowling`
    );
    setBowlStats(bowlInfo);
    setIsLoading(false);
  };

  useEffect(() => {
    getPlayerInfo();
  }, []);

  return (
    <div>
      <Loader show={isLoading} />
      <Grid item xs={12} style={{ textAlign: "left" }}>
        <NavBar />
      </Grid>
      <div style={{ textAlign: "left" }}>
        <Tooltip title="Back">
          <IconButton onClick={() => navigate(-1)}>
            <BiLeftArrow color="#009270" />
          </IconButton>
        </Tooltip>
      </div>

      <Grid container spacing={3}>
        <Grid item>
          <img src={playerInfo?.image} height="100px" width="100px" />
        </Grid>

        <Grid item>
          <Typography variant="h3">{playerInfo?.name}</Typography>
          <Typography variant="h6" style={{ color: "grey" }}>
            {playerInfo?.intlTeam}
          </Typography>
        </Grid>
        <Grid item xs={12}></Grid>

        <Grid
          item
          xs={12}
          md={4}
          style={{ padding: "5px", backgroundColor: "lightgrey" }}
        >
          <Typography variant="body1">Personal Information</Typography>

          <Grid container>
            <Grid item xs={6} style={{ textAlign: "left" }}>
              <Typography variant="body1">Born</Typography>
            </Grid>

            <Grid item xs={6} style={{ textAlign: "left" }}>
              <Typography variant="overline">{playerInfo?.DoB}</Typography>
            </Grid>

            <Grid item xs={6} style={{ textAlign: "left" }}>
              <Typography variant="body1">Birth Place</Typography>
            </Grid>

            <Grid item xs={6} style={{ textAlign: "left" }}>
              <Typography variant="overline">
                {playerInfo?.birthPlace}
              </Typography>
            </Grid>

            <Grid item xs={6} style={{ textAlign: "left" }}>
              <Typography variant="body1">Height</Typography>
            </Grid>

            <Grid item xs={6} style={{ textAlign: "left" }}>
              <Typography variant="overline">{playerInfo?.height}</Typography>
            </Grid>

            <Grid item xs={6} style={{ textAlign: "left" }}>
              <Typography variant="body1">Role</Typography>
            </Grid>

            <Grid item xs={6} style={{ textAlign: "left" }}>
              <Typography variant="overline">{playerInfo?.role}</Typography>
            </Grid>

            <Grid item xs={6} style={{ textAlign: "left" }}>
              <Typography variant="body1">Batting Style</Typography>
            </Grid>

            <Grid item xs={6} style={{ textAlign: "left" }}>
              <Typography variant="overline">{playerInfo?.bat}</Typography>
            </Grid>

            <Grid item xs={6} style={{ textAlign: "left" }}>
              <Typography variant="body1">Bowling Style</Typography>
            </Grid>

            <Grid item xs={6} style={{ textAlign: "left" }}>
              <Typography variant="overline">
                {playerInfo?.bowl || "-"}
              </Typography>
            </Grid>

            <Grid item xs={12}>
              <Typography variant="body1">ICC Rankings</Typography>
            </Grid>

            <Grid item xs={3}></Grid>

            <Grid item xs={3} style={{ textAlign: "left" }}>
              <Typography variant="overline">Test</Typography>
            </Grid>

            <Grid item xs={3} style={{ textAlign: "left" }}>
              <Typography variant="overline">ODI</Typography>
            </Grid>

            <Grid item xs={3} style={{ textAlign: "left" }}>
              <Typography variant="overline">T20</Typography>
            </Grid>

            <Grid item xs={3} style={{ textAlign: "left" }}>
              <Typography style={{ fontWeight: "600" }}>Batting</Typography>
            </Grid>

            <Grid item xs={3} style={{ textAlign: "left" }}>
              <Typography variant="overline">
                {playerInfo?.rankings?.bat?.testRank || "--"}
              </Typography>
            </Grid>

            <Grid item xs={3} style={{ textAlign: "left" }}>
              <Typography variant="overline">
                {playerInfo?.rankings?.bat?.odiRank || "--"}
              </Typography>
            </Grid>

            <Grid item xs={3} style={{ textAlign: "left" }}>
              <Typography variant="overline">
                {playerInfo?.rankings?.bat?.t20Rank || "--"}
              </Typography>
            </Grid>

            <Grid item xs={3} style={{ textAlign: "left" }}>
              <Typography style={{ fontWeight: "600" }}>Bowling</Typography>
            </Grid>

            <Grid item xs={3} style={{ textAlign: "left" }}>
              {playerInfo?.rankings?.bowl?.testRank || "--"}
            </Grid>

            <Grid item xs={3} style={{ textAlign: "left" }}>
              {playerInfo?.rankings?.bowl?.odiRank || "--"}
            </Grid>

            <Grid item xs={3} style={{ textAlign: "left" }}>
              {playerInfo?.rankings?.bowl?.t20Rank || "--"}
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={12} md={8} style={{ textAlign: "left", paddingTop: 0 }}>
          <PlayerStats batStats={batStats} bowlStats={bowlStats} />

          <div style={{ marginTop: "1rem" }}>
            {playerInfo?.bio?.split("<br/><br/>")?.map((data: any) => {
              return <Typography gutterBottom>{data}</Typography>;
            })}
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default PlayerInfo;
