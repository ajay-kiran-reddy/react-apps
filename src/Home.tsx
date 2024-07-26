import { useNavigate } from "react-router-dom";
import "./App.css";
import { Card, Col, Row, Tooltip } from "antd";
import { IoRocketOutline } from "react-icons/io5";
import cricket from "../assets/cricket.png";
import autoComp from "../assets/autoComp.png";
import comments from "../assets/comments.jpeg";
import fileExp from "../assets/fileExp.png";
import pagination from "../assets/pagination.png";
import progressbar from "../assets/ProgressBar.png";
import stopwatch from "../assets/stopwatch.png";
import toast from "../assets/toast.png";
import { useEffect } from "react";

const { Meta } = Card;

const CardsContent = [
  {
    title: "Toast Message",
    description:
      "This card contains functionality related to toast bar meesage",
    path: "/toast",
    image: toast,
  },
  {
    title: "Pagination",
    description: "This card contains functionality related to pagination",
    path: "/pagination",
    image: pagination,
  },
  {
    title: "Progress Bar",
    description: "This card contains functionality related to Progress bar",
    path: "/progressBar",
    image: progressbar,
  },
  {
    title: "Auto Complete",
    description:
      "This card contains functionality related to Auto Complete bar",
    path: "/autoComplete",
    image: autoComp,
  },
  {
    title: "Stopwatch",
    description: "This card contains functionality related to stopwatch",
    path: "/stopwatch",
    image: stopwatch,
  },
  {
    title: "File Explorer",
    description: "This card contains functionality related to File explorer",
    path: "/fileExplorer",
    image: fileExp,
  },
  {
    title: "Nested Comments",
    description: "This card contains functionality related to Nested comments",
    path: "/comments",
    image: comments,
  },
  {
    title: "Cric Score",
    description: "This card contains functionality related to cricket score",
    path: "/cricScore",
    image: cricket,
  },
];

const Home = () => {
  const navigate = useNavigate();

  const fetchCricData = async () => {
    await fetch(import.meta.env.VITE_CRIC_API_KEY).then((res: any) =>
      console.log(res)
    );
  };

  useEffect(() => {
    fetchCricData();
  }, []);

  return (
    <div>
      <Row gutter={[48, 16]}>
        {CardsContent.map((card) => {
          return (
            <Col lg={6} md={8} sm={12} xs={24} span={5}>
              <Card
                cover={<img alt={card.title} src={card.image} height={200} />}
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
