import masterData from "./mockData.json";
import "./fileExplorer.css";
import { useState } from "react";
import { FiFolderPlus } from "react-icons/fi";

import { LuFilePlus } from "react-icons/lu";
import useFileActions from "./useFileActions";
import { CiFileOn } from "react-icons/ci";

const FileExplorerTree = (props: any) => {
  const { data, onAddDataCb } = props;
  const [hide, setHide] = useState(false);
  const [showInput, setShowInput] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const { insertNode } = useFileActions();
  const [selectedNode, setSelectedNode]: any = useState({
    isFolder: false,
    folderId: null,
  });

  const handleHideFolder = (e: any) => {
    setHide(!hide);
  };

  const handleNewFolderClick = (e: any, node: any) => {
    e.stopPropagation();
    setShowInput(true);
    setHide(false);
    setSelectedNode({
      folderId: node.id,
      isFolder: true,
    });
  };

  const handleNewFileClick = (e: any, node: any) => {
    e.stopPropagation();
    setShowInput(true);
    setHide(false);
    setSelectedNode({
      folderId: node.id,
      isFolder: false,
    });
  };

  const onAddNode = (event: any) => {
    const data = {
      name: inputValue,
      isFolder: selectedNode.isFolder,
      folderId: selectedNode.folderId,
    };

    console.log(data, "[DATA]");

    if (event.keyCode === 13) {
      onAddDataCb(data);
      setSelectedNode({
        folderId: null,
        isFolder: false,
      });
      setShowInput(false);
      setInputValue("");
    }
  };

  const handleData = (cbData: any) => {
    const { name, isFolder, folderId } = cbData;
    const resultTree = insertNode(data, name, folderId, isFolder);
    return resultTree;
  };

  const handleOnBlur = () => {
    setInputValue("");
    setShowInput(false);
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
              <div className="newFolder">
                <input
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyDown={(e) => onAddNode(e)}
                  autoFocus
                  onBlur={handleOnBlur}
                />
              </div>
            )}

            <div
              style={{ display: hide ? "none" : "block", marginLeft: "15px" }}
            >
              {data?.children.map((d: any) => {
                return <FileExplorerTree data={d} onAddDataCb={handleData} />;
              })}
            </div>
          </>
        ) : (
          <div className="fileItem">
            <CiFileOn /> {data.name}
          </div>
        )}
      </div>
    </>
  );
};

const FileExplorer = () => {
  const [data, setData] = useState(masterData);
  const { insertNode } = useFileActions();

  const handleData = (cbData: any) => {
    const { name, isFolder, folderId } = cbData;
    const resultTree = insertNode(data, name, folderId, isFolder);
    console.log(resultTree, "[resultTree]");
    setData(resultTree);
  };

  console.log(data, "[TREE DATA]");

  return <FileExplorerTree data={data} onAddDataCb={handleData} />;
};

export { FileExplorerTree };
export default FileExplorer;
