import React, { useState } from "react";
import data from "../mock.json";
import { Box, Grid, Typography } from "@mui/material";

const cellStyle = {
  width: "55px",
  //   whiteSpace: "nowrap",
  overflow: "hidden",
  //   textOverflow: "ellipsis",
};
const PlayerStats = () => {
  const [batStats, setBatStats] = useState(data.playerBattingStats);
  const [bowlStats, setBowlStats] = useState(data.playerBowlingStats);
  return (
    <div style={{ padding: "10px", border: "1px dashed grey" }}>
      <Typography style={{ fontWeight: 600 }}>
        Batting Career Summary
      </Typography>
      {batStats.headers.slice(0).map((data, index) => {
        return (
          <Grid container spacing={2} style={{ padding: "5px 0" }}>
            <Grid item style={cellStyle}>
              {index === 0 ? "" : data}
            </Grid>
            <Grid item style={cellStyle}>
              {batStats.values[0].values[index]}
            </Grid>
            <Grid item style={cellStyle}>
              {batStats.values[1].values[index]}
            </Grid>
            <Grid item style={cellStyle}>
              {batStats.values[2].values[index]}
            </Grid>
            <Grid item style={cellStyle}>
              {batStats.values[3].values[index]}
            </Grid>
            <Grid item style={cellStyle}>
              {batStats.values[4].values[index]}
            </Grid>
            <Grid item style={cellStyle}>
              {batStats.values[5].values[index]}
            </Grid>
            <Grid item style={cellStyle}>
              {batStats.values[6].values[index]}
            </Grid>
            <Grid item style={cellStyle}>
              {batStats.values[7].values[index]}
            </Grid>
            <Grid item style={cellStyle}>
              {batStats.values[8].values[index]}
            </Grid>
            <Grid item style={cellStyle}>
              {batStats.values[9].values[index]}
            </Grid>
            <Grid item style={cellStyle}>
              {batStats.values[10].values[index]}
            </Grid>
            <Grid item style={cellStyle}>
              {batStats.values[11].values[index]}
            </Grid>
            <Grid item style={cellStyle}>
              {batStats.values[12].values[index]}
            </Grid>
          </Grid>
        );
      })}

      <Box mt={2}>
        <Typography style={{ fontWeight: 600 }}>
          Bowling Career Summary
        </Typography>
        {bowlStats.headers.slice(0).map((data, index) => {
          return (
            <Grid container spacing={2} style={{ padding: "5px 0" }}>
              <Grid item style={cellStyle}>
                {index === 0 ? "" : data}
              </Grid>
              <Grid item style={cellStyle}>
                {bowlStats.values[0].values[index]}
              </Grid>
              <Grid item style={cellStyle}>
                {bowlStats.values[1].values[index]}
              </Grid>
              <Grid item style={cellStyle}>
                {bowlStats.values[2].values[index]}
              </Grid>
              <Grid item style={cellStyle}>
                {bowlStats.values[3].values[index]}
              </Grid>
              <Grid item style={cellStyle}>
                {bowlStats.values[4].values[index]}
              </Grid>
              <Grid item style={cellStyle}>
                {bowlStats.values[5].values[index]}
              </Grid>
              <Grid item style={cellStyle}>
                {bowlStats.values[6].values[index]}
              </Grid>
              <Grid item style={cellStyle}>
                {bowlStats.values[7].values[index]}
              </Grid>
              <Grid item style={cellStyle}>
                {bowlStats.values[8].values[index]}
              </Grid>
              <Grid item style={cellStyle}>
                {bowlStats.values[9].values[index]}
              </Grid>
              <Grid item style={cellStyle}>
                {bowlStats.values[10].values[index]}
              </Grid>
              <Grid item style={cellStyle}>
                {bowlStats.values[11].values[index]}
              </Grid>
              <Grid item style={cellStyle}>
                {bowlStats.values[12].values[index]}
              </Grid>
            </Grid>
          );
        })}
      </Box>
    </div>
  );
};

export default PlayerStats;
