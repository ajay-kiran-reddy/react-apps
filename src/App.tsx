import "./App.css";
import ToastContainer from "./components/toast/ToastContainer";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Home";
import Pagination from "./components/pagination/Pagination";
import ProgressBar from "./components/progressBar/ProgressBar";
import AutoCompleteLandingPage from "./components/autoComplete/AutoCompleteLandingPage";
import Stopwatch from "./components/stopwatch/Stopwatch";
import FileExplorer from "./components/fileExplorer/FileExplorer";
import Comments from "./components/nestedComments/Comments";
import Cricket from "./components/cricket/Cricket";
import ScoreCard from "./components/cricket/Scorecard/ScoreCard";
import PlayerInfo from "./components/cricket/PlayerInfo/PlayerInfo";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/toast",
    element: <ToastContainer />,
  },
  {
    path: "/pagination",
    element: <Pagination />,
  },
  {
    path: "/progressBar",
    element: <ProgressBar />,
  },
  {
    path: "/autoComplete",
    element: <AutoCompleteLandingPage />,
  },
  {
    path: "/stopwatch",
    element: <Stopwatch />,
  },
  {
    path: "/fileExplorer",
    element: <FileExplorer />,
  },
  {
    path: "/comments",
    element: <Comments />,
  },
  {
    path: "/cricket",
    element: <Cricket />,
  },
  {
    path: "/cricScore/scorecard/:id",
    element: <ScoreCard />,
  },
  {
    path: "/cricScore/player/:id",
    element: <PlayerInfo />,
  },
]);

function App() {
  return (
    <div className="appContainer">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
