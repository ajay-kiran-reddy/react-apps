import { Chip, Grid, IconButton, Typography } from "@mui/material";
import { getBackgroundColorByType, getChipByFormat } from "./utils";
import { MdOutlineStadium } from "react-icons/md";
import data from "./mock.json";
import image from "../../../assets/picture.png";
import { useNavigate } from "react-router-dom";

const MatchCard = ({ matchInfo, type }: any) => {
  const naviagte = useNavigate();

  return (
    <Grid
      container
      spacing={3}
      style={{
        marginTop: "1rem",
        cursor: "pointer",
        backgroundColor: getBackgroundColorByType(type),
        padding: "0 1rem",
      }}
      onClick={() =>
        naviagte(`/cricScore/scorecard/${matchInfo?.matchInfo?.matchId}`)
      }
    >
      <div
        style={{ width: "100%", backgroundColor: "#fff", height: "2px" }}
      ></div>
      <Grid item xs={12}>
        <Grid container spacing={3}>
          <Grid item xs={4} style={{ textAlign: "end" }}></Grid>
          <Grid item xs={4} style={{ textAlign: "center" }}>
            <Typography variant="h6">
              {matchInfo?.matchInfo?.seriesName}
            </Typography>
          </Grid>
          <Grid item xs={4} style={{ textAlign: "end" }}>
            <Chip
              label={matchInfo?.matchInfo?.matchFormat}
              style={{
                color: "#fff",
                backgroundColor: getChipByFormat(
                  matchInfo?.matchInfo?.matchFormat
                ),
              }}
            />
          </Grid>
        </Grid>
      </Grid>

      <Grid item xs={12}>
        <Grid container spacing={3}>
          <Grid item xs={4} style={{ textAlign: "left" }}>
            <img
              height={"50px"}
              width={"50px"}
              src={
                data.countries.find((cou) =>
                  matchInfo?.matchInfo?.team1?.teamName?.includes(cou.name)
                )?.image || image
              }
            />
            <Typography>{matchInfo?.matchInfo?.team1?.teamName}</Typography>
          </Grid>
          <Grid item xs={4} style={{ textAlign: "center" }}>
            <IconButton>
              <MdOutlineStadium />
            </IconButton>
            <Typography variant="caption">
              {matchInfo?.matchInfo?.venueInfo?.ground} ,{" "}
              {matchInfo?.matchInfo?.venueInfo?.city}
            </Typography>
          </Grid>
          <Grid item xs={4} style={{ textAlign: "right" }}>
            <span style={{ color: "gray" }}>
              ({matchInfo?.matchScore?.team1Score?.inngs1?.overs})
            </span>

            <span style={{ fontWeight: 600 }}>
              {matchInfo?.matchScore.team1Score.inngs1.runs}/
              {matchInfo?.matchScore?.team1Score?.inngs1?.wickets}
            </span>
          </Grid>
        </Grid>

        <Grid container spacing={3}>
          <Grid item xs={4} style={{ textAlign: "left" }}>
            <img
              height={"50px"}
              width={"50px"}
              src={
                data.countries.find((cou) =>
                  matchInfo?.matchInfo?.team2?.teamName.includes(cou.name)
                )?.image || image
              }
            />
            <Typography>{matchInfo?.matchInfo?.team2?.teamName}</Typography>
          </Grid>

          <Grid item xs={4}>
            <Typography style={{ fontWeight: 600, color: "gray" }}>
              {matchInfo?.matchInfo?.status}
            </Typography>
          </Grid>

          <Grid item xs={4} style={{ textAlign: "right" }}>
            <span style={{ color: "gray" }}>
              ({matchInfo?.matchScore?.team2Score?.inngs1?.overs})
            </span>

            <span style={{ fontWeight: 600 }}>
              {matchInfo?.matchScore?.team2Score?.inngs1?.runs}/
              {matchInfo?.matchScore?.team2Score?.inngs1?.wickets}
            </span>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default MatchCard;
