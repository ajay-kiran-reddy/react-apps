import masterData from "./mockData.json";
import "./fileExplorer.css";
import { useState } from "react";
import { FiFolderPlus } from "react-icons/fi";
import { LuFilePlus } from "react-icons/lu";
import useFileActions from "./useFileActions";

const FileExplorerTree = (props: any) => {
  const { data } = props;
  const [hide, setHide] = useState(false);
  const [showInput, setShowInput] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [selectedNode, setSelectedNode]: any = useState({});
  const { insertNode } = useFileActions();
  const handleHideFolder = (e: any) => {
    setHide(!hide);
  };

  const handleNewFolderClick = (e: any, node: any) => {
    e.stopPropagation();
    setShowInput(true);
    setSelectedNode({
      node,
      isFolder: true,
    });
  };

  const handleNewFileClick = (e: any, node: any) => {
    e.stopPropagation();
    setShowInput(true);
    setSelectedNode({
      node,
      isFolder: false,
    });
  };

  const onAddFolder = () => {
    // insertNode()
  };

  return (
    <>
      <div className="fileContainer">
        {data.isFolder ? (
          <>
            <div className={"folder"} onClick={handleHideFolder}>
              📁 {data.name}
              <span
                style={{ paddingTop: "5px" }}
                onClick={(e) => handleNewFolderClick(e, data)}
              >
                <FiFolderPlus />
              </span>
              <span
                style={{ paddingTop: "5px" }}
                onClick={(e) => handleNewFileClick(e, data)}
              >
                <LuFilePlus />
              </span>
            </div>

            {showInput && (
              <div className="newFolder" onBlur={() => setShowInput(false)}>
                <input
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyDown={() => onAddFolder()}
                />
              </div>
            )}

            <div
              style={{ display: hide ? "none" : "block", marginLeft: "15px" }}
            >
              {data?.children.map((d: any) => {
                return <FileExplorerTree data={d} />;
              })}
            </div>
          </>
        ) : (
          <>
            <div className="fileItem">🗃️ {data.name}</div>
          </>
        )}
      </div>
    </>
  );
};

const FileExplorer = () => {
  const [data, setData] = useState(masterData);

  const onAddDataCb = (cbData: any) => {
    setData(cbData);
  };

  return (
    <>
      <FileExplorerTree data={masterData} />
    </>
  );
};

export { FileExplorerTree };
export default FileExplorer;
