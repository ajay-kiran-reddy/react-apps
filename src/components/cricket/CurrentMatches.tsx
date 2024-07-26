import axios from "axios";
import React, { useEffect, useState } from "react";
import { CRIC_API_END_POINTS } from "./constants/constants";
import data from "./mockData.json";
import { Row, Col } from "antd";
import MatchCard from "./MatchCard";
import { MatchInfo } from "./types";

const CurrentMatches = () => {
  const [currentMatches, setCurrentMatches]: any = useState([]);

  const fetchCurrentMatches = async () => {
    // await axios
    //   .get(CRIC_API_END_POINTS.GET_CURRENT_MATCHES)
    //   .then((response) => setCurrentMatches(response.data));
    setCurrentMatches(data.current_matches);
  };
  useEffect(() => {
    fetchCurrentMatches();
  }, []);

  console.log(currentMatches, "[current matches]");

  return (
    <div>
      Current Matches displayed here
      <Row gutter={[48, 16]}>
        {currentMatches.map((match: MatchInfo) => {
          return (
            <Col xs={24} sm={12}>
              <MatchCard matchInfo={match} />
            </Col>
          );
        })}
      </Row>
    </div>
  );
};

export default CurrentMatches;
