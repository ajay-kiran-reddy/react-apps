import { Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import data from "../mock.json";
import PlayerStats from "./PlayerStats";
import { useNavigate } from "react-router-dom";
import SportsCricketIcon from "@mui/icons-material/SportsCricket";

const PlayerInfo = () => {
  const [playerInfo, setPlayerInfo] = useState(data.playerInfo);
  const navigate = useNavigate();

  return (
    <div>
      <Grid item xs={12} style={{ textAlign: "left" }}>
        <SportsCricketIcon
          style={{ fontSize: 60, cursor: "pointer" }}
          onClick={() => navigate("/cricket")}
          color="primary"
        />
      </Grid>
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
                {playerInfo?.rankings?.bat[0]?.testRank || "--"}
              </Typography>
            </Grid>

            <Grid item xs={3} style={{ textAlign: "left" }}>
              <Typography variant="overline">
                {playerInfo?.rankings?.bat[0]?.odiRank || "--"}
              </Typography>
            </Grid>

            <Grid item xs={3} style={{ textAlign: "left" }}>
              <Typography variant="overline">
                {playerInfo?.rankings?.bat[0]?.t20Rank || "--"}
              </Typography>
            </Grid>

            <Grid item xs={3} style={{ textAlign: "left" }}>
              <Typography style={{ fontWeight: "600" }}>Bowling</Typography>
            </Grid>

            <Grid item xs={3} style={{ textAlign: "left" }}>
              {playerInfo?.rankings?.bowl[0]?.testRank || "--"}
            </Grid>

            <Grid item xs={3} style={{ textAlign: "left" }}>
              {playerInfo?.rankings?.bowl[0]?.odiRank || "--"}
            </Grid>

            <Grid item xs={3} style={{ textAlign: "left" }}>
              {playerInfo?.rankings?.bowl[0]?.t20Rank || "--"}
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={12} md={8} style={{ textAlign: "left", paddingTop: 0 }}>
          <PlayerStats />

          <div style={{ marginTop: "1rem" }}>
            {playerInfo?.bio.split("<br/><br/>").map((data) => {
              return <Typography gutterBottom>{data}</Typography>;
            })}
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default PlayerInfo;
