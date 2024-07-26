import { useState } from "react";
import Toast from "./Toast";
import "./toast.css";
import { useNavigate } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";
const ToastContainer = () => {
  const [toastInfo, setToastInfo]: any = useState({
    open: false,
    severity: "info",
    message: "",
  });
  const [position, setPosition]: any = useState("top-left");
  const navigate = useNavigate();

  const handleToastMessage = (
    severity: "success" | "error" | "info" | "warning",
    open: boolean,
    message: string
  ) => {
    setToastInfo({ severity, open, message });
  };

  const handleClose = () => {
    setToastInfo({
      open: false,
      severity: "info",
      message: "",
    });
  };

  const handlePosition = (e: any) => {
    setPosition(e?.target?.value);
  };

  return (
    <div>
      <BsArrowLeft color="red" size={"30px"} onClick={() => navigate("/")} />

      <h2>Toast Message</h2>
      <div>
        <button
          onClick={() =>
            handleToastMessage("success", true, "This is success message")
          }
        >
          Open Success
        </button>
        <button
          onClick={() =>
            handleToastMessage("error", true, "This is error message")
          }
        >
          Open Error
        </button>
        <br />
        <button
          onClick={() =>
            handleToastMessage("info", true, "This is info message")
          }
        >
          Open Info
        </button>
        <button
          onClick={() =>
            handleToastMessage("warning", true, "This is warning message")
          }
        >
          Open Warning
        </button>
      </div>

      <div>
        <select className="positionSelect" onChange={(e) => handlePosition(e)}>
          <option className="selectOption" value="top-left">
            Top Left
          </option>
          <option className="selectOption" value="top-right">
            Top Right
          </option>
          <option className="option" value="bottom-left">
            Bottom Left
          </option>
          <option className="option" value="bottom-right">
            Bottom Right
          </option>
        </select>
      </div>
      {toastInfo.open && (
        <Toast
          message={toastInfo.message}
          severity={toastInfo.severity}
          open={toastInfo.open}
          onClose={() => handleClose()}
          position={position}
        />
      )}
    </div>
  );
};

export default ToastContainer;
