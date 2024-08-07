import { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import MatchCard from "../MatchCard";
import Loader from "../Loader";
import { fetchData } from "../../../apiService/service";
import { CRIC_API_END_POINTS } from "../constants";
import { useParams } from "react-router-dom";

const SeriesPage = () => {
  const [seriesInfo, setSeriesInfo]: any = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const params = useParams();

  const getSeriesInfo = async () => {
    setIsLoading(true);
    const data = await fetchData(
      `${CRIC_API_END_POINTS.GET_SERIES_INFO}/${params.seriesId}`
    );
    setSeriesInfo(data);
    setIsLoading(false);
  };

  useEffect(() => {
    getSeriesInfo();
  }, []);

  return (
    <div>
      <Loader show={isLoading} />
      <Grid container>
        <Grid item xs={12}>
          {seriesInfo?.matchDetails?.map((match: any) => {
            return (
              <>
                <Grid container spacing={3}>
                  <Grid item xs={12}>
                    {match.matchDetailsMap?.match.map((m: any) => {
                      return <MatchCard matchInfo={m} />;
                    })}
                  </Grid>
                </Grid>
              </>
            );
          })}
        </Grid>
      </Grid>
    </div>
  );
};

export default SeriesPage;
