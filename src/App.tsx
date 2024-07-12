import "./App.css";
import ToastContainer from "./components/toast/ToastContainer";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Home";
import Pagination from "./components/pagination/Pagination";
import ProgressBar from "./components/progressBar/ProgressBar";
import AutoCompleteLandingPage from "./components/autoComplete/AutoCompleteLandingPage";
import Stopwatch from "./components/stopwatch/Stopwatch";

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
]);

function App() {
  return (
    <div className="appContainer">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
