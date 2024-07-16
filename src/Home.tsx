import React from "react";
import Card from "./common/Card";
import { useNavigate } from "react-router-dom";
import "./App.css";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h3>Welcome to Ajay Portfolio</h3>
      <div className="gridContainer">
        <div>
          <Card
            title="Toast Message"
            body={
              <>This card contains functionality related to toast bar meesage</>
            }
            actions={
              <>
                <button onClick={() => navigate("/toast")}>Open</button>
              </>
            }
          />
        </div>
        <div>
          <Card
            title="Pagination"
            body={<>This card contains functionality related to pagination</>}
            actions={
              <>
                <button onClick={() => navigate("/pagination")}>Open</button>
              </>
            }
          />
        </div>
        <div>
          <Card
            title="Progress Bar"
            body={<>This card contains functionality related to Progress bar</>}
            actions={
              <>
                <button onClick={() => navigate("/progressBar")}>Open</button>
              </>
            }
          />
        </div>
        <div>
          <Card
            title="Auto Complete"
            body={
              <>This card contains functionality related to Auto Complete bar</>
            }
            actions={
              <>
                <button onClick={() => navigate("/autoComplete")}>Open</button>
              </>
            }
          />
        </div>
        <div>
          <Card
            title="Stopwatch"
            body={<>This card contains functionality related to stopwatch</>}
            actions={
              <>
                <button onClick={() => navigate("/stopwatch")}>Open</button>
              </>
            }
          />
        </div>
        <div>
          <Card
            title="File Explorer"
            body={
              <>This card contains functionality related to File explorer</>
            }
            actions={
              <>
                <button onClick={() => navigate("/fileExplorer")}>Open</button>
              </>
            }
          />
        </div>

        <div>
          <Card
            title="Nested Comments"
            body={
              <>This card contains functionality related to Nested comments</>
            }
            actions={
              <>
                <button onClick={() => navigate("/comments")}>Open</button>
              </>
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
