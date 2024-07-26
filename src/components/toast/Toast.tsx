import { useEffect } from "react";
import "./toast.css";
import { FaInfoCircle } from "react-icons/fa";
import { FaCheckCircle } from "react-icons/fa";
import { IoIosWarning } from "react-icons/io";
import { MdError } from "react-icons/md";
import { IoMdClose } from "react-icons/io";

interface ToastProps {
  message: string;
  open: boolean;
  severity: "success" | "error" | "info" | "warning";
  onClose: any;
  position: "top-left" | "top-right" | "bottom-left" | "bottom-right";
}

const Toast = (props: ToastProps) => {
  const { message, severity, onClose, position = "bottom-left" } = props;

  const ToastIcon = () => {
    let Icon = <FaInfoCircle size={12} />;
    if (severity === "success") {
      Icon = <FaCheckCircle size={12} />;
    } else if (severity === "warning") {
      Icon = <IoIosWarning size={12} />;
    } else if (severity === "info") {
      Icon = <FaInfoCircle size={12} />;
    } else if (severity === "error") {
      Icon = <MdError />;
    }
    return Icon;
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 5000);
    return () => {
      clearTimeout(timer);
    };
  });

  return (
    <>
      <div className={`toast ${severity} ${position}`}>
        <span>
          <ToastIcon />
        </span>
        <span className="message">{message}</span>
        <span className="closeIcon">
          <IoMdClose size={14} onClick={() => onClose()} />
        </span>
      </div>
    </>
  );
};

export default Toast;
