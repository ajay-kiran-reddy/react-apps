import { Badge, Button, Card, Col, Row } from "antd";
import { MatchInfo } from "./types";
import { Typography } from "antd";

const { Text } = Typography;

interface Props {
  matchInfo: MatchInfo;
}
const MatchCard = (props: Props) => {
  const getBadgeColorByMatch = (matchType: string) => {
    if (matchType === "odi") {
      return "#3480eb";
    } else if (matchType === "t20") {
      return "#9407e6";
    } else return "#0af272";
  };
  const { matchInfo } = props;
  return (
    <Card
      actions={[
        <Button>Schedule</Button>,
        <Button>Table</Button>,
        <Button>Series</Button>,
      ]}
    >
      <Row>
        <Col xs={4} style={{ textAlign: "left" }}>
          <Badge count={"Live"} />
        </Col>
        <Col xs={16}>
          <Text strong style={{ paddingLeft: "10px" }}>
            {matchInfo.name}
          </Text>
        </Col>
        <Col xs={4} style={{ textAlign: "right" }}>
          <Badge
            style={{ marginLeft: "10px" }}
            count={matchInfo.matchType}
            color={getBadgeColorByMatch(matchInfo.matchType)}
          />
        </Col>
      </Row>

      <div style={{ marginTop: "1rem", textAlign: "left" }}>
        {matchInfo?.teamInfo?.map((team, index) => {
          return (
            <Row>
              <Col xs={4}>
                <img src={team.img} width="30px" height="30px" />
              </Col>
              <Col xs={4}>
                <Text style={{ paddingLeft: "10px" }}>{team.shortname}</Text>
              </Col>
              <Col xs={16} style={{ textAlign: "right" }}>
                {matchInfo.score[index] && (
                  <Text style={{ textAlign: "right" }}>
                    ({matchInfo?.score[index]?.o})
                    <strong>
                      {`${matchInfo?.score[index]?.r}/${matchInfo?.score[index]?.w}`}
                    </strong>
                  </Text>
                )}
              </Col>
            </Row>
          );
        })}
      </div>

      <Row style={{ marginTop: "1rem" }}>
        <Text type="danger">{matchInfo.status}</Text>
      </Row>
    </Card>
  );
};

export default MatchCard;
