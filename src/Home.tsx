import { useNavigate } from "react-router-dom";
import "./App.css";

import React from "react";
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Avatar, Card, Col, Row, Tooltip } from "antd";
import { IoRocketOutline } from "react-icons/io5";

const { Meta } = Card;

const CardsContent = [
  {
    title: "Toast Message",
    description:
      "This card contains functionality related to toast bar meesage",
    path: "/toast",
  },
  {
    title: "Pagination",
    description: "This card contains functionality related to pagination",
    path: "/pagination",
  },
  {
    title: "Progress Bar",
    description: "This card contains functionality related to Progress bar",
    path: "/progressBar",
  },
  {
    title: "Auto Complete",
    description:
      "This card contains functionality related to Auto Complete bar",
    path: "/autoComplete",
  },
  {
    title: "Stopwatch",
    description: "This card contains functionality related to stopwatch",
    path: "/stopwatch",
  },
  {
    title: "File Explorer",
    description: "This card contains functionality related to File explorer",
    path: "/fileExplorer",
  },
  {
    title: "Nested Comments",
    description: "This card contains functionality related to Nested comments",
    path: "/comments",
  },
];

const Home = () => {
  const navigate = useNavigate();

  return (
    <div>
      <Row gutter={[48, 16]}>
        {CardsContent.map((card) => {
          return (
            <Col lg={6} md={8} sm={12} xs={24} span={5}>
              <Card
                cover={
                  <img
                    alt="example"
                    src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                  />
                }
                actions={[
                  <Tooltip title="Launch">
                    <IoRocketOutline
                      size={20}
                      onClick={() => navigate(card.path)}
                    />
                  </Tooltip>,
                ]}
              >
                <Meta title={card.title} description={card.description} />
              </Card>
            </Col>
          );
        })}
      </Row>
    </div>
  );
};

export default Home;
