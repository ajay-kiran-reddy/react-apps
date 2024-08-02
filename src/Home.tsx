import { useNavigate } from "react-router-dom";
import "./App.css";
import cricket from "../assets/cricket.png";
import autoComp from "../assets/autoComp.png";
import comments from "../assets/comments.jpeg";
import fileExp from "../assets/fileExp.png";
import pagination from "../assets/pagination.png";
import progressbar from "../assets/ProgressBar.png";
import stopwatch from "../assets/stopwatch.png";
import toast from "../assets/toast.png";
import { useEffect } from "react";
import {
  Button,
  Card,
  CardActions,
  CardHeader,
  CardMedia,
  Grid,
} from "@mui/material";

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
    path: "/cricket",
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
      <Grid container spacing={3}>
        {CardsContent.map((card) => {
          return (
            <Grid item lg={3} md={4} sm={6} xs={12}>
              <Card>
                <CardHeader title={card.title} subheader={card.description} />
                <CardMedia
                  component="img"
                  height="194"
                  image={card.image}
                  alt="Paella dish"
                />

                <CardActions>
                  <Button onClick={() => navigate(card.path)}>Launch</Button>
                </CardActions>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};

export default Home;
